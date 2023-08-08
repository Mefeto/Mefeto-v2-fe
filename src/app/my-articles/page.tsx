"use client";

import { Timeline, Text, Box, rem } from "@mantine/core";
import {
  IconGitBranch,
  IconGitCommit,
  IconGitPullRequest,
  IconMessageDots,
} from "@tabler/icons-react";

export default function MyArticlePage() {
  return (
    <Box>
      <Text fz="lg" fw={600}>
        내 활동
      </Text>
      <Timeline
        lineWidth={2}
        styles={(theme) => ({
          itemTitle: {
            fontSize: theme.fontSizes.sm,
          },
        })}
        mt="lg"
        bulletSize="1.5rem"
      >
        <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch">
          <Text color="dimmed" size="sm">
            You&apos;ve created new branch{" "}
            <Text variant="link" component="span" inherit>
              fix-notifications
            </Text>{" "}
            from master
          </Text>
          <Text size="xs" mt={4}>
            2 hours ago
          </Text>
        </Timeline.Item>

        <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits">
          <Text color="dimmed" size="sm">
            You&apos;ve pushed 23 commits to
            <Text variant="link" component="span" inherit>
              fix-notifications branch
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            52 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title="Pull request"
          bullet={<IconGitPullRequest size={12} />}
        >
          <Text color="dimmed" size="sm">
            You&apos;ve submitted a pull request
            <Text variant="link" component="span" inherit>
              Fix incorrect notification message (#187)
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            34 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title="Code review"
          bullet={<IconMessageDots size={12} />}
        >
          <Text color="dimmed" size="sm">
            <Text variant="link" component="span" inherit>
              Robert Gluesticker
            </Text>{" "}
            left a code review on your pull request
          </Text>
          <Text size="xs" mt={4}>
            12 minutes ago
          </Text>
        </Timeline.Item>
      </Timeline>
    </Box>
  );
}
