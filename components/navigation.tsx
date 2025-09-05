"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Package, Search } from "lucide-react"
import { InquiryModal } from "@/components/inquiry-modal"
import Link from "next/link"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Package className="h-8 w-8 text-primary" />
            <Link href="/"><span className="text-xl font-bold text-foreground">BoxCraft Pro</span></Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-foreground hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/categories" className="text-foreground hover:text-primary transition-colors">
              Categories
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Search and CTA */}
          <div className="hidden md:flex items-center space-x-4">

            <InquiryModal>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Quote</Button>
            </InquiryModal>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <Link href="/" className="block px-3 py-2 text-foreground hover:text-primary">
                Home
              </Link>
              <Link href="/products" className="block px-3 py-2 text-foreground hover:text-primary">
                Products
              </Link>
              <Link href="/categories" className="block px-3 py-2 text-foreground hover:text-primary">
                Categories
              </Link>
              <Link href="/about" className="block px-3 py-2 text-foreground hover:text-primary">
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-foreground hover:text-primary">
                Contact
              </Link>
              <div className="px-3 py-2">
                <InquiryModal>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Get Quote</Button>
                </InquiryModal>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
