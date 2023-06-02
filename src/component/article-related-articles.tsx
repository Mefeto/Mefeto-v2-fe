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
            tag="교통"
            label="자동차관리법 일부개정법률안"
            id="PRC_E2D3Z0Y4V2E0C1B0A2J5G5E8D0D6L3"
          />
          <ArticleRelatedArticleLink
            tag="환경"
            label="기후위기 대응을 위한 탄소중립ㆍ녹색성장 기본법 일부개정법률안"
            id="PRC_M2K3S0T3S2R7P1X6W4X2T4R3A1Y8Z6"
          />
          <ArticleRelatedArticleLink
            tag="교통"
            label="범죄피해자 보호법 일부개정법률안"
            id="PRC_Y2U3T0V3T2S8R1Z3A5Y9X3W5E5D4E2"
          />
        </Stack>
      </Card.Section>
    </Card>
  );
}
