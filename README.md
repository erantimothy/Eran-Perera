# Eran Timothy Perera — Portfolio

Personal portfolio website for [Eran Timothy Perera](https://erantimothy.dev) — software engineering student and developer based in Sri Lanka. Built with Next.js, Tailwind CSS, and Framer Motion.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | JetBrains Mono · Fraunces · DM Sans |
| Email | Mailjet (node-mailjet) |
| Language | TypeScript |

## Project Structure

```
app/
  globals.css          # Design tokens, CSS custom properties, noise texture
  layout.tsx           # Root layout — fonts, SEO metadata, OG tags
  page.tsx             # Single-page composition
  api/
    contact/
      route.ts         # POST /api/contact — Mailjet email handler
components/
  Nav.tsx              # Sticky frosted-glass navigation
  Hero.tsx             # Full-height hero with staggered reveal
  Projects.tsx         # Card grid with featured highlight
  Blog.tsx             # Post list with platform badges
  Timeline.tsx         # Vertical timeline — experience, education, certifications
  Skills.tsx           # Tag cloud grouped by category
  Awards.tsx           # Awards and activities grid
  Contact.tsx          # Contact form with validation and success/error states
  Footer.tsx           # Social links and credits
public/
  favicon.svg          # Terminal-style favicon
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env` or `.env.local` file in the project root:

```bash
MJ_APIKEY_PUBLIC=your_mailjet_public_key
MJ_APIKEY_PRIVATE=your_mailjet_private_key
```

Get your keys from [app.mailjet.com/account/apikeys](https://app.mailjet.com/account/apikeys).

> Both `.env` and `.env.local` are covered by `.gitignore` — neither will be committed.

## Scripts

```bash
npm run dev      # Development server with Turbopack
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

## Deployment

The site is a standard Next.js App Router project and deploys to any platform that supports Node.js — Vercel, Railway, Fly.io, etc.

When deploying, set `MJ_APIKEY_PUBLIC` and `MJ_APIKEY_PRIVATE` as environment variables in your hosting provider's dashboard.


