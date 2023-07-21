import { Paper, Text, TypographyStylesProvider } from "@mantine/core";
import { ArticleThumbnailContentType } from "@/lib/types/article-thumbnail-type";

export default function ArticleContent({
  article,
}: {
  article: ArticleThumbnailContentType;
}) {
  return (
    <Paper radius="md" p="md" withBorder style={{ flexGrow: 1, flexShrink: 1 }}>
      <TypographyStylesProvider>
        <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
      </TypographyStylesProvider>
    </Paper>
  );
}
