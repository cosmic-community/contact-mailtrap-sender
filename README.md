# Contact Mailtrap Sender

A simple, modern contact page that sends emails via Mailtrap using a secure server-side API route.

## Features
- Name, email, and message fields with client-side validation
- Server-side Mailtrap email sending
- Clean UI with responsive Tailwind styling
- Success and error states for user feedback
- Dismissible “Built with Cosmic” badge

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69afaf96db2ad58a8e7c4fa5&clone_repository=69afb444db2ad58a8e7c4fd0)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Build me a simple contact form with 'name' 'email' 'message' fields, and a 'send' button"

### Code Generation Prompt

> "Create a contact page with contact form that, when submitted, sends an email from hello@demoatmailtrap.com to sd.pesco@gmail.com with basic user information: name, email, message. Send emails using Mailtrap."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Nodemailer
- Cosmic SDK

## Getting Started

### Prerequisites
- Bun installed
- A Mailtrap SMTP inbox configured

### Installation
```bash
bun install
bun run dev
```

## Cosmic SDK Examples
```ts
import { cosmic } from '@/lib/cosmic'

export async function getObjects() {
  const response = await cosmic.objects
    .find({ type: 'pages' })
    .props(['title', 'slug', 'metadata'])
    .depth(1)

  return response.objects
}
```

## Cosmic CMS Integration
This project is ready to connect to your Cosmic bucket and can be expanded with content types. The “Built with Cosmic” badge automatically uses your bucket slug for attribution.

Learn more in the Cosmic docs: https://www.cosmicjs.com/docs

## Deployment Options
- **Vercel**: Perfect for Next.js apps
- **Netlify**: Works well for static or hybrid deployments

Remember to configure your environment variables in the hosting provider dashboard.
<!-- README_END -->