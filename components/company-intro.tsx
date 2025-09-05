import { Card, CardContent } from "@/components/ui/card"
import { Package, Shield, Clock, Award, Users, Factory } from "lucide-react"

const stats = [
  { icon: Factory, label: "Years Experience", value: "25+" },
  { icon: Package, label: "Projects Completed", value: "10,000+" },
  { icon: Users, label: "Satisfied Customers", value: "2,500+" },
  { icon: Award, label: "Quality Certifications", value: "15+" },
]

const features = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "ISO certified manufacturing processes ensure consistent quality in every box we produce.",
  },
  {
    icon: Package,
    title: "Custom Design",
    description: "Tailored packaging solutions designed to meet your specific requirements and branding needs.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising on quality. Rush orders available.",
  },
  {
    icon: Award,
    title: "Industry Leader",
    description: "Trusted by leading brands across jewelry, electronics, food, and retail industries.",
  },
]

export function CompanyIntro() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Leading Box Manufacturing Excellence</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            For over 25 years, we've been the trusted partner for businesses seeking premium packaging solutions. From
            custom jewelry boxes to industrial packaging, we combine traditional craftsmanship with modern technology to
            deliver exceptional results.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
