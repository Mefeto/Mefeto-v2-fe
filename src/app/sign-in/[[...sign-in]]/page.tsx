"use client";
import { SignIn } from "@clerk/nextjs";
import { Center, Container } from "@mantine/core";

export default function Page() {
  return (
    <Center mt={80}>
      <SignIn />
    </Center>
  );
}
