# Deploy to Vercel Guide

## Prerequisites

1. **Neon Database Account** (for PostgreSQL hosting)
   - Sign up at https://neon.tech
   - Create a new database project
   - Get your connection string

2. **Email Service** (for contact form notifications)
   - Gmail SMTP or other email provider
   - App passwords enabled if using Gmail

3. **Vercel Account**
   - Sign up at https://vercel.com
   - Install Vercel CLI: `npm i -g vercel`

## Database Setup

1. **Push Database Schema**
   ```bash
   # Install dependencies first
   npm install

   # Set your database URL in .env
   echo "DATABASE_URL=your_neon_connection_string" > .env.local

   # Push schema to database
   npm run db:push
   ```

## Deployment Steps

1. **Connect to Vercel**
   ```bash
   # Login to Vercel
   vercel login

   # Deploy (first time)
   vercel --prod
   ```

2. **Set Environment Variables in Vercel Dashboard**
   - Go to your project in Vercel dashboard
   - Navigate to Settings > Environment Variables
   - Add these variables:

   ```
   DATABASE_URL=your_neon_connection_string_here
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_app_password
   CONTACT_EMAIL=where_to_receive_forms@gmail.com
   ```

3. **Redeploy with Environment Variables**
   ```bash
   vercel --prod
   ```

## Environment Variables Explained

### Required for Database:
- `DATABASE_URL`: Your Neon PostgreSQL connection string

### Required for Email (Contact Form):
- `SMTP_HOST`: SMTP server (e.g., smtp.gmail.com)
- `SMTP_PORT`: SMTP port (587 for Gmail)
- `SMTP_USER`: Your email address
- `SMTP_PASS`: App password (not regular password)
- `CONTACT_EMAIL`: Where to send contact form submissions

### Gmail Setup:
1. Enable 2-factor authentication
2. Generate app password: Google Account > Security > App passwords
3. Use the app password (not your regular Gmail password)

## Testing the Contact Form

After deployment:
1. Visit your Vercel URL
2. Navigate to the contact page
3. Fill out and submit the form
4. Check for:
   - Success message on submission
   - Email notification received
   - Data stored in Neon database

## File Changes Made for Vercel

1. **`/api/contact.ts`**: Serverless function for form handling
2. **`vercel.json`**: Vercel configuration
3. **`package.json`**: Added build-vercel script and @vercel/node dependency

## Troubleshooting

- **Form not working**: Check environment variables in Vercel dashboard
- **Email not sending**: Verify SMTP credentials and app password
- **Database errors**: Confirm DATABASE_URL is correct and schema is pushed
- **Static assets**: Ensure attached_assets folder is committed to git

## Custom Domain (Optional)

1. In Vercel dashboard, go to Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate will be automatically provisioned