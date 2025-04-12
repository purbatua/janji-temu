import { createFormHook } from "@tanstack/react-form"
import { lazy } from "react"
import { fieldContext, formContext } from "@/context/form-context"

const TextField = lazy(() => import("../components/fields/text-field"));
const ButtonSubmit = lazy(() => import("../components/fields/button-submit"));

export const { useAppForm, withForm } = createFormHook({
  fieldComponents:{
    TextField
  },
  formComponents: {
    ButtonSubmit,
  },
  fieldContext,
  formContext,
})