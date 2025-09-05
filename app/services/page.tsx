import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { InquiryModal } from "@/components/inquiry-modal"
import {
  Palette,
  Package,
  Zap,
  Shield,
  MessageSquare,
  Truck,
  Settings,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

export const metadata = {
  title: "Services | BoxCraft Pro - Comprehensive Packaging Solutions",
  description:
    "Explore BoxCraft Pro's full range of packaging services including custom design, prototyping, bulk manufacturing, quality assurance, and rush orders.",
}

const services = [
  {
    icon: Palette,
    title: "Custom Design Services",
    description: "Transform your vision into reality with our expert design team",
    features: [
      "3D concept visualization",
      "Brand integration and logo placement",
      "Material and color consultation",
      "Structural design optimization",
      "Prototype development",
      "Design revision iterations",
    ],
    process: "Consultation → Concept → 3D Design → Approval → Production",
    timeline: "3-5 business days",
    badge: "Most Popular",
  },
  {
    icon: Package,
    title: "Prototyping & Sampling",
    description: "Test and refine your packaging before full production",
    features: [
      "Physical prototype creation",
      "Material testing and validation",
      "Fit and function testing",
      "Color matching and approval",
      "Structural integrity testing",
      "Client feedback incorporation",
    ],
    process: "Design → Prototype → Testing → Refinement → Approval",
    timeline: "5-7 business days",
    badge: "Quality Assured",
  },
  {
    icon: Settings,
    title: "Bulk Manufacturing",
    description: "Scalable production solutions for orders of any size",
    features: [
      "High-volume production capabilities",
      "Consistent quality at scale",
      "Flexible order quantities",
      "Just-in-time delivery options",
      "Inventory management support",
      "Cost optimization strategies",
    ],
    process: "Order → Production Planning → Manufacturing → Quality Control → Delivery",
    timeline: "7-14 business days",
    badge: "Scalable",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous testing and inspection processes",
    features: [
      "Multi-point quality inspections",
      "Material compliance testing",
      "Dimensional accuracy verification",
      "Print quality assessment",
      "Durability and stress testing",
      "Final packaging inspection",
    ],
    process: "Incoming → In-Process → Pre-Delivery → Final Inspection",
    timeline: "Integrated with production",
    badge: "Certified",
  },
  {
    icon: Zap,
    title: "Rush Order Services",
    description: "Expedited production for urgent requirements",
    features: [
      "Priority production scheduling",
      "Dedicated rush order team",
      "Expedited shipping options",
      "Real-time progress updates",
      "24/7 project monitoring",
      "Emergency support availability",
    ],
    process: "Urgent Request → Fast-Track → Priority Production → Express Delivery",
    timeline: "2-5 business days",
    badge: "Express",
  },
  {
    icon: MessageSquare,
    title: "Packaging Consultation",
    description: "Expert guidance for optimal packaging solutions",
    features: [
      "Packaging strategy development",
      "Cost optimization analysis",
      "Sustainability recommendations",
      "Regulatory compliance guidance",
      "Market trend insights",
      "Long-term partnership planning",
    ],
    process: "Assessment → Strategy → Recommendations → Implementation → Review",
    timeline: "Ongoing support",
    badge: "Expert Advice",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "We discuss your requirements, timeline, and budget to understand your packaging needs",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Design & Development",
    description: "Our team creates custom designs and prototypes based on your specifications",
    icon: Palette,
  },
  {
    step: "03",
    title: "Approval & Refinement",
    description: "Review prototypes, provide feedback, and finalize designs before production",
    icon: CheckCircle,
  },
  {
    step: "04",
    title: "Production & Quality Control",
    description: "Manufacturing begins with continuous quality monitoring throughout the process",
    icon: Settings,
  },
  {
    step: "05",
    title: "Delivery & Support",
    description: "Timely delivery with ongoing support for future packaging needs",
    icon: Truck,
  },
]

const industries = [
  { name: "Jewelry & Luxury Goods", projects: "2,500+" },
  { name: "Electronics & Technology", projects: "1,800+" },
  { name: "Food & Beverage", projects: "2,200+" },
  { name: "Cosmetics & Beauty", projects: "1,600+" },
  { name: "Retail & E-commerce", projects: "3,000+" },
  { name: "Healthcare & Pharmaceuticals", projects: "800+" },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Comprehensive Packaging Solutions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
            From initial concept to final delivery, we provide end-to-end packaging services that bring your vision to
            life while exceeding quality expectations and meeting tight deadlines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <InquiryModal>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Your Project
              </Button>
            </InquiryModal>
            <Button size="lg" variant="outline">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete packaging solutions tailored to your specific needs and industry requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <service.icon className="h-10 w-10 text-primary" />
                    {service.badge && <Badge className="bg-primary text-primary-foreground">{service.badge}</Badge>}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 text-pretty">{service.description}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-3 pt-4 border-t border-border">
                      <div>
                        <span className="text-sm font-medium text-foreground">Process: </span>
                        <span className="text-sm text-muted-foreground">{service.process}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-foreground">Timeline: </span>
                        <span className="text-sm text-muted-foreground">{service.timeline}</span>
                      </div>
                    </div>
                  </div>

                  <InquiryModal defaultCategory={service.title}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </InquiryModal>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach that ensures quality results and on-time delivery
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2"></div>
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <div className="relative z-10 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                        {step.step}
                      </div>
                      <step.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground text-pretty">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading companies across diverse industries for their packaging needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-2">{industry.name}</h3>
                  <div className="text-2xl font-bold text-primary mb-1">{industry.projects}</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
            Let's discuss your packaging needs and create a solution that exceeds your expectations. Our team is ready
            to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <InquiryModal>
              <Button size="lg" variant="secondary">
                Get Started Today
              </Button>
            </InquiryModal>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Users className="h-4 w-4 mr-2" />
              Speak with Expert
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
