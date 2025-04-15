"use client";

import { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import { useAppForm } from "@/hooks/use-form";
import { ProfileForm } from "./_components/profile.form";

export default function SettingsProfilePage() {
  const form = useAppForm({
    defaultValues: {
      username: "",
      email: "",
      bio: "",
      urls: [{ value: "" }],
    },
    // onSubmit: async ({ value }) => {},
    // validators: {
    //   // onChange: (value) => {
    //   //   console.log("onChange value: ", value);
    //   // }
    //   onChange: z.object({
    //     email: z.string().email({ message: "Invalid email address" }),
    //     password: z.string().min(6),
    //   }),
    // },
  });

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <Suspense fallback={"Loading..."}>
        <ProfileForm form={form} />
      </Suspense>
    </div>
  );
}
