import React from "react";
import { Paper, Text } from "@mantine/core";
import ArticleContentMark from "@/component/article-content-mark";
import { ArticleThumbnailContentType } from "@/lib/types/article-thumbnail-type";

function ArticleContent({ article }: { article: ArticleThumbnailContentType }) {
  return (
    <Paper radius="md" p="md" withBorder style={{ flexGrow: 1, flexShrink: 1 }}>
      <Text py="md" sx={{ whiteSpace: "pre-wrap" }}>
        {article.mainContent}
      </Text>
    </Paper>
  );
}

export default ArticleContent;
