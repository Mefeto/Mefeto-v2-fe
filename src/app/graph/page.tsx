"use client";

import {
  DataHandlerReturnType,
  dataHandler,
} from "@/component/graph/data-handler";
import { ScatterPlot } from "@/component/graph/scatter-plot";
import { useViewportSize } from "@mantine/hooks";
import { useMemo, useState } from "react";
import { dummy } from "@/component/graph/dummy";
import { ArrayElement } from "@/component/graph/data-type";
import { usePanelInjector } from "@/lib/hooks/use-panel";

export default function GraphPage() {
  const data = useMemo(() => dataHandler(dummy), [dummy]);
  const { height, width } = useViewportSize();
  const [selectedNode, setSelectedNode] =
    useState<ArrayElement<DataHandlerReturnType>>();

  usePanelInjector(
    "graph",
    selectedNode ? <>{selectedNode.group_id}</> : undefined
  );

  return (
    <>
      <ScatterPlot
        data={data}
        width={width - 16}
        height={height - 16}
        setSelectedNode={setSelectedNode}
      />
    </>
  );
}
