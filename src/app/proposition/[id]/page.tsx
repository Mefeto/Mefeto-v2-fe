"use client";
import { propositions } from "@/lib/const/proposition";
import { useState } from "react";
import {
  Anchor,
  Box,
  Breadcrumbs,
  Container,
  Divider,
  Flex,
  Group,
  SegmentedControl,
  Stack,
  Text,
} from "@mantine/core";
import PropositionContentDictionary from "@/component/proposition-content-dictionary";
import PropositionContentAi from "@/component/proposition-content-ai";
import PropositionContentOriginal from "@/component/proposition-content-original";
import Link from "next/link";

export default function PropositionIdPage({
  params,
}: {
  params: { id: string };
}) {
  const [value, setValue] = useState("original");
  const cntProposition = propositions
    .filter((item) => item.BILL_ID === params.id)
    .at(0);

  console.log(params);

  const breadcrumbs = [
    { title: "검색", href: "/search" },
    { title: "의안 2121422호", href: `/proposition/${params.id}` },
  ].map((item, index) => (
    <Anchor component={Link} href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <Container size="lg" mb={120}>
      <Breadcrumbs separator="→" mt="xs">
        {breadcrumbs}
      </Breadcrumbs>
      <Box mb={24} mt={40}>
        <Text color="dimmed" weight={400}>
          의안 제 {cntProposition?.BILL_NO}호
        </Text>
        <Text my={24} size={40} weight={700}>
          {cntProposition?.BILL_NAME}
        </Text>

        <Stack>
          <Text color={"dimmed"}>
            제안일 : {cntProposition?.PROPOSE_DT} | 제안자 :{" "}
            {cntProposition?.PROPOSER}
          </Text>
        </Stack>
      </Box>
      <Divider my="xl" />
      <Flex justify="flex-start" gap={48}>
        <Stack maw={670}>
          <Group position="apart">
            <Text size="xl" weight={700}>
              {value === "ai" ? "AI 분석" : "원문 내용"}
            </Text>
            <SegmentedControl
              value={value}
              onChange={setValue}
              data={[
                { label: "원문 보기", value: "original" },
                { label: "AI 분석", value: "ai" },
              ]}
            />
          </Group>
          {value === "ai" ? (
            <PropositionContentAi content={cntProposition?.ANALYTICS} />
          ) : (
            <PropositionContentOriginal
              content={cntProposition?.DETAIL_CONTENT}
              originalLink={cntProposition?.DETAIL_LINK}
            />
          )}
        </Stack>
        <PropositionContentDictionary words={cntProposition?.ANALYTICS.words} />
      </Flex>
    </Container>
  );
}
