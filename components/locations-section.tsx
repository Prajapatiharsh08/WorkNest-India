import { MapPin } from "lucide-react"

const locations = [
  "Gujarat",
  "Madhya Pradesh",
  "Rajasthan",
  "Maharashtra",
  "Hyderabad",
  "Noida",
  "Punjab",
  "Bihar",
  "Kolkata",
]

export function LocationsSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Where We Operate</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Our services are available across major states and cities in India
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 scale-in border border-border"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-lg font-semibold text-foreground">{location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
