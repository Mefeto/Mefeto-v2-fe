"use client";

import {
  Button,
  Container,
  Group,
  Modal,
  Paper,
  rem,
  Stepper,
  Text,
} from "@mantine/core";
import { useState } from "react";
import CustomTextInputWithLabel from "@/component/custom-text-input-with-label";
import { IconArticle, IconCircleCheck } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { stepper_steps } from "@/lib/const/write-artice";

export interface InputForm {
  step1: string;
  step2: string;
  step3: string;
  step4: string;
}

export default function WritePage() {
  // 모달 창 열림 여부
  const [opened, { open, close }] = useDisclosure(false);

  // stepper 순서 및 활성화 여부
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  // form 상태 관리 훅
  const form = useForm<InputForm>({
    initialValues: {
      step1: "",
      step2: "",
      step3: "",
      step4: "",
    },
  });

  // steppers 각 contents, use-form으로 관리, key 값 변화로 state 공유 문제 막기
  const steppers = stepper_steps.map((step, index) => {
    return (
      <Stepper.Step
        key={step.stepper_label}
        label={step.stepper_label}
        description={step.stepper_description}
        color={step.stepper_color}
      >
        {active === index && (
          <CustomTextInputWithLabel
            key={step.stepper_label}
            sectionTitle={step.section_title}
            description={step.section_description}
            type={step.section_type}
            name={step.stepper_name}
            form={form}
          />
        )}
      </Stepper.Step>
    );
  });

  return (
    <Container h="100%">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Paper py={rem(80)}>
          <Stepper
            size="sm"
            active={active}
            onStepClick={setActive}
            completedIcon={<IconCircleCheck />}
            color="gray.8"
            styles={{ content: { marginTop: 80 } }}
          >
            {steppers}
            <Stepper.Completed>
              <Text align="center" fz={rem(24)}>
                작성해주셔서 감사합니다! 🥰
              </Text>
              <Text align="center" py={40}>
                아래의 버튼을 눌러 게시될 아티클을 미리 확인해보세요!
              </Text>
              <Modal
                px={0}
                opened={opened}
                onClose={close}
                title="Authentication"
                centered
                zIndex={500}
              >
                모달
              </Modal>
              <Group position="center" onClick={open}>
                <Button size="lg" leftIcon={<IconArticle />} variant="light">
                  아티클 미리보기
                </Button>
              </Group>
            </Stepper.Completed>
          </Stepper>
        </Paper>

        <Group position="center" py={rem(40)}>
          {active !== 4 ? (
            <>
              <Button variant="default" onClick={prevStep}>
                이전으로
              </Button>
              <Button color={"gray.8"} onClick={nextStep}>
                다음으로
              </Button>
            </>
          ) : (
            <Button type="submit">의견 제출하기</Button>
          )}
        </Group>
      </form>
    </Container>
  );
}
