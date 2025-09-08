import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      // Spam Protection #1: Honeypot field check
      if (validatedData.website && validatedData.website.trim() !== '') {
        console.log('Spam detected: honeypot field filled');
        return res.status(400).json({ message: 'Invalid submission' });
      }
      
      // Spam Protection #2: Basic content validation
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
      
      // Remove the honeypot field before saving to database
      const { website, ...dataToSave } = validatedData;
      
      // Store the contact submission
      const contact = await storage.createContactSubmission(dataToSave);
      
      // Send email notification
      try {
        await sendContactNotificationEmail(dataToSave);
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // Don't fail the request if email fails
      }
      
      res.status(201).json({ 
        message: "Contact submission received successfully", 
        id: contact.id 
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
  });

  // Get contact submissions endpoint (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContactSubmissions();
      res.json(contacts);
    } catch (error) {
      console.error("Failed to get contacts:", error);
      res.status(500).json({ message: "Failed to retrieve contacts" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
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
