"use client";
import { Container, Grid, Divider, Stack } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { getArticle } from "@/lib/fn/article";
import { ArticleThumbnailContentType } from "@/lib/types/article-thumbnail-type";
import ArticleComment from "@/component/article-comment";
import ArticleRelatedArticles from "@/component/article-related-articles";
import ArticleOpinionSubmit from "@/component/article-opinion-submit";
import ArticleContent from "@/component/article-content";
import ArticleContentHeader from "@/component/article-content-header";

export default function ArticleIdPage({ params }: { params: { id: number } }) {
  const { height } = useViewportSize();
  const article = getArticle(Number(params.id)) as ArticleThumbnailContentType;
  return (
    <>
      <Container size="lg" mih={height}>
        <ArticleContentHeader article={article} />
        <Divider mb={16} />
        <Grid columns={14} w="100%">
          <Grid.Col span={10}>
            <ArticleContent article={article} />
            <ArticleComment />
          </Grid.Col>
          <Grid.Col span={4}>
            <Stack>
              <ArticleOpinionSubmit />
              <ArticleRelatedArticles />
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
