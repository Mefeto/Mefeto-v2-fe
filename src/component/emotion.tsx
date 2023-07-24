"use client";

import { CacheProvider } from "@emotion/react";
import { MantineProvider, Notification } from "@mantine/core";
import FooterBar from "@/component/footer-bar";
import HeaderBar from "@/component/header-bar";
import { useGluedEmotionCache } from "@/lib/config/emotionNextjsGlue";
import { Notifications } from "@mantine/notifications";

export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const cache = useGluedEmotionCache();

  return (
    <CacheProvider value={cache}>
      <MantineProvider withNormalizeCSS withGlobalStyles emotionCache={cache}>
        <HeaderBar
          links={[
            { link: "/", label: "토의 리스트" },
            { link: "/search", label: "발의안 검색" },
          ]}
        />
        <Notifications />
        {children}
        <FooterBar />
      </MantineProvider>
    </CacheProvider>
  );
}
