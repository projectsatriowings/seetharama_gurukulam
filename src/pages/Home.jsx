import AcharyaBlessings from '../components/AcharyaBlessings.jsx'
import FinalEnquirySection from '../components/FinalEnquirySection.jsx'
import GurukulamLifeSection from '../components/GurukulamLifeSection.jsx'
import GurukulamMomentsSection from '../components/GurukulamMomentsSection.jsx'
import Hero from '../components/Hero.jsx'
import ParayanamPoojaSection from '../components/ParayanamPoojaSection.jsx'
import SacredTrustAnnouncement from '../components/SacredTrustAnnouncement.jsx'
import SEO, { orgJsonLd } from '../components/SEO.jsx'
import VedicTraditionSection from '../components/VedicTraditionSection.jsx'

/**
 * Seetharama Gurukulam — Complete Homepage
 * Phase 2: Hero, Acharyas' Blessings, Sacred Trust Announcement (Preserved)
 * Phase 2.2: The Tradition of Vedic Learning, Life at the Gurukulam, Parayanam & Pooja, Moments at the Gurukulam, Final Enquiry CTA
 */
export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Sri Seetharama Gurukulam Trust — traditional Vedic learning in Krishna Yajur Veda, sacred parayanam and pooja services, and a warm welcome for parents, devotees, and donors."
        path="/"
        jsonLd={orgJsonLd}
      />

      {/* ─────────────────────────────────────────────────────────────
          PRESERVED SECTION: Editorial Hero (PDF Heading & Content)
         ───────────────────────────────────────────────────────────── */}
      <Hero
        eyebrow="Seetha Rama Gurukula Veda Patasala · Estd. 1996 · Alwarpet, Chennai"
        title="The Vedas – Eternal Glory of Our Tradition"
        subtitle="Founded in 1996 with two students under Veda Vidyalankara, Vidya Ratnam Sri V. Rajagopala Ganapatigal with the blessings of His Holiness Sri Paramacharyal of Sri Kanchi Kamakoti Peetam, imparting traditional Gurukula oral education in Krishna Yajur Veda."
        primary={{ label: 'Explore the Gurukulam', to: '/gurukulam' }}
        secondary={{ label: 'Admission Enquiry', to: '/contact' }}
      />

      {/* ─────────────────────────────────────────────────────────────
          PRESERVED SECTION: Blessings of His Holiness Sri Paramacharyal (Phase 2 Approved)
         ───────────────────────────────────────────────────────────── */}
      <AcharyaBlessings />

      {/* ─────────────────────────────────────────────────────────────
          PRESERVED SECTION: Sacred Trust Announcement & 5-Pillar Architecture (Phase 2 Approved)
         ───────────────────────────────────────────────────────────── */}
      <SacredTrustAnnouncement />

      {/* ─────────────────────────────────────────────────────────────
          PHASE 2.2 SECTION 01: The Tradition of Vedic Learning
          Asymmetric editorial layout, oral tradition, Shravanam & Smaranam
         ───────────────────────────────────────────────────────────── */}
      <VedicTraditionSection />

      {/* ─────────────────────────────────────────────────────────────
          PHASE 2.2 SECTION 02: Life at the Gurukulam
          Photographic storytelling composition, verified student welfare
         ───────────────────────────────────────────────────────────── */}
      <GurukulamLifeSection />

      {/* ─────────────────────────────────────────────────────────────
          PHASE 2.2 SECTION 03: Parayanam & Pooja
          Distinctive spiritual editorial composition, restrained palette
         ───────────────────────────────────────────────────────────── */}
      <ParayanamPoojaSection />

      {/* ─────────────────────────────────────────────────────────────
          PHASE 2.2 SECTION 04: Moments at the Gurukulam
          Asymmetric visual preview from gallery assets
         ───────────────────────────────────────────────────────────── */}
      <GurukulamMomentsSection />

      {/* ─────────────────────────────────────────────────────────────
          PHASE 2.2 SECTION 05: Final Enquiry CTA
          Visually strong closing addressing Parents & Devotees
         ───────────────────────────────────────────────────────────── */}
      <FinalEnquirySection />
    </>
  )
}
