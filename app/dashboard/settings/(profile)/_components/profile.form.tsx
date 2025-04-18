"use client";

import { Trash2 } from "lucide-react";
import { FieldDescription } from "@/components/fields/field-description";
import { FieldError } from "@/components/fields/field-error";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { withForm } from "@/hooks/use-form";
import { cn } from "@/lib/utils";

export const ProfileForm = withForm({
  defaultValues: {
    username: "",
    email: "",
    bio: "",
    urls: [{ value: "" }],
  },
  render: ({ form }) => {
    return (
      <form
        className={cn("flex flex-col gap-6")}
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <form.AppField
          name="username"
          children={(field) => (
            <field.TextField
              label="Username"
              type="text"
              placeholder="johndoe"
              description="This is your public display name. It can be your real name or a
          pseudonym. You can only change this once every 30 days."
              required
            />
          )}
        />

        <form.AppField
          name="email"
          children={(field) => (
            <field.TextField
              label="Email"
              type="email"
              placeholder="john@doe.com"
              description="You can manage verified email addresses in your email settings."
              required
            />
          )}
        />

        <form.AppField
          name="bio"
          children={(field) => (
            <field.Textarea
              label="Bio"
              placeholder="Some bio"
              description="You can @mention other users and organizations to link to them."
              required
            />
          )}
        />

        <div>
          <Label htmlFor="urls" className="pb-2">
            URLs
          </Label>
          <FieldDescription className="pb-2">
            Add links to your website, blog, or social media profiles.
          </FieldDescription>

          <form.Field name="urls" mode="array">
            {(field) => {
              return (
                <div className="space-y-2">
                  {field.state.value.map((_, idx) => {
                    return (
                      <form.AppField
                        key={idx}
                        name={`urls[${idx}].value`}
                        children={(subField) => {
                          return (
                            <div className="flex flex-row w-full items-center space-x-2">
                              <subField.TextField
                                key={idx}
                                name={`urls[${idx}].value`}
                                type="url"
                                value={subField.state.value}
                                onChange={(e) =>
                                  subField.handleChange(e.target.value)
                                }
                                placeholder="https://example.com"
                                className="w-full"
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="w-12 text-red-500"
                                onClick={() => field.removeValue(idx)}
                              >
                                <Trash2 />
                              </Button>
                            </div>
                          );
                        }}
                      />
                    );
                  })}

                  <FieldError field={field} />

                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => field.pushValue({ value: "" })}
                  >
                    Add URL
                  </Button>
                </div>
              );
            }}
          </form.Field>
        </div>

        <div>
          <form.AppForm>
            <form.ButtonSubmit label="Update Profile" />
          </form.AppForm>
        </div>

        {/* <pre>{JSON.stringify(form.state.values, null, 2)}</pre> */}
      </form>
    );
  },
});
