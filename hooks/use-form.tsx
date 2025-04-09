import { createFormHook } from "@tanstack/react-form"
import { lazy } from "react"
import { Button } from "@/components/ui/button"
import { fieldContext, formContext, useFormContext } from "@/context/form-context"
import { cn } from "@/lib/utils"

const TextField = lazy(() => import("../components/fields/text-field"));

type Props = {
  label?: string;
}

const SubscribeButton = ({ label }: Props) => {
  const form = useFormContext();

  return (
    <form.Subscribe
      selector={(state) => [state.canSubmit, state.isSubmitting]}
      children={([canSubmit, isSubmitting]) => (
        <Button
          type="submit"
          disabled={!canSubmit}
          className={cn("cursor-pointer", !canSubmit ? "opacity-30" : "")}
        >
          { isSubmitting ? '...' : label }
        </Button>
      )}
    />
  )
}

export const { useAppForm, withForm } = createFormHook({
  fieldComponents:{
    TextField
  },
  formComponents: {
    SubscribeButton,
  },
  fieldContext,
  formContext,
})