"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Loader2, Send } from "lucide-react"

interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
  contactMethod: string
  agreeToPrivacy: boolean
}

const subjects = [
  "General Inquiry",
  "Quote Request",
  "Custom Design",
  "Bulk Orders",
  "Technical Support",
  "Partnership Opportunities",
  "Other",
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    contactMethod: "Email",
    agreeToPrivacy: false,
  })
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})

  const validateForm = () => {
    const newErrors: Partial<ContactFormData> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.subject) newErrors.subject = "Subject is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    if (!formData.agreeToPrivacy) newErrors.agreeToPrivacy = true

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof ContactFormData, value: string | boolean) => {
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

      console.log("Contact form submitted:", formData)
      setSubmitStatus("success")

      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
          contactMethod: "Email",
          agreeToPrivacy: false,
        })
        setSubmitStatus("idle")
      }, 3000)
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === "success") {
    return (
      <div className="text-center py-8">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent Successfully!</h3>
        <p className="text-muted-foreground">Thank you for contacting us. We'll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus === "error" && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            There was an error sending your message. Please try again or contact us directly.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name" className="mb-1 ml-1">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className={`border-black focus:border-black rounded-md px-3 py-2 ${errors.name ? "border-destructive" : ""}`}
          />
          {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email" className="mb-1 ml-1">
            Email Address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={`border-black focus:border-black rounded-md px-3 py-2 ${errors.email ? "border-destructive" : ""}`}
          />
          {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="phone" className="mb-1 ml-1">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="border-black focus:border-black rounded-md px-3 py-2"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="company" className="mb-1 ml-1">Company Name</Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => handleInputChange("company", e.target.value)}
            className="border-black focus:border-black rounded-md px-3 py-2"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5 w-full col-span-full">
        <Label htmlFor="subject" className="mb-1 ml-1">
          Subject <span className="text-destructive">*</span>
        </Label>
        <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
          <SelectTrigger className={`w-full border-black focus:border-black rounded-md px-3 py-2 ${errors.subject ? "border-destructive" : ""}`}>
            <SelectValue placeholder="Select a subject" />
          </SelectTrigger>
          <SelectContent>
            {subjects.map((subject) => (
              <SelectItem key={subject} value={subject}>
                {subject}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message" className="mb-1 ml-1">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          placeholder="Please describe your inquiry in detail..."
          rows={5}
          className={`border-black focus:border-black rounded-md px-3 py-2 ${errors.message ? "border-destructive" : ""}`}
        />
        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="contactMethod" className="mb-1 ml-1">Preferred Contact Method</Label>
        <Select value={formData.contactMethod} onValueChange={(value) => handleInputChange("contactMethod", value)}>
          <SelectTrigger className="border-black focus:border-black rounded-md px-3 py-2">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Email">Email</SelectItem>
            <SelectItem value="Phone">Phone</SelectItem>
            <SelectItem value="Both">Both</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-start space-x-2 mt-2">
        <Checkbox
          id="privacy"
          checked={formData.agreeToPrivacy}
          onCheckedChange={(checked) => handleInputChange("agreeToPrivacy", checked as boolean)}
          className={`border-black focus:border-black mt-1 ${errors.agreeToPrivacy ? "border-destructive" : ""}`}
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="privacy"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to the privacy policy <span className="text-destructive">*</span>
          </label>
          <p className="text-xs text-muted-foreground">
            Your information will be used solely to respond to your inquiry.
          </p>
          {errors.agreeToPrivacy && <p className="text-sm text-destructive">{errors.agreeToPrivacy}</p>}
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Sending Message...
          </>
        ) : (
          <>
            <Send className="h-4 w-4 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>
  )
}
