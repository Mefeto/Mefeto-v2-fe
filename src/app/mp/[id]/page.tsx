"use client";
import { getSNSInfo } from "@/lib/fn/sns";
import {
  ActionIcon,
  Avatar,
  Badge,
  Container,
  Flex,
  Group,
  Paper,
  Stack,
  Tabs,
  Text,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { articleThumbnail } from "@/lib/const/article-thumbnail";
import MpInterestedArticlesCard from "@/component/mp-interested-articles-card";
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export default function Page({ params }: { params: { id: string } }) {
  const { height } = useViewportSize();
  const snsInfo = getSNSInfo(params.id);
  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size="sm" variant="transparent">
      <Icon size="1.2rem" stroke={1.5} />
    </ActionIcon>
  ));
  return (
    <Container mih={height}>
      <Paper p="md" radius="md">
        <Flex gap="xl">
          <Avatar
            src="https://www.assembly.go.kr/photo/9770719.jpg"
            size={80}
            radius="md"
          />
          <Stack spacing={6}>
            <Group>
              <Text fz="xl" fw={500}>
                {snsInfo?.HG_NM}{" "}
                <Text fz="md" fw={400} component="span" color="dimmed">
                  의원
                </Text>
              </Text>
              <Badge color="red">국민의 힘</Badge>
            </Group>
            <Text fz="sm" color="dimmed">
              법제사법위원회
            </Text>
            <Group my={4}>{icons}</Group>
          </Stack>
        </Flex>
      </Paper>
      <Tabs my={16} defaultValue="관심 목록">
        <Tabs.List>
          <Tabs.Tab value="관심 목록">관심 목록</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="관심 목록" pt="xs">
          <Text mt="md" color="dimmed">
            <Text fz={24} component="span" fw={500} color="black">
              김도읍 의원
            </Text>{" "}
            님의 관심목록입니다
          </Text>
          {articleThumbnail.map((item) =>
            item.contents.map((a) => {
              return <MpInterestedArticlesCard key={a.title} article={a} />;
            })
          )}
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}
