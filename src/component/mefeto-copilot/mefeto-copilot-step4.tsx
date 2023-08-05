"use client";

import { InputForm } from "@/app/write/page";
import { Carousel } from "@mantine/carousel";
import {
  Button,
  Group,
  Paper,
  ScrollArea,
  Skeleton,
  Text,
  Title,
} from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

function Card({
  cardData,
  setCardsData,
  setState,
  cardSize,
  form,
}: {
  cardData: { id: number; title: string; content: string };
  setCardsData: Dispatch<
    SetStateAction<
      {
        id: number;
        title: string;
        content: string;
      }[]
    >
  >;
  setState: Dispatch<SetStateAction<number>>;
  cardSize: { width: number; height: number };
  form: UseFormReturnType<InputForm, (values: InputForm) => InputForm>;
}) {
  async function loadSuggestions() {
    if (cardData.title === "") {
      try {
        setState(1);
        const response: { title: string; content: string } = await fetch(
          `/api/GPT`,
          {
            method: "POST",
            body: JSON.stringify({
              messages: [
                {
                  role: "system",
                  content: `
                  주어진 글에서 제시하는 문제 원인의 전사회적, 법적, 정책적, 또는 정치적인 해결 방안에 대하여 짧은 글을 써라. 
                  단 다음의 형식을 준수하여라. 
                  {
                    "title": "해결 방안의 제목", 
                    "content": "해결 방안의 내용"
                  }
                `,
                },
                { role: "user", content: form.values.cause },
              ],
            }),
            headers: { stream: "false" },
          }
        )
          .then((res) => res.json())
          .then((res) => JSON.parse(res.choices[0].message.content));
        setCardsData((cardsData) =>
          cardsData.map((item) =>
            item.id === cardData.id
              ? {
                  id: cardData.id,
                  title: response.title,
                  content: response.content,
                }
              : item
          )
        );
        setState(2);
      } catch {
        setState(-1);
      }
    }
  }

  useEffect(() => {
    loadSuggestions();
  }, []);

  return (
    <Paper
      withBorder
      shadow="md"
      p="sm"
      radius="md"
      style={{ height: cardSize.height }}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <ScrollArea.Autosize
        mah={cardSize.height - 20}
        mx="auto"
        scrollbarSize={5}
        style={{ paddingBottom: "35px" }}
      >
        {cardData.title === "" ? (
          <Skeleton width="90%" height="25px" mt={5} radius="md" />
        ) : (
          <Title order={4}>{cardData.title}</Title>
        )}
        {cardData.content === "" ? (
          <>
            <Skeleton width="30%" height="20px" mt={10} radius="md" />
            <Skeleton width="40%" height="20px" mt={5} radius="md" />
            <Skeleton width="70%" height="20px" mt={5} radius="md" />
            <Skeleton width="20%" height="20px" mt={5} radius="md" />
            <Skeleton width="80%" height="20px" mt={5} radius="md" />
            <Skeleton width="40%" height="20px" mt={5} radius="md" />
            <Skeleton width="20%" height="20px" mt={5} radius="md" />
            <Skeleton width="50%" height="20px" mt={5} radius="md" />
          </>
        ) : (
          <Text>{cardData.content}</Text>
        )}
      </ScrollArea.Autosize>
      <Button
        variant="light"
        radius="md"
        size="xs"
        style={{
          position: "absolute",
          bottom: "10px",
          width: cardSize.width - 12 - 12 * 2,
        }}
        onClick={() =>
          form.setValues({ ...form.values, solution: cardData.content })
        }
      >
        가져오기
      </Button>
    </Paper>
  );
}

function MefetoCopilotStep4({
  form,
}: {
  form: UseFormReturnType<InputForm, (values: InputForm) => InputForm>;
}) {
  const [state, setState] = useState(0);
  const [cardsData, setCardsData] = useState<
    { id: number; title: string; content: string }[]
  >([
    { id: 0, title: "", content: "" },
    { id: 1, title: "", content: "" },
    { id: 2, title: "", content: "" },
    { id: 3, title: "", content: "" },
    { id: 4, title: "", content: "" },
    { id: 5, title: "", content: "" },
    { id: 6, title: "", content: "" },
    { id: 7, title: "", content: "" },
    { id: 8, title: "", content: "" },
  ]);

  const cardSize = {
    width: 250,
    height: 320,
  };

  return (
    <>
      <Group position="center" mt="sm">
        {state === 1 && <Title order={4}>해결 방안을 생각하는 중...</Title>}
      </Group>
      <Carousel
        slideSize={cardSize.width}
        slideGap="sm"
        align="center"
        slidesToScroll={3}
        withControls={true}
        controlSize={40}
        draggable={false}
        style={{ padding: "10px" }}
      >
        <>
          {cardsData.map((cardData, index) => (
            <Carousel.Slide key={index}>
              <Card
                cardData={cardData}
                setCardsData={setCardsData}
                setState={setState}
                cardSize={cardSize}
                form={form}
              />
            </Carousel.Slide>
          ))}
        </>
      </Carousel>
    </>
  );
}

export default MefetoCopilotStep4;
