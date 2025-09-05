import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { InquiryModal } from "@/components/inquiry-modal"
import {
  Factory,
  Award,
  Users,
  Globe,
  Shield,
  Recycle,
  Clock,
  Target,
  Heart,
  Lightbulb,
  CheckCircle,
} from "lucide-react"

export const metadata = {
  title: "About Us | BoxCraft Pro - 25+ Years of Packaging Excellence",
  description:
    "Learn about BoxCraft Pro's 25+ year history of manufacturing premium packaging solutions. Discover our mission, values, and commitment to quality.",
}

const milestones = [
  {
    year: "1998",
    title: "Company Founded",
    description: "Started as a small family business with a focus on custom jewelry boxes",
  },
  {
    year: "2003",
    title: "First Major Contract",
    description: "Secured partnership with leading jewelry retailer, expanding operations",
  },
  {
    year: "2008",
    title: "ISO Certification",
    description: "Achieved ISO 9001:2008 certification for quality management systems",
  },
  {
    year: "2012",
    title: "Facility Expansion",
    description: "Doubled manufacturing capacity with new 50,000 sq ft facility",
  },
  {
    year: "2016",
    title: "Sustainability Initiative",
    description: "Launched eco-friendly packaging line and sustainable practices program",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Implemented advanced automation and digital design capabilities",
  },
  {
    year: "2024",
    title: "Industry Leadership",
    description: "Recognized as leading packaging manufacturer with 10,000+ completed projects",
  },
]

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description: "Every product meets our rigorous quality standards before leaving our facility",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "Your success is our success. We build lasting partnerships with every client",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously improving our processes and developing new packaging solutions",
  },
  {
    icon: Recycle,
    title: "Sustainability",
    description: "Committed to environmentally responsible manufacturing and materials",
  },
]

const certifications = [
  { name: "ISO 9001:2015", description: "Quality Management Systems" },
  { name: "FSC Certified", description: "Forest Stewardship Council" },
  { name: "FDA Approved", description: "Food Contact Materials" },
  { name: "CPSIA Compliant", description: "Consumer Product Safety" },
  { name: "SQF Certified", description: "Safe Quality Food" },
  { name: "BRC Packaging", description: "Global Standard for Packaging" },
]

const teamMembers = [
  {
    name: "Michael Johnson",
    role: "CEO & Founder",
    experience: "25+ years",
    image: "/professional-man-business-headshot.jpg",
    description: "Visionary leader with deep expertise in packaging manufacturing and business development",
  },
  {
    name: "Sarah Chen",
    role: "Head of Design",
    experience: "15+ years",
    image: "/professional-woman-headshot.png",
    description: "Creative director specializing in custom packaging design and brand development",
  },
  {
    name: "David Rodriguez",
    role: "Operations Manager",
    experience: "20+ years",
    image: "/professional-man-headshot.png",
    description: "Manufacturing expert ensuring quality and efficiency in all production processes",
  },
  {
    name: "Emily Thompson",
    role: "Quality Assurance Director",
    experience: "12+ years",
    image: "/professional-woman-chef-headshot.png",
    description: "Quality control specialist maintaining our high standards and certifications",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">25+ Years of Packaging Excellence</h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                From humble beginnings to industry leadership, BoxCraft Pro has been the trusted partner for businesses
                seeking premium packaging solutions that protect, present, and promote their products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <InquiryModal>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Start Your Project
                  </Button>
                </InquiryModal>
                <Button size="lg" variant="outline">
                  View Our Facility
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/modern-box-manufacturing-facility-with-workers-and.jpg"
                alt="BoxCraft Pro Manufacturing Facility"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-lg">
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Mission & Vision</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-pretty">
                  To deliver exceptional packaging solutions that exceed our clients' expectations while maintaining the
                  highest standards of quality, sustainability, and customer service. We believe great packaging tells a
                  story and creates lasting impressions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-pretty">
                  To be the global leader in innovative packaging solutions, setting industry standards for quality,
                  sustainability, and customer satisfaction. We envision a future where every package we create
                  contributes to our clients' success and environmental responsibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every product we create
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <value.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones that shaped BoxCraft Pro into the industry leader we are today
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card>
                      <CardContent className="p-6">
                        <Badge className="mb-2 bg-primary text-primary-foreground">{milestone.year}</Badge>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals driving our success and innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-1">{member.role}</p>
                  <p className="text-xs text-muted-foreground mb-3">{member.experience}</p>
                  <p className="text-sm text-muted-foreground text-pretty">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Quality */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Quality Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality is validated by industry-leading certifications and standards
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex items-center gap-4">
                  <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">State-of-the-Art Manufacturing</h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Our 75,000 square foot facility houses the latest in packaging manufacturing technology, enabling us to
                produce high-quality boxes at scale while maintaining precision and consistency.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <Factory className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">75,000</div>
                  <div className="text-sm text-muted-foreground">Sq Ft Facility</div>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">150+</div>
                  <div className="text-sm text-muted-foreground">Skilled Employees</div>
                </div>
                <div className="text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground">Production Capacity</div>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">99.8%</div>
                  <div className="text-sm text-muted-foreground">Quality Rate</div>
                </div>
              </div>
              <InquiryModal>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Schedule Facility Tour
                </Button>
              </InquiryModal>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/placeholder.svg?height=250&width=250"
                alt="Manufacturing Equipment"
                className="rounded-lg shadow-md"
              />
              <img src="/placeholder.svg?height=250&width=250" alt="Quality Control" className="rounded-lg shadow-md" />
              <img src="/placeholder.svg?height=250&width=250" alt="Production Line" className="rounded-lg shadow-md" />
              <img
                src="/placeholder.svg?height=250&width=250"
                alt="Finished Products"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
