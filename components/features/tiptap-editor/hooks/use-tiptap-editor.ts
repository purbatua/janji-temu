import { Placeholder } from "@tiptap/extension-placeholder";
import { TextStyle } from "@tiptap/extension-text-style";
import { Typography } from "@tiptap/extension-typography";
import { Underline } from "@tiptap/extension-underline";
import {
  type Content,
  type Editor,
  useEditor,
  type UseEditorOptions,
} from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { useCallback } from "react";
import { cn } from "@/lib/utils";
import { useThrottle } from "./use-throttle";
import { getOutput } from "../utils/output";

export type UseTiptapEditorOptions = UseEditorOptions & {
  value?: Content;
  output?: "html" | "json" | "text";
  placeholder?: string;
  editorClassName?: string;
  throttleDelay?: number;
  onUpdate?: (content: Content) => void;
  onBlur?: (content: Content) => void;
};

const createExtensions = (placeholder: string) => [
  StarterKit.configure({
    horizontalRule: false,
    codeBlock: false,
    paragraph: { HTMLAttributes: { class: "text-node" } },
    heading: { HTMLAttributes: { class: "heading-node" } },
    blockquote: { HTMLAttributes: { class: "block-node" } },
    bulletList: { HTMLAttributes: { class: "list-node" } },
    orderedList: { HTMLAttributes: { class: "list-node" } },
    code: { HTMLAttributes: { class: "inline", spellcheck: "false" } },
    dropcursor: { width: 2, class: "ProsesMirror-dropcursor border" },
  }),
  Underline,
  TextStyle,
  Typography,
  Placeholder.configure({ placeholder: () => placeholder }),
];

export const useTiptapEditor = ({
  value,
  output = "html",
  placeholder = "",
  editorClassName = "",
  throttleDelay = 0,
  onUpdate,
  onBlur,
  ...props
}: UseTiptapEditorOptions) => {
  const throttleSetValue = useThrottle(
    (value: Content) => onUpdate?.(value),
    throttleDelay
  );

  const handleUpdate = useCallback(
    (editor: Editor) => throttleSetValue(getOutput(editor, output)),
    [output, throttleSetValue]
  );

  const handleCreate = useCallback(
    (editor: Editor) => {
      if (value && editor.isEmpty) {
        editor.commands.setContent(value);
      }
    },
    [value]
  );

  const handleBlur = useCallback(
    (editor: Editor) => onBlur?.(getOutput(editor, output)),
    [output, onBlur]
  );

  const editor = useEditor({
    extensions: createExtensions(placeholder),
    immediatelyRender: false,
    editorProps: {
      attributes: {
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        class: cn("focus:outline-none", editorClassName),
      },
    },
    onUpdate: ({ editor }) => handleUpdate(editor),
    onCreate: ({ editor }) => handleCreate(editor),
    onBlur: ({ editor }) => handleBlur(editor),
    ...props,
  });

  return editor;
};
