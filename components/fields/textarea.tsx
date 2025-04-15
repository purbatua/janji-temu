import type { ComponentProps, ReactNode } from "react";
import { FieldDescription } from "@/components/fields/field-description";
import { FieldError } from "@/components/fields/field-error";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useFieldContext } from "@/context/form-context";

type Props = ComponentProps<"textarea"> & {
  label?: string;
  description?: string | ReactNode;
};

const TextField = ({ label, description, ...props }: Props) => {
  const field = useFieldContext<string>();

  return (
    <div className="space-y-2">
      {label ? (
        <Label htmlFor={field.name} className="pb-1">
          {label}
        </Label>
      ) : null}
      <Textarea
        id={field.name}
        name={field.name}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        placeholder={props?.placeholder}
        required={props?.required}
        {...props}
      />
      <FieldError field={field} />
      {description ? <FieldDescription>{description}</FieldDescription> : null}
    </div>
  );
};

export default TextField;
