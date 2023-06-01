"use client";
import {
  Container,
  Text,
  Badge,
  Paper,
  Group,
  Card,
  Grid,
  Divider,
  Button,
  Progress,
  Modal,
  Input,
  Textarea,
  Checkbox,
  Anchor,
} from "@mantine/core";
import { useDisclosure, useViewportSize } from "@mantine/hooks";
import { getArticle } from "@/lib/fn/article";
import { ArticleThumbnailContentType } from "@/lib/types/article-thumbnail-type";
import ArticleComment from "@/component/article-comment";
import ArticleContentMark from "@/component/article-content-mark";
import { IconAt, IconArrowLeft } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function ArticleIdPage({ params }: { params: { id: number } }) {
  const { height } = useViewportSize();
  const [opened, { open, close }] = useDisclosure(false);
  const article: ArticleThumbnailContentType = getArticle(Number(params.id));
  return (
    <Container size="md" mih={height}>
      <Anchor component={Link} href={"/"}>
        <Group spacing={8}>
          <IconArrowLeft size={16} />
          <Text my="md">Back to article list</Text>
        </Group>
      </Anchor>
      <Image
        src={article.imgUrl}
        alt={article.title}
        width={700}
        height={300}
        style={{
          width: "100%",
          height: 300,
          objectFit: "cover",
          borderRadius: 16,
          marginBottom: 20,
        }}
      />
      {article.categories.map((c) => (
        <Text key={article.title} color="dimmed" size={18} weight={600}>
          {c}
        </Text>
      ))}
      <Text size={40} weight={700} py={16}>
        {article.title}
      </Text>

      <Group pb={28}>
        <Badge p={8} size="lg" color="orange">
          논의 진행중
        </Badge>
        <Text color="dimmed" size={14}>
          6월 1일에 논의 시작됨 · 댓글 6개
        </Text>
      </Group>
      <Divider mb={16} />
      <Grid columns={14} w="100%">
        <Grid.Col span={10}>
          <Paper
            radius="md"
            p="md"
            withBorder
            style={{ flexGrow: 1, flexShrink: 1 }}
          >
            <Text size={28} weight={700} py="md">
              What is Lorem Ipsum?
            </Text>
            <Text py="md">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </Text>
            <Text size={28} weight={700} py="md">
              What is Lorem Ipsum?
            </Text>
            <Text py="md">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
              <ArticleContentMark>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </ArticleContentMark>{" "}
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
            <Text py="md">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.{" "}
              <ArticleContentMark>
                Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
                Cicero, written in 45 BC.
              </ArticleContentMark>{" "}
              This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </Text>
            <Text size={28} weight={700} py="md">
              Why do we use it?
            </Text>
            <Text py="md">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </Text>
          </Paper>
          <ArticleComment />
        </Grid.Col>
        <Grid.Col span={4}>
          <Card
            radius="md"
            p="md"
            w="100%"
            withBorder
            style={{ flexGrow: 0, flexShrink: 0 }}
          >
            <Group position="apart">
              <Badge color="orange">12 days left</Badge>
            </Group>

            <Text fz="lg" fw={500} mt="md">
              5.3 minor release (September 2022)
            </Text>
            <Text fz="sm" c="dimmed" mt={5}>
              Form context management, Switch, Grid and Indicator components
              improvements, new hook and 10+ other changes
            </Text>

            <Text c="dimmed" fz="sm" mt="md">
              Upvote:{" "}
              <Text
                span
                fw={500}
                sx={(theme) => ({
                  color:
                    theme.colorScheme === "dark" ? theme.white : theme.black,
                })}
              >
                23/36
              </Text>
            </Text>
            <Progress
              value={(23 / 36) * 100}
              mt={5}
              styles={(theme) => ({
                bar: {
                  backgroundImage: theme.fn.gradient({
                    from: "blue",
                    to: "cyan",
                  }),
                },
              })}
            />

            <Button mt="md" fullWidth radius="md" onClick={open}>
              Upvote
            </Button>
          </Card>
        </Grid.Col>
      </Grid>
      <Modal opened={opened} onClose={close} title="Sign for opinion" centered>
        <Group grow mb="md">
          <Input.Wrapper id="first-name" withAsterisk label="First Name">
            <Input id="first-name" placeholder="Your first name" />
          </Input.Wrapper>
          <Input.Wrapper id="last-name" withAsterisk label="Last Name">
            <Input id="last-name" placeholder="Your last name" />
          </Input.Wrapper>
        </Group>
        <Input.Wrapper id="email" withAsterisk label="Email" mb="md">
          <Input icon={<IconAt size={16} />} placeholder="Your email" />
        </Input.Wrapper>
        <Textarea
          placeholder="Your comment"
          label="Your comment"
          withAsterisk
        />
        <Checkbox label="I agree to sell my privacy" my="md" />
        <Group position="right">
          <Button>Sign a opinion</Button>
        </Group>
      </Modal>
    </Container>
  );
}
