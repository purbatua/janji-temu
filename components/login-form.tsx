import { createFormHook, createFormHookContexts, useStore } from '@tanstack/react-form'
import type { AnyFieldApi } from '@tanstack/react-form'
import { FormEvent } from 'react'
import { z } from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const { fieldContext, formContext } = createFormHookContexts();
const { useAppForm } = createFormHook({
  fieldComponents: {
    Input,
    // TextField,
    // PasswordField,
  },
  formComponents: {
    // SubmitButton,
    Button,
  },
  fieldContext,
  formContext,
})


const FieldInfo = ({ field }: { field: AnyFieldApi }) => {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em className="text-xs text-red-400">{field.state.meta.errors.map((err) => err.message).join(', ')}</em>
      ) : null}
      {field.state.meta.isValidating ? 'Validating...' : null}
    </>
  )
}

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const form = useAppForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validators: {
      onChange: z.object({
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string().min(6),
      })
    },
    onSubmit: ({ value }) => {
      alert(JSON.stringify(value, null, 2));
      console.log("Value: ", value)
      if (props?.onSubmit) {
        props.onSubmit(value as unknown as FormEvent<HTMLFormElement>);
      }
    }
  })

  // const formErrorMap = useStore(form.store, (state) => state.errorMap)


  return (
    <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={(e) => {
      e.preventDefault();
      form.handleSubmit();
    }}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <form.AppField
            name="email"
            children={(field) => (
              <>
                <Label htmlFor={field.name}>Email</Label>
                <field.Input id={field.name} name={field.name} value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} type="email" placeholder="m@example.com" required />
                <FieldInfo field={field} />
                {/* {
                  field.state.meta.errors
                    // ? <em role="alert">{field.state.meta.errors.join(', ')}</em>
                    ? <em role="alert">{JSON.stringify(field.state.meta.errors, null, 2)}</em>
                    : null
                } */}
              </>
            )}
          />
          {/* <form.Subscribe
            selector={(state) => [state.errorMap]}
            children={([errorMap]) =>
              errorMap?.onSubmit ? (
                <div>
                  <em>There was an error on the form: {errorMap.onSubmit}</em>
                </div>
              ) : null
            }
          /> */}
        </div>
        <div className="grid gap-3">

          <form.AppField
            name="password"
            children={(field) => (
              <>
                <div className="flex items-center">
                  <Label htmlFor={field.name}>Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <field.Input id={field.name} name={field.name} value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} type="password" required />
                <FieldInfo field={field} />
              </>
            )}
          />
        </div>
        <form.AppForm>
          <form.Button type="submit" className="w-full cursor-pointer">
            Login
          </form.Button>
        </form.AppForm>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
        <Button type="button" variant="outline" className="w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              fill="currentColor"
            />
          </svg>
          Login with GitHub
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  )
}
