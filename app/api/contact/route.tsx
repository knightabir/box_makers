import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Email configuration (reuse from inquiry route)
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number.parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

interface ContactData {
  name: string
  email: string
  phone?: string
  company?: string
  subject: string
  message: string
  contactMethod: string
  agreeToPrivacy: boolean
}

// Server-side validation
function validateContactData(data: ContactData): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.name?.trim()) errors.push("Name is required")
  if (!data.email?.trim()) errors.push("Email is required")
  else if (!/\S+@\S+\.\S+/.test(data.email)) errors.push("Email format is invalid")
  if (!data.subject?.trim()) errors.push("Subject is required")
  if (!data.message?.trim()) errors.push("Message is required")
  if (!data.agreeToPrivacy) errors.push("Privacy policy agreement is required")

  return { isValid: errors.length === 0, errors }
}

// Generate admin email HTML for contact form
function generateContactAdminEmailHTML(data: ContactData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Message - BoxCraft Pro</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #059669; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #059669; }
        .value { margin-top: 5px; }
        .message-box { background: white; padding: 15px; border-left: 4px solid #059669; margin: 15px 0; }
        .footer { background: #333; color: white; padding: 15px; text-align: center; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Message</h1>
          <p>BoxCraft Pro - Website Contact Form</p>
        </div>
        
        <div class="content">
          <h2>Contact Information</h2>
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${data.email}</div>
          </div>
          ${
            data.phone
              ? `
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${data.phone}</div>
          </div>
          `
              : ""
          }
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
          <div class="field">
            <div class="label">Subject:</div>
            <div class="value">${data.subject}</div>
          </div>
          <div class="field">
            <div class="label">Preferred Contact Method:</div>
            <div class="value">${data.contactMethod}</div>
          </div>
          
          <h2>Message</h2>
          <div class="message-box">
            ${data.message.replace(/\n/g, "<br>")}
          </div>
          
          <div class="field">
            <div class="label">Submitted:</div>
            <div class="value">${new Date().toLocaleString()}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>This message was submitted through the BoxCraft Pro contact form.</p>
          <p>Please respond within 24 hours to maintain our service standards.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Generate customer auto-reply email HTML for contact form
function generateContactCustomerEmailHTML(data: ContactData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Message Received - BoxCraft Pro</title>
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
          <h1>Message Received!</h1>
          <p>BoxCraft Pro - Custom Packaging Solutions</p>
        </div>
        
        <div class="content">
          <p>Dear ${data.name},</p>
          
          <p>Thank you for contacting BoxCraft Pro! We have received your message regarding "<strong>${data.subject}</strong>" and will respond as quickly as possible.</p>
          
          <div class="highlight">
            <h3>Response Timeline</h3>
            <ul>
              <li><strong>General inquiries:</strong> Within 24 hours</li>
              <li><strong>Quote requests:</strong> Within 48 hours</li>
              <li><strong>Technical support:</strong> Within 12 hours</li>
              <li><strong>Urgent matters:</strong> Please call +1 (555) 123-4567</li>
            </ul>
          </div>
          
          <p>Your message summary:</p>
          <ul>
            <li><strong>Subject:</strong> ${data.subject}</li>
            <li><strong>Preferred Contact:</strong> ${data.contactMethod}</li>
            <li><strong>Submitted:</strong> ${new Date().toLocaleString()}</li>
          </ul>
          
          <p>If you need immediate assistance, please contact us directly:</p>
          <ul>
            <li><strong>Phone:</strong> +1 (555) 123-4567</li>
            <li><strong>Email:</strong> info@boxcraftpro.com</li>
            <li><strong>Business Hours:</strong> Mon-Fri 8AM-6PM EST</li>
          </ul>
          
          <p>We appreciate your interest in BoxCraft Pro and look forward to assisting you!</p>
          
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
    const data: ContactData = await request.json()

    // Server-side validation
    const validation = validateContactData(data)
    if (!validation.isValid) {
      return NextResponse.json({ success: false, errors: validation.errors }, { status: 400 })
    }

    // Basic spam protection
    const suspiciousPatterns = [/viagra|cialis|pharmacy/i, /\$\$\$|\$\d+/g, /http[s]?:\/\//g]

    const textToCheck = `${data.name} ${data.email} ${data.message}`
    const isSuspicious = suspiciousPatterns.some((pattern) => pattern.test(textToCheck))

    if (isSuspicious) {
      console.log("Suspicious contact blocked:", data.email)
      return NextResponse.json({ success: false, error: "Request blocked by spam filter" }, { status: 400 })
    }

    // Log contact data
    console.log("New contact message received:", {
      timestamp: new Date().toISOString(),
      email: data.email,
      subject: data.subject,
    })

    // Send admin notification email
    const adminMailOptions = {
      from: process.env.SMTP_FROM || "noreply@boxcraftpro.com",
      to: process.env.ADMIN_EMAIL || "admin@boxcraftpro.com",
      subject: `Contact Form: ${data.subject} - ${data.name}`,
      html: generateContactAdminEmailHTML(data),
    }

    // Send customer auto-reply email
    const customerMailOptions = {
      from: process.env.SMTP_FROM || "noreply@boxcraftpro.com",
      to: data.email,
      subject: "Message received - BoxCraft Pro",
      html: generateContactCustomerEmailHTML(data),
    }

    // Send both emails
    await Promise.all([transporter.sendMail(adminMailOptions), transporter.sendMail(customerMailOptions)])

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
