"use client";
import { Container, Grid, Divider, Stack } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import ArticleComment from "@/component/article/article-comment";
import ArticleRelatedPropositions from "@/component/article/article-related-propositions";
import ArticleOpinionSubmit from "@/component/article/article-opinion-submit";
import ArticleContent from "@/component/article/article-content";
import ArticleContentHeader from "@/component/article/article-content-header";
import ArticleRelatedPeople from "@/component/article/article-related-people";
import { useSingleArticle } from "@/lib/hooks/use-articles";

export default function ArticleIdPage({ params }: { params: { id: number } }) {
  const { height } = useViewportSize();
  const { data, isLoading, isFetching, isError } = useSingleArticle(params.id);
  if (isLoading) {
    return <div style={{ height: 800 }}>Loading...!</div>;
  }
  if (isError) {
    return <div>Error...!</div>;
  }
  return (
    <Container size="lg" mih={height} mb="3rem">
      <ArticleContentHeader article={data!} />
      <Divider mb={16} />
      <Grid columns={14} w="100%">
        <Grid.Col span={10}>
          <ArticleContent article={data!} />
          <ArticleComment />
        </Grid.Col>
        <Grid.Col span={4}>
          <Stack>
            <ArticleRelatedPeople />
            <ArticleOpinionSubmit />
            {/*관련된 발의안 목록 부분에 대한 내용 추가해야됨!*/}
            <ArticleRelatedPropositions relatedPropositions={[]} />
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
