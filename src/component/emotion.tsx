"use client";

import { CacheProvider } from "@emotion/react";
import { useGluedEmotionCache } from "@/lib/config/emotionNextjsGlue";
import { useState } from "react";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import FooterBar from "@/component/footer-bar";
import HeaderBar from "@/component/header-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const cache = useGluedEmotionCache();
  const [queryClient] = useState(() => new QueryClient());

  return (
    <CacheProvider value={cache}>
      <MantineProvider withNormalizeCSS withGlobalStyles emotionCache={cache}>
        <QueryClientProvider client={queryClient}>
          <ModalsProvider>
            <HeaderBar
              links={[
                { link: "/", label: "토의 리스트" },
                { link: "/search", label: "발의안 검색" },
                { link: "/my-articles", label: "내 발의안" },
              ]}
            />
            <Notifications />
            {children}
            <FooterBar />
          </ModalsProvider>
          {process.env.NODE_ENV === "development" && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
        </QueryClientProvider>
      </MantineProvider>
    </CacheProvider>
  );
}
