"use client";

import { InputForm } from "@/app/write/page";
import { Chip, Group, Skeleton, Title } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { useChat } from "ai/react";
import { useEffect, useState } from "react";

function MefetoCopilotStep1({
  form,
}: {
  form: UseFormReturnType<InputForm, (values: InputForm) => InputForm>;
}) {
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [state, setState] = useState(0);
  const { append, stop, reload } = useChat({
    api: "/api/GPT",
    initialMessages: [
      {
        id: "0",
        role: "system",
        content: `
        user에 의해 주어지는 글은 user가 쓸 제안하는 글의 제목이다.
        이와 비슷한 여러 제목들을 제안하라. 
        다음의 형식으로 답하라.
        ["제목 추천1", "제목 추천2", "제목 추천3", ...]
        `,
      },
    ],
    headers: {
      stream: "false",
    },
    onFinish: (message) => {
      try {
        const suggestions = JSON.parse(
          JSON.parse(message.content).choices[0].message.content
        );
        setAiSuggestions(suggestions);
        setState(2);
      } catch {
        setState(-1);
      }
    },
  });

  useEffect(() => {
    if (form.values.title !== "") {
      const timer = setTimeout(() => {
        setState(1);
        stop();
        if (aiSuggestions.length === 0)
          append({ role: "user", content: form.values.title });
        else reload();
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [form.values.title]);
  return (
    <>
      <Group position="center" mt="sm">
        {state === -1 && (
          <Title order={4}>AI분석 중 오류가 발생했습니다. </Title>
        )}
        {state === 1 && <Title order={4}>다른 제목들을 생성하는 중...</Title>}
      </Group>
      {aiSuggestions.length === 0 && state === 1 ? (
        <Group>
          <Skeleton height={25} radius="xl" width="10%" />
          <Skeleton height={25} radius="xl" width="10%" />
          <Skeleton height={25} radius="xl" width="10%" />
        </Group>
      ) : (
        <Group>
          <Chip.Group
            multiple={false}
            onChange={(value) =>
              form.setValues({ ...form.values, title: value })
            }
          >
            {aiSuggestions.map((suggestion, index) => (
              <Chip key={index} value={suggestion}>
                {suggestion}
              </Chip>
            ))}
          </Chip.Group>
        </Group>
      )}
    </>
  );
}

export default MefetoCopilotStep1;
