import React from "react";
import { Stack, Text, MultiSelect } from "@mantine/core";
import { committeeMultiSelectData } from "@/lib/const/committees";

export default function SearchFilter({
  setFilter,
}: {
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  return (
    <Stack w={200} justify="flex-start">
      <Text weight={700}>필터</Text>
      <MultiSelect
        label="소관위원회"
        placeholder="5개까지 골라보세요"
        styles={{ label: { marginBottom: 8 } }}
        maxSelectedValues={5}
        searchable
        data={committeeMultiSelectData}
        onChange={(filters) => setFilter(() => filters)}
      />
    </Stack>
  );
}
