import React from "react";
import {
  Badge,
  Button,
  Card,
  Checkbox,
  Group,
  Input,
  Modal,
  Progress,
  Text,
  Textarea,
} from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

export default function ArticleOpinionSubmit() {
  const [opened, { open, close }] = useDisclosure(false);
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
              color: theme.colorScheme === "dark" ? theme.white : theme.black,
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
          placeholder="Your opinion"
          label="Your opinion"
          withAsterisk
        />
        <Checkbox label="I agree to sell my privacy" my="md" />
        <Group position="right">
          <Button>Sign a opinion</Button>
        </Group>
      </Modal>
    </>
  );
}
