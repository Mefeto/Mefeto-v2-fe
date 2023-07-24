"use client";
import { SignIn } from "@clerk/nextjs";
import { Center, Container } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

export default function Page() {
  const { height } = useViewportSize();
  return (
    <Center h={height - 160}>
      <SignIn />
    </Center>
  );
}
