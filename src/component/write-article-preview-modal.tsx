import { Container, Modal, TypographyStylesProvider } from "@mantine/core";
import { InputForm } from "@/app/write/page";
import { generateHtmlFromInput } from "@/lib/utils/article";

export default function WriteArticlePreviewModal({
  opened,
  close,
  input,
}: {
  opened: boolean;
  close: () => void;
  input: InputForm;
}) {
  return (
    <Modal
      px={0}
      opened={opened}
      onClose={close}
      title="게시물 미리보기"
      centered
      zIndex={500}
      size="xl"
    >
      <Container>
        <TypographyStylesProvider>
          <div
            dangerouslySetInnerHTML={{ __html: generateHtmlFromInput(input) }}
          />
        </TypographyStylesProvider>
      </Container>
    </Modal>
  );
}
