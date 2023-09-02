"use client";

import {
  DataHandlerReturnType,
  dataHandler,
  getArticleWithId,
} from "@/component/graph/data-handler";
import { ScatterPlot } from "@/component/graph/scatter-plot";
import { useViewportSize } from "@mantine/hooks";
import { useEffect, useMemo, useState } from "react";
import dummy from "@/component/graph/timeframe_database.json";
import { ArrayElement } from "@/component/graph/data-type";
import { usePanelInjector } from "@/lib/hooks/use-panel";
import ChatInterface from "@/component/chat/chat";
import { Button } from "@mantine/core";

export default function GraphPage() {
  const [sideBarWidth, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  const data = useMemo(() => dataHandler(dummy), [dummy]);
  const { height, width } = useViewportSize();
  const [selectedNode, setSelectedNode] =
    useState<ArrayElement<DataHandlerReturnType>>();

  const article = selectedNode ? getArticleWithId(selectedNode.id) : undefined;
  const panel = useMemo(
    () =>
      article ? (
        <div style={{ margin: 10 }}>
          <p style={{ fontSize: 18, fontWeight: 700 }}>
            {article.articleTitle}
          </p>
          <p style={{ fontSize: 14 }}>생성 날짜: {article.articleDate}</p>
          <p>{article.articleContent}</p>
        </div>
      ) : undefined,
    [article]
  );
  const chatBot = useMemo(
    () => (
      <div style={{ marginLeft: 15, marginRight: 15 }}>
        <ChatInterface />
      </div>
    ),
    []
  );
  usePanelInjector("graph", selectedNode === undefined ? chatBot : panel);

  return (
    <>
      <Button
        onClick={() => setSelectedNode(undefined)}
        style={{
          position: "absolute",
          top: 100,
          left: width - sideBarWidth * 0.28 - 100,
          zIndex: 100,
        }}
      >
        챗봇 열기
      </Button>
      <ScatterPlot
        data={data}
        width={width - sideBarWidth * 0.28}
        height={height - 16}
        setSelectedNode={setSelectedNode}
      />
    </>
  );
}