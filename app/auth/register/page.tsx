"use client"


import Image from "next/image"
import Link from "next/link"
import { z } from 'zod'
import LogoSVG from "@/components/svgs/logo"
import { RegistrationForm } from "@/components/features/auth/registration-form"
import { useAppForm } from '@/hooks/use-form'
import { signUp } from "@/lib/auth-client"
import BookingAppImg from "@/public/images/booking-app-2.jpg"

export default function RegisterPage() {
  const form = useAppForm({
    defaultValues: {
      email: '',
      password: '',
      confirm_password: '',
    },
    onSubmit: async ({ value }) => {
      console.log("onSubmit Value: ", value);
      // alert(JSON.stringify(value, null, 2));
      const { data, error } = await signUp.email({
        email: value?.email,
        password: value?.password,
        name: "",
        callbackURL: "/dashboard",
      }, {
        onRequest: (ctx) => {
          //show loading
          console.log("Loading...");
        },
        onSuccess: (ctx) => {
          //redirect to the dashboard or sign in page
          console.log("Registration success ctx", ctx);
        },
        onError: (ctx) => {
          // display the error message
          console.error(ctx.error.message);
        },
      })

      // console.debug(data);
      // console.error(error);
    },
    validators: {
      // onChange: (value) => {
      //   console.log("onChange value: ", value);
      // }
      onChange: z.object({
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string().min(6),
        confirm_password: z.string().min(6),
      })
    }
  })

  // const form = useForm({
  //   defaultValues: {
  //     email: '',
  //     password: '',
  //   },
  //   onSubmit: async ({ value }) => {
  //     // Do something with form data
  //     console.log(value)

  //     // const response = await auth.api.signInEmail({
  //     //   body: {
  //     //     value.email,
  //     //     value.password
  //     //   },
  //     //   asResponse: true // returns a response object instead of data
  //     // });
    
  //   },
  // })
  // const [data, setData] = useState();

  // const login = useCallback((e) => {

  // }, data)




  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="flex size-6 items-center justify-center rounded-md">
              {/* <GalleryVerticalEnd className="size-4" /> */}
              {/* <LogoIcon className="size-4" /> */}
              <LogoSVG className="size-6" />
            </div>
            <p>
              Halaman <span className="font-normal">App</span>
            </p>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <RegistrationForm form={form} title="Test Form" />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        {/* <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        /> */}
        <Image
          src={BookingAppImg}
          alt="Booking app"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
