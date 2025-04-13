import { TiptapEditor } from "@/components/features/tiptap-editor";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const PageOrderList = () => {
  return (
    <main className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 px-4 md:gap-6 md:py-6 md:px-6">
        {/* <div>
          <h3 className="text-lg font-medium">KitchenSink</h3>
          <p className="text-sm text-muted-foreground">
            This is how others will see you on the site.
          </p>
        </div>
        <Separator /> */}

        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator />

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
