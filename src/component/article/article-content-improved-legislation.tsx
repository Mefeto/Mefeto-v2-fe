import {
  Paper,
  TypographyStylesProvider,
  Text,
  ScrollArea,
  Group,
  ActionIcon,
  useMantineTheme,
  Box,
  Stack,
  Button,
  Divider,
} from "@mantine/core";
import { improvementContent } from "@/lib/const/improvementContent";
import React from "react";
import {
  IconBookmark,
  IconHeart,
  IconShare,
  IconThumbDown,
  IconThumbUp,
} from "@tabler/icons-react";

export default function ArticleContentImprovedLegislation() {
  const theme = useMantineTheme();
  return (
    <ScrollArea offsetScrollbars h="80vh">
      <Text fz={12} color="dimmed" px={16}>
        댓글, 제출된 의견을 기반으로 만들어진 Mefeto의 개정 법률안입니다
      </Text>
      <Text fz={32} fw={600} lh={2} px={16}>
        개정 법률안✨
      </Text>
      <Paper
        radius="md"
        bg="orange.0"
        m={16}
        p={16}
        sx={(theme) => ({ border: `1px solid ${theme.colors.orange[3]}` })}
      >
        <TypographyStylesProvider>
          <div
            dangerouslySetInnerHTML={{
              __html: improvementContent.replaceAll("\n", "\n\n"),
            }}
            style={{ whiteSpace: "pre-wrap" }}
          />
        </TypographyStylesProvider>
      </Paper>
      <Divider
        my="xs"
        variant="dashed"
        labelPosition="center"
        label={
          <>
            <Box ml={5}>개정안의 내용은 어떠셨나요? 의견 반영이 잘 됐나요?</Box>
          </>
        }
        color="gray.6"
        px={16}
      />
      <Group spacing={16} position="center" pt={16}>
        <Stack spacing={0} align="center">
          <ActionIcon size="xl" variant="outline" color="blue">
            <IconThumbUp
              size="2rem"
              color={theme.colors.blue[6]}
              stroke={1.5}
            />
          </ActionIcon>
          <Text fz={12} color="blue" py={8}>
            반영이 잘됐어요!
          </Text>
        </Stack>
        <Stack spacing={0} align="center">
          <ActionIcon size="xl" variant="outline" color="red">
            <IconThumbDown
              size="2rem"
              color={theme.colors.red[6]}
              stroke={1.5}
            />
          </ActionIcon>
          <Text fz={12} color="red" py={8}>
            반영이 아쉬워요...
          </Text>
        </Stack>
      </Group>
      <Group position="center" py={16}>
        <Button variant="light" size="lg">
          다른 의견 제출하러 가기 🧐
        </Button>
      </Group>
    </ScrollArea>
  );
}
