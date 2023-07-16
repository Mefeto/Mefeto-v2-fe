import { Fragment } from "react";
import { Alert, Container, Stack, Text } from "@mantine/core";

export default function PropositionContentDictionary({
  words,
}: {
  words: Array<{ name: string; description: string }> | undefined;
}) {
  const content = words?.map((word, index) => {
    return (
      <Fragment key={index}>
        <Alert title={word.name} radius="md" mb={16}>
          <Text>{word.description}</Text>
        </Alert>
      </Fragment>
    );
  });
  return (
    <Container m={0} w={"100%"} maw={380}>
      <Stack>
        <Alert
          title="✨AI 제공 단어사전"
          variant="outline"
          styles={{ title: { fontSize: 16, padding: 8 } }}
        >
          {content}
        </Alert>
      </Stack>
    </Container>
  );
}
