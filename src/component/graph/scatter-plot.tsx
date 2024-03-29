import * as d3 from "d3";
import { DataHandlerReturnType } from "./data-handler";
import { ElementRef, useLayoutEffect, useRef } from "react";
import { ArrayElement } from "./data-type";
import cluster from "./cluster_database.json";

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

type AxisBasicProps = {
  data: DataHandlerReturnType;
  width: number;
  height: number;
  setSelectedNode?: (
    node: ArrayElement<DataHandlerReturnType> | undefined
  ) => void;
  setSelectedClusterId?: (node: string | undefined) => void;
};

export const ScatterPlot = ({
  data,
  width,
  height,
  setSelectedNode,
  setSelectedClusterId,
}: AxisBasicProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const svgRef = useRef<ElementRef<"svg">>(null);

  useLayoutEffect(() => {
    // x축 영역과 y축 영역 계산
    const xScale = d3.scaleLinear().domain([-80, 80]).range([0, boundsWidth]);
    const yScale = d3.scaleLinear().domain([-80, 80]).range([boundsHeight, 0]);
    const k = height / width;

    // xAxis , yAxis
    const xAxis: Parameters<(typeof gx)["call"]>[0] = (g, x) =>
      g
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisTop(x).ticks(12))
        .call((g) => g.select(".domain").attr("display", "none"));

    const yAxis: Parameters<(typeof gy)["call"]>[0] = (g, y) =>
      g
        .call(d3.axisRight(y).ticks(12 * k))
        .call((g) => g.select(".domain").attr("display", "none"));

    const grid: Parameters<(typeof gGrid)["call"]>[0] = (g, x, y) =>
      g
        .attr("stroke", "currentColor")
        .attr("stroke-opacity", 0.1)
        .call((g) =>
          g
            .selectAll(".x")
            .data(x.ticks(12))
            .join(
              (enter) =>
                enter.append("line").attr("class", "x").attr("y2", height),
              (update) => update,
              (exit) => exit.remove()
            )
            .attr("x1", (d) => 0.5 + x(d))
            .attr("x2", (d) => 0.5 + x(d))
        )
        .call((g) =>
          g
            .selectAll(".y")
            .data(y.ticks(12 * k))
            .join(
              (enter) =>
                enter.append("line").attr("class", "y").attr("x2", width),
              (update) => update,
              (exit) => exit.remove()
            )
            .attr("y1", (d) => 0.5 + y(d))
            .attr("y2", (d) => 0.5 + y(d))
        );

    // zoomable 하도록
    const zoomed = ({ transform }: any) => {
      const zx = transform.rescaleX(xScale).interpolate(d3.interpolateRound);
      const zy = transform.rescaleY(yScale).interpolate(d3.interpolateRound);
      gCircles
        .attr("transform", transform)
        .selectAll("circle")
        .data(data)
        .attr("stroke-width", 0.2 / Math.sqrt(transform.k))
        .attr("r", 3 / Math.sqrt(transform.k));
      gConvex.attr("transform", transform);
      gx.call(xAxis, zx);
      gy.call(yAxis, zy);
      gGrid.call(grid, zx, zy);
    };
    const zoom = d3.zoom().scaleExtent([0.5, 1000]).on("zoom", zoomed);

    const svg = d3.select(svgRef.current);

    // grid
    const gGrid = svg.append("g");

    // grix x and y coordinates
    const gx = svg.append("g");
    const gy = svg.append("g");

    // convex
    const gConvex = svg.append("g");
    gConvex
      .selectAll("path")
      .data(
        cluster.sort(
          (a, b) =>
            d3.polygonArea(a.convexHull as [number, number][]) -
            d3.polygonArea(b.convexHull as [number, number][])
        )
      )
      .join("path")
      .attr("d", (d) => {
        const convex = d3.polygonHull(d.convexHull as [number, number][]);
        return convex
          ? "M" + convex.map(([x, y]) => [xScale(x), yScale(y)]).join("L") + "Z"
          : null;
      })
      .attr("stroke", (d) => colorScale2(String(d.clusterID)))
      .attr("fill", (d) => colorScale2(String(d.clusterID)))
      .attr("fill-opacity", 0.1)
      .on("click", (_, d) => {
        setSelectedNode?.(undefined);
        return setSelectedClusterId?.(d.clusterID);
      })
      .style("cursor", "pointer");

    // dots
    const gCircles = svg
      .append("g")
      .attr("fill", "none")
      .attr("stroke-linecap", "round");

    gCircles
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("cx", (d) => xScale(d.x))
      .attr("cy", (d) => yScale(d.y))
      .attr("r", 2) // radius of the circle
      .attr("stroke", (d) => colorScale2(d.group_id))
      .attr("fill", (d) => colorScale2(d.group_id))
      .attr("fill-opacity", 0.2)
      .attr("stroke-width", 1)
      .on("click", (_, d) => setSelectedNode?.(d))
      .style("cursor", "pointer");

    svg.call(zoom as any).call(zoom.transform as any, d3.zoomIdentity);
    return () => {
      svg.selectAll("*").remove();
    };
  }, [width, height, data]);

  // cluster 끼리 색 다르도록
  const allGroups = data.map((v) => String(v.group_id));
  const colorScale = d3.scaleBand(allGroups, [0, 1000]);
  const colorScale2 = (s: string) =>
    d3.scaleSequential([0, 1], d3.interpolateRainbow)(colorScale(s) ?? 0);

  return (
    <>
      <div style={{ position: "relative" }}>
        <svg width={width} height={height} ref={svgRef}></svg>
      </div>
    </>
  );
};
