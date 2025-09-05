"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface InquiryModalProps {
  children: React.ReactNode
  defaultCategory?: string
  defaultProduct?: string
}

interface FormData {
  fullName: string
  email: string
  phone: string
  company: string
  productInterest: string
  boxType: string
  quantity: string
  timeline: string
  requirements: string
  contactMethod: string
  agreeToPrivacy: boolean
}

const productCategories = [
  "Custom Packaging Boxes",
  "Jewelry Boxes",
  "Gift Boxes",
  "Shipping Boxes",
  "Food Packaging",
  "Cosmetic Boxes",
  "Electronic Packaging",
  "Retail Boxes",
  "Other",
]

const timelines = ["ASAP (Rush Order)", "Within 1 week", "Within 2 weeks", "Within 1 month", "2-3 months", "Flexible"]

const contactMethods = ["Email", "Phone", "Both"]

export function InquiryModal({ children, defaultCategory, defaultProduct }: InquiryModalProps) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    productInterest: defaultCategory || "",
    boxType: defaultProduct || "",
    quantity: "",
    timeline: "",
    requirements: "",
    contactMethod: "Email",
    agreeToPrivacy: false,
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = () => {
    const newErrors: Partial<FormData> = {}

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.productInterest) newErrors.productInterest = "Product interest is required"
    if (!formData.quantity.trim()) newErrors.quantity = "Quantity is required"
    if (!formData.timeline) newErrors.timeline = "Timeline is required"
    if (!formData.agreeToPrivacy) newErrors.agreeToPrivacy = "You must agree to the privacy policy"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real app, you would send the form data to your backend
      console.log("Form submitted:", { formData })

      setSubmitStatus("success")
      setTimeout(() => {
        setOpen(false)
        setSubmitStatus("idle")
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          productInterest: defaultCategory || "",
          boxType: defaultProduct || "",
          quantity: "",
          timeline: "",
          requirements: "",
          contactMethod: "Email",
          agreeToPrivacy: false,
        })
        setErrors({})
      }, 2000)
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">Request a Quote</DialogTitle>
        </DialogHeader>

        {submitStatus === "success" ? (
          <div className="py-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Thank You!</h3>
            <p className="text-muted-foreground mb-4">
              Your inquiry has been submitted successfully. We'll get back to you within 24 hours.
            </p>
            <Badge className="bg-primary text-primary-foreground">Expected Response: Within 24 hours</Badge>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitStatus === "error" && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  There was an error submitting your inquiry. Please try again or contact us directly.
                </AlertDescription>
              </Alert>
            )}

            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <Label htmlFor="fullName" className="mb-2">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className={`mb-1 px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition ${errors.fullName ? "border-destructive" : ""}`}
                  />
                  {errors.fullName && <p className="text-sm text-destructive mt-1">{errors.fullName}</p>}
                </div>
                <div className="flex flex-col">
                  <Label htmlFor="email" className="mb-2">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`mb-1 px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition ${errors.email ? "border-destructive" : ""}`}
                  />
                  {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <Label htmlFor="phone" className="mb-2">
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={`mb-1 px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition ${errors.phone ? "border-destructive" : ""}`}
                  />
                  {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
                </div>
                <div className="flex flex-col">
                  <Label htmlFor="company" className="mb-2">Company Name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="mb-1 px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Project Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <Label htmlFor="productInterest" className="mb-2">
                    Product/Service Interest <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.productInterest}
                    onValueChange={(value) => handleInputChange("productInterest", value)}
                  >
                    <SelectTrigger className={`mb-1 px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition ${errors.productInterest ? "border-destructive" : ""}`}>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {productCategories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.productInterest && <p className="text-sm text-destructive mt-1">{errors.productInterest}</p>}
                </div>
                <div className="flex flex-col">
                  <Label htmlFor="boxType" className="mb-2">Specific Box Type/Category</Label>
                  <Input
                    id="boxType"
                    value={formData.boxType}
                    onChange={(e) => handleInputChange("boxType", e.target.value)}
                    placeholder="e.g., Ring box, Shipping box 12x8x6"
                    className="mb-1 px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <Label htmlFor="quantity" className="mb-2">
                    Quantity Required <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="quantity"
                    value={formData.quantity}
                    onChange={(e) => handleInputChange("quantity", e.target.value)}
                    placeholder="e.g., 500 units"
                    className={`mb-1 px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition ${errors.quantity ? "border-destructive" : ""}`}
                  />
                  {errors.quantity && <p className="text-sm text-destructive mt-1">{errors.quantity}</p>}
                </div>
                <div className="flex flex-col">
                  <Label htmlFor="timeline" className="mb-2">
                    Preferred Timeline <span className="text-destructive">*</span>
                  </Label>
                  <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                    <SelectTrigger className={`mb-1 px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition ${errors.timeline ? "border-destructive" : ""}`}>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      {timelines.map((timeline) => (
                        <SelectItem key={timeline} value={timeline}>
                          {timeline}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.timeline && <p className="text-sm text-destructive mt-1">{errors.timeline}</p>}
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="flex flex-col">
              <Label htmlFor="requirements" className="mb-2">Detailed Requirements</Label>
              <Textarea
                id="requirements"
                value={formData.requirements}
                onChange={(e) => handleInputChange("requirements", e.target.value)}
                placeholder="Please describe your specific requirements, dimensions, materials, colors, branding needs, etc."
                rows={4}
                className="mb-1 px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>

            {/* Contact Preference */}
            <div className="flex flex-col">
              <Label htmlFor="contactMethod" className="mb-2">Preferred Contact Method</Label>
              <Select
                value={formData.contactMethod}
                onValueChange={(value) => handleInputChange("contactMethod", value)}
              >
                <SelectTrigger className="mb-1 px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {contactMethods.map((method) => (
                    <SelectItem key={method} value={method}>
                      {method}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Privacy Agreement */}
            <div className="flex items-start space-x-2">
              <Checkbox
                id="privacy"
                checked={formData.agreeToPrivacy}
                onCheckedChange={(checked) => handleInputChange("agreeToPrivacy", checked as boolean)}
                className={`mt-1 border border-black rounded-md ${errors.agreeToPrivacy ? "border-destructive" : ""}`}
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="privacy"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the privacy policy and terms of service <span className="text-destructive">*</span>
                </label>
                <p className="text-xs text-muted-foreground">
                  Your information will be used solely to process your inquiry and provide you with a quote.
                </p>
                {errors.agreeToPrivacy && <p className="text-sm text-destructive">{errors.agreeToPrivacy}</p>}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col md:flex-row gap-3 pt-4">
              <Button type="button" variant="outline" onClick={() => setOpen(false)} className="flex-1">
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={!formData.agreeToPrivacy || isSubmitting}
                // disabled={isSubmitting}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Inquiry"
                )}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
