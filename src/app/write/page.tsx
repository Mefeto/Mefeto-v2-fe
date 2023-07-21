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

interface Step {
  stepper_name: string;
  stepper_label: string;
  stepper_description: string;
  stepper_color: string;
  section_title: string;
  section_description: string;
  section_type: string;
}

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

  const form = useForm<InputForm>({
    initialValues: {
      step1: "",
      step2: "",
      step3: "",
      step4: "",
    },
  });

  // steppers 각 contents, use-form으로 관리
  const steppers = steps.map((step, index) => {
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

const steps: Step[] = [
  {
    stepper_name: "step1",
    stepper_label: "제목 선정",
    stepper_description: "어떤 주제인가요?",
    stepper_color: "gray.8",
    section_title: "1. 우선 제목을 선정해주세요",
    section_description: "어떤 주제인가요?",
    section_type: "input",
  },
  {
    stepper_name: "step2",
    stepper_label: "상황 소개",
    stepper_description: "무엇을 소개하고 싶나요?",
    stepper_color: "gray.8",
    section_title: "2. 문제 상황을 작성해주세요",
    section_description: `<div>첫째, 철근이 빠진 채로 아파트가 지어져서 무너질 위기에 처해있습니다.<br/ >둘째, 아파트 상가가 폭우때문에 물에 잠겨버림, 설계와 시공이 잘못돼서 그런 것입니다.<br/ >셋째, 광주에서 아파트가 무너져 일하시는 분들이 6명이나 사망했습니다.<br/ >마지막으로, 3년 된 아파트에서는 욕실 타일이 갑자기 떨어진 사건도 있었습니다.</div>`,
    section_type: "editor",
  },
  {
    stepper_name: "step3",
    stepper_label: "원인 분석",
    stepper_description: "어떤 점이 문제인가요?",
    stepper_color: "gray.8",
    section_title: "3. 고민하시는 문제의 원인은 무엇이라고 생각하시나요?",
    section_description: `<div>1. 공공기관인 L* 이 발주처고 설계도면이 최초부터 다 빼돌리기였다임. L* 는 왜 비난을 피해가지...?<br/ >2. 건물들의 가격은 수억하면서 반품, 교환, 환불, 수리보상 중 쉽게 되는 게 하나도 없음<br/ >3. 광*현**업 개발은 아직도 행정처분이 없다.. 법이 이렇게 대기업한테 관대하다.</div>`,
    section_type: "editor",
  },
  {
    stepper_name: "step4",
    stepper_label: "해결 방안",
    stepper_description: "어떻게 되면 좋을까요?",
    stepper_color: "gray.8",
    section_title: "4. 그럼 어떤 해결책이 있다면 좋을까요?",
    section_description: `<div>1. 건축 감리는 나라에서 정합시다. 건설사, 시공사에 감리업체 선정할 수 있게 하지 말고.<br/ >2. 무조건 전수조사 해야 할 정도입니다. 메이저 건설사 L* 가 국민세금 눈 먼 돈이라고 이 지경으로 시공하는데 그 아래 건설사들이 더 하면 더 했지 전수조사 해야합니다. 정말 순살 아파트 한 채라도 나오는 순간 끔찍한 일이 생길 것입니다. <br/ >3. 후분양 강제 입법.</div>`,
    section_type: "editor",
  },
];
