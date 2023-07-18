"use client";
import { Card, createStyles, Flex, Group, Stack, Text } from "@mantine/core";
import Image from "next/image";
import { ArticleThumbnailContentType } from "@/lib/types/article-thumbnail-type";
import Link from "next/link";

export default function CongressmanInterestedArticlesCard({
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
                    {article.short_description}
                  </Text>
                </Stack>
              </Stack>
            </Stack>
            <Image
              src={article.thumbnail_url}
              alt="image1"
              width={200}
              height={200}
              style={{ borderRadius: 16, objectFit: "cover" }}
            />
          </Flex>
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
