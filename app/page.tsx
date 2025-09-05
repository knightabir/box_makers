import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { CompanyIntro } from "@/components/company-intro"
import { ProductCategories } from "@/components/product-categories"
import { FeaturedProducts } from "@/components/featured-products"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CompanyIntro />
      <ProductCategories />
      <FeaturedProducts />
      <Testimonials />
      <Footer />
    </main>
  )
}
