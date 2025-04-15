import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentProps<"p"> & {
  className?: string;
};

export const FieldDescription = ({ className, children, ...props }: Props) => {
  return (
    <p
      data-slot="form-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    >
      {children}
    </p>
  );
};
