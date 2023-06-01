import { ReactNode, useState } from "react";
import { Mark, Button } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";

export default function ArticleContentMark({
  children,
}: {
  children: ReactNode;
}) {
  const [clicked, setClicked] = useState(false);
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });
  return (
    <Mark
      color={clicked ? "yellow.2" : "yellow.1"}
      onClick={() => setClicked((p) => !p)}
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
