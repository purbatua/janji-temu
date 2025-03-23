import { CalendarDays, Check, CreditCard, MoveRight, Shield, Star, Users } from "lucide-react"
import { Metadata } from "next"
import { Hero5 } from "@/components/blocks/hero/hero-5"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "BookingApp - Appointment Scheduling for Indonesian Businesses",
  description:
    "Streamline your appointment scheduling with our easy-to-use platform. Integrate with local payment gateways and gain valuable insights about your customers.",
  openGraph: {
    images: [
      {
        url: "/images/placeholder.svg",
        width: 1200,
        height: 630,
        alt: "BookingApp - Appointment Scheduling",
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero5 />

      {/* Features Section */}
      <section className="w-full py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Everything You Need to Manage Appointments</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Our platform provides all the tools you need to streamline your booking process and grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<CalendarDays className="h-10 w-10" />}
              title="Easy Scheduling"
              description="Allow clients to book appointments 24/7 through your personalized booking page."
            />
            <FeatureCard
              icon={<CreditCard className="h-10 w-10" />}
              title="Local Payment Integration"
              description="Seamlessly connect with Indonesian payment gateways for hassle-free transactions."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10" />}
              title="Customer Management"
              description="Keep track of client information, preferences, and booking history in one place."
            />
            <FeatureCard
              icon={<Star className="h-10 w-10" />}
              title="Service Analytics"
              description="Gain insights into your most popular services and peak booking times."
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10" />}
              title="Automated Reminders"
              description="Reduce no-shows with automated SMS and email reminders to clients."
            />
            <FeatureCard
              icon={<Check className="h-10 w-10" />}
              title="Business Hours"
              description="Set your availability and let clients book only during your business hours."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-primary/5 w-full py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Choose the plan that works best for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <PricingCard
              title="Starter"
              price="Rp 99K"
              description="Perfect for individuals and small businesses just getting started."
              features={["Up to 50 appointments/month", "Email reminders", "Basic analytics", "1 staff account"]}
              buttonText="Start Free Trial"
              popular={false}
            />
            <PricingCard
              title="Professional"
              price="Rp 299K"
              description="Ideal for growing businesses with multiple staff members."
              features={[
                "Unlimited appointments",
                "Email & SMS reminders",
                "Advanced analytics",
                "5 staff accounts",
                "Payment integration",
              ]}
              buttonText="Start Free Trial"
              popular={true}
            />
            <PricingCard
              title="Enterprise"
              price="Rp 599K"
              description="For established businesses requiring advanced features."
              features={[
                "Unlimited everything",
                "Priority support",
                "Custom branding",
                "Unlimited staff accounts",
                "API access",
              ]}
              buttonText="Contact Sales"
              popular={false}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12 lg:p-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Transform Your Booking Experience?</h2>
              <p className="mb-8 text-lg opacity-90">
                Join thousands of Indonesian businesses already using our platform to streamline their appointment
                scheduling.
              </p>
              <Button size="lg" variant="secondary" className="gap-2">
                Get Started Today <MoveRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-background rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  buttonText: string
  popular?: boolean
}

function PricingCard({ title, price, description, features, buttonText, popular = false }: PricingCardProps) {
  return (
    <div
      className={`relative rounded-lg border ${
        popular ? "border-primary ring-primary ring-2" : ""
      } bg-background p-6 shadow-sm`}
    >
      {popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>}
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-muted-foreground"> /month</span>
      </div>
      <p className="text-muted-foreground mb-6">{description}</p>
      <Button className="mb-6 w-full" variant={popular ? "default" : "outline"}>
        {buttonText}
      </Button>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="text-primary h-4 w-4" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
