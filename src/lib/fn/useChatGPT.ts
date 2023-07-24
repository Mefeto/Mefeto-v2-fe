"use client";
import { useState } from "react";

function useChatGPT(prompt: string) {
  const [chatHistory, updateChatHistory] = useState([
    { id: 0, role: "system", content: prompt },
  ]);
  const [state, setState] = useState(0);

  const getResponse = async function (message: string) {
    updateChatHistory((chatHistory) =>
      chatHistory.concat({
        id: chatHistory.length,
        role: "user",
        content: message,
      })
    );
    setState(3);
    const response = await fetch("/api/GPT", {
      method: "POST",
      body: JSON.stringify({
        messages: chatHistory
          .map((message) => {
            return { role: message.role, content: message.content };
          })
          .concat({ role: "user", content: message }),
      }),
    });

    if (!response.ok) {
      updateChatHistory((chatHistory) =>
        chatHistory.concat({
          id: chatHistory.length,
          role: "ERROR",
          content: "There was an error in communicating with AI",
        })
      );
      return [chatHistory, getResponse];
    }

    const data = response.body;
    if (data === null) {
      updateChatHistory((chatHistory) =>
        chatHistory.concat({
          id: chatHistory.length,
          role: "ERROR",
          content: "There was an error in communicating with AI",
        })
      );
      return [chatHistory, getResponse];
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();

    updateChatHistory((chatHistory) =>
      chatHistory.concat({
        id: chatHistory.length,
        role: "assistant",
        content: "",
      })
    );
    let done = false;
    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      if (done === true) setState(4);
      const chunckValue = decoder.decode(value);
      updateChatHistory((chatHistory) =>
        chatHistory.slice(0, -1).concat({
          id: chatHistory[chatHistory.length - 1].id,
          role: chatHistory[chatHistory.length - 1].role,
          content: chatHistory[chatHistory.length - 1].content + chunckValue,
        })
      );
    }
  };

  return [chatHistory, getResponse, updateChatHistory, state, setState];
}

export default useChatGPT;
