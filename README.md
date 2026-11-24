# Seetharama Gurukulam Trust — Website

A fully static, high-performance, and editorial website for **Sri Seetharama Gurukulam Trust** — an authentic traditional Veda Patasala dedicated to the preservation of Krishna Yajur Veda adhyayanam, Sanskrit, Shastras, and Sanatana Dharma under the sacred Guru-Shishya Parampara and the divine blessings of His Holiness Jagadguru Sri Chandrasekharendra Saraswathi Swamigal (Sri Kanchi Kamakoti Peetam).

**Donations and services are enquiry-only.** This site never displays unsecured banking details, personal UPI IDs, QR codes, or payment gateway buttons. The wording used throughout is:

> Our team will share the official donation details after your enquiry.

---

## Technical Stack

- **Framework:** React 18 + Vite 6
- **Routing & SSG:** `react-router-dom` v6 + `vite-react-ssg` (build-time pre-rendering for all 9 static routes, ensuring instant first paint, complete SEO metadata, and rich Open Graph tags for WhatsApp sharing)
- **Styling:** Tailwind CSS + PostCSS + CSS Design Tokens (Contemporary Vedic Editorial Design System)
- **Typography:** Self-hosted via `@fontsource`:
  - Headings: *Cormorant Garamond* (Classical Editorial Serif)
  - Interface & Body: *Manrope* (High-legibility Humanist Sans)
- **Icons & Motion:** `lucide-react`, `framer-motion` (with SSR-safe mounted guards)
- **Gallery & Forms:** `yet-another-react-lightbox`, `react-hook-form` + Web3Forms / WhatsApp direct pathway

---

## Local Development & Build

```bash
npm install
npm run dev        # Local development server (Vite, CSR mode at http://localhost:5173/)
npm run build      # Generates sitemap/robots, then pre-renders all 9 routes to dist/
npm run preview    # Preview the pre-rendered production build
```

---

## Verified Institutional Details (Client Brochure Source)

The following authoritative institutional details were verified from the client's official brochure (`SGT Folder file correction.pdf`) and are centralized in `src/data/site.js`:

- **Institution:** Seetha Rama Gurukulam Trust
- **Educational Institution:** Seetha Rama Gurukula Veda Patasala
- **Veda Patasala Founding Year:** 1996 (started with two students)
- **Trust Registration Year:** 2008 (Registered Non-Profitable Charitable Trust under the Indian Trusts Act)
- **Founder & Guru:** *Veda Vidyalankara, Vidya Ratnam* Sri V. Rajagopala Ganapatigal
- **Successor:** Brahmasri R. Srikrishna Ganapatigal (carries forward the sacred work of his father and guru)
- **Spiritual Patron & Blessings:** His Holiness Sri Paramacharyal of Sri Kanchi Kamakoti Peetam
- **Official Address:** Veda Bhavan, New No. 486 (Old No. 176), T.T.K. Road, Alwarpet, Chennai – 600018, Tamil Nadu, India
- **Telephone / WhatsApp:** +91 89030 39176 (`site.phoneDisplay`, `site.phoneTel`, `site.whatsappNumber`)
- **Official Email:** vedicgurukulam@gmail.com
- **Official Website:** www.vedicgurukulam.com
- **Tax Exemption:** Contributions eligible for tax exemption under Section 80-G of the Income Tax Act
- **Payee for Contributions:** `SEETHA RAMA GURUKULAM TRUST` (Accepted: Cash, G.Pay, Cheque, Demand Draft, NEFT)
- **Student Facilities (Verified from PDF):**
  1. Free Vedic education throughout the course
  2. Free boarding and lodging
  3. Free clothing
  4. Medical care
  5. Travelling expenses to hometown
- **Age Eligibility Note:** Documented discrepancy in the official source PDF (Section "Pattern of Education" states 8–11 years, while Section "Courses and Admission" states 8–12 years). Kept documented without asserting an unconfirmed single figure.
- **Curriculum & Services:** Krishna Yajur Veda prescribed Shakhas, oral adhyayanam (hearing, repeating, memorising, swara/pitch), Prayoga training for selected students (Upanayanam, Vivaham, Seemantham, other functions), and proposed Srowtha classes (clearly noted as future proposal). No public service/pooja commercial booking catalogue is advertised.

---

## Launch Checklist & Pending Client Confirmations

Search the codebase for `TODO` to view all pending client confirmations:

- [x] **Core Institutional Details:** Verified from official brochure in `src/data/site.js`.
- [x] **Authentic Photography:** Real institutional photographs placed in `public/photos/` and catalogued in `src/data/gallery.json` (zero AI placeholders on homepage).
- [x] **Homepage Editorial Rebuild:** Complete Phase 2 and Phase 2.2 editorial rebuild matching contemporary Vedic design standards.
- [ ] **Official Public Visiting Hours:** Pending client confirmation (`site.visitingHours: null`; visitors currently directed via phone/email enquiry).
- [ ] **Trust Certificate Number:** Exact alphanumeric certificate registration number pending client copy.
- [ ] **Events Calendar:** Real calendar dates and venues in `src/data/events.json` pending confirmation from Patasala administrators.
- [ ] **Testimonials:** Testimonials section intentionally omitted from the homepage until authentic, permissioned quotes are provided by the client.
- [ ] **Web3Forms Key:** Set `VITE_WEB3FORMS_KEY` in `.env` for direct form delivery (forms gracefully offer direct WhatsApp submission when unset).

---

## Prerendered Static Routes (9)

1. `/` — Homepage (Editorial Hero, Paramacharyal Blessings, Sacred Trust Announcement, Vedic Tradition, Gurukulam Life, Parayanam & Pooja, Moments at Gurukulam, Final Dual Enquiry)
2. `/about` — Heritage, Lineage & Trust Background
3. `/gurukulam` — Veda Patasala Curriculum, Daily Rhythm & Student Life
4. `/admission` — Student Admission Criteria, Eligibility & Application Form
5. `/parayanam-pooja` — Vedic Recitations & Sacred Services Catalog
6. `/gallery` — Filterable Photographic Archive & Lightbox
7. `/contact` — Contact Information, Interactive Google Map & Enquiry Form
8. `/privacy` — Privacy & Data Protection Policy
9. `/thank-you` — Form Submission Confirmation

Plus an on-theme 404 fallback page (backed by `public/_redirects` for Cloudflare Pages / Netlify hosting).

---

## Accessibility & Performance Standards

- **WCAG AA/AAA Color Contrast:** High-contrast palette (Deep Maroon `#6B1D1D` and Saffron `#E8871E` on Warm Cream `#FBF5E9` and Ivory `#FFFDF8`).
- **Responsive Layout:** 100% verified containment with 0 horizontal overflow across all device viewports from 320px up to 1920px.
- **Touch Targets:** 44px+ accessible touch targets for all interactive buttons and navigation links.
- **Reduced Motion Support:** Respects `prefers-reduced-motion` settings.
- **SSR/SSG Safe:** Instant static HTML first-paint visibility with mounted hydration guards in `Reveal.jsx`.
