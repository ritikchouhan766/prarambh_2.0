# Parambh Rehab Center

Production-ready Next.js website for **Parambh Rehab Center**, Jodhpur.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: DM Sans + DM Serif Display (Google Fonts via next/font)
- **Deployment**: Vercel

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — Navbar, Footer, WhatsApp float
│   ├── globals.css         # Global styles + Tailwind layers
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # 404 page
│   ├── services/
│   │   └── page.tsx        # Services detail page
│   ├── conditions/
│   │   └── page.tsx        # Conditions We Treat page
│   ├── therapist/
│   │   └── page.tsx        # Therapist profiles page
│   └── contact/
│       ├── page.tsx        # Contact page (server component)
│       └── ContactForms.tsx# Forms (client component)
│
├── components/
│   ├── Navbar.tsx          # Sticky responsive navbar
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Home hero section
│   ├── Services.tsx        # Services card grid (preview)
│   ├── Conditions.tsx      # Conditions grid (preview)
│   ├── Therapist.tsx       # Therapist profile card
│   ├── Testimonials.tsx    # Parent testimonials
│   ├── CTA.tsx             # Final CTA banner
│   └── WhatsAppFloat.tsx   # Fixed WhatsApp button
│
└── lib/
    ├── constants.ts        # ALL data — services, conditions, therapists, etc.
    └── utils.ts            # Utility functions
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live! ✅

## Customization

### Update Business Details

Edit `src/lib/constants.ts`:

- `SITE` — phone, email, address, WhatsApp
- `HOURS` — working hours
- `FORMS` — replace dummy Google Form links with real ones

### Replace Google Form Links

In `src/lib/constants.ts`, update `FORMS`:

```ts
export const FORMS = {
  appointment: "https://forms.google.com/YOUR-REAL-APPOINTMENT-FORM",
  enquiry: "https://forms.google.com/YOUR-REAL-ENQUIRY-FORM",
  feedback: "https://forms.google.com/YOUR-REAL-FEEDBACK-FORM",
};
```

### Add Therapist Photos

1. Place photos in `/public/images/` — e.g. `therapist-lakshita.jpg`
2. The `avatar` field in `THERAPISTS` in `constants.ts` already points there
3. Replace the emoji fallback with the real image

### Add a New Therapist

Add an entry to the `THERAPISTS` array in `src/lib/constants.ts` following the existing structure.

### Update Conditions or Services

All content is data-driven from `constants.ts`. No component changes needed.

## Pages & Routes

| Route         | Page                                         |
| ------------- | -------------------------------------------- |
| `/`           | Home                                         |
| `/services`   | All therapy services with full detail        |
| `/conditions` | Conditions treated with warning signs        |
| `/therapist`  | Therapist profiles                           |
| `/contact`    | Contact, appointment form, enquiry form, map |

## SEO

Each page exports its own `metadata` object for title and description.
Root metadata is in `src/app/layout.tsx`.
