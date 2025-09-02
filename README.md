Getting started with Next.js

🛠️ Built With

Next.js 14 - React framework with App Router
React.js - Frontend library
Tailwind CSS - Utility-first CSS framework
JavaScript - Programming language
Vercel - Deployment platform

✨ Features

Fully Responsive Design - Works on desktop, tablet, and mobile
Professional Portfolio - Showcases projects, skills, and experience
Blog System - Dynamic routing for individual blog posts
Clean Navigation - Header with mobile hamburger menu
Contact Page - Professional contact form and information
SEO Optimized - Proper meta tags and structure
Modern UI/UX - Clean, professional design with hover effects
Custom 404 Page - Branded error handling

📁 Project Structure
my-personal-blog/
├── src/
│ ├── app/
│ │ ├── about/page.js # About page
│ │ ├── blog/
│ │ │ ├── page.js # Blog listing
│ │ │ └── [id]/page.js # Individual blog posts (dynamic routing)
│ │ ├── contact/page.js # Contact page
│ │ ├── projects/page.js # Projects showcase
│ │ ├── layout.js # Root layout with Header/Footer
│ │ ├── page.js # Homepage
│ │ ├── not-found.js # Custom 404 page
│ │ └── globals.css # Global styles
│ └── components/
│ ├── Header.js # Navigation header with mobile menu
│ └── Footer.js # Site footer
├── public/ # Static assets
├── package.json # Dependencies and scripts
└── README.md

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

