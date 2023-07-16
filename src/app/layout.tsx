import { Inter } from "next/font/google";
import { ClerkProvider, useUser } from "@clerk/nextjs";
import MainLayout from "@/component/main-layout";

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
          <MainLayout children={children} />
        </body>
      </html>
    </ClerkProvider>
  );
}
