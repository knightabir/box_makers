import { ProductCatalog } from "@/components/product-catalog"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { products } from "@/data"

export const metadata = {
  title: "All Products | BoxCraft Pro - Premium Packaging Solutions",
  description:
    "Browse our complete catalog of custom boxes, jewelry boxes, shipping containers, and packaging solutions. Filter by category, material, and size.",
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">All Products</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover our comprehensive range of packaging solutions designed for every industry and application
            </p>
          </div>
          <ProductCatalog products={products} />
        </div>
      </div>
      <Footer />
    </main>
  )
}
