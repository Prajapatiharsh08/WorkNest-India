import Image from "next/image"
import image2 from '../public/image2.png'

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">About Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 max-w-7xl mx-auto">
          <div className="relative slide-in-left">
            <div className="relative rounded-2xl overflow- shadow-xl">
              <Image
                src={image2}
                alt="Team collaboration"
                width={600}
                height={400}
                className="w-full rounded h-auto"
              />
              <div className="absolute -bottom-6 right-6 md:-right-6 bg-primary text-white px-6 py-3 rounded-lg shadow-lg">
                <p className="font-semibold">Established</p>
                <p className="text-2xl font-bold">February 2025</p>
              </div>
            </div>
          </div>

          <div className="space-y-8 slide-in-right">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Who We Are</h3>
              <p className="text-muted-foreground leading-relaxed">
                Worknest India, registered in February 2025, is an official partner of Gromo. We operate via our
                platform IndiaSales.club, aiming to create earning opportunities by connecting people to high-demand
                BFSI (Banking, Financial Services, and Insurance) products.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Whether you're a homemaker, student, or aspiring entrepreneur, we help you become a financial advisor
                with zero investment and access to premium BFSI services from top Indian banks and financial
                institutions.
              </p>
            </div>

            <div className="bg-accent p-6 rounded-xl border-l-4 border-primary">
              <h3 className="text-2xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground italic leading-relaxed">
                To empower India's workforce by creating a trusted ecosystem of micro-entrepreneurs in banking,
                financial services, and insurance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
