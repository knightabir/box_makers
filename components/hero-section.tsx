"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { InquiryModal } from "@/components/inquiry-modal"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroSlides = [
  {
    image: "/modern-box-manufacturing-facility-with-workers-and.jpg",
    title: "Premium Custom Packaging Solutions",
    subtitle: "Leading manufacturer of high-quality boxes and packaging for every industry",
    cta: "Get Custom Quote",
  },
  {
    image: "/elegant-jewelry-boxes-display-with-luxury-packagin.jpg",
    title: "Exquisite Jewelry Box Collection",
    subtitle: "Handcrafted jewelry boxes that showcase your precious items with elegance",
    cta: "Browse Jewelry Boxes",
  },
  {
    image: "/industrial-packaging-boxes-warehouse-with-shipping.jpg",
    title: "Industrial Packaging Excellence",
    subtitle: "Durable, reliable packaging solutions for shipping and storage needs",
    cta: "View Industrial Solutions",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Hero Carousel */}
      <div className="relative h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">{slide.title}</h1>
                  <p className="text-xl md:text-2xl mb-8 text-pretty opacity-90">{slide.subtitle}</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <InquiryModal>
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        {slide.cta}
                      </Button>
                    </InquiryModal>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-foreground bg-transparent"
                    >
                      Browse Products
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
