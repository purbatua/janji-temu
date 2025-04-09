// import { useStore } from '@tanstack/react-form'
import type { ComponentProps } from 'react'
import FieldInfo from '@/components/fields/field-info'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFieldContext } from '@/context/form-context'

type Props = {
  label?: string;
} & ComponentProps<"input">;

const TextField = ({ label, ...props }: Props) => {
  const field = useFieldContext<string>();
  // const errors = useStore(field.store, (state) => state.meta.errors);

  return (
    <>
      { label ? <Label htmlFor={field.name}>{ label }</Label> : null }
      <Input
        id={field.name}
        name={field.name}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        type={props?.type}
        placeholder={props?.placeholder}
        required={props?.required}
      />
      <FieldInfo field={field} />
    </>
  )
}

export default TextField;