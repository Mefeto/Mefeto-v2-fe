import Giscus from "@giscus/react";
import { Space } from "@mantine/core";

export default function ArticleComment() {
  return (
    <>
      <Space h={40} />
      <Giscus
        id="comments"
        repo="Mefeto/Mefeto-v2-fe"
        repoId="R_kgDOJqLKXA"
        mapping="pathname"
        category="General"
        categoryId="DIC_kwDOJqLKXM4CW43h"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="ko"
        loading="lazy"
      />
    </>
  );
}
