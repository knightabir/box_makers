import { ContactForm } from "@/components/contact-form"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "Contact Us | BoxCraft Pro - Get in Touch",
  description:
    "Contact BoxCraft Pro for custom packaging solutions. Get quotes, ask questions, or schedule a consultation with our packaging experts.",
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 123-4568 (Sales)"],
    description: "Call us for immediate assistance",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@boxcraftpro.com", "sales@boxcraftpro.com"],
    description: "Send us your inquiries anytime",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Manufacturing Street", "Industrial Park, NY 10001"],
    description: "Visit our facility and showroom",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
    description: "Eastern Standard Time",
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ready to discuss your packaging needs? Our team of experts is here to help you find the perfect solution for
            your business.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <info.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  <div className="space-y-1 mb-2">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours. For urgent inquiries, please call
                  us directly.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Visit Our Facility</h3>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">123 Manufacturing Street, Industrial Park, NY 10001</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Schedule a visit to see our manufacturing process and discuss your packaging needs in person.
                </p>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Quick Response Guarantee</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        We respond to all inquiries within 24 hours during business days. For urgent requests, please
                        call us directly.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Email inquiries: Within 24 hours</li>
                        <li>• Phone calls: Immediate assistance</li>
                        <li>• Quote requests: Within 48 hours</li>
                        <li>• Custom projects: Within 72 hours</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Full Width at Bottom */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-6 w-full">
              <h4 className="font-semibold text-foreground mb-3">Frequently Asked Questions</h4>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="faq-1">
                  <AccordionTrigger className="text-left text-sm font-medium text-foreground">
                    What's your minimum order quantity?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    Minimum orders vary by product, typically starting at 50-100 units.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-2">
                  <AccordionTrigger className="text-left text-sm font-medium text-foreground">
                    Do you offer rush orders?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    Yes, rush orders are available with additional fees and subject to capacity.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-3">
                  <AccordionTrigger className="text-left text-sm font-medium text-foreground">
                    Can you create custom designs?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    Our design team specializes in custom packaging solutions.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
