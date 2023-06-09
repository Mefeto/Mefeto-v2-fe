"use client";

import HeaderBar from "@/component/header-bar";
import MainCarousel from "@/component/main-carousel";
import { Box, Container } from "@mantine/core";
import MainTimeline from "@/component/main-timeline";
import FooterBar from "@/component/footer-bar";

export default function Home() {
  return (
    <main>
      <Container>
        <MainCarousel />
        <MainTimeline />
      </Container>
    </main>
  );
}
