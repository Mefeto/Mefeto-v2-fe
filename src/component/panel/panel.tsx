"use client";

import { Box, Divider, Flex, Tabs } from "@mantine/core";

const Panel = ({ children }: React.PropsWithChildren) => {
  return (
    <Flex>
      <Box style={{ flex: 1 }}>{children}</Box>
      <Divider orientation="vertical" />
      <Box>
        <Tabs orientation="vertical" placement="right" variant="pills">
          <Tabs.List>
            <Tabs.Tab value="1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="2">Tab 2</Tabs.Tab>
            <Tabs.Tab value="3">Tab 3</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="1">1</Tabs.Panel>
          <Tabs.Panel value="2">2</Tabs.Panel>
          <Tabs.Panel value="3">3</Tabs.Panel>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default Panel;
