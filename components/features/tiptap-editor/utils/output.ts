import type { Editor } from "@tiptap/react";
import type { TiptapEditorProps } from "@/components/features/tiptap-editor/tiptap-editor";

export const getOutput = (
  editor: Editor,
  format: TiptapEditorProps["output"]
): object | string => {
  switch (format) {
    case "json":
      return editor.getJSON();
    case "html":
      return editor.isEmpty ? "" : editor.getHTML();
    default:
      return editor.getText();
  }
};
