import { ActionIcon, TextInput, Text, useMantineTheme } from "@mantine/core";
import { IconArrowLeft, IconArrowRight, IconSearch } from "@tabler/icons-react";
import { ChangeEvent } from "react";

export default function SearchBar({
  setInput,
}: {
  setInput: (value: string | ChangeEvent<any> | null | undefined) => void;
}) {
  const theme = useMantineTheme();

  return (
    <>
      <Text c="black" align="center" size={24} my={40}>
        발의안 정보를 검색해보세요!
      </Text>
      <TextInput
        icon={<IconSearch size="1.1rem" stroke={1.5} />}
        radius="xl"
        size="md"
        rightSection={
          <ActionIcon
            size={32}
            radius="xl"
            color={theme.primaryColor}
            variant="filled"
          >
            {theme.dir === "ltr" ? (
              <IconArrowRight size="1.1rem" stroke={1.5} />
            ) : (
              <IconArrowLeft size="1.1rem" stroke={1.5} />
            )}
          </ActionIcon>
        }
        placeholder="발의대표자명, 발의안명, 소관위원회를 입력해보세요"
        rightSectionWidth={42}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
}
