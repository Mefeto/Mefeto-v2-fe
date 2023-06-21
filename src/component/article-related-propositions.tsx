import { Card, Stack, Text } from "@mantine/core";
import ArticleRelatedPropositionLink from "@/component/article-related-proposition-link";
import { ArticleRelatedPropositionType } from "@/lib/types/article-thumbnail-type";

export default function ArticleRelatedPropositions({
  relatedPropositions,
}: {
  relatedPropositions: ArticleRelatedPropositionType[];
}) {
  const articleLinks = relatedPropositions.map((proposition) => (
    <ArticleRelatedPropositionLink
      key={proposition.id}
      tag={proposition.tag}
      label={proposition.name}
      id={proposition.id}
    />
  ));
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
        <Text size={13} color="dimmed" pt={16}>
          아래는 왼쪽 글과 관련있는 발의안들입니다
        </Text>
        <Stack py={8} spacing={4}>
          {relatedPropositions.length !== 0 ? (
            articleLinks
          ) : (
            <Text
              my={8}
              py={8}
              align="center"
              size={14}
              color="dimmed"
              bg="gray.0"
              sx={{ border: "1px solid #dee2e6", borderRadius: 8 }}
            >
              관련있는 발의안이 없습니다
            </Text>
          )}
        </Stack>
      </Card.Section>
    </Card>
  );
}
