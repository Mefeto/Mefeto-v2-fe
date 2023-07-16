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
      <MantineProvider>
        <HeaderBar
          links={[
            { link: "/", label: "토의 리스트" },
            { link: "/search", label: "발의안 검색" },
          ]}
        />
        {children}
        <FooterBar />
      </MantineProvider>
    </>
  );
}
