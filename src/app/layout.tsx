"use client";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import HeaderBar from "@/component/header-bar";
import FooterBar from "@/component/footer-bar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider>
          <HeaderBar
            links={[
              { link: "/", label: "토의 리스트" },
              { link: "/search", label: "발의안 검색" },
            ]}
          />
          <Notifications />
          {children}
          <FooterBar />
          <Analytics />
        </MantineProvider>
      </body>
    </html>
  );
}
