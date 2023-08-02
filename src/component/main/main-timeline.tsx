import { Timeline, Text, Loader, Center, Skeleton, Stack } from "@mantine/core";
import MainTimelineThumbnail from "@/component/main/main-timeline-thumbnail";
import { Article, useArticles } from "@/lib/hooks/use-articles";
import { Fragment } from "react";

export default function MainTimeline() {
  const { data, isLoading, isFetching, isError } = useArticles();
  const timelineContents = data?.map((item: Article) => {
    const dateObject = new Date(item.created_at);
    return (
      <Timeline.Item title={dateObject.toLocaleDateString()} key={item.id}>
        <MainTimelineThumbnail info={item} key={item.id} />
      </Timeline.Item>
    );
  });
  if (isError) {
    return <div>목록을 불러오는데 실패했습니다. 🥲</div>;
  }
  return (
    <>
      {/* 타임라인 시간대 */}
      <Text size={28} weight={700} py={16} mt={40}>
        타임라인
      </Text>
      {/* 타임라인별 글 목록 */}

      {isLoading ? (
        <Center h={500}>
          <Stack align="center">
            <Text>데이터 로딩중입니다!</Text>
            <Loader variant="bars" />
          </Stack>
        </Center>
      ) : (
        <Timeline
          active={-1}
          lineWidth={2}
          bulletSize={14}
          styles={(t) => ({
            itemTitle: { fontWeight: 500, fontSize: t.fontSizes.md },
          })}
        >
          {isFetching ? (
            <>
              {[...Array(5)].map((_, i) => (
                <Fragment key={i}>
                  <Skeleton height="1.5rem" w={300} radius="md" />
                  <Skeleton height={280} radius="md" my="xl" />
                </Fragment>
              ))}
            </>
          ) : (
            timelineContents
          )}
        </Timeline>
      )}
    </>
  );
}
