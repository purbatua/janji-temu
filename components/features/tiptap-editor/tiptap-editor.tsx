"use client";

import "./styles/index.css";
import type { Content } from "@tiptap/react";
import { EditorContent } from "@tiptap/react";
import { forwardRef } from "react";
import { MeasuredContainer } from "@/components/features/tiptap-editor/components/measured-container";
import Toolbar from "@/components/features/tiptap-editor/components/toolbar/toolbar";
import {
  useTiptapEditor,
  UseTiptapEditorOptions,
} from "@/components/features/tiptap-editor/hooks/use-tiptap-editor";
import { cn } from "@/lib/utils";

export type TiptapEditorProps = Omit<UseTiptapEditorOptions, "onUpdate"> & {
  value?: Content;
  onChange?: (val1ue: Content) => void;
  className?: string;
  editorContentClassName?: string;
};

export const TiptapEditor = forwardRef<HTMLDivElement, TiptapEditorProps>(
  ({ value, onChange, className, editorContentClassName, ...props }, ref) => {
    const editor = useTiptapEditor({
      value,
      onUpdate: onChange,
      ...props,
    });

    if (!editor) {
      return null;
    }

    return (
      <MeasuredContainer
        as="div"
        name="editor"
        ref={ref}
        className={cn(
          "border-input focus-within:border-primary min-data-[orientation=vertical]:h-72 flex h-auto w-full flex-col rounded-md border shadow-xs",
          className
        )}
      >
        {/* <div
        className={cn("w-full border border-amber-300 rounded-2xl", className)}
      > */}
        <Toolbar editor={editor} />
        <EditorContent
          editor={editor}
          className={cn("tiptap-editor", editorContentClassName)}
        />
        {/* </div> */}
        {/* <pre>{JSON.stringify(value, null, 2)}</pre> */}
      </MeasuredContainer>
    );
  }
);

TiptapEditor.displayName = "TiptapEditor";

export default TiptapEditor;
