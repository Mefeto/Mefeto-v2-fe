"use client";

import { useState } from "react";
import {
  Button,
  Container,
  Group,
  Paper,
  rem,
  Stepper,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import {
  IconArticle,
  IconCheck,
  IconCircleCheck,
  IconX,
} from "@tabler/icons-react";
import CustomTextInputWithLabel from "@/component/custom-text-input-with-label";
import WriteArticlePreviewModal from "@/component/write-article-preview-modal";
import { stepper_steps } from "@/lib/const/write-article";
import { generateHtmlFromInput } from "@/lib/utils/article";
import { notifications } from "@mantine/notifications";
import axios from "axios";

export interface InputForm {
  title: string;
  problem: string;
  cause: string;
  solution: string;
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
      title: "",
      problem: "",
      cause: "",
      solution: "",
    },
  });

  // form 제출 여부 확인
  const [uploading, setUploading] = useState(false);

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
      <form
        onSubmit={form.onSubmit(async (values) => {
          await setUploading(true);
          try {
            const content = generateHtmlFromInput(values);
            await notifications.show({
              id: "upload-article",
              loading: true,
              title: "아티클 업로드중!",
              message: "아티클을 업로드 하고 있습니다!",
              autoClose: false,
              withCloseButton: false,
            });
            const res = await axios.post(`/api/articles`, {
              title: values.title,
              thumbnail_url:
                "https://images.unsplash.com/photo-1689890075754-f36045eaadc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
              categories: ["test1", "test2", "test3"],
              content: content,
            });

            if (res.status === 200) {
              await notifications.update({
                id: "upload-article",
                title: "아티클 업로드 완료!",
                message:
                  "작성된 아티클 업로드가 완료됐습니다. 이제 이 창은 2초 후에 닫힙니다!",
                autoClose: 2000,
                color: "teal",
                icon: <IconCheck size="1rem" />,
              });
              await setUploading(false);
            }
          } catch (e) {
            notifications.update({
              id: "upload-article",
              title: "아티클 업로드 오류!",
              message:
                "아티클이 제대로 업로드 되지 않았습니다. 다시 한번 시도해주시기 바랍니다",
              autoClose: 2000,
              color: "red",
              icon: <IconX size="1rem" />,
            });
            await setUploading(false);
          }
        })}
      >
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

              <WriteArticlePreviewModal
                opened={opened}
                close={close}
                input={form.values}
              />

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
              <Button color="gray.8" onClick={nextStep}>
                다음으로
              </Button>
            </>
          ) : (
            <Button type="submit" disabled={uploading}>
              의견 제출하기
            </Button>
          )}
        </Group>
      </form>
    </Container>
  );
}
