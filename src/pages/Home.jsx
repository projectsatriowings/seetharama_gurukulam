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
          PRESERVED SECTION: Editorial Hero (Phase 2 Approved)
         ───────────────────────────────────────────────────────────── */}
      <Hero
        eyebrow="Veda Patasala · Estd. 1996 · Alwarpet, Chennai"
        title="Preserving the Sacred Tradition of Vedic Learning"
        subtitle="Sri Seetharama Gurukulam is an authentic traditional Veda Patasala dedicated to the preservation of Krishna Yajur Veda adhyayanam and Dharma Shastras. Guided by the sacred Guru-Shishya Parampara, we nurture young vidyaarthis in a residential sanctuary of discipline, chanting, and devotion."
        primary={{ label: 'Explore the Gurukulam', to: '/gurukulam' }}
        secondary={{ label: 'Admission Enquiry', to: '/admission' }}
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
