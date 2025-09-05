"use client"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Grid, List, Search, Filter, SlidersHorizontal, X } from "lucide-react"
import Link from "next/link"
import * as React from "react"

const categories = [
  "All",
  "Jewelry Boxes",
  "Shipping Boxes",
  "Gift Boxes",
  "Food Packaging",
  "Cosmetic Boxes",
  "Electronic Packaging",
  "Retail Boxes",
]
const materials = ["All", "Velvet", "Corrugated", "Cardboard", "Paper", "Foam", "Wood"]
const sizes = ["All", "Small", "Medium", "Large"]

// Define the Product type
type Product = {
  id: string | number
  name: string
  category: string
  material: string
  size: string
  price: number
  inStock: boolean
  images: string[]
  badge?: string
  features: string[]
}

type ProductCatalogProps = {
  products: Product[]
}

// Drawer component for mobile filter sidebar
function Drawer({
  open,
  onClose,
  children,
}: {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      {/* Drawer */}
      <aside
        className={`absolute left-0 top-0 h-full w-72 bg-background shadow-lg transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <span className="font-semibold text-lg">Filters</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close filters"
            className="rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="overflow-y-auto h-[calc(100%-56px)]">{children}</div>
      </aside>
    </div>
  )
}

export function ProductCatalog({ products }: ProductCatalogProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [selectedMaterial, setSelectedMaterial] = useState<string>("All")
  const [selectedSize, setSelectedSize] = useState<string>("All")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50])
  const [sortBy, setSortBy] = useState<string>("name")
  const [showFilters, setShowFilters] = useState<boolean>(false)
  const [showInStockOnly, setShowInStockOnly] = useState<boolean>(false)

  // TypeScript: fix for Checkbox onCheckedChange
  const handleInStockChange = (checked: boolean | "indeterminate") => {
    setShowInStockOnly(checked === true)
  }

  // TypeScript: fix for product image
  const getProductImage = (product: Product) => {
    if (Array.isArray(product.images) && product.images.length > 0) {
      return product.images[0]
    }
    return "/placeholder.svg"
  }

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
      const matchesMaterial = selectedMaterial === "All" || product.material === selectedMaterial
      const matchesSize = selectedSize === "All" || product.size === selectedSize
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      const matchesStock = !showInStockOnly || product.inStock

      return matchesSearch && matchesCategory && matchesMaterial && matchesSize && matchesPrice && matchesStock
    })

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "name":
          return a.name.localeCompare(b.name)
        case "category":
          return a.category.localeCompare(b.category)
        default:
          return 0
      }
    })

    return filtered
  }, [searchQuery, selectedCategory, selectedMaterial, selectedSize, priceRange, sortBy, showInStockOnly, products])

  // Filter sidebar content
  const filterSidebar = (
    <Card>
      <CardContent className="p-4 space-y-4">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </h3>

        {/* Category Filter */}
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Category</label>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Material Filter */}
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Material</label>
          <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {materials.map((material) => (
                <SelectItem key={material} value={material}>
                  {material}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Size Filter */}
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Size</label>
          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sizes.map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            Price Range: ${priceRange[0]} - ${priceRange[1]}
          </label>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={50}
            min={0}
            step={0.25}
            className="mt-2"
          />
        </div>

        {/* In Stock Only */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="inStock"
            checked={showInStockOnly}
            onCheckedChange={handleInStockChange}
          />
          <label htmlFor="inStock" className="text-sm text-foreground">
            In stock only
          </label>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      {/* Search and Controls */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Mobile filter button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(true)}
            className="lg:hidden"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name A-Z</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="category">Category</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex border rounded-md">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="rounded-r-none"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="rounded-l-none"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Filters Sidebar for desktop */}
        <div className="w-64 space-y-6 hidden lg:block">{filterSidebar}</div>

        {/* Drawer for mobile filters */}
        <Drawer open={showFilters} onClose={() => setShowFilters(false)}>
          {filterSidebar}
        </Drawer>

        {/* Products Grid/List */}
        <div className="flex-1">
          <div className="mb-4 text-sm text-muted-foreground">
            Showing {filteredProducts.length} of {products.length} products
          </div>

          {viewMode === "grid" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={getProductImage(product)}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && (
                      <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                        {product.badge}
                      </Badge>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge variant="destructive">Out of Stock</Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-2">
                      <span className="text-xs text-muted-foreground">{product.category}</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>
                    <div className="text-lg font-bold text-primary mb-2">Starting at ${product.price}</div>
                    <ul className="text-xs text-muted-foreground mb-4 space-y-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1 h-1 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2">
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <Link href={`/products/${product.id}`}>View Details</Link>
                      </Button>
                      <Button size="sm" variant="outline">
                        Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded">
                        <img
                          src={getProductImage(product)}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <Badge variant="destructive" className="text-xs">
                              Out of Stock
                            </Badge>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs text-muted-foreground">{product.category}</span>
                              {product.badge && (
                                <Badge className="bg-primary text-primary-foreground text-xs">{product.badge}</Badge>
                              )}
                            </div>
                            <h3 className="font-semibold text-foreground mb-1">{product.name}</h3>
                            <div className="text-sm text-muted-foreground mb-2">
                              {product.material} • {product.size}
                            </div>
                            <div className="flex flex-wrap gap-1 mb-2">
                              {product.features.map((feature, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-primary mb-2">Starting at ${product.price}</div>
                            <div className="flex gap-2">
                              <Button
                                asChild
                                size="sm"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                              >
                                <Link href={`/products/${product.id}`}>View Details</Link>
                              </Button>
                              <Button size="sm" variant="outline">
                                Quote
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4">No products found matching your criteria</div>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                  setSelectedMaterial("All")
                  setSelectedSize("All")
                  setPriceRange([0, 50])
                  setShowInStockOnly(false)
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
