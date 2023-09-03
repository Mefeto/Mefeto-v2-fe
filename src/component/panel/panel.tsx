"use client";

import { PanelProvider, usePanels } from "@/lib/hooks/use-panel";
import { Box, Center, Divider, Flex, Tabs } from "@mantine/core";

const Inner = () => {
  const panels = usePanels();

  if (Object.keys(panels).length === 0) return null;

  return (
    <>
      <Divider orientation="vertical" />
      <Box miw={0} style={{ overflowY: "scroll" }} mah="100vh">
        {Object.entries(panels).map(([key, { panel }]) => (
          <Panel key={key}>{panel}</Panel>
        ))}
      </Box>
    </>
  );
};

const Panel = ({ children }: React.PropsWithChildren) => {
  return (
    <PanelProvider>
      <Center>
        <Flex
          style={{
            width: "100%",
            margin: "0 auto",
          }}
        >
          <Box style={{ flex: 1 }}>{children}</Box>
          <Inner />
        </Flex>
      </Center>
    </PanelProvider>
  );
};

export default Panel;
