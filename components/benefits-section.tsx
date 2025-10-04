import { Check, Building2, Zap, GraduationCap, Home, Users } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "No investment required",
    description:
      "Start your journey as an agent with zero investment. Get free tools, resources, and training to grow in the BFSI sector.",
  },
  {
    icon: Check,
    title: "Instant commissions",
    description: "Get paid quickly for every successful transaction, with transparent commission structures.",
  },
  {
    icon: Building2,
    title: "Products from top banks",
    description: "Offer reliable financial products from India's leading banks and financial institutions.",
  },
  {
    icon: GraduationCap,
    title: "Training and support provided",
    description: "Comprehensive training materials and ongoing support to help you succeed.",
  },
  {
    icon: Home,
    title: "Flexible work-from-home opportunity",
    description: "Work on your own schedule from anywhere, perfect for those seeking flexibility.",
  },
  {
    icon: Users,
    title: "Join our franchise network",
    description:
      "Start your journey as a successful franchise partner with us! We are offering franchise opportunities that empower you to thrive in the BFSI sector.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-26 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Join Worknest India?
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* 2x2 Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-accent p-6 rounded-xl hover:shadow-lg transition-all duration-300 scale-in border border-border"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
