"use client"

import { motion } from "framer-motion"

import { MoveRight, PhoneCall, Shield, Star } from "lucide-react"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const Hero5 = () => {
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(() => ["klinik gigi", "salon", "rumah sakit", "beautiful", "smart"], [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0)
      } else {
        setTitleNumber(titleNumber + 1)
      }
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-40">
          <div>
            {/* <Button variant="secondary" size="sm" className="gap-4">
              Read our launch article <MoveRight className="h-4 w-4" />
            </Button> */}
            <Badge variant="secondary" className="px-4 py-1 text-sm">
              <Star className="mr-1 h-3 w-3" /> Launching Soon in Indonesia
            </Badge>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-regular max-w-2xl text-center text-5xl tracking-tighter md:text-7xl">
              <span className="text-spektr-cyan-50">Simplify Appointment Scheduling for Your</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pt-1 md:pb-4">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-muted-foreground max-w-2xl text-center text-lg leading-relaxed tracking-tight md:text-xl">
              Managing a small business today is already tough. Avoid further complications by ditching outdated,
              tedious trade methods. Streamline your booking process, integrate with local payment gateways, and gain
              valuable insights about your customers and services.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4" variant="outline">
              Jump on a call <PhoneCall className="h-4 w-4" />
            </Button>
            <Button size="lg" className="gap-4" asChild>
              <Link href="/dashboard">
                  Sign up here <MoveRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="text-muted-foreground mt-4 flex items-center justify-center gap-2 text-sm">
            <Shield className="h-4 w-4" /> No credit card required
          </div>
        </div>
      </div>
    </div>
  )
}
