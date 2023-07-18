"use client";
import { SignUp } from "@clerk/nextjs";
import { Center } from "@mantine/core";

export default function Page() {
  return (
    <Center mt={80}>
      <SignUp />
    </Center>
  );
}
