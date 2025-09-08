import type { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { contactSubmissions, insertContactSchema } from '../shared/schema';
import { z } from 'zod';
import nodemailer from 'nodemailer';

// Simple in-memory rate limiting (resets on function restart)
const submissions = new Map<string, number>();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const validatedData = insertContactSchema.parse(req.body);
    
    // Spam Protection #1: Honeypot field check
    if (validatedData.website && validatedData.website.trim() !== '') {
      console.log('Spam detected: honeypot field filled');
      return res.status(400).json({ message: 'Invalid submission' });
    }
    
    // Spam Protection #2: Rate limiting per IP
    const clientIP = (req.headers['x-forwarded-for'] as string) || 
                     (req.headers['x-real-ip'] as string) || 
                     'unknown';
    const now = Date.now();
    const lastSubmission = submissions.get(clientIP);
    
    if (lastSubmission && (now - lastSubmission) < 60000) { // 1 minute cooldown
      console.log(`Rate limited: IP ${clientIP}`);
      return res.status(429).json({ 
        message: 'Please wait before submitting another request' 
      });
    }
    
    // Spam Protection #3: Basic content validation
    const suspiciousPatterns = [
      /https?:\/\//gi, // URLs in form data
      /\b(casino|poker|viagra|cialis|pharmacy)\b/gi, // Common spam words
      /(.)\1{10,}/, // Repeated characters (aaaaaaaaaa)
    ];
    
    const contentToCheck = `${validatedData.firstName} ${validatedData.lastName} ${validatedData.message}`;
    if (suspiciousPatterns.some(pattern => pattern.test(contentToCheck))) {
      console.log('Spam detected: suspicious content patterns');
      return res.status(400).json({ message: 'Invalid submission content' });
    }
    
    // Record successful submission for rate limiting
    submissions.set(clientIP, now);
    
    // Remove the honeypot field before saving to database
    const { website, ...dataToSave } = validatedData;
    
    // Initialize database connection
    const sql = neon(process.env.DATABASE_URL!);
    const db = drizzle(sql);
    
    // Store the contact submission (without honeypot field)
    const contact = await db.insert(contactSubmissions).values(dataToSave).returning();
    
    // Send email notification
    try {
      await sendContactNotificationEmail(dataToSave);
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      // Don't fail the request if email fails
    }
    
    res.status(201).json({ 
      message: "Contact submission received successfully", 
      id: contact[0].id 
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        message: "Validation error", 
        errors: error.errors 
      });
    }
    
    console.error("Contact submission error:", error);
    res.status(500).json({ 
      message: "Failed to process contact submission" 
    });
  }
}

async function sendContactNotificationEmail(contactData: any) {
  // Configure nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER || process.env.EMAIL_USER,
      pass: process.env.SMTP_PASS || process.env.EMAIL_PASS,
    },
  });

  const treatmentNames: Record<string, string> = {
    "juventas-protocol": "Juventas Protocol™",
    "androboost": "Androboost Program",
    "iv-laser": "IV Laser Therapy",
    "iv-ozone": "IV Ozone Therapy",
    "consultation": "General Consultation",
  };

  const treatmentInterest = contactData.treatment 
    ? treatmentNames[contactData.treatment] || contactData.treatment
    : "Not specified";

  const emailContent = `
    New Contact Form Submission - German Therapies
    
    Name: ${contactData.firstName} ${contactData.lastName}
    Email: ${contactData.email}
    Phone: ${contactData.phone}
    Treatment Interest: ${treatmentInterest}
    
    Message:
    ${contactData.message || "No message provided"}
    
    Submitted at: ${new Date().toLocaleString()}
  `;

  await transporter.sendMail({
    from: process.env.SMTP_USER || process.env.EMAIL_USER,
    to: process.env.CONTACT_EMAIL || "info@germantherapies.in",
    subject: "New Consultation Request - German Therapies",
    text: emailContent,
    html: emailContent.replace(/\n/g, "<br>"),
  });
}