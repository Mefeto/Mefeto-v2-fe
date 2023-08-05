"use client";
import {
  Button,
  Group,
  Paper,
  Skeleton,
  Title,
  Text,
  createStyles,
  SegmentedControl,
  Chip,
  Flex,
  List,
  Progress,
} from "@mantine/core";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useChat } from "ai/react";
import youtubeSearchResult from "@/lib/types/youtube-search-result-type";
import YoutubeEmbed from "../youtube-embed";
import { Carousel } from "@mantine/carousel";
import { UseFormReturnType } from "@mantine/form";
import { InputForm } from "@/app/write/page";

interface Query {
  query: string;
  selected: boolean;
}
interface CardData {
  query: string | null;
  videoID: string | null;
  originalContent: {
    title: string | null;
    content: string | null;
  };
  aiContent: {
    title: string | null;
    content: string[] | null;
  };
}

function QueriesChips({
  queries,
  setQueries,
}: {
  queries: Query[];
  setQueries: Dispatch<SetStateAction<Query[]>>;
}) {
  const selectQuery = (value: string) => {
    setQueries((queries) =>
      queries.map((queryItem) =>
        queryItem.query === value
          ? { ...queryItem, selected: true }
          : { ...queryItem, selected: false }
      )
    );
  };

  return (
    <Flex gap="sm" p="xs">
      <Group>
        <Title order={4}>검색어</Title>
      </Group>
      {queries.length === 0 ? (
        <>
          <Skeleton height={25} radius="xl" width="10%" />
          <Skeleton height={25} radius="xl" width="10%" />
          <Skeleton height={25} radius="xl" width="10%" />
        </>
      ) : (
        <Group>
          <Chip.Group
            multiple={false}
            defaultValue={queries[0].query}
            onChange={selectQuery}
          >
            {queries.map((queryItem, index) => (
              <Chip key={index} value={queryItem.query}>
                {queryItem.query}
              </Chip>
            ))}
          </Chip.Group>
        </Group>
      )}
    </Flex>
  );
}

function Card({
  cardData,
  cardSize,
  form,
}: {
  cardData: CardData;
  cardSize: { width: number; height: number };
  form: UseFormReturnType<InputForm, (values: InputForm) => InputForm>;
}) {
  const { width, height } = cardSize;
  const { classes } = createStyles(() => ({
    card: {
      height: height,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      overflow: "auto",
      position: "relative",
      "::-webkit-scrollbar": {
        display: "none",
      },
    },
    cardContent: {
      width: "100%",
      height: height,
      position: "absolute",
      top: (width / 16) * 9 - 7,
      transition: "all 0.3s ",
      boxShadow: "none",
      "&:hover": {
        top: "50px",
        boxShadow: "0 -50px 50px #00000099",
      },
    },
  }))();
  const { videoID, originalContent, aiContent } = cardData;
  const [mode, setMode] = useState("ai");
  return (
    <>
      <Paper
        shadow="md"
        radius="md"
        className={classes.card}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {videoID === null ? (
          <Skeleton width="100%" height={(width / 16) * 9} radius={0} />
        ) : (
          <YoutubeEmbed videoID={videoID} />
        )}
        <Paper p="xs" radius="0 0 md md" className={classes.cardContent}>
          <SegmentedControl
            size="xs"
            data={[
              { label: "AI", value: "ai" },
              { label: "원본 자막", value: "original" },
            ]}
            value={mode}
            onChange={setMode}
            color="blue"
          />
          <>
            {mode === "ai" ? (
              <>
                {aiContent.title === null ? (
                  <Skeleton width="80%" height="20px" mt={5} radius="md" />
                ) : (
                  <Title order={4}>{aiContent.title}</Title>
                )}
                {aiContent.content === null ? (
                  <>
                    <Skeleton width="90%" height="20px" mt={5} radius="md" />
                    <Skeleton width="40%" height="20px" mt={5} radius="md" />
                    <Skeleton width="70%" height="20px" mt={5} radius="md" />
                    <Skeleton width="20%" height="20px" mt={5} radius="md" />
                  </>
                ) : (
                  <List style={{ paddingBottom: "40px" }}>
                    {aiContent.content.map((item, index) => (
                      <List.Item key={index} style={{ width: width - 50 }}>
                        {item}
                      </List.Item>
                    ))}
                  </List>
                )}
                <Button
                  variant="light"
                  radius="md"
                  size="xs"
                  disabled={
                    aiContent.title === null || aiContent.content === null
                  }
                  style={{
                    position: "fixed",
                    bottom: "5px",
                    width: width - 32,
                  }}
                  onClick={() => {
                    form.setValues({
                      ...form.values,
                      problem: form.values.problem.concat(
                        aiContent.content?.join(`\n`) || ""
                      ),
                    });
                  }}
                >
                  가져오기
                </Button>
              </>
            ) : (
              <>
                {originalContent.title === null ? (
                  <Skeleton width="80%" height="20px" mt={5} radius="md" />
                ) : (
                  <Title order={4}>{originalContent.title}</Title>
                )}
                {originalContent.content === null ? (
                  <>
                    <Skeleton width="90%" height="20px" mt={5} radius="md" />
                    <Skeleton width="40%" height="20px" mt={5} radius="md" />
                    <Skeleton width="70%" height="20px" mt={5} radius="md" />
                    <Skeleton width="20%" height="20px" mt={5} radius="md" />
                  </>
                ) : (
                  <Text>{originalContent.content}</Text>
                )}
              </>
            )}
          </>
        </Paper>
      </Paper>
    </>
  );
}

function ContentCarousel({
  cardsData,
  form,
  state,
}: {
  cardsData: CardData[];
  form: UseFormReturnType<InputForm, (values: InputForm) => InputForm>;
  state: number;
}) {
  const cardSize = { width: 350, height: 420 };
  return (
    <Carousel
      slideSize={cardSize.width}
      slideGap="sm"
      align="center"
      slidesToScroll={2}
      withControls={state > 1 ? true : false}
      controlSize={40}
      draggable={false}
      style={{
        height: state < 1 ? 0 : cardSize.height,
        transition: "height 1s",
      }}
    >
      <>
        {cardsData.map((cardData, index) => (
          <Carousel.Slide key={index}>
            <Card cardData={cardData} cardSize={cardSize} form={form} />
          </Carousel.Slide>
        ))}
      </>
    </Carousel>
  );
}

function MefetoCopilotStep2({
  form,
}: {
  form: UseFormReturnType<InputForm, (values: InputForm) => InputForm>;
}) {
  const [queries, setQueries] = useState<Query[]>([]);
  const defaultCardData = {
    query: null,
    channelID: null,
    videoID: null,
    originalContent: {
      title: null,
      content: null,
    },
    aiContent: {
      title: null,
      content: null,
    },
  };
  const [cardsData, setCardsData] = useState<CardData[]>([]);
  const [state, setState] = useState(0);

  const { append: title2queryAppend } = useChat({
    api: "/api/GPT",
    initialMessages: [
      {
        id: "0",
        role: "system",
        content: `
        user에 의해 주어지는 글은 user가 쓸 글의 제목이다.
        주어진 제목에 대해 검색해볼 만한 뉴스 기사의 쿼리를 나열하라.
        다음의 형식으로 답하라.
        ["검색어1", "검색어2", "검색어3", ...]
        3개만 제시하여라. 
        `,
      },
    ],
    headers: {
      stream: "false",
    },
    onFinish: (message) => {
      try {
        const extractedQueries: string[] = JSON.parse(
          JSON.parse(message.content).choices[0].message.content
        );
        setQueries(
          extractedQueries.map((query, index) => ({
            query: query,
            selected: index === 0 ? true : false,
          }))
        );
        setState(1);
      } catch {
        setState(-1);
      }
    },
  });
  async function extractQueries(title: string) {
    return await title2queryAppend({ role: "user", content: title });
  }

  async function searchYoutube() {
    const rawSearchResult: youtubeSearchResult[] = await Promise.all(
      queries.map((queryItem) =>
        fetch(`/api/youtubeSearch/?query=${queryItem.query + " 뉴스"}`).then(
          (res) => res.json()
        )
      )
    );
    if (
      rawSearchResult.filter((searchResult) =>
        searchResult.hasOwnProperty("error")
      ).length !== 0
    ) {
      setState(-1);
      return;
    }

    const extractedSearchResults = rawSearchResult
      .map((res, index) =>
        res.items.map((item) => ({
          query: queries[index].query,
          channelID: item.snippet.channelId,
          videoID: item.id.videoId,
        }))
      )
      .reduce((acc, cur) => acc.concat(cur), []);
    setCardsData(
      extractedSearchResults.map((extractedSearchResult) => ({
        ...defaultCardData,
        ...extractedSearchResult,
      }))
    );
    setState(2);
  }

  async function loadOriginalContents() {
    const originalContents: { title: string; content: string }[] =
      await Promise.all(
        cardsData.map((cardData) =>
          fetch(`/api//youtubeCaption?videoID=${cardData.videoID}`)
            .then((data) => data.json())
            .then((videoInfo) => ({
              title: videoInfo.title,
              content: videoInfo.caption,
            }))
        )
      );
    try {
      setCardsData((cardsData) =>
        cardsData.map((cardData, index) => ({
          ...cardData,
          originalContent: originalContents[index],
        }))
      );
      setState(3);
    } catch {
      setState(-1);
    }
  }

  async function loadAiContents() {
    const responses = await Promise.all(
      cardsData.map(async (cardData) => {
        const response = await fetch(`/api/GPT`, {
          method: "POST",
          body: JSON.stringify({
            messages: [
              {
                role: "system",
                content: `
                  주어진 기사가 제시하는 문제 상황이 무엇인지 분석하여라. 다음의 형식으로 응답하여라.
                  {
                    "title": "앞으로 기술할 문제상황들에 대한 내용의 제목", 
                    "content": ["기사가 제시하는 문제상황 1에 대한 분석 내용", "기사가 제시하는 문제상황 1에 대한 분석 내용", "기사가 제시하는 문제상황 1에 대한 분석 내용", ...]
                  }
                `,
              },
              { role: "user", content: cardData.originalContent.content },
            ],
          }),
          headers: { stream: "false" },
        })
          .then((res) => res.json())
          .then((res) => res.choices[0].message.content);
        try {
          return JSON.parse(response);
        } catch {
          setState(-1);
        }
      })
    );
    setCardsData((cardsData) =>
      cardsData.map((cardData, index) => ({
        ...cardData,
        aiContent: responses[index],
      }))
    );
    setState(4);
  }

  useEffect(() => {
    switch (state) {
      case 0:
        extractQueries(form.values.title);
        break;
      case 1:
        searchYoutube();
        break;
      case 2:
        loadOriginalContents();
        break;
      case 3:
        loadAiContents();
        break;
      default:
        break;
    }
  }, [state]);

  return (
    <>
      <Group position="center" mt="sm">
        {state === -1 && (
          <Title order={4}>AI분석 중 오류가 발생했습니다. </Title>
        )}
        {state === 0 && <Title order={4}>검색어를 추출하는 중...</Title>}
        {state === 1 && <Title order={4}>관련 뉴스를 검색하는 중...</Title>}
        {state === 2 && <Title order={4}>자막을 추출하는 중...</Title>}
        {state === 3 && (
          <Title order={4}>AI로 문제 상황을 분석하는 중...</Title>
        )}
      </Group>
      {state < 4 && state >= 0 && (
        <Progress
          mt="sm"
          size={20}
          radius="xl"
          animate
          sections={[
            { value: 20, color: "cyan", label: "검색어 추출" },
            { value: state > 0 ? 10 : 0, color: "blue", label: "뉴스 검색" },
            {
              value: state > 1 ? 20 : 0,
              color: "indigo",
              label: "자막 추출",
            },
            { value: state > 2 ? 50 : 0, color: "violet", label: "AI 분석" },
          ]}
        />
      )}

      <QueriesChips queries={queries} setQueries={setQueries} />
      <ContentCarousel
        cardsData={cardsData.filter(
          (cardData) =>
            cardData.query ===
            queries.find((queryItem) => queryItem.selected === true)?.query
        )}
        form={form}
        state={state}
      />
    </>
  );
}

export default MefetoCopilotStep2;
