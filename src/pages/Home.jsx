import AcharyaBlessings from '../components/AcharyaBlessings.jsx'
import Button from '../components/Button.jsx'
import GalleryGrid from '../components/GalleryGrid.jsx'
import GuidedEnquiry from '../components/GuidedEnquiry.jsx'
import Hero from '../components/Hero.jsx'
import Reveal from '../components/Reveal.jsx'
import SacredTrustAnnouncement from '../components/SacredTrustAnnouncement.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import SEO, { orgJsonLd } from '../components/SEO.jsx'
import TrustMission from '../components/TrustMission.jsx'
import VedicLearningRhythm from '../components/VedicLearningRhythm.jsx'
import { site } from '../data/site.js'

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Seetharama Gurukulam Trust — traditional Vedic learning, parayanam and pooja services, and a warm welcome for parents, devotees and donors."
        path="/"
        jsonLd={orgJsonLd}
      />

      {/* Phase 2: Editorial Hero */}
      <Hero
        eyebrow="Veda Patasala · Estd. 1996 · Alwarpet, Chennai"
        title="Preserving the Sacred Tradition of Vedic Learning"
        subtitle="Sri Seetharama Gurukulam is an authentic traditional Veda Patasala dedicated to the preservation of Krishna Yajur Veda adhyayanam and Dharma Shastras. Guided by the sacred Guru-Shishya Parampara, we nurture young vidyaarthis in a residential sanctuary of discipline, chanting, and devotion."
        primary={{ label: 'Explore the Gurukulam', to: '/gurukulam' }}
        secondary={{ label: 'Admission Enquiry', to: '/admission' }}
      />

      {/* Phase 2: Blessings of His Holiness Sri Paramacharyal (Immediately follows Hero) */}
      <AcharyaBlessings />

      {/* Phase 2: Sacred Trust Announcement & Institutional Introduction */}
      <SacredTrustAnnouncement />

      {/* The Rhythm of Vedic Learning (Oral Tradition: Shravanam, Ucharanam, Smaranam, Prayoga) */}
      <VedicLearningRhythm />

      {/* Our Mission (Heritage Manifesto & Six Trust Objectives) */}
      <TrustMission />

      {/* Begin with an Enquiry (Guided Multi-Pathway Enquiry Experience) */}
      <GuidedEnquiry />

      {/* Visual Glimpses of Gurukulam Life */}
      <section className="bg-ivory py-16 sm:py-20">
        <div className="site-container">
          <Reveal>
            <SectionHeading
              eyebrow="Glimpses"
              title="Life at the gurukulam"
              description="Festivals, classes, poojas and campus life."
            />
          </Reveal>
          <div className="mt-12">
            <GalleryGrid limit={6} />
          </div>
          <div className="mt-8 text-center">
            <Button to="/gallery" variant="secondary">
              View full gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Internal TODO: Testimonials omitted until authentic verified quotes are provided by the client */}

      {/* Final Devotional Call to Action Banner */}
      <section className="relative overflow-hidden bg-maroon py-16 text-center text-cream sm:py-20">
        <div className="pattern-kolam absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="site-container relative">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-serif text-4xl font-bold sm:text-5xl">Come, sit, listen — and be part of it.</h2>
            <p className="mt-4 text-cream/85">
              Whether you are seeking admission, a pooja, or a way to connect with the gurukulam, we would be glad to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button to="/contact" className="bg-saffron text-maroon-dark hover:bg-[#f0a64a]">
                Contact us
              </Button>
              <Button to="/admission" variant="light">
                Admission enquiry
              </Button>
            </div>
            <p className="mt-6 text-sm text-cream/70">
              {site.phoneDisplay} · {site.email}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
