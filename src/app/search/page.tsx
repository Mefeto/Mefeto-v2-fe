"use client";
import { Container, Flex } from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import SearchBar from "@/component/search-bar";
import SearchFilter from "@/component/search-filter";
import PropositionList from "@/component/proposition-list";
import { useState } from "react";
import { committees } from "@/lib/const/committees";

export default function Page() {
  const [input, setInput] = useInputState("");
  const [filter, setFilter] = useState<string[]>(committees);
  return (
    <>
      <Container mt={100} mb={80}>
        <SearchBar setInput={setInput} />
      </Container>
      <Container size="lg">
        <Flex gap={40} justify="center">
          <SearchFilter setFilter={setFilter} />
          <PropositionList filter={filter} input={input} />
        </Flex>
      </Container>
    </>
  );
}
