import { useState } from "react";
import { completeChat } from "./GPT";
import { functions } from "./Functions";

function useChatGPT(prompt) {
  const [chatLog, updateChatLog] = useState([
    { role: "system", content: prompt },
  ]);

  const getResponse = async function (message) {
    let localChatLog = chatLog;
    localChatLog.push(message);
    updateChatLog(localChatLog);
    const response = await completeChat(localChatLog);
    localChatLog.push(response.message);
    updateChatLog(localChatLog);
    if (response.finish_reason === "function_call") {
      const whichFunction = response.message.function_call.name;
      try {
        const result = await functions[whichFunction](
          await JSON.parse(response.message.function_call.arguments).input
        ).then((result) => {
          localChatLog.push({
            role: "function",
            name: whichFunction,
            content: result,
          });
          updateChatLog(localChatLog);
        });
        const response_function = await completeChat(localChatLog);
        localChatLog.push(response_function.message);
        updateChatLog(localChatLog);
      } catch (e) {
        console.error(e);
        getResponse({
          role: "function",
          name: whichFunction,
          content: "Invalid function call.",
        });
      }
    }
  };

  const sendUserMessage = async function (message) {
    getResponse({ role: "user", content: message });
  };

  return [chatLog, sendUserMessage];
}

export default useChatGPT;
