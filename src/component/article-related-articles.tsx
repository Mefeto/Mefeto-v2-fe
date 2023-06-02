import React from "react";
import { Card, Stack, Text } from "@mantine/core";
import ArticleRelatedArticleLink from "@/component/article-related-article-link";

export default function ArticleRelatedArticles() {
  return (
    <Card
      radius="md"
      p="md"
      w="100%"
      withBorder
      style={{ flexGrow: 0, flexShrink: 0 }}
    >
      <Card.Section inheritPadding withBorder>
        <Text py={8}>관련된 발의안들</Text>
      </Card.Section>
      <Card.Section inheritPadding>
        <Text size={13} color="dimmed" pt={8}>
          아래는 왼쪽 글과 관련있는 발의안들입니다
        </Text>
        <Stack py={8} spacing={4}>
          <ArticleRelatedArticleLink
            tag="환경"
            label="1번 발의안"
            id="PRC_Z2H3I0H4F1E7M1L1L2K5J3R1M4L8U1"
          />
          <ArticleRelatedArticleLink
            tag="경제"
            label="2번 발의안"
            id="PRC_E2D3C0K4J1I7I1H1Q2P3N0M4I9G1F6"
          />
          <ArticleRelatedArticleLink
            tag="정치"
            label="3번 발의안"
            id="PRC_Q2P3X0Y4W1V7U1C1B2C8B0Z2C1A2B4"
          />
        </Stack>
      </Card.Section>
    </Card>
  );
}
