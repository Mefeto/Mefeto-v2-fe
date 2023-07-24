"use client";
import { Container } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

export default function AIwritePage({
  children,
}: {
  children: React.ReactNode;
}) {
  const { height } = useViewportSize();
  return (
    <Container size="lg" mih={height}>
      {children}
    </Container>
  );
}
