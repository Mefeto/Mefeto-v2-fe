"use client";

import MainCarousel from "@/component/main/main-carousel";
import { Container } from "@mantine/core";
import MainTimeline from "@/component/main/main-timeline";

export default function Home() {
  return (
    <main>
      <Container>
        {/* 최근 이슈 목록 */}
        <MainCarousel />
        {/* 시간 흐름별 이슈 목록 */}
        <MainTimeline />
      </Container>
    </main>
  );
}
