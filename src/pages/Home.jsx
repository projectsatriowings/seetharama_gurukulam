import AcharyaBlessings from '../components/AcharyaBlessings.jsx'
import Button from '../components/Button.jsx'
import GalleryGrid from '../components/GalleryGrid.jsx'
import GuidedEnquiry from '../components/GuidedEnquiry.jsx'
import Hero from '../components/Hero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import SEO, { orgJsonLd } from '../components/SEO.jsx'
import TestimonialCarousel from '../components/TestimonialCarousel.jsx'
import TrustMission from '../components/TrustMission.jsx'
import VedicLearningRhythm from '../components/VedicLearningRhythm.jsx'
import { site } from '../data/site.js'

export default function Home() {
  return (
    <>
      <SEO description="Seetharama Gurukulam Trust — traditional Vedic learning, parayanam and pooja services, and a warm welcome for parents, devotees and donors." path="/" jsonLd={orgJsonLd} />
      <Hero
        title="Preserving the Timeless Wisdom of the Vedas"
        subtitle="A sacred institution founded under the divine command and blessings of His Holiness Sri Paramacharyal of Kanchi — imparting authentic Krishna Yajur Veda adhyayanam, Sanskrit, and Shastras with discipline, devotion, and care."
        primary={{ label: 'Explore the Gurukulam', to: '/gurukulam' }}
        secondary={{ label: 'Admission Enquiry', to: '/admission' }}
      />

      {/* Phase 2.1 — Blessings of His Holiness Sri Paramacharyal */}
      <AcharyaBlessings />

      {/* Phase 3 — Section 1: A Day at the Gurukulam (The Rhythm of Vedic Learning) */}
      <VedicLearningRhythm />

      {/* Phase 3 — Section 2: Our Mission (Heritage Manifesto & Six Trust Objectives) */}
      <TrustMission />

      {/* Phase 3 — Section 3: Begin with an Enquiry (Guided Enquiry Experience) */}
      <GuidedEnquiry />

      <section className="bg-ivory py-16 sm:py-20">
        <div className="site-container">
          <Reveal><SectionHeading eyebrow="Glimpses" title="Life at the gurukulam" description="Festivals, classes, poojas and campus life." /></Reveal>
          <div className="mt-12"><GalleryGrid limit={6} /></div>
          <div className="mt-8 text-center"><Button to="/gallery" variant="secondary">View full gallery</Button></div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="site-container">
          <Reveal><SectionHeading eyebrow="Kind words" title="What families and devotees say" /></Reveal>
          <div className="mt-10"><TestimonialCarousel /></div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-maroon py-16 text-center text-cream sm:py-20">
        <div className="pattern-kolam absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="site-container relative">
          <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-4xl font-bold sm:text-5xl">Come, sit, listen — and be part of it.</h2>
          <p className="mt-4 text-cream/85">Whether you are seeking admission, a pooja, or a way to connect with the gurukulam, we would be glad to hear from you.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/contact" className="bg-saffron text-maroon-dark hover:bg-[#f0a64a]">Contact us</Button>
            <Button to="/admission" variant="light">Admission enquiry</Button>
          </div>
          <p className="mt-6 text-sm text-cream/70">{site.phoneDisplay} · {site.email}</p>
          </div>
        </div>
      </section>
    </>
  )
}
