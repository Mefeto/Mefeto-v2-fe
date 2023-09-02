"use client";

import { dataHandler } from "@/component/graph/data-handler";
import { ScatterPlot } from "@/component/graph/scatter-plot";
import { useViewportSize } from "@mantine/hooks";
import { useMemo } from "react";
import { dummy } from "@/component/graph/dummy";

export default function GraphPage() {
  const data = useMemo(() => dataHandler(dummy), [dummy]);
  const { height, width } = useViewportSize();

  return (
    <>
      <ScatterPlot data={data} width={width - 16} height={height - 16} />
    </>
  );
}
