import { useState, useEffect } from "react";
import "./ChatInterface.css";
import useChatGPT from "../../GPT/useChatGPT";
import promptTXT from "./prompt.txt";

const prompt = await fetch(promptTXT).then((txt) => txt.text());

export default function ChatInterface() {
  const [chatLog, sendUserMessage] = useChatGPT(prompt);
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    console.log(chatLog);
  }, [chatLog]);

  const onClick = () => {
    sendUserMessage(input);
    setInput("");
  };

  return (
    <div style={{ width: "700px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>
        ChatGPT(with function call) Interface
      </h1>
      {chatLog.map((log) => (
        <div className={log.role}>
          <h3 style={{ display: "inline" }}>{log.role} | </h3>
          <p style={{ display: "inline" }}>{log.content}</p>
          {log.function_call !== undefined && (
            <p style={{ display: "inline" }}>
              call function {log.function_call.name} (
              {log.function_call.arguments})
            </p>
          )}
        </div>
      ))}
      <div className="ChatInput">
        user |
        <input
          className="userInput"
          type="text"
          placeholder="Talk to AI"
          value={input}
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") onClick();
          }}
        ></input>
        <button className="submitChat" onClick={onClick}>
          ✨
        </button>
      </div>
    </div>
  );
}
