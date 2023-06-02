"use client";
import { Inter } from "next/font/google";
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
              { link: "/", label: "test1" },
              { link: "/", label: "test2" },
            ]}
          />
          <Notifications />
          {children}
          <FooterBar />
        </MantineProvider>
      </body>
    </html>
  );
}
