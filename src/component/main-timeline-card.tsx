"use client";
import {
  ActionIcon,
  Card,
  createStyles,
  Flex,
  Group,
  Progress,
  Stack,
  Text,
} from "@mantine/core";
import { IconBookmark, IconHeart, IconShare } from "@tabler/icons-react";
import Image from "next/image";
import { ArticleThumbnailContentType } from "@/lib/types/article-thumbnail-type";
import Link from "next/link";

export default function MainTimelineCard({
  article,
}: {
  article: ArticleThumbnailContentType;
}) {
  const { classes, theme } = useStyles();
  return (
    <Link
      href={`/article/${article.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <Card my={40} p={16} withBorder radius="md" className={classes.card}>
        <Card.Section py="md" inheritPadding withBorder>
          <Flex justify="space-between" gap="md">
            <Stack
              align="stretch"
              justify="space-between"
              maw="calc(100% - 216px)"
              sx={{ flexGrow: 1, flexShrink: 1 }}
            >
              <Stack>
                <Group>
                  {article.categories.map((c) => (
                    <Text key={c} fz="sm" fw={500} color="dimmed">
                      {c}
                    </Text>
                  ))}
                </Group>

                <Stack>
                  <Text weight={600} size={24}>
                    {article.title}
                  </Text>
                  <Text size="sm" color="dimmed">
                    {article.shortDescription}
                  </Text>
                </Stack>
              </Stack>
              <Group spacing={0}>
                <ActionIcon>
                  <IconHeart
                    size="1.2rem"
                    color={theme.colors.red[6]}
                    stroke={1.5}
                  />
                </ActionIcon>
                <ActionIcon>
                  <IconBookmark
                    size="1.2rem"
                    color={theme.colors.yellow[6]}
                    stroke={1.5}
                  />
                </ActionIcon>
                <ActionIcon>
                  <IconShare
                    size="1.2rem"
                    color={theme.colors.blue[6]}
                    stroke={1.5}
                  />
                </ActionIcon>
              </Group>
            </Stack>
            <Image
              src={article.imgUrl}
              alt="image1"
              width={200}
              height={200}
              style={{ borderRadius: 16 }}
            />
          </Flex>
        </Card.Section>
        <Card.Section py="xs" inheritPadding>
          <Group>
            <Text c="dimmed" fz="sm">
              Upvote:{" "}
              <Text
                span
                fw={500}
                sx={(theme) => ({
                  color:
                    theme.colorScheme === "dark" ? theme.white : theme.black,
                })}
              >
                23/36
              </Text>
            </Text>
            <Progress
              value={(23 / 36) * 100}
              mt={5}
              styles={(theme) => ({
                bar: {
                  backgroundImage: theme.fn.gradient({
                    from: "blue",
                    to: "cyan",
                  }),
                },
              })}
              sx={{
                flexGrow: 1,
              }}
            />
          </Group>
        </Card.Section>
      </Card>
    </Link>
  );
}

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },
}));
