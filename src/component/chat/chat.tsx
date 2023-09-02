"use client";

import { useState, useEffect } from "react";
import "./ChatInterface.css";
import useChatGPT from "./useChatGPT";

export default function ChatInterface() {
  const [chatLog, sendUserMessage] = useChatGPT(
    "너는 user가 제시하는 정책 뉴스에 대한 궁금증에 대해 적절한 뉴스를 검색해서 유용한 정보를 제공하는 정책 뉴스 분석 전문가야. get_related_info 함수를 이용해서 관련된 정책 뉴스를 검색하고 그 검색 결과에 기반하여 답변해. 단, 검색은 한 번만 수행할 수 있어."
  );
  const [input, setInput] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

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
        <div className={log.role} key={log.content}>
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
