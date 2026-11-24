import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  Flame,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Scroll,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SEO from '../components/SEO.jsx'
import { site } from '../data/site.js'
import { vedaPatshala } from '../data/vedaPatshala.js'
import { whatsappLink } from '../utils/whatsapp.js'

/**
 * PRAYOGA & SROWTHA STUDIES PAGE
 * Completely Redesigned to Contemporary Vedic Editorial Standards.
 * Authoritative Source: SGT Folder file correction.pdf ONLY.
 * Content:
 * 1. Practical Prayoga Training for Selected Students (Upanayanam, Vivaham, Seemantham, etc.)
 * 2. Veda Parayanam & Living Recitation under Ganapatigals
 * 3. Proposed Srowtha Classes (Institutional Proposal for Vedic Rituals & Yagnas)
 * 4. Dedicated Direct Action Portals (Zero duplicate contact form; directs to /contact & WhatsApp)
 * Zero duplicate content, 100% on-brand visual storytelling.
 */

// 4 Verified Prayoga Functions strictly from PDF
const prayogaFunctions = [
  {
    id: 'upanayanam',
    title: 'Upanayanam',
    sanskritTitle: 'उपनयनम्',
    subtitle: 'Sacred Thread Ceremony & Brahmopadesam',
    description:
      'Comprehensive practical training in conducting the sacred thread investiture, Gayatri Upadesam, and traditional brahmachari observances.',
    tag: 'Sacred Samskara',
  },
  {
    id: 'vivaham',
    title: 'Vivaham',
    sanskritTitle: 'विवाहः',
    subtitle: 'Vedic Marriage Rites & Ceremonies',
    description:
      'Mastery of Vedic marriage rituals, Saptapadi, Laja Homam, and solemn vows recited with uncompromised fidelity to Vedic Swara and procedure.',
    tag: 'Vedic Rites',
  },
  {
    id: 'seemantham',
    title: 'Seemantham',
    sanskritTitle: 'सीमन्तम्',
    subtitle: 'Sacred Antenatal Samskara',
    description:
      'Prescribed prayers and traditional homams conducted for the spiritual well-being, longevity, and protection of mother and child.',
    tag: 'Auspicious Samskara',
  },
  {
    id: 'traditional-functions',
    title: 'Other Traditional Functions',
    sanskritTitle: 'वैदिक कृत्यानि',
    subtitle: 'Griha, Temple & Ancestral Observances',
    description:
      'Rigorous training in Ayushya Homam, Veda Parayanam, traditional pujas, and auspicious family ceremonies conducted strictly per tradition.',
    tag: 'Ritual Observance',
  },
]

// Core Facets distinguishing Prayoga from Adhyayanam
const prayogaFacets = [
  {
    title: 'Practical Ritual Simulation',
    description:
      'Hands-on rehearsal of homam procedures, kalasa sthapana, and ceremonial pacing under experienced Ganapatigals.',
    icon: Flame,
  },
  {
    title: 'Strict Swara in Application',
    description:
      'Ensuring that Vedic Swara, pitch, and intonation remain uncompromised even during complex multi-hour ceremonial rituals.',
    icon: Sparkles,
  },
  {
    title: 'Community Dharma Seva',
    description:
      'Preparing disciplined Vedic scholars who serve devotees and society with authentic, uncompromising traditional rites.',
    icon: Award,
  },
]

export default function ParayanamPooja() {
  const { prayogaTraining, proposedSrowthaClasses } = vedaPatshala
  const reduceMotion = useReducedMotion()

  const contactWhatsappUrl = whatsappLink(
    site.whatsappNumber,
    'Namaste, I would like to enquire about Prayoga training and spiritual studies at Seetha Rama Gurukulam Trust.'
  )

  return (
    <>
      <SEO
        title="Prayoga & Srowtha Studies — Sacred Vedic Praxis & Ritual Training"
        description="Practical Prayoga training in Upanayanam, Vivaham, Seemantham, and traditional functions for selected students, alongside proposed Srowtha classes under Seetha Rama Gurukulam Trust, Alwarpet, Chennai."
        path="/parayanam-pooja"
      />

      {/* ── 1. EDITORIAL VEDIC PAGE HERO ── */}
      <PageHero
        eyebrow="॥ प्रयोगः श्रौतं च ॥ Sacred Vedic Praxis &amp; Ritual Sciences"
        title="Prayoga Training &amp; Vedic Studies"
        description="Preparing selected students in sacred Vedic functions and developing advanced Srowtha studies under the Guru-Shishya Parampara at Veda Bhavan, Alwarpet."
      />

      {/* Trust Highlights Bar */}
      <div className="border-b border-gold-soft/50 bg-[#F4EBDC] py-4">
        <div className="site-container flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-maroon">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-saffron animate-pulse" />
            <span>Practical Prayoga for Selected Students</span>
          </span>
          <span className="hidden sm:inline-block h-3 w-px bg-gold-soft" />
          <span className="inline-flex items-center gap-2">
            <Sparkles size={14} className="text-saffron-deep" />
            <span>Upanayanam · Vivaham · Seemantham</span>
          </span>
          <span className="hidden sm:inline-block h-3 w-px bg-gold-soft" />
          <span className="inline-flex items-center gap-2">
            <Clock size={14} className="text-saffron-deep" />
            <span>Proposed Srowtha &amp; Yagna Studies</span>
          </span>
        </div>
      </div>

      {/* ── 2. PRACTICAL PRAYOGA TRAINING (Active Curriculum Showcase) ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF5EC] via-[#F6EEE1] to-[#FAF5EC] py-16 sm:py-20 lg:py-24 border-b border-gold-soft/50 text-ink">
        <div className="pattern-kolam absolute inset-0 opacity-[0.06]" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-saffron/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 w-full min-w-0 max-w-full">
            {/* Visual Photography Column (5 cols) */}
            <div className="w-full min-w-0 max-w-full lg:col-span-5 order-2 lg:order-1">
              <Reveal>
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Decorative Frame Offset */}
                  <div
                    className="absolute -inset-3 rounded-2xl border border-gold/40 bg-cream/40 -rotate-1 hidden sm:block"
                    aria-hidden="true"
                  />

                  <div className="relative overflow-hidden rounded-2xl border border-gold bg-ivory shadow-card">
                    <div className="relative aspect-[4/3] sm:aspect-[5/4] w-full overflow-hidden bg-cream">
                      <img
                        src="/photos/veda-parayanam-recitation.jpg"
                        alt="Pandits and vidyarthis engaged in ceremonial Veda Parayanam and ritual training"
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-maroon-dark/80 via-transparent to-transparent"
                        aria-hidden="true"
                      />
                      <div className="absolute top-3 left-3 rounded-full bg-ivory/95 px-3 py-1 text-[10.5px] font-bold tracking-wider uppercase text-maroon backdrop-blur-xs border border-gold-soft shadow-xs flex items-center gap-1.5">
                        <MapPin size={11} className="text-saffron-deep" />
                        <span>Veda Bhavan · Alwarpet</span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 text-cream">
                        <p className="font-serif text-sm sm:text-base font-bold text-ivory">
                          Veda Parayanam &amp; Prayoga Session
                        </p>
                        <p className="text-[11px] text-cream/80">
                          Practical Simulation Under Experienced Ganapatigals
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-gold-soft/50 bg-cream/70 px-4 py-2.5 text-xs text-ink-soft">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Sparkles size={14} className="text-saffron-deep" />
                        <span>Active Training</span>
                      </span>
                      <span className="text-[11px] font-semibold text-maroon">Selected Students</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Narrative & Context Column (7 cols) */}
            <div className="w-full min-w-0 max-w-full lg:col-span-7 order-1 lg:order-2">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ivory/90 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-saffron-deep shadow-2xs backdrop-blur-xs">
                  <Flame size={12} className="text-saffron" aria-hidden="true" />
                  <span>Practical Vedic Praxis</span>
                </div>

                <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-maroon sm:text-4xl lg:text-[42px] leading-tight">
                  Prayoga Training for <br className="hidden sm:inline" />
                  <span className="italic font-normal text-saffron-deep">Selected Senior Students</span>
                </h2>

                <p className="mt-4 text-[15.5px] leading-relaxed text-ink-soft sm:text-[16.5px]">
                  In addition to rigorous Krishna Yajur Veda adhyayanam, the Patasala imparts specialized
                  Prayoga training to selected students. This practical training equips scholars with
                  the hands-on competence to conduct sacred Vedic functions with precise Mantras, Swara,
                  and authentic traditional procedures.
                </p>

                {/* 3 Pedagogy Distinction Badges */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {prayogaFacets.map((facet) => {
                    const FacetIcon = facet.icon
                    return (
                      <div
                        key={facet.title}
                        className="rounded-xl border border-gold-soft/80 bg-ivory/95 p-3.5 shadow-2xs"
                      >
                        <FacetIcon size={18} className="text-saffron-deep" />
                        <h3 className="mt-2 font-serif text-sm font-bold text-maroon leading-tight">
                          {facet.title}
                        </h3>
                        <p className="mt-1 text-[11px] leading-relaxed text-ink-soft">
                          {facet.description}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </Reveal>
            </div>
          </div>

          {/* ── 4 SACRED FUNCTIONS GRID ── */}
          <div className="mt-14">
            <Reveal delay={0.1}>
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-saffron-deep">
                  Covered Functions
                </span>
                <h3 className="mt-1.5 font-serif text-2xl font-bold text-maroon sm:text-3xl">
                  Sacred Samskaras &amp; Ceremonies Taught
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-ink-soft">
                  Senior students master the step-by-step procedures, vidhis, and accurate chanting for each observance.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {prayogaFunctions.map((fn, idx) => (
                <Reveal key={fn.id} delay={0.12 + idx * 0.06}>
                  <motion.div
                    className="group relative flex h-full flex-col justify-between rounded-2xl border border-gold-soft/80 bg-ivory/95 p-5 shadow-2xs transition-all duration-300 hover:border-gold hover:shadow-card hover:-translate-y-1"
                    whileHover={reduceMotion ? {} : { y: -4 }}
                  >
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-gold-soft/40">
                        <span className="font-serif text-base font-bold text-saffron-deep">
                          {fn.sanskritTitle}
                        </span>
                        <span className="rounded-full border border-gold-soft/60 bg-cream px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-maroon">
                          {fn.tag}
                        </span>
                      </div>

                      <h4 className="mt-3 font-serif text-lg font-bold text-maroon">
                        {fn.title}
                      </h4>
                      <p className="mt-0.5 text-[11px] font-semibold text-saffron-deep">
                        {fn.subtitle}
                      </p>
                      <p className="mt-2 text-xs text-ink-soft leading-relaxed">
                        {fn.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gold-soft/30 flex items-center gap-1.5 text-[11px] font-semibold text-maroon">
                      <CheckCircle2 size={13} className="text-saffron-deep" />
                      <span>Fidelity to Vedic Swara</span>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PROPOSED SROWTHA CLASSES (Advanced Institutional Vision) ── */}
      <section className="relative overflow-hidden bg-ivory py-16 sm:py-20 lg:py-24 border-b border-gold-soft/50 text-ink">
        <div className="site-container">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="group relative overflow-hidden rounded-3xl border border-gold bg-gradient-to-br from-cream/90 via-ivory to-cream/70 p-7 sm:p-10 shadow-card">
                {/* Background Kolam Watermark */}
                <div className="pattern-kolam absolute inset-0 opacity-[0.05]" aria-hidden="true" />

                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-gold-soft/60">
                    <div className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-ivory px-4 py-1 text-xs font-bold uppercase tracking-wider text-maroon shadow-2xs">
                      <Clock size={13} className="text-saffron" aria-hidden="true" />
                      <span>{proposedSrowthaClasses.status}</span>
                    </div>
                    <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-maroon">
                      Future Educational Initiative
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-maroon">
                    {proposedSrowthaClasses.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink-soft max-w-3xl">
                    {proposedSrowthaClasses.description}
                  </p>

                  {/* Proposed Subject Areas Grid */}
                  <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {proposedSrowthaClasses.subjects.map((subj) => (
                      <div
                        key={subj}
                        className="flex items-center gap-2.5 rounded-xl border border-gold-soft/80 bg-ivory/95 p-4 shadow-2xs"
                      >
                        <Flame size={16} className="text-saffron-deep shrink-0" />
                        <span className="font-serif text-sm font-bold text-maroon">{subj}</span>
                      </div>
                    ))}
                  </div>

                  {/* Trust Charter Alignment Note */}
                  <div className="mt-8 rounded-2xl border border-gold/40 bg-gold/10 p-5 text-xs sm:text-sm text-ink-soft leading-relaxed flex items-start gap-3">
                    <ShieldCheck size={20} className="text-maroon shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-maroon">Charter Mandate &amp; Vision:</p>
                      <p className="mt-0.5">
                        In accordance with the foundational aims of Seetha Rama Gurukulam Trust, this initiative aims to advance higher Srowtha Sastra research and produce erudite scholars capable of preserving and propagating all four Vedas.
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-[11px] text-ink-muted italic">
                    * Clearly distinguished as an institutional proposal currently under planning and not yet open for routine public enrolment.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4. DIRECT CONNECTION & INQUIRIES (Zero Duplicate Form) ── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-maroon via-maroon-dark to-maroon py-16 sm:py-20 text-cream">
        <div className="pattern-kolam absolute inset-0 opacity-[0.1]" aria-hidden="true" />
        <div className="site-container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-gold-soft">
                <Sparkles size={14} className="text-saffron animate-pulse" aria-hidden="true" />
                <span>Devotee Connection &amp; Inquiries</span>
              </div>

              <h2 className="mt-4 font-serif text-3xl font-bold text-ivory sm:text-4xl lg:text-[42px] leading-tight">
                Connect Regarding Prayoga &amp; Studies
              </h2>

              <p className="mt-3 text-[15px] sm:text-base leading-relaxed text-cream/90 max-w-2xl mx-auto">
                Devotees, patrons, and well-wishers seeking guidance regarding Prayoga training, traditional observances, or wishing to support our Vedic education mission are invited to connect directly with the Trust administrators.
              </p>

              {/* Verified Contact Details Badges */}
              <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-semibold">
                <a
                  href={`tel:${site.phoneTel}`}
                  className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/25 px-4 py-2 text-gold-soft hover:text-ivory hover:border-gold transition"
                >
                  <Phone size={14} className="text-saffron" />
                  <span>Telephone: {site.phoneDisplay}</span>
                </a>

                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/25 px-4 py-2 text-gold-soft hover:text-ivory hover:border-gold transition"
                >
                  <Mail size={14} className="text-saffron" />
                  <span>{site.email}</span>
                </a>

                <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/25 px-4 py-2 text-gold-soft">
                  <MapPin size={14} className="text-saffron" />
                  <span>Veda Bhavan, Alwarpet</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href={contactWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl bg-saffron px-6 py-3.5 font-sans text-sm font-bold text-maroon-dark shadow-md transition-all duration-300 hover:bg-[#f0a64a] hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-ivory"
                >
                  <MessageCircle size={17} className="text-maroon-dark" />
                  <span>Chat on WhatsApp</span>
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>

              {/* 80-G Tax Notice */}
              <p className="mt-8 text-xs text-gold-soft/80">
                Contributions to Seetha Rama Gurukulam Trust are eligible for tax exemption under Section 80-G of the Income Tax Act.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
