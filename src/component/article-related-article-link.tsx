import React from "react";
import { Badge, Drawer, NavLink, Stack, Text, Button } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { getProposition } from "@/lib/fn/article";
import Link from "next/link";

export default function ArticleRelatedArticleLink({
  tag,
  label,
  id,
}: {
  tag: string;
  label: string;
  id: string;
}) {
  const [opened, { open, close }] = useDisclosure(false);
  const proposition = getProposition(id);
  return (
    <>
      <NavLink
        p={4}
        sx={{ borderRadius: 8 }}
        label={label}
        icon={
          <Badge size="sm" radius="sm">
            {tag}
          </Badge>
        }
        rightSection={<IconChevronRight size="1rem" stroke={1.5} />}
        onClick={open}
      />
      <Drawer
        position="right"
        size="md"
        opened={opened}
        onClose={close}
        title="관련된 발의안"
        styles={(theme) => ({
          title: { color: theme.colors.gray[6], fontSize: theme.fontSizes.sm },
        })}
      >
        <Stack p="sm">
          <Text color="dimmed" size={14} weight={400}>
            의안 제 {proposition?.BILL_NO}호
          </Text>
          <Text size={28} weight={700}>
            {proposition?.BILL_NAME}
          </Text>
          <Text
            size={14}
            weight={400}
            sx={{ whiteSpace: "pre-wrap", lineHeight: 1.5, color: "#4e5968" }}
          >
            {proposition?.DETAIL_CONTENT}
          </Text>
          <Button
            component="a"
            href={proposition?.DETAIL_LINK}
            target="_blank"
            rel="noreferrer noopener"
            fullWidth
            mt={24}
            variant="outline"
          >
            원문 사이트 보러가기
          </Button>
          <Button
            component={Link}
            href={`proposition/${proposition?.BILL_ID}`}
            fullWidth
            mt={40}
            variant="light"
          >
            AI 분석 보러가기 ✨
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}
