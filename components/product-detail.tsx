"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, ChevronRight, Share2, Heart, ShoppingCart, Package, Truck, Shield, Clock } from "lucide-react"
import Link from "next/link"

interface Product {
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
  specifications: Record<string, string>
  customization: string[]
  applications: string[]
  minimumOrder: number
  leadTime: string
}

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(product.minimumOrder)
  const [selectedColor, setSelectedColor] = useState("")
  const [customRequirements, setCustomRequirements] = useState("")

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/products" className="hover:text-primary">
                Products
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href={`/categories/${product.category.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-primary"
              >
                {product.category}
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground">{product.name}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
              <img
                src={product.images[currentImageIndex] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
              {product.badge && (
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{product.badge}</Badge>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                      index === currentImageIndex ? "border-primary" : "border-transparent"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-muted-foreground">{product.category}</span>
                {product.badge && <Badge className="bg-primary text-primary-foreground">{product.badge}</Badge>}
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">{product.name}</h1>
              <p className="text-muted-foreground text-pretty">{product.description}</p>
            </div>

            {/* Pricing */}
            <div className="border-t border-b border-border py-4">
              <div className="text-3xl font-bold text-primary mb-2">Starting at ${product.price}</div>
              <div className="text-sm text-muted-foreground">
                Minimum order: {product.minimumOrder} units • Lead time: {product.leadTime}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Key Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Quote Form */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Request Quote</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="quantity">Quantity</Label>
                      <Input
                        id="quantity"
                        type="number"
                        min={product.minimumOrder}
                        value={quantity}
                        onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="color">Color Preference</Label>
                      <Select value={selectedColor} onValueChange={setSelectedColor}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select color" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="black">Black</SelectItem>
                          <SelectItem value="navy">Navy</SelectItem>
                          <SelectItem value="burgundy">Burgundy</SelectItem>
                          <SelectItem value="cream">Cream</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="requirements">Custom Requirements</Label>
                    <Textarea
                      id="requirements"
                      placeholder="Describe any custom requirements..."
                      value={customRequirements}
                      onChange={(e) => setCustomRequirements(e.target.value)}
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Request Quote
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span>Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Truck className="h-4 w-4 text-primary" />
                <span>Fast Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Package className="h-4 w-4 text-primary" />
                <span>Custom Design</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span>Quick Turnaround</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="customization">Customization</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>

            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Product Specifications</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-border">
                        <span className="font-medium text-foreground">{key}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="customization" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Customization Options</h3>
                  <ul className="space-y-3">
                    {product.customization.map((option, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2" />
                        <span className="text-muted-foreground">{option}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Need something specific? Our design team can work with you to create custom solutions that meet
                      your exact requirements.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="applications" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Ideal Applications</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.applications.map((application, index) => (
                      <div key={index} className="flex items-center p-3 bg-muted/30 rounded-lg">
                        <Package className="h-5 w-5 text-primary mr-3" />
                        <span className="text-foreground">{application}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="shipping" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Shipping Information</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="font-medium text-foreground">Lead Time:</span>
                      <span className="text-muted-foreground">{product.leadTime}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="font-medium text-foreground">Minimum Order:</span>
                      <span className="text-muted-foreground">{product.minimumOrder} units</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="font-medium text-foreground">Shipping Method:</span>
                      <span className="text-muted-foreground">Ground, Express, Freight</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="font-medium text-foreground">Rush Orders:</span>
                      <span className="text-muted-foreground">Available (additional fees apply)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
