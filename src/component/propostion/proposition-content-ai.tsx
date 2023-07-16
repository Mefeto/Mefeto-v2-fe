import React from "react";
import { Alert } from "@mantine/core";

export default function PropositionContentAi({
  content,
}: {
  content:
    | {
        problem: string;
        solution: string;
      }
    | undefined;
}) {
  return (
    <>
      <Alert
        title="발의안이 조명하는 문제 상황"
        color="orange"
        styles={{
          title: { fontSize: 16 },
          message: {
            fontSize: 14,
            whiteSpace: "pre-wrap",
            lineHeight: 1.6,
            color: "#4e5968",
            fontWeight: 400,
          },
        }}
      >
        {content?.problem}
      </Alert>
      <Alert
        title="해결 방안"
        color="teal"
        styles={{
          title: { fontSize: 16 },
          message: {
            fontSize: 14,
            whiteSpace: "pre-wrap",
            lineHeight: 1.6,
            color: "#4e5968",
            fontWeight: 400,
          },
        }}
      >
        {content?.solution}
      </Alert>
    </>
  );
}
