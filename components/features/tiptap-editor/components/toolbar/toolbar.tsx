import type { Editor } from "@tiptap/react";
import ToolbarGroupOne from "@/components/features/tiptap-editor/components/toolbar/toolbar-group-one";
import ToolbarGroupTwo from "@/components/features/tiptap-editor/components/toolbar/toolbar-group-two";
import { Separator } from "@/components/ui/separator";

type Props = {
  editor: Editor;
};

const Toolbar = ({ editor }: Props) => {
  return (
    <div className="shrink-0 overflow-x-auto border-b border-border p-2">
      <div className="flex w-max items-center gap-px">
        <ToolbarGroupOne editor={editor} activeLevels={[1, 2, 3, 4, 5, 6]} />
        <Separator orientation="vertical" className="mx-2 h-7" />

        <ToolbarGroupTwo
          editor={editor}
          activeActions={[
            "bold",
            "italic",
            "underline",
            "strikethrough",
            "code",
            "clearFormatting",
          ]}
          mainActionCount={3}
        />
        <Separator orientation="vertical" className="mx-2 h-7" />
      </div>
    </div>
  );
};

export default Toolbar;
