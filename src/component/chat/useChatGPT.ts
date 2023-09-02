import { useState } from "react";
import type {
  ChatCompletionResponseMessage,
  CreateChatCompletionResponseChoicesInner,
} from "openai";
import axios from "axios";

type Chat = ChatCompletionResponseMessage & { name?: string };

function useChatGPT(prompt: string) {
  const [chatLog, updateChatLog] = useState<Chat[]>([
    { role: "system", content: prompt },
  ]);

  const getResponse = async function (message: Chat) {
    const chatLogWithUser = [...chatLog, message];
    updateChatLog(chatLogWithUser);

    const { data: response } =
      await axios.post<CreateChatCompletionResponseChoicesInner>(
        "/api/ai/completion",
        chatLogWithUser
      );
    if (!response?.message) return;

    const chatLogWithSystem = [...chatLogWithUser, response.message];
    updateChatLog(chatLogWithSystem);

    if (response.finish_reason === "function_call") {
      const result = await axios.post("/api/ai/function", {
        function_name: response.message.function_call!.name,
        arguments: response.message.function_call!.arguments,
      });
      const chatLogWithFunctionCall = [...chatLogWithSystem, result.data];
      updateChatLog(chatLogWithFunctionCall);

      if (result.data.content === "Invalid function call.") return;

      const result2 = await axios.post(
        "/api/ai/completion",
        chatLogWithFunctionCall
      );
      const chatLogWithFunctionCallResponse = [
        ...chatLogWithFunctionCall,
        result2.data.message,
      ];
      updateChatLog(chatLogWithFunctionCallResponse);
    }
  };

  const sendUserMessage = async function (message: string) {
    getResponse({ role: "user", content: message });
  };

  return [chatLog, sendUserMessage] as const;
}

export default useChatGPT;
