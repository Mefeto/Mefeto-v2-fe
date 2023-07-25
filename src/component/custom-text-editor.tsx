import { Link, RichTextEditor } from "@mantine/tiptap";
import { Editor, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";
import { UseFormReturnType } from "@mantine/form";
import { InputForm } from "@/app/write/page";
import { IconBrandYoutube, IconPhotoPlus } from "@tabler/icons-react";
import { useState } from "react";
import { FileWithPath, Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { modals } from "@mantine/modals";
import {
  Text,
  Image as MantineImage,
  SimpleGrid,
  Modal,
  Group,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function InsertImageController({ editor }: { editor: Editor | null }) {
  // image input modal manager
  const [opened, { open, close }] = useDisclosure(false);
  const [images, setImages] = useState<FileWithPath[]>([]);

  const image_url = images.map((file) => URL.createObjectURL(file));

  const previews = images.map((file, index) => {
    const img_url = URL.createObjectURL(file);
    return (
      <MantineImage
        key={index}
        src={img_url}
        imageProps={{ onLoad: () => URL.revokeObjectURL(img_url) }}
      />
    );
  });
  return (
    <>
      <Modal opened={opened} onClose={close} title="이미지 업로드">
        <Text size="sm" pb="md">
          아래의 영역에 추가할 이미지를 드래그하거나 눌러서 파일을 선택하세요
        </Text>
        <Dropzone accept={IMAGE_MIME_TYPE} onDrop={setImages}>
          <Text align="center">여기에 이미지를 업로드 해주세요</Text>
        </Dropzone>
        <SimpleGrid
          cols={1}
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          my={previews.length > 0 ? "xl" : 0}
          mih={100}
        >
          {previews}
        </SimpleGrid>
        <Group>
          <Button variant="default" onClick={close}>
            업로드 취소
          </Button>
          <Button
            onClick={async () => {
              await Promise.all(
                image_url.map((i) =>
                  editor?.commands.setImage({
                    src: i as string,
                  })
                )
              );
              await setImages([]);
              await close();
            }}
          >
            업로드 하기
          </Button>
        </Group>
      </Modal>
      <RichTextEditor.Control
        onClick={open}
        aria-label="Insert Image"
        title="Insert Image"
      >
        <IconPhotoPlus stroke={1.5} size="1rem" />
      </RichTextEditor.Control>
    </>
  );
}

function InsertYoutubeVideoController({ editor }: { editor: Editor | null }) {
  return (
    <RichTextEditor.Control
      onClick={async () => {
        const url = (await prompt("Enter YouTube URL")) as string;
        await editor?.commands.setYoutubeVideo({
          src: url,
        });
      }}
      aria-label="Insert Youtube Video"
      title="Insert Youtube Video"
    >
      <IconBrandYoutube stroke={1.5} size="1rem" />
    </RichTextEditor.Control>
  );
}

export default function CustomTextEditor({
  form,
  name,
}: {
  form: UseFormReturnType<InputForm, (values: InputForm) => InputForm>;
  name: string;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        HTMLAttributes: {
          target: "_blank",
        },
      }),
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Image,
      Youtube,
    ],
    content: form.values[name as keyof InputForm] || content,
    onUpdate({ editor }) {
      form.setFieldValue(name, editor?.getHTML());
    },
  });
  return (
    <RichTextEditor
      editor={editor}
      key={name}
      styles={{ content: { minHeight: 300 } }}
    >
      <RichTextEditor.Toolbar sticky stickyOffset={0}>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
          <RichTextEditor.Strikethrough />
          <RichTextEditor.ClearFormatting />
          <RichTextEditor.Highlight />
          <RichTextEditor.Code />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.H1 />
          <RichTextEditor.H2 />
          <RichTextEditor.H3 />
          <RichTextEditor.H4 />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Blockquote />
          <RichTextEditor.Hr />
          <RichTextEditor.BulletList />
          <RichTextEditor.OrderedList />
          <RichTextEditor.Subscript />
          <RichTextEditor.Superscript />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Link />
          <RichTextEditor.Unlink />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.AlignLeft />
          <RichTextEditor.AlignCenter />
          <RichTextEditor.AlignJustify />
          <RichTextEditor.AlignRight />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <InsertImageController editor={editor} />
          <InsertYoutubeVideoController editor={editor} />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

const content = `<div >이 텍스트를 지우고 여기에 작성해 주세요!</div>`;
