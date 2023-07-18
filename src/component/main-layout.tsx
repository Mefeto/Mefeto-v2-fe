"use client";
import HeaderBar from "@/component/header-bar";
import FooterBar from "@/component/footer-bar";
import { MantineProvider } from "@mantine/core";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MantineProvider>{children}</MantineProvider>
    </>
  );
}
