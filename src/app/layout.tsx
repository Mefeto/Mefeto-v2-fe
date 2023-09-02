import RootStyleRegistry from "@/component/emotion";
import Panel from "@/component/panel/panel";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className} style={{ margin: 0, padding: 0 }}>
          <Panel>
            <RootStyleRegistry>{children}</RootStyleRegistry>
          </Panel>
        </body>
      </html>
    </ClerkProvider>
  );
}
