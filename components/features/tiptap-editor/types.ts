import type { Editor } from "@tiptap/react";
import type { ReactNode } from "react";

export type FormatAction = {
  label: string;
  icon?: ReactNode;
  action: (editor: Editor) => void;
  isActive: (editor: Editor) => boolean;
  canExecute: (editor: Editor) => boolean;
  shortcuts: string[];
  value: string;
};
