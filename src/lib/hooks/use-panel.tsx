import { createContext, useContext, useEffect, useRef, useState } from "react";

const usePanelProvider = () => {
  const [panels, setPanels] = useState<
    Record<string, { name: string; panel: React.ReactNode }>
  >({});

  return {
    panels,
    setPanels,
  };
};

const panelContext = createContext<
  ReturnType<typeof usePanelProvider> | undefined
>(undefined);

export const PanelProvider = ({ children }: { children: React.ReactNode }) => {
  const value = usePanelProvider();
  return (
    <panelContext.Provider value={value}>{children}</panelContext.Provider>
  );
};

const usePanel = () => {
  const context = useContext(panelContext);
  if (context === undefined) {
    throw new Error("usePanel must be used within a PanelProvider");
  }
  return context;
};

export const usePanels = () => usePanel().panels;

export const usePanelInjector = (name: string, panel: React.ReactNode) => {
  const { setPanels } = usePanel();
  const key = useRef(globalThis.crypto.randomUUID());

  useEffect(() => {
    setPanels((panels) => ({
      ...panels,
      [key.current]: { name, panel },
    }));

    return () => {
      setPanels(({ [key.current]: _, ...rest }) => rest);
    };
  }, [panel]);
};
