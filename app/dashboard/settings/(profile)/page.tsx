"use client";

import { Suspense } from "react";
import { z } from "zod";
import { Separator } from "@/components/ui/separator";
import { useAppForm } from "@/hooks/use-form";
import { ProfileForm } from "./_components/profile.form";

const ProfileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  bio: z.string().max(160).min(4),
  urls: z.array(
    z.object({
      value: z.string().url({ message: "Please enter a valid URL." }),
      // .nullable(),
    })
  ),
  // .optional(),
});

export default function SettingsProfilePage() {
  const form = useAppForm({
    defaultValues: {
      username: "",
      email: "",
      bio: "",
      urls: [{ value: "" }],
    },
    onSubmit: async ({ value }) => {
      console.log("onSubmit value", value);
    },
    validators: {
      onChange: ProfileFormSchema,
    },
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
