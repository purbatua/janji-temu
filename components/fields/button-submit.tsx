import { Spinner } from "@/components/svgs/spinner"
import { Button } from "@/components/ui/button"
import { useFormContext } from "@/context/form-context"
import { cn } from "@/lib/utils"


type Props = {
  label?: string;
}

const ButtonSubmit = ({ label }: Props) => {
  const form = useFormContext();

  return (
    <form.Subscribe
      selector={(state) => [state.canSubmit, state.isSubmitting]}
      children={([canSubmit, isSubmitting]) => (
        <Button
          type="submit"
          disabled={!canSubmit}
          className={cn("cursor-pointer", !canSubmit ? "opacity-30 cursor-none" : "")}
        >
          {
            isSubmitting
              ? <div className="flex items-center space-x-2"><Spinner /> <span>{label}</span></div>
              : label
          }
        </Button>
      )}
    />
  )
}

export default ButtonSubmit;