import React, { useState } from "react";
import {
  ActionIcon,
  Anchor,
  Badge,
  createStyles,
  Group,
  Text,
  Tooltip,
} from "@mantine/core";
import Link from "next/link";
import {
  IconArrowLeft,
  IconBookmark,
  IconHeart,
  IconShare,
  IconCheck,
} from "@tabler/icons-react";
import Image from "next/image";
import { ArticleThumbnailContentType } from "@/lib/types/article-thumbnail-type";
import { usePathname } from "next/navigation";
import { notifications } from "@mantine/notifications";

export default function ArticleContentHeader({
  article,
}: {
  article: ArticleThumbnailContentType;
}) {
  const { theme } = useStyles();
  const pathname = usePathname();
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(`${window.location.origin}${pathname}`);
    //@ts-ignore
    await notifications.show({
      id: "link-copied",
      title: "링크 복사완료!",
      message: "아티클 링크를 복사했습니다!",
      autoClose: 1000,
      icon: <IconCheck size="1rem" />,
      color: "teal",
      withBorder: true,
    });
  };
  return (
    <>
      <Anchor component={Link} href={"/"}>
        <Group spacing={8}>
          <IconArrowLeft size={16} />
          <Text my="md">아티클 목록</Text>
        </Group>
      </Anchor>
      <Image
        src={article.thumbnail_url}
        alt={article.title}
        width={700}
        height={300}
        style={{
          width: "100%",
          height: 300,
          objectFit: "cover",
          borderRadius: 16,
          marginBottom: 20,
        }}
      />
      {article.categories.map((c) => (
        <Text key={article.title} color="dimmed" size={18} weight={600}>
          {c}
        </Text>
      ))}
      <Text size={40} weight={700} py={16}>
        {article.title}
      </Text>

      <Group pb={28}>
        <Badge p={8} size="lg" color="orange">
          논의 진행중
        </Badge>
        <Text color="dimmed" size={14}>
          6월 1일에 논의 시작됨 · 댓글 1개
        </Text>
        <Group spacing={0}>
          <Tooltip label="좋아요 누르기" withArrow>
            <ActionIcon>
              <IconHeart
                size="1.2rem"
                color={theme.colors.red[6]}
                stroke={1.5}
              />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="북마크하기" withArrow>
            <ActionIcon>
              <IconBookmark
                size="1.2rem"
                color={theme.colors.yellow[6]}
                stroke={1.5}
              />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="아티클 공유하기" withArrow>
            <ActionIcon component="button" onClick={copyToClipboard}>
              <IconShare
                size="1.2rem"
                color={theme.colors.blue[6]}
                stroke={1.5}
              />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Group>
    </>
  );
}

const useStyles = createStyles((theme) => ({}));
