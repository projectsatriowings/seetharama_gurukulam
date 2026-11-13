# Seetharama Gurukulam Trust — Website

A fully static, premium website for Seetharama Gurukulam Trust: traditional Vedic
learning, parayanam / pooja bookings, donation enquiries, events and a gallery.

**Donations are enquiry-only.** This site never shows bank details, UPI IDs, QR
codes or payment buttons. The wording used throughout is:

> Our team will share the official donation details after your enquiry.

## Tech

Vite + React (JavaScript) + React Router + vite-react-ssg (build-time
pre-rendering, so every route gets its own HTML with its own title, description
and Open Graph tags for WhatsApp link previews), Tailwind CSS, React Hook Form
+ Web3Forms, Framer Motion, yet-another-react-lightbox, lucide-react, and
self-hosted fonts via @fontsource (Cormorant Garamond headings, DM Sans body).

## Install and run

```bash
npm install
npm run dev        # local development (Vite, CSR mode)
npm run build      # generates sitemap/robots, then pre-renders to dist/
npm run preview    # preview the production build
```

## Deploy

The output is the plain static folder `dist/`.

**Cloudflare Pages:** Framework preset “Vite” (or none), Build command
`npm run build`, Build output directory `dist`. Deploy `dist/` as-is; the
`public/_redirects` file is copied to `dist/_redirects` and keeps deep links
working.

**Netlify:** Build command `npm run build`, Publish directory `dist`. The same
`_redirects` file (`/* /index.html 200`) provides the SPA fallback and the
on-theme 404 page.

**Custom domain:** point your domain's DNS at your host (Cloudflare Pages:
Pages → Custom domains; Netlify: Domain settings → Add a domain), wait for the
SSL certificate to issue, then update `siteUrl` in `src/data/site.js` and the
`base` URL in `scripts/generate-sitemap.mjs` to the real domain and rebuild.

## Environment variable — Web3Forms

1. Go to https://web3forms.com and create a free access key.
2. Create a `.env` file (copy `.env.example`) and set:
   ```
   VITE_WEB3FORMS_KEY=your-key-here
   ```
3. Rebuild. Without a key, forms show a friendly message and offer
   “Send via WhatsApp instead” — nothing is silently lost.

## Non-technical handover guide

### (a) Add or edit an event

Open `src/data/events.json`. Each event has `id`, `date` (YYYY-MM-DD),
`time`, `title`, `venue` and `description`. Add a new object (give it a new
`id`, e.g. `e7`) or edit an existing one, then rebuild. The site splits events
into “Upcoming” and “Past” automatically by comparing the date with today in
the visitor's browser, so you never need to move an event by hand. The home
page announcement strip always shows the next upcoming event.

### (b) Add gallery photos

1. Put the photo in `public/placeholders/` for now — or better, in a new
   folder `public/photos/` — as a WebP file (e.g. `public/photos/festival-1.webp`).
   Keep photos reasonably sized (under ~300 KB each) so the site stays fast.
2. Open `src/data/gallery.json` and add an entry:
   ```json
   { "id": "g25", "album": "Festivals", "src": "/photos/festival-1.webp",
     "caption": "Navaratri pooja", "alt": "Devotees gathered for Navaratri pooja" }
   ```
   `album` must be one of: Festivals, Classes, Poojas, Campus.
3. Rebuild. The photo appears in the filterable gallery and lightbox.

### (c) Change phone, WhatsApp, email or address

Open `src/data/site.js` and edit `phoneDisplay`, `phoneTel`, `whatsappNumber`
(digits only, with country code, e.g. `919876543210`), `email` and
`addressLines`. Every page, the footer, the WhatsApp button and the forms read
from this one file, so one edit updates the whole site. For the map, paste a
real Google Maps embed URL into `mapEmbedUrl` (Google Maps → Share → Embed a map).

### (d) Replace placeholder images with real WebP files

Placeholder pictures live in `public/placeholders/` (and a copy in
`src/assets/placeholders/` for reference). Replace a file with a real photo of
the same name, or change the `src` in `src/data/gallery.json` / the page that
uses it to point at your new file (see (b)). For the hero, replace
`public/placeholders/hero.svg` with a wide photo and update `src/components/Hero.jsx`
if the filename changes. For the WhatsApp/social preview image, replace
`public/og-image.jpg` (1200 × 630).

### (e) Connect a custom domain

See “Deploy” above. After pointing DNS at the host and adding the domain there,
update `siteUrl` in `src/data/site.js` and `base` in
`scripts/generate-sitemap.mjs`, then rebuild and redeploy.

## Replace before launch — every placeholder

Search the project for `TODO` to find them all. In short:

- `src/data/site.js`: phone (`+91XXXXXXXXXX`), WhatsApp number
  (`91XXXXXXXXXX`), email (`info@example.org`), street address, city/PIN,
  visiting hours, registration number, year established, Google Maps embed URL,
  site URL (`seetharamagurukulam.example.org`), social links.
- `src/data/events.json`: 6 sample events (3 in Nov–Dec 2026, 3 earlier in 2026)
  and their venues — confirm real dates, times and venues.
- `src/data/gallery.json`: all 24 entries are placeholders; replace with real photos.
- `src/data/services.json`: 8 parayanam/pooja services — confirm names, descriptions
  and typical durations with the acharyas.
- `src/data/testimonials.json`: all 3 quotes are flagged SAMPLE — replace with
  real, permissioned testimonials or remove the section.
- `src/pages/About.jsx`: founder name/bio, trustee names/roles, trust story and
  vision statement.
- `src/pages/Gurukulam.jsx`: daily-routine times, facility details, age group
  and eligibility criteria.
- `src/pages/Home.jsx`: daily-routine times in “A day at the gurukulam”.
- `public/og-image.jpg`, `public/placeholders/*`: generated placeholders, not
  real photographs. No copyrighted images, logos or deity artwork are used;
  ornament is original inline SVG.
- `.env`: set `VITE_WEB3FORMS_KEY` (see above).

## Routes

`/`, `/about`, `/gurukulam`, `/admission`, `/parayanam-pooja`,
`/donation-enquiry`, `/events`, `/gallery`, `/contact`, `/thank-you`,
`/privacy`, plus an on-theme 404 fallback (client-side route `*`, backed by
`_redirects` on the host).

## Accessibility and performance notes

Mobile-first, semantic HTML, skip-to-content link, visible focus rings,
44px+ tap targets, `aria-live` form errors, lazy-loaded images with explicit
dimensions, route-level code splitting, `prefers-reduced-motion` support, and
a high-contrast-friendly palette (maroon/saffron on cream/ivory, checked for
WCAG AA contrast on body text and buttons).
