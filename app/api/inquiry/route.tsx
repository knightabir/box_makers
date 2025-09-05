import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer";

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number.parseInt(process.env.SMTP_PORT || "587"),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP configuration error:", error)
  } else {
    console.log("SMTP server is ready to take our messages")
  }
})

interface InquiryData {
  fullName: string
  email: string
  phone: string
  company?: string
  productInterest: string
  boxType?: string
  quantity: string
  timeline: string
  requirements?: string
  contactMethod: string
  agreeToPrivacy: boolean
}

// Server-side validation
function validateInquiryData(data: InquiryData): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.fullName?.trim()) errors.push("Full name is required")
  if (!data.email?.trim()) errors.push("Email is required")
  else if (!/\S+@\S+\.\S+/.test(data.email)) errors.push("Email format is invalid")
  if (!data.phone?.trim()) errors.push("Phone number is required")
  if (!data.productInterest?.trim()) errors.push("Product interest is required")
  if (!data.quantity?.trim()) errors.push("Quantity is required")
  if (!data.timeline?.trim()) errors.push("Timeline is required")
  if (!data.agreeToPrivacy) errors.push("Privacy policy agreement is required")

  return { isValid: errors.length === 0, errors }
}

// Generate admin email HTML
function generateAdminEmailHTML(data: InquiryData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Inquiry - BoxCraft Pro</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #059669; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #059669; }
        .value { margin-top: 5px; }
        .footer { background: #333; color: white; padding: 15px; text-align: center; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Inquiry Received</h1>
          <p>BoxCraft Pro - Custom Packaging Solutions</p>
        </div>
        
        <div class="content">
          <h2>Contact Information</h2>
          <div class="field">
            <div class="label">Full Name:</div>
            <div class="value">${data.fullName}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${data.email}</div>
          </div>
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${data.phone}</div>
          </div>
          ${
            data.company
              ? `
          <div class="field">
            <div class="label">Company:</div>
            <div class="value">${data.company}</div>
          </div>
          `
              : ""
          }
          
          <h2>Project Details</h2>
          <div class="field">
            <div class="label">Product Interest:</div>
            <div class="value">${data.productInterest}</div>
          </div>
          ${
            data.boxType
              ? `
          <div class="field">
            <div class="label">Box Type:</div>
            <div class="value">${data.boxType}</div>
          </div>
          `
              : ""
          }
          <div class="field">
            <div class="label">Quantity:</div>
            <div class="value">${data.quantity}</div>
          </div>
          <div class="field">
            <div class="label">Timeline:</div>
            <div class="value">${data.timeline}</div>
          </div>
          ${
            data.requirements
              ? `
          <div class="field">
            <div class="label">Requirements:</div>
            <div class="value">${data.requirements}</div>
          </div>
          `
              : ""
          }
          <div class="field">
            <div class="label">Preferred Contact Method:</div>
            <div class="value">${data.contactMethod}</div>
          </div>
          
          <div class="field">
            <div class="label">Submitted:</div>
            <div class="value">${new Date().toLocaleString()}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>This inquiry was submitted through the BoxCraft Pro website.</p>
          <p>Please respond within 24 hours to maintain our service standards.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Generate customer auto-reply email HTML
function generateCustomerEmailHTML(data: InquiryData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Thank You - BoxCraft Pro</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #059669; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .highlight { background: #e6f7f1; padding: 15px; border-left: 4px solid #059669; margin: 20px 0; }
        .footer { background: #333; color: white; padding: 15px; text-align: center; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You for Your Inquiry!</h1>
          <p>BoxCraft Pro - Custom Packaging Solutions</p>
        </div>
        
        <div class="content">
          <p>Dear ${data.fullName},</p>
          
          <p>Thank you for contacting BoxCraft Pro! We have received your inquiry about <strong>${data.productInterest}</strong> and appreciate your interest in our packaging solutions.</p>
          
          <div class="highlight">
            <h3>What happens next?</h3>
            <ul>
              <li><strong>Within 24 hours:</strong> A packaging specialist will review your requirements</li>
              <li><strong>Within 48 hours:</strong> You'll receive a detailed quote and project timeline</li>
              <li><strong>Custom projects:</strong> Our design team will create initial concepts within 72 hours</li>
            </ul>
          </div>
          
          <p>Your inquiry details:</p>
          <ul>
            <li><strong>Product Interest:</strong> ${data.productInterest}</li>
            <li><strong>Quantity:</strong> ${data.quantity}</li>
            <li><strong>Timeline:</strong> ${data.timeline}</li>
            <li><strong>Preferred Contact:</strong> ${data.contactMethod}</li>
          </ul>
          
          <p>If you have any urgent questions or need to modify your request, please don't hesitate to contact us:</p>
          <ul>
            <li><strong>Phone:</strong> +1 (555) 123-4567</li>
            <li><strong>Email:</strong> info@boxcraftpro.com</li>
            <li><strong>Emergency:</strong> +1 (555) 123-4568</li>
          </ul>
          
          <p>We look forward to working with you on your packaging project!</p>
          
          <p>Best regards,<br>
          The BoxCraft Pro Team</p>
        </div>
        
        <div class="footer">
          <p>BoxCraft Pro | 123 Manufacturing Street, Industrial Park, NY 10001</p>
          <p>This is an automated response. Please do not reply to this email.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    const data: InquiryData = await request.json()

    // Server-side validation
    const validation = validateInquiryData(data)
    if (!validation.isValid) {
      return NextResponse.json({ success: false, errors: validation.errors }, { status: 400 })
    }

    // Basic spam protection - check for suspicious patterns
    const suspiciousPatterns = [/viagra|cialis|pharmacy/i, /\$\$\$|\$\d+/g, /http[s]?:\/\//g]

    const textToCheck = `${data.fullName} ${data.email} ${data.requirements || ""}`
    const isSuspicious = suspiciousPatterns.some((pattern) => pattern.test(textToCheck))

    if (isSuspicious) {
      console.log("Suspicious inquiry blocked:", data.email)
      return NextResponse.json({ success: false, error: "Request blocked by spam filter" }, { status: 400 })
    }

    // Log inquiry data (in production, save to database)
    console.log("New inquiry received:", {
      timestamp: new Date().toISOString(),
      email: data.email,
      company: data.company,
      productInterest: data.productInterest,
    })

    // Send admin notification email
    const adminMailOptions = {
      from: process.env.SMTP_FROM || "noreply@boxcraftpro.com",
      to: process.env.ADMIN_EMAIL || "admin@boxcraftpro.com",
      subject: `New Inquiry: ${data.productInterest} - ${data.fullName}`,
      html: generateAdminEmailHTML(data),
    }

    // Send customer auto-reply email
    const customerMailOptions = {
      from: process.env.SMTP_FROM || "noreply@boxcraftpro.com",
      to: data.email,
      subject: "Thank you for your inquiry - BoxCraft Pro",
      html: generateCustomerEmailHTML(data),
    }

    // Send both emails
    await Promise.all([transporter.sendMail(adminMailOptions), transporter.sendMail(customerMailOptions)])

    return NextResponse.json({
      success: true,
      message: "Inquiry submitted successfully",
    })
  } catch (error) {
    console.error("Error processing inquiry:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
