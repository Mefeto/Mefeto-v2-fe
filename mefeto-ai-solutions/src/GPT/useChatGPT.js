import { useState } from 'react';
import { completeChat } from "./GPT";
import { functions } from "./Functions";

function useChatGPT(prompt) {
    const [chatLog, updateChatLog] = useState([
        { role: "system", content: prompt },
    ]);

    const getResponse = async function (message) {
        updateChatLog(previousChatLog => previousChatLog.concat(message));
        const response = await completeChat(chatLog.concat(message));
        updateChatLog(currentChatLog => currentChatLog.concat(response.message));
        if (response.finish_reason === "function_call") {
            const whichFunction = response.message.function_call.name;
            try {
                getResponse({
                    role: "function",
                    name: whichFunction,
                    content: await functions[whichFunction](JSON.parse(response.message.function_call.arguments).keyword)
                });
            } catch {
                getResponse({
                    role: "function",
                    name: whichFunction,
                    content: "Invalid function call."
                });
            }
        };
    };

    const sendUserMessage = async function (message) {
        getResponse({ "role": "user", "content": message });
    };

    return [chatLog, sendUserMessage];
};

export default useChatGPT;