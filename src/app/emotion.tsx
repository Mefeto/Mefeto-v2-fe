"use client";

import { CacheProvider } from "@emotion/react";
import { useEmotionCache, MantineProvider } from "@mantine/core";
import { useServerInsertedHTML } from "next/navigation";
import FooterBar from "@/component/footer-bar";
import HeaderBar from "@/component/header-bar";

export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" "),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <MantineProvider withNormalizeCSS>
        <HeaderBar
          links={[
            { link: "/", label: "토의 리스트" },
            { link: "/search", label: "발의안 검색" },
          ]}
        />
        {children}
        <FooterBar />
      </MantineProvider>
    </CacheProvider>
  );
}
