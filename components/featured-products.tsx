import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { products } from "@/data"
import Link from "next/link"

type Product = {
  id: number
  name: string
  category: string
  material: string
  size: string
  price: number
  images: string[]
  features: string[]
  badge?: string
  inStock: boolean
  description: string
  specifications?: Record<string, string>
  customization?: string[]
  applications?: string[]
  minimumOrder?: number
  leadTime?: string
  featured?: boolean
}

const featuredProducts: Product[] = Array.isArray(products)
  ? products.filter((product: any) => product && product.featured === true)
  : []

export function FeaturedProducts() {
  let safeProducts: Product[] = []
  try {
    safeProducts = featuredProducts
  } catch (error) {
    // Optionally log error
    safeProducts = []
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our most popular packaging solutions trusted by businesses worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {safeProducts.length > 0 ? (
            safeProducts.map((product) => {
              try {
                return (
                  <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={product.images?.[0] || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.badge && (
                        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">{product.badge}</Badge>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-2">
                        <span className="text-sm text-muted-foreground">{product.category}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{product.name}</h3>
                      <div className="text-lg font-bold text-primary mb-3">{product.price}</div>
                      <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                        {Array.isArray(product.features) &&
                          product.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                              {feature}
                            </li>
                          ))}
                      </ul>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Request Quote</Button>
                    </CardContent>
                  </Card>
                )
              } catch (err) {
                // Optionally log error for this product
                return null
              }
            })
          ) : (
            <div className="col-span-full text-center text-muted-foreground">No featured products available.</div>
          )}
        </div>

        <div className="text-center">
          <Link href="/products">
            <Button className="mt-2" variant="default">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
