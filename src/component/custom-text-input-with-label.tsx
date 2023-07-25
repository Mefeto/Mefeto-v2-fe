import {
  Alert,
  Input,
  rem,
  Stack,
  Text,
  TypographyStylesProvider,
} from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";
import React from "react";
import { UseFormReturnType } from "@mantine/form";
import { InputForm } from "@/app/write/page";
import CustomTextEditor from "@/component/custom-text-editor";
export default function CustomTextInputWithLabel({
  sectionTitle,
  description,
  type,
  name,
  form,
}: {
  sectionTitle: string;
  description?: string;
  type: "editor" | "input" | "textarea" | string;
  name: string;
  form: UseFormReturnType<InputForm, (values: InputForm) => InputForm>;
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
            placeholder="어떤 주제에 대해서 소개하고 싶으신가요?"
            color="black"
            size="lg"
            {...form.getInputProps(name)}
          />
        </Input.Wrapper>
      </Stack>
    );
  }
  if (type === "editor") {
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
        <Input.Wrapper>
          <CustomTextEditor form={form} name={name} />
        </Input.Wrapper>
      </Stack>
    );
  }
  return <></>;
}
