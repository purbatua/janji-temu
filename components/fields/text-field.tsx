import type { ComponentProps, ReactNode } from "react";
import { FieldDescription } from "@/components/fields/field-description";
import { FieldError } from "@/components/fields/field-error";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useFieldContext } from "@/context/form-context";
import { cn } from "@/lib/utils";

type Props = ComponentProps<"input"> & {
  label?: string;
  description?: string | ReactNode;
  className?: string;
};

const TextField = ({ label, description, className, ...props }: Props) => {
  const field = useFieldContext<string>();

  return (
    <div className={cn("space-y-2", className)}>
      {label ? (
        <Label htmlFor={field.name} className="pb-1">
          {label}
        </Label>
      ) : null}
      <Input
        id={field.name}
        name={field.name}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        type={props?.type}
        placeholder={props?.placeholder}
        required={props?.required}
      />
      <FieldError field={field} />
      {description ? <FieldDescription>{description}</FieldDescription> : null}
    </div>
  );
};

export default TextField;
