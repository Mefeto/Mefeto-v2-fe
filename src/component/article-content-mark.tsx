import { ReactNode, useState } from "react";
import { Mark, Button } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";

export default function ArticleContentMark({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Mark
      color="yellow.1"
      sx={(theme) => ({
        "&:hover": {
          backgroundColor: theme.colors.yellow[2],
          cursor: "pointer",
        },
      })}
    >
      {children}
    </Mark>
  );
}
