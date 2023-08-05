"use client";
import { UseFormReturnType } from "@mantine/form";
import MefetoCopilotStep2 from "./mefeto-copilot-step2";
import { InputForm } from "@/app/write/page";
import { useState } from "react";
import { Badge, Group, Paper, Switch } from "@mantine/core";
import MefetoCopilotStep1 from "./mefeto-copilot-step1";
import MefetoCopilotStep3 from "./mefeto-copilot-step3";
import MefetoCopilotStep4 from "./mefeto-copilot-step4";

function MefetoCopilot({
  stepIndex,
  form,
}: {
  stepIndex: number;
  form: UseFormReturnType<InputForm, (values: InputForm) => InputForm>;
}) {
  const [aiSwitch, setAiSwitch] = useState(true);
  return (
    <Paper withBorder p="md" radius="md">
      <Group position="center">
        <Badge
          variant="gradient"
          gradient={{
            from: aiSwitch ? "indigo" : "gray",
            to: aiSwitch ? "cyan" : "gray",
          }}
          size="xl"
          onClick={() => setAiSwitch((aiSwitch) => !aiSwitch)}
        >
          MEFETO Copilot
        </Badge>
      </Group>
      {aiSwitch && stepIndex === 0 && <MefetoCopilotStep1 form={form} />}
      {aiSwitch && stepIndex === 1 && <MefetoCopilotStep2 form={form} />}
      {aiSwitch && stepIndex === 2 && <MefetoCopilotStep3 form={form} />}
      {aiSwitch && stepIndex === 3 && <MefetoCopilotStep4 form={form} />}
    </Paper>
  );
}

export default MefetoCopilot;
