import {
  Alert,
  Center,
  Input,
  rem,
  Stack,
  Text,
  TypographyStylesProvider,
} from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";
export default function CustomTextInputWithLabel({
  sectionTitle,
  description,
  component,
  type,
}: {
  sectionTitle: string;
  description?: string;
  component?: React.ReactNode;
  type: "custom" | "input" | "textarea" | string;
}) {
  if (type === "input") {
    return (
      <Stack px={40}>
        {sectionTitle && (
          <Text fw={500} fz={rem(24)} color="gray.8" align="start" pt="md">
            {sectionTitle}
          </Text>
        )}
        <Input.Wrapper
          my={rem(40)}
          miw="60%"
          styles={{
            label: {
              fontSize: rem(16),
              fontWeight: 600,
              marginBottom: rem(16),
            },
          }}
        >
          <Input
            id="input-demo"
            placeholder="어떤 주제에 대해서 소개하고 싶으신가요?"
            color="black"
            size="lg"
          />
        </Input.Wrapper>
      </Stack>
    );
  }
  if (type === "custom") {
    return (
      <Stack px={40}>
        {sectionTitle && (
          <Text fw={500} fz={rem(24)} color="gray.8" align="start" pb="md">
            {sectionTitle}
          </Text>
        )}
        {description && (
          <Alert
            title="예시"
            icon={<IconAlertCircle size="1rem" />}
            color="dark"
            variant="outline"
            mb="md"
          >
            <TypographyStylesProvider>
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </TypographyStylesProvider>
          </Alert>
        )}
        <>{component}</>
      </Stack>
    );
  }
  return <></>;
}
