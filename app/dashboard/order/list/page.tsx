import { TiptapEditor } from "@/components/features/tiptap-editor";
import { cn } from "@/lib/utils";

const PageOrderList = () => {
  return (
    <main className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 px-4 md:gap-6 md:py-6 md:px-6">
        Page Order List
        <TiptapEditor
          throttleDelay={2000}
          className={cn("h-full min-h-56 w-full rounded-xl")}
          editorContentClassName="overflow-auto h-full"
          output="html"
          placeholder="Type your description here..."
          editable={true}
          editorClassName="focus:outline-none px-5 py-4 h-full"
        />
      </div>
    </main>
  );
};

export default PageOrderList;
