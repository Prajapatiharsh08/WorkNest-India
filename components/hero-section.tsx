"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import Image from "next/image"
import image1 from '../public/image1.png'

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen pt-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/80"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-10 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">🚀 Start Earning Today</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Empower Your{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Earning Journey
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Join Globuz India — Business Solutions, your trusted partner in distributing banking, finance, and
                insurance products from India's top financial institutions. Partnered with Gromo and live on
                IndiaSales.club, we help you start earning with zero investment and full support.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("partner")}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg group"
              >
                Join Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("about")}
                className="px-8 py-6 text-lg rounded-lg border-2"
              >
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-foreground">Earn with India's top banks</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-foreground">Work from anywhere</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-foreground">No joining fee</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-foreground">Trusted by thousands</span>
              </div>
            </div>
          </div>

          <div className="relative scale-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-20"></div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={image1}
                alt="Financial workspace"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
