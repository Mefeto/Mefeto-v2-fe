"use client";
import { AppShell, Container } from "@mantine/core";
import MyArticlesDashboardLayout from "@/component/my-articles-dashboard-layout";

export default function MyArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container size="md">
      <AppShell fixed={false} navbar={<MyArticlesDashboardLayout />}>
        {children}
      </AppShell>
    </Container>
  );
}
