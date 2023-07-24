"use client";

import {
  Button,
  Paper,
  Text,
  Title,
  Skeleton,
  createStyles,
  Badge,
  HoverCard,
} from "@mantine/core";
import { TextInput, useMantineTheme } from "@mantine/core";
import { IconBrandYoutube, IconArrowRight } from "@tabler/icons-react";
import useChatGPT from "@/lib/fn/useChatGPT";
import { useState } from "react";
import ArticleYoutubeEmbed from "@/component/article/article-youtube-embed";

const prompt = `친근한 말투와 이모지를 사용하여 다음과 같은 JSON 형식으로 한국어로 답변합니다.
    다음과 같은 순서로 답변합니다. 
    
    {
      title: "앞으로 쓸 글의 전체 내용에 대한 제목", 
      summary: "주어진 기사의 내용의 요약", 
      problems: [
        {title: "기사를 바탕으로 추론한 근본적 문제 원인 1 제목, content: "기사를 바탕으로 추론한 근본적 문제 원인 1에 대한 구체적인 설명"}, 
        {title: "기사를 바탕으로 추론한 근본적 문제 원인 2 제목, content: "기사를 바탕으로 추론한 근본적 문제 원인 2에 대한 구체적인 설명"}, 
        ...
      ]
      solutions: [
        {title: "문제원인 1에 대한 해결 방안 제목", content: "기사를 바탕으로 추론한 근본적 문제 원인 1에 대한 구체적인 설명"}, 
        {title: "문제원인 2에 대한 해결 방안 제목", content: "기사를 바탕으로 추론한 근본적 문제 원인 2에 대한 구체적인 설명"}
      ]
      legalSolutions: [
        {title: "문제원인 1에 대한 해결 방안을 실현하기 위해 개정하거나 도입할 수 있는 법률 추천", content: "문제원인 1에 대한 해결 방안을 실현하기 위해 개정하거나 도입할 수 있는 법률 추천에 대한 구체적인 설명"}, 
        {title: "문제원인 2에 대한 해결 방안을 실현하기 위해 개정하거나 도입할 수 있는 법률 추천", content: "문제원인 2에 대한 해결 방안을 실현하기 위해 개정하거나 도입할 수 있는 법률 추천에 대한 구체적인 설명"}
      ]
    }`;

export default function ArticleContent() {
  const [input, setInput] = useState("");
  // state
  // 0: default
  // 1: loading video and caption
  // 2: Loaded video and caption and sent to GPT
  // 3: listening to GPT
  // 4: GPT streaming done
  const [chatHistory, sendUserMessage, updateChatHistory, state, setState] =
    useChatGPT(prompt);
  const onClick = async () => {
    if (
      !/^https?:\/\/(?:www\.)?youtube\.com\/watch\?v=[a-zA-Z0-9_-]{11}$/.test(
        input
      )
    ) {
      setState(0);
      return;
    }
    if (state === 4) {
      updateChatHistory([{ id: 0, role: "system", content: prompt }]);
    }
    setState(1);
    const caption = await fetch(
      `/api/youtubeInfo/?videoID=${input.split(/v=/)[1]}`
    ).then((res) => res.json());
    setState(2);
    sendUserMessage(JSON.stringify(caption.caption));
  };
  const onChange = (e) => {
    setInput(e.target.value);
  };

  const useStyles = createStyles((theme) => ({
    root: {
      background: `linear-gradient(white, white) padding-box,
              linear-gradient(-60deg, ${
                theme.colors[theme.primaryColor][4]
              } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
      border: "2px solid transparent",
      padding: theme.spacing.xl,
      borderRadius: theme.radius.md,
      display: "flex",
      [theme.fn.smallerThan("xs")]: {
        flexDirection: "column",
      },
      flexDirection: "column",
    },
  }));

  const { classes } = useStyles();

  const theme = useMantineTheme();
  return (
    <Paper radius="md" p="md" withBorder style={{ flexGrow: 1, flexShrink: 1 }}>
      <Paper
        radius="md"
        p="md"
        withBorder
        style={{ flexGrow: 1, flexShrink: 1 }}
      >
        <div>
          <Title order={2} style={{ padding: "20px 0 20px 0" }}>
            Youtube 뉴스 기사 AI 분석으로 시작하기
          </Title>
          <Text fz="md" style={{ padding: "0 0 5px 0" }}>
            Youtube 뉴스 기사는 종종 우리가 사회 문제에 관심을 가지게 되는
            시작점이 됩니다.
          </Text>
          <Text fz="md">
            이 문제에 관심을 가지게 된 Youtube동영상을 AI로 분석해서 초안을
            작성해 드릴께요. 빈 종이는 누구에게나 부담스러울 수 있잖아요?😅
          </Text>
          <TextInput
            style={{
              padding: "20px 0 20px 0",
            }}
            variant="filled"
            icon={
              <IconBrandYoutube
                size="1.5rem"
                strokeWidth={2}
                color={"#bf4040"}
                stroke={1.5}
              />
            }
            radius="xl"
            size="md"
            rightSection={
              <Button
                radius="xl"
                color={theme.primaryColor}
                variant="filled"
                onClick={onClick}
              >
                AI 글 생성하기
                <IconArrowRight size="1.1rem" stroke={1.5} />
              </Button>
            }
            placeholder="유튜브 영상 링크"
            rightSectionWidth={155}
            value={input}
            onChange={onChange}
          />
          {state > 0 && <ArticleYoutubeEmbed videoID={input.split(/v=/)[1]} />}
          {state > 0 && (
            <Skeleton visible={state < 2} style={{ margin: "20px 0 20px 0" }}>
              <Paper className={classes.root} shadow="xs" radius="md" p="sm">
                <HoverCard width={280} shadow="md">
                  <HoverCard.Target>
                    <Badge
                      size="lg"
                      variant="gradient"
                      gradient={{ from: "indigo", to: "cyan" }}
                      w={120}
                    >
                      AI가 생성한 글
                    </Badge>
                  </HoverCard.Target>
                  <HoverCard.Dropdown>
                    <Text size="sm">
                      이 글은 OpenAI 의 GPT-3.5-turbo-16k 모델을 이용하여
                      생성되었어요. AI가 강력하면서도 안전한 도구가 될 수 있도록
                      노력하고 있지만, AI가 부정확하거나 문제의 소지가 될 수
                      있는 말을 할 수도 있어요. 저희가 직접 검토한 내용이
                      아니므로 저희의 생각을 직접적으로 대변하지 않아요. AI가
                      생성한 글임을 인지해 주세요🙏
                    </Text>
                  </HoverCard.Dropdown>
                </HoverCard>
                {chatHistory
                  .filter((message) => message.role === "assistant")
                  .map((message) => {
                    if (state === 3)
                      return (
                        <div key={message.id}>
                          {message.content.split(/\r?\n/).map((item, index) => (
                            <p key={index}>{item}</p>
                          ))}
                        </div>
                      );
                    if (state === 4) {
                      try {
                        const messageJSON = JSON.parse(message.content);
                        return (
                          <>
                            <Title
                              order={2}
                              style={{ padding: "20px 0 20px 0" }}
                            >
                              {messageJSON.title}
                            </Title>
                            <Text>{messageJSON.summary}</Text>
                            <Title
                              order={3}
                              style={{ padding: "15px 0 15px 0" }}
                            >
                              문제 상황
                            </Title>
                            {messageJSON.problems.map((problem) => {
                              return (
                                <Paper radius="md">
                                  <Title order={4}>{problem.title}</Title>
                                  <Text>{problem.content}</Text>
                                </Paper>
                              );
                            })}
                            <Title
                              order={3}
                              style={{ padding: "15px 0 15px 0" }}
                            >
                              해결 방안
                            </Title>
                            {messageJSON.solutions.map((solution) => {
                              return (
                                <Paper radius="md">
                                  <Title order={4}>{solution.title}</Title>
                                  <Text>{solution.content}</Text>
                                </Paper>
                              );
                            })}
                            <Title
                              order={3}
                              style={{ padding: "15px 0 15px 0" }}
                            >
                              법률을 통한 해결 방안
                            </Title>
                            {messageJSON.legalSolutions.map((legalSolution) => {
                              return (
                                <Paper radius="md">
                                  <Title order={4}>{legalSolution.title}</Title>
                                  <Text>{legalSolution.content}</Text>
                                </Paper>
                              );
                            })}
                          </>
                        );
                      } catch (e) {
                        setState(3);
                      }
                    }
                  })}
              </Paper>
            </Skeleton>
          )}
        </div>
      </Paper>
    </Paper>
  );
}
