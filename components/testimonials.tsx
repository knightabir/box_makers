"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Elegant Jewelry Co.",
    role: "CEO",
    content:
      "BoxCraft Pro transformed our jewelry presentation. Their custom boxes elevated our brand image and our customers love the unboxing experience. Quality is consistently excellent.",
    rating: 5,
    avatar: "/professional-woman-headshot.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "TechStart Solutions",
    role: "Operations Manager",
    content:
      "We needed reliable shipping boxes for our electronics. BoxCraft Pro delivered exactly what we needed - protective, branded, and cost-effective. Highly recommend their services.",
    rating: 5,
    avatar: "/professional-man-headshot.png",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "Gourmet Delights",
    role: "Founder",
    content:
      "Their food packaging solutions helped us expand our delivery service. The boxes keep our products fresh and look professional. Customer service is outstanding.",
    rating: 5,
    avatar: "/professional-woman-chef-headshot.png",
  },
  {
    id: 4,
    name: "David Thompson",
    company: "Luxury Cosmetics",
    role: "Brand Manager",
    content:
      "The attention to detail in their cosmetic packaging is remarkable. Our products now have the premium presentation they deserve. Sales have increased significantly.",
    rating: 5,
    avatar: "/professional-man-business-headshot.jpg",
  },
]

const clientLogos = [
  { name: "TechCorp", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5fBiKpo0EzXc9djIA-ZNV3QiuVs8liKr13g&s" },
  { name: "Jewelry Plus", logo: "https://res.cloudinary.com/vistaprint/images/c_scale,w_448,h_448,dpr_2/f_auto,q_auto/v1706191816/ideas-and-advice-prod/blogadmin/Screenshot-2024-01-25-at-15.09.28/Screenshot-2024-01-25-at-15.09.28.png?_i=AA" },
  { name: "Food Express", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Beauty Brand", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Retail Pro", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Ship Fast", logo: "/placeholder.svg?height=40&width=120" },
]

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Carousel */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mb-12">
            Trusted by leading businesses across industries for our quality and reliability
          </p>

          <div className="relative max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <Quote className="h-8 w-8 text-primary mx-auto mb-6" />
                <div className="relative h-48 flex items-center">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentTestimonial ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <blockquote className="text-lg md:text-xl text-foreground mb-6 text-pretty">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="flex items-center justify-center gap-4">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="text-left">
                          <div className="font-semibold text-foreground">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </div>
                          <div className="flex items-center mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-4 top-1/2 -translate-y-1/2"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 -translate-y-1/2"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-primary" : "bg-muted"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Client Logos */}
        {/* <div className="border-t border-border pt-12">
          <h3 className="text-center text-lg font-semibold text-foreground mb-8">Trusted by Leading Brands</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="h-8 object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
