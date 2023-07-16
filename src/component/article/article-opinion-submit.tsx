import React from "react";
import {
  Badge,
  Button,
  Card,
  Checkbox,
  Group,
  Input,
  Modal,
  Paper,
  Progress,
  Text,
  Textarea,
} from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import ArticleContentImprovedLegislation from "@/component/article/article-content-improved-legislation";

export default function ArticleOpinionSubmit() {
  const [opened, { open, close }] = useDisclosure(false);
  const [imprvOpened, { open: imprvOpen, close: imprvClose }] =
    useDisclosure(false);
  return (
    <>
      <Card
        radius="md"
        p="md"
        w="100%"
        withBorder
        style={{ flexGrow: 0, flexShrink: 0 }}
      >
        <Group position="apart">
          <Badge color="orange">12일 남음</Badge>
        </Group>

        <Text fz="lg" fw={500} mt="md">
          의견 제출함
        </Text>
        <Text fz="sm" c="dimmed" mt={5}>
          발의안에 대해 관련 의견을 제시해주세요!
        </Text>

        <Text c="dimmed" fz="sm" mt="md">
          의견 제출 현황:{" "}
          <Text
            span
            fw={500}
            sx={(theme) => ({
              color: theme.colorScheme === "dark" ? theme.white : theme.black,
            })}
          >
            36명 중 23명
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
          제안하기
        </Button>
        <Button
          mt="md"
          fullWidth
          radius="md"
          onClick={imprvOpen}
          variant="light"
        >
          의견이 반영된 개정안 구경하기
        </Button>
      </Card>
      <Modal
        opened={opened}
        onClose={close}
        title="의견 제안하기"
        styles={{ title: { fontWeight: 600 }, inner: { padding: 0 } }}
        centered
      >
        <Group grow mb="md">
          <Input.Wrapper id="성" withAsterisk label="성">
            <Input id="성" placeholder="성" />
          </Input.Wrapper>
          <Input.Wrapper id="이름" withAsterisk label="이름">
            <Input id="이름" placeholder="이름" />
          </Input.Wrapper>
        </Group>
        <Input.Wrapper id="이메일" withAsterisk label="이메일" mb="md">
          <Input icon={<IconAt size={16} />} placeholder="이메일" />
        </Input.Wrapper>
        <Textarea placeholder="의견을 작성해주세요" label="의견" withAsterisk />
        <Checkbox label="개인정보 활용에 동의합니다" my="md" />
        <Group position="right">
          <Button>의견 제출하기</Button>
        </Group>
      </Modal>
      <Modal
        opened={imprvOpened}
        onClose={imprvClose}
        title="Mefeto의 개정안"
        styles={{ title: { fontWeight: 600 }, inner: { padding: 0 } }}
        centered
        size="xl"
      >
        <ArticleContentImprovedLegislation />
      </Modal>
    </>
  );
}
