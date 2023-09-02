"use client";

import { PanelProvider, usePanels } from "@/lib/hooks/use-panel";
import { Box, Divider, Flex, Tabs } from "@mantine/core";

const Inner = () => {
  const panels = usePanels();

  if (Object.keys(panels).length === 0) return null;

  return (
    <>
      <Divider orientation="vertical" />
      <Box miw={200}>
        <Tabs orientation="vertical" placement="right" variant="pills">
          <Tabs.List>
            {Object.entries(panels).map(([key, { name }]) => (
              <Tabs.Tab value={key} key={key}>
                {name}
              </Tabs.Tab>
            ))}
          </Tabs.List>
          {Object.entries(panels).map(([key, { panel }]) => (
            <Tabs.Panel value={key} key={key}>
              {panel}
            </Tabs.Panel>
          ))}
        </Tabs>
      </Box>
    </>
  );
};

const Panel = ({ children }: React.PropsWithChildren) => {
  return (
    <PanelProvider>
      <Flex>
        <Box style={{ flex: 1 }}>{children}</Box>
        <Inner />
      </Flex>
    </PanelProvider>
  );
};

export default Panel;
