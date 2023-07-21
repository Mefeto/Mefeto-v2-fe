import { Avatar, Card, Group, Paper, rem, Stack, Text } from "@mantine/core";
import React from "react";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";

export default function ArticleRelatedPeople() {
  const relatedPeopleSlides = testRelatedPeopleInfo.map((p, i) => {
    return (
      <Carousel.Slide key={i}>
        <Paper
          component={Link}
          shadow="xs"
          px={rem(16)}
          py={rem(8)}
          h="100%"
          w="100%"
          sx={(theme) => ({
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: theme.colors[p.color][0],
            border: `1px solid ${theme.colors[p.color][3]}`,
            "&:hover": {
              backgroundColor: theme.colors[p.color][1],
              border: `1px solid ${theme.colors[p.color][4]}`,
              transitionDuration: "1000",
            },
          })}
          href={`/mp/${p.id}`}
        >
          <Avatar src={p.imgUrl} size="md" radius="xl" />
          <Stack mx="auto" justify="space-around" spacing={0}>
            <Text>{p.name} 의원</Text>
            <Group>
              <Text fz={13} color="red">
                {p.party}
              </Text>
              <Text fz={13} color="dimmed">
                {p.committee}
              </Text>
            </Group>
          </Stack>
        </Paper>
      </Carousel.Slide>
    );
  });
  return (
    <Card
      radius="md"
      p="md"
      w="100%"
      withBorder
      style={{ flexGrow: 0, flexShrink: 0 }}
    >
      <Card.Section inheritPadding withBorder py={8}>
        <Text size={13} color="dimmed">
          이 분들이 관심있어 해요 👇
        </Text>
      </Card.Section>
      <Card.Section inheritPadding p={16}>
        <Carousel
          orientation="vertical"
          mx="auto"
          height={80}
          withControls={false}
          slideSize="80%"
          slideGap={24}
          loop
          styles={{
            slide: {
              padding: 8,
            },
          }}
        >
          {relatedPeopleSlides}
        </Carousel>
      </Card.Section>
    </Card>
  );
}

const testRelatedPeopleInfo = [
  {
    imgUrl: "https://www.assembly.go.kr/photo/9770719.jpg",
    name: "김도읍",
    party: "국민의 힘",
    color: "red",
    committee: "법제사법위원회",
    id: "LH97552Q",
  },
  {
    imgUrl: "https://www.assembly.go.kr/photo/9770719.jpg",
    name: "김도읍",
    party: "국민의 힘",
    color: "red",
    committee: "법제사법위원회",
    id: "LH97552Q",
  },
  {
    imgUrl: "https://www.assembly.go.kr/photo/9770719.jpg",
    name: "김도읍",
    party: "국민의 힘",
    color: "red",
    committee: "법제사법위원회",
    id: "LH97552Q",
  },
  {
    imgUrl: "https://www.assembly.go.kr/photo/9770719.jpg",
    name: "김도읍",
    party: "국민의 힘",
    color: "red",
    committee: "법제사법위원회",
    id: "LH97552Q",
  },
];
