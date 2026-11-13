# Sri Seetharama Gurukulam Trust — Master Design System
**Version:** 2.0.0 · **Design Direction:** Premium Heritage Editorial + Traditional Gurukulam Aesthetic  
**Target:** Web (Desktop, Tablet, Mobile) · **Framework:** React + Tailwind CSS + Vite (vite-react-ssg)

---

## 1. Design Philosophy & Aesthetic Direction

Sri Seetharama Gurukulam Trust is a sacred institution dedicated to the preservation of Krishna Yajur Veda adhyayanam, Sanskrit, Shastras, and Sanatana Dharma under the Guru-Shishya Parampara and the holy blessings of the Kanchi Kamakoti Peetham.

The design system reconciles two essential dimensions:
1. **Sacred Heritage & Authentic Gurukulam Dignity:** Earthy sacred hues (Deep Maroon, Ochre Saffron, Antique Gold, Warm Cream, Ivory), timeless serif typography, and subtle classical motifs (Kolam dot-grids, floral/mandala accents).
2. **Contemporary Editorial Sophistication:** Generous whitespace, asymmetric balance, disciplined visual hierarchy, high typographic contrast, and restrained motion.

### Core Principles
- **Peaceful & Devout:** Avoid loud marketing patterns, aggressive popups, artificial urgency, or generic corporate layouts.
- **Authentic & Institutional:** Honor the guru parampara, genuine photographs, authentic Sanskrit nomenclature, and verified institutional facts.
- **Dignified & Restrained:** Restrain gold accents to subtle 1px hairline borders, badges, and quiet highlights. Never use gaudy gradients or excessive glassmorphism.
- **Inclusive & Accessible:** WCAG AA/AAA compliant color contrast, 44px+ touch targets, visible keyboard focus rings, full screen-reader semantic trees, and reduced-motion support.

---

## 2. Semantic Color System

The palette derives from sacred Vedic traditions — the ochre of renunciation, the deep crimson of Vedic devotion, temple gold, and handmade parchment.

### 2.1 Core Palette

| Role | Token Name | Value | Usage | WCAG On Cream (#FBF5E9) |
| :--- | :--- | :--- | :--- | :--- |
| **Primary (Deep Maroon)** | `--color-primary` | `#6B1D1D` | Headings, primary brand elements, active indicators, footer | 8.8:1 (AAA) |
| **Primary Dark** | `--color-primary-dark` | `#4A1212` | Hero background, dark drawer surface, high-contrast accents | 13.5:1 (AAA) |
| **Primary Surface** | `--color-primary-surface` | `#F6ECE4` | Soft maroon tint for badges, subtle card fills | — |
| **Secondary (Saffron)** | `--color-secondary` | `#E8871E` | Primary CTA buttons, sacred badges, key highlights | 2.1:1 (Used with dark maroon text #4A1212 → 6.2:1 AAA) |
| **Secondary Deep** | `--color-secondary-deep` | `#C96A0B` | Eyebrow subtitles, text links, active saffron accents | 4.8:1 (AA) |
| **Secondary Soft** | `--color-secondary-soft` | `#FDEEDD` | Saffron icon container backgrounds, soft highlight chips | — |
| **Accent (Antique Gold)** | `--color-accent` | `#C9A24B` | Hairline borders, medallion borders, decorative ornaments | 2.6:1 (Structural & decorative) |
| **Accent Soft** | `--color-accent-soft` | `#E9D8A6` | Dividers, card borders, subtle table lines | Structural |
| **Background (Warm Cream)**| `--color-bg` | `#FBF5E9` | Main page body, header background (scrolled) | Base canvas |
| **Surface (Ivory)** | `--color-surface` | `#FFFDF8` | Cards, forms, content panels, elevated blocks | Clean surface |
| **Surface Alt** | `--color-surface-alt` | `#F5EFE4` | Alternating section backgrounds, subtle contrast panels | — |
| **Text Primary (Ink)** | `--color-text` | `#2B1A14` | Primary body copy, article text, high readability | 12.6:1 (AAA) |
| **Text Soft (Muted Ink)** | `--color-text-soft` | `#5B4A40` | Secondary descriptions, form labels, metadata | 6.5:1 (AAA) |
| **Text Inverted** | `--color-text-inverted` | `#FBF5E9` | Text on Maroon/Hero dark backgrounds | 8.8:1 (AAA) |
| **Border Soft** | `--color-border-soft` | `rgba(201, 162, 75, 0.28)` | Restrained hairline dividers, nav separators | — |
| **Focus Ring** | `--color-focus` | `#E8871E` | 3px visible outline offset by 2px on focused elements | High visibility |

---

## 3. Typography System

The pairing of an editorial serif for titles and a clean, highly legible geometric/humanist sans for body text ensures dignity and effortless reading.

### 3.1 Font Families
- **Editorial Headings (`--font-head`):** `'Cormorant Garamond', Georgia, serif`
  - Weights: `400` (Regular), `400-italic` (Editorial accents, quotes), `500` (Medium), `600` (Semibold), `700` (Bold).
  - Characteristics: Elegant proportions, classical serifs, poetic Roman numerals and ligatures.
- **Body & Interface (`--font-body`):** `'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
  - Weights: `400` (Regular body), `500` (Medium UI), `600` (Semibold nav/buttons), `700` (Bold labels).
  - Characteristics: Clear geometric numerals, open counters, supreme legibility across mobile screens down to 320px.

### 3.2 Responsive Type Scale

| Level | Size (Fluid Clamp / Rem) | Line Height | Tracking | Weight | Recommended Element / Class |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display 2XL** | `clamp(2.75rem, 5vw + 1rem, 4.5rem)` | 1.05 | -0.02em | Semibold (600) | Homepage Hero Title |
| **Display XL** | `clamp(2.25rem, 3.5vw + 0.8rem, 3.5rem)` | 1.1 | -0.015em | Semibold (600) | Major Section Highlights |
| **H1** | `clamp(1.875rem, 2.5vw + 0.5rem, 2.75rem)` | 1.15 | -0.01em | Semibold (600) | Page Hero Titles |
| **H2** | `clamp(1.5rem, 1.8vw + 0.5rem, 2.125rem)` | 1.2 | -0.01em | Semibold (600) | Section Headings |
| **H3** | `clamp(1.25rem, 1.2vw + 0.4rem, 1.625rem)` | 1.25 | normal | Semibold (600) | Card Titles, Subsections |
| **H4** | `1.125rem` (18px) | 1.35 | normal | Semibold (600) | Feature Titles, Accordion Heads |
| **Body Large** | `1.125rem` (18px) | 1.65 | normal | Regular (400) | Intro Paragraphs, Hero Subtitles |
| **Body Base** | `1.0625rem` (17px) | 1.7 | normal | Regular (400) | Standard Body Copy |
| **Body Small** | `0.9375rem` (15px) | 1.6 | normal | Medium (500) | Navigation, Descriptions, Meta |
| **Caption** | `0.8125rem` (13px) | 1.45 | +0.01em | Medium (500) | Image Captions, Helper Text |
| **Overline / Kicker** | `0.6875rem`–`0.75rem` (11–12px) | 1.2 | +0.22em | Bold (700) | Eyebrow Badges, Category Tags |

---

## 4. Layout & Spacing System

A disciplined 8px-based spatial grid governs all horizontal and vertical rhythm.

### 4.1 Global Dimensions
- **Max Content Width:** `1200px` (`max-w-content`)
- **Container Padding:**
  - Mobile (320px–639px): `16px` (`px-4`)
  - Tablet (640px–1023px): `24px` (`px-6`)
  - Desktop (1024px+): `32px` (`px-8`)
- **Header Height:**
  - Desktop: `84px` (`h-[84px]`)
  - Mobile: `76px` (`h-[76px]`)
- **Section Spacing:**
  - Mobile: `py-12` (48px) to `py-14` (56px)
  - Desktop: `py-16` (64px) to `py-20` (80px)

### 4.2 Elevation, Shadows & Borders
- **Hairline Border:** `1px solid #E9D8A6` (or `rgba(201, 162, 75, 0.28)`)
- **Card Border:** `1px solid #E9D8A6` with subtle warm ivory surface.
- **Shadow Soft:** `0 2px 8px rgba(43, 26, 20, 0.04)`
- **Shadow Card:** `0 6px 20px rgba(43, 26, 20, 0.06), 0 1px 3px rgba(43, 26, 20, 0.04)`
- **Shadow Elevated:** `0 12px 30px rgba(107, 29, 29, 0.09), 0 2px 6px rgba(43, 26, 20, 0.04)`
- **Border Radii:**
  - Badges / Pill Buttons: `9999px` (`rounded-full`)
  - Cards: `1.125rem` (18px) (`rounded-card`)
  - Inputs / Selects: `0.75rem` (12px) (`rounded-xl`)
  - Avatars / Emblems: `9999px` (`rounded-full`)

---

## 5. Header & Navigation Architecture (Phase 1)

### 5.1 Desktop Header Specification
1. **Brand Lockup:**
   - **Emblem:** Approved circular emblem (`/logo-circle.png`, 52px diameter on scrolled / 56px on top) encased in an antique gold circular border ring.
   - **Institution Title:** "Sri Seetharama Gurukulam" in Cormorant Garamond Semibold.
   - **Sacred Kicker:** "VEDA PATASALA · ESTD. CHENNAI" in uppercase tracked letterforms (+0.2em).
   - **Entity Badge:** "TRUST" in gold pill badge.
2. **Navigation List (7 Core Destinations):**
   - Home (`/`), About (`/about`), Gurukulam (`/gurukulam`), Parayanam & Pooja (`/parayanam-pooja`), Events (`/events`), Gallery (`/gallery`), Contact (`/contact`).
   - Restrained active indicator: Understated pill badge or warm underline pip with transition.
   - Hover state: Subtle warm gold tint (`bg-gold-soft/30`) with smooth 150ms transition.
3. **Calls to Action (CTAs):**
   - **Primary CTA:** "Admission Enquiry" (`/admission`) — Ochre Saffron pill with deep maroon text (`#4A1212`) ensuring 6.2:1 AAA contrast.
   - **Secondary CTA:** "Support Us" (`/donation-enquiry`) — Refined gold hairline border with hover fill.
4. **Scroll Behavior:**
   - On Homepage unscrolled (`y <= 24`): Floats transparently over the dark maroon photography hero. Logo and typography render in crisp cream with gold highlights.
   - On Scroll (`y > 24`) & On Inner Pages: Solid cream backdrop (`bg-cream/95 backdrop-blur-md`), gold-soft bottom border (`border-b border-gold-soft/60`), and subtle warm shadow (`shadow-header`). Zero layout shift.

### 5.2 Mobile Header & Navigation Drawer Specification
1. **Toggle Button:**
   - 48px touch target with clear accessible labels (`aria-label="Open navigation menu"`, `aria-expanded={open}`, `aria-controls="mobile-navigation-drawer"`).
   - Switches icon smoothly (Menu ↔ X) or triggers sliding modal drawer.
2. **Overlay Drawer:**
   - Fixed full-screen backdrop with smooth blur scrim.
   - Slides in with hardware-accelerated transform. Respects `prefers-reduced-motion`.
   - **Focus Trap:** Tab and Shift+Tab strictly cycle inside the open drawer.
   - **Focus Restoration:** Closing the drawer restores focus to the menu trigger button.
   - **Keyboard Escape:** Pressing `Escape` closes the drawer immediately.
   - **Scroll Locking:** Background page scroll is disabled while open.
   - **Touch Targets:** Minimum 48px height per link with clear touch feedback.
   - **Footer Info inside Drawer:** Direct tap-to-call link, WhatsApp chat button, and the trust motto.

---

## 6. Accessibility & Compliance Standards

- **WCAG 2.1 Level AA & AAA Compliance:**
  - Maroon on Cream: 8.8:1 (AAA)
  - Saffron buttons with dark maroon text: 6.2:1 (AAA)
  - Ink body on Cream: 12.6:1 (AAA)
  - Soft ink descriptions: 6.5:1 (AAA)
- **Tap Target Sizes:** All interactive buttons, nav links, and drawer items are ≥ 44px (standardized to 48px–52px).
- **Keyboard Operability:** Every interactive element has an active focus outline: `3px solid #E8871E` with a `2px` offset.
- **Screen Reader Support:** Full ARIA landmarks (`<header>`, `<nav aria-label="Primary">`, `<nav aria-label="Mobile">`, `role="dialog"`, `aria-modal="true"`).

---

## 7. Responsive Breakpoint Matrix

| Viewport | Layout Strategy |
| :--- | :--- |
| **320px–374px** (Small Mobile) | Compact emblem (44px), single-line title, 48px menu button, full-width drawer links. No horizontal scroll. |
| **375px–429px** (Standard Mobile) | Standard mobile header (48px emblem), comfortable touch padding, drawer with contact quick-actions. |
| **430px–767px** (Large Mobile) | Full mobile header with motto subtitle; drawer presents dual-action buttons. |
| **768px–1023px** (Tablet Portrait) | Refined tablet header: Emblem + Name + "Admission" quick CTA button + accessible menu toggle. |
| **1024px–1279px** (Tablet Landscape) | Spacious tablet header with quick admission button and menu toggle; prevents squished navigation. |
| **1280px–1439px** (Standard Laptop) | Complete 7-link desktop navigation with active indicators + 2 CTAs. |
| **1440px–1920px+** (Desktop & Widescreen) | Centered 1200px max-width container with generous breathing room and editorial typography. |

