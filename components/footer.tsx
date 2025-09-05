import { Package, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Package className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">BoxCraft Pro</span>
            </div>
            <p className="text-muted-foreground text-sm text-pretty">
              Leading manufacturer of premium packaging solutions. Quality craftsmanship, competitive pricing, and
              exceptional service for over 25 years.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/quality" className="text-muted-foreground hover:text-primary transition-colors">
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-muted-foreground hover:text-primary transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/categories/jewelry-boxes"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Jewelry Boxes
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/custom-packaging"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Custom Packaging
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/shipping-boxes"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Shipping Boxes
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/food-packaging"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Food Packaging
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/gift-boxes"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Gift Boxes
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/retail-boxes"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Retail Boxes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">info@boxcraftpro.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  123 Manufacturing St
                  <br />
                  Industrial Park, NY 10001
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium text-foreground mb-2">Newsletter</h4>
              <p className="text-xs text-muted-foreground mb-3">Get updates on new products and offers</p>
              <div className="flex space-x-2">
                <Input placeholder="Your email" className="text-sm" />
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">© 2024 BoxCraft Pro. All rights reserved.</div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>🔒 SSL Secured</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
