import { Inter } from "next/font/google";
import HeaderBar from "@/component/header-bar";
import FooterBar from "@/component/footer-bar";
import { ClerkProvider, useUser } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className} style={{ margin: 0 }}>
          <HeaderBar
            links={[
              { link: "/", label: "토의 리스트" },
              { link: "/search", label: "발의안 검색" },
            ]}
          />
          {children}
          <FooterBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
