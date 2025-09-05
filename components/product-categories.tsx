import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, Gem, Gift, Truck, UtensilsCrossed, Sparkles, Zap, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { categories } from "@/data"



export function ProductCategories() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Product Categories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover our comprehensive range of packaging solutions designed for every industry and application
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <category.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4 text-pretty">{category.description}</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href={category.href}>View Products</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
