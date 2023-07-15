import { Timeline, Text } from "@mantine/core";
import MainTimelineCard from "@/component/main/main-timeline-card";
import { articleThumbnail } from "@/lib/const/article-thumbnail";
import { ArticleThumbnailType } from "@/lib/types/article-thumbnail-type";

export default function MainTimeline() {
  const timelineContents = articleThumbnail.map(
    (item: ArticleThumbnailType) => {
      return (
        <Timeline.Item title={item.date} key={item.date}>
          {item.contents.map((article) => {
            return <MainTimelineCard key={article.title} article={article} />;
          })}
        </Timeline.Item>
      );
    }
  );
  return (
    <>
      {/* 타임라인 시간대 */}
      <Text size={28} weight={700} py={16} mt={40}>
        타임라인
      </Text>
      {/* 타임라인별 글 목록 */}
      <Timeline
        active={-1}
        lineWidth={2}
        bulletSize={14}
        styles={{
          itemTitle: { fontWeight: 500, fontSize: 24 },
        }}
      >
        {timelineContents}
      </Timeline>
    </>
  );
}
