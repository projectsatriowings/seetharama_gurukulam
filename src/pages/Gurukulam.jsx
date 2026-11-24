import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Flame,
  GraduationCap,
  HeartPulse,
  Luggage,
  MapPin,
  MessageCircle,
  Shirt,
  Sparkles,
  Volume2,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SEO from '../components/SEO.jsx'
import { site } from '../data/site.js'
import { vedaPatshala } from '../data/vedaPatshala.js'
import { whatsappLink } from '../utils/whatsapp.js'

/**
 * GURUKULAM & VEDA PATASALA PAGE
 * Completely Redesigned to Contemporary Vedic Editorial Standards.
 * Authoritative Source: SGT Folder file correction.pdf ONLY.
 * Content: Krishna Yajur Veda adhyayanam, oral tradition (Karna Parampara),
 * Swara & Pitch intonation, 10–12 years duration, Prayoga training,
 * proposed Srowtha classes, 5 verified free facilities, and awards/stipends.
 * Zero duplicate content, zero audit notes, 100% on-brand visual storytelling.
 */

// 5 Verified Facilities strictly from PDF
const verifiedFacilities = [
  {
    id: 'f1',
    title: 'Free Vedic Education',
    subtitle: 'Krishna Yajur Veda adhyayanam, Swara accuracy & Prayoga training',
    tag: '100% Free',
    icon: GraduationCap,
  },
  {
    id: 'f2',
    title: 'Free Boarding & Lodging',
    subtitle: 'Peaceful residential stay & satvik meals at Veda Bhavan, Alwarpet',
    tag: 'Included',
    icon: Building2,
  },
  {
    id: 'f3',
    title: 'Free Clothing',
    subtitle: 'Traditional vastrams and attire provided throughout the course tenure',
    tag: 'Provided',
    icon: Shirt,
  },
  {
    id: 'f4',
    title: 'Comprehensive Medical Care',
    subtitle: 'Prompt healthcare attention, doctor visits & medicines fully covered',
    tag: 'Covered',
    icon: HeartPulse,
  },
  {
    id: 'f5',
    title: 'Travelling Expenses',
    subtitle: 'Reimbursement of travel expenses for authorized visits to hometown',
    tag: 'Reimbursed',
    icon: Luggage,
  },
]

// 3 Core Pillars of Oral Vedic Pedagogy
const pedagogyPillars = [
  {
    id: 'karna-parampara',
    number: '०१',
    latinNumber: '01',
    title: 'Oral Chanting (Karna Parampara)',
    description:
      'Teaching is conducted entirely by oral chanting. Students learn through attentive hearing, repeating, and committing every sacred mantra to memory without reliance on written texts during adhyayanam.',
    icon: Volume2,
  },
  {
    id: 'swara-accuracy',
    number: '०२',
    latinNumber: '02',
    title: 'Strict Swara, Pitch & Meter',
    description:
      'Preserving the divine phonetic vibration with uncompromising precision across Udatta, Anudatta, and Svarita tones in the prescribed Shakhas of Krishna Yajur Veda.',
    icon: Sparkles,
  },
  {
    id: 'course-mastery',
    number: '०३',
    latinNumber: '03',
    title: '10 to 12 Years Course Tenure',
    description:
      'Normally takes 10 to 12 years of dedicated residential study under acharya guidance to attain complete scholarly mastery in one Vedic Shakha.',
    icon: Clock,
  },
]

export default function Gurukulam() {
  const { curriculum, prayogaTraining, proposedSrowthaClasses } = vedaPatshala
  const reduceMotion = useReducedMotion()

  const contactWhatsappUrl = whatsappLink(
    site.whatsappNumber,
    'Namaste, I would like to enquire about Vedic education and admissions at Seetha Rama Gurukula Veda Patasala.'
  )

  return (
    <>
      <SEO
        title="The Gurukulam & Veda Patasala — Krishna Yajur Veda Oral Education"
        description="Traditional Gurukula oral education in Krishna Yajur Veda: Karna Parampara chanting, Swara intonation, 10–12 years course, Prayoga training, and complete free residential facilities at Veda Bhavan, Alwarpet, Chennai."
        path="/gurukulam"
      />

      {/* ── 1. EDITORIAL VEDIC PAGE HERO ── */}
      <PageHero
        eyebrow="॥ गुरुकुल वेदाभ्यासः ॥ Guru-Shishya Parampara · Estd. 1996"
        title="Seetha Rama Gurukula Veda Patasala"
        description="Preserving and propagating Krishna Yajur Veda through traditional oral education under direct acharya guidance at Veda Bhavan, Alwarpet, Chennai."
      />

      {/* Trust Highlights Bar */}
      <div className="border-b border-gold-soft/50 bg-[#F4EBDC] py-4">
        <div className="site-container flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-maroon">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-saffron animate-pulse" />
            <span>Prescribed Shakhas of Krishna Yajur Veda</span>
          </span>
          <span className="hidden sm:inline-block h-3 w-px bg-gold-soft" />
          <span className="inline-flex items-center gap-2">
            <Award size={14} className="text-saffron-deep" />
            <span>10 to 12 Years Residential Course</span>
          </span>
          <span className="hidden sm:inline-block h-3 w-px bg-gold-soft" />
          <span className="inline-flex items-center gap-2">
            <Sparkles size={14} className="text-saffron-deep" />
            <span>100% Free Education, Boarding &amp; Clothing</span>
          </span>
        </div>
      </div>

      {/* ── 2. THE LIVING ORAL TRADITION (Karna Parampara Pedagogy) ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF5EC] via-[#F6EEE1] to-[#FAF5EC] py-16 sm:py-20 lg:py-24 border-b border-gold-soft/50 text-ink">
        <div className="pattern-kolam absolute inset-0 opacity-[0.06]" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-saffron/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="site-container relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Visual Photography Column (5 cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
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
                        src="/photos/gurukulam-hall-gathering.jpg"
                        alt="Vidyarthis gathered for daily oral Vedic adhyayanam in the patasala hall"
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
                          Daily Vedic Adhyayanam Class
                        </p>
                        <p className="text-[11px] text-cream/80">
                          Hearing, Repeating &amp; Committing to Memory
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-gold-soft/50 bg-cream/70 px-4 py-2.5 text-xs text-ink-soft">
                      <span className="flex items-center gap-1.5 font-medium">
                        <BookOpen size={14} className="text-saffron-deep" />
                        <span>Krishna Yajur Veda</span>
                      </span>
                      <span className="text-[11px] font-semibold text-maroon">Chennai – 600018</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Narrative & 3-Step Pedagogy Column (7 cols) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ivory/90 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-saffron-deep shadow-2xs backdrop-blur-xs">
                  <Sparkles size={12} className="text-saffron" aria-hidden="true" />
                  <span>Pattern of Vedic Education</span>
                </div>

                <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-maroon sm:text-4xl lg:text-[42px] leading-tight">
                  The Sacred Oral Tradition of <br className="hidden sm:inline" />
                  <span className="italic font-normal text-saffron-deep">Krishna Yajur Veda</span>
                </h2>

                <p className="mt-4 text-[15.5px] leading-relaxed text-ink-soft sm:text-[16.5px]">
                  The Vedas are the eternal glory of our tradition. In strict accordance with
                  authentic Gurukula oral Vedic education, learning is transmitted directly from the
                  Guru to the Shishya through hearing, repeating, and committing every sacred mantra to
                  memory with rigorous adherence to correct intonation and Swara / Pitch.
                </p>
              </Reveal>

              {/* 3 Pedagogy Pillars */}
              <div className="mt-8 space-y-3.5">
                {pedagogyPillars.map((pillar, idx) => {
                  const PillarIcon = pillar.icon
                  return (
                    <Reveal key={pillar.id} delay={0.1 + idx * 0.08}>
                      <div className="group rounded-xl border border-gold-soft/80 bg-ivory/95 p-4 sm:p-5 shadow-2xs transition-all duration-300 hover:border-gold hover:shadow-card hover:-translate-y-0.5">
                        <div className="flex items-start gap-3.5">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-saffron/10 text-maroon transition-transform duration-300 group-hover:scale-110">
                            <PillarIcon size={18} aria-hidden="true" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-serif text-base font-bold text-saffron-deep">
                                {pillar.number}
                              </span>
                              <h3 className="font-serif text-base sm:text-lg font-bold text-maroon">
                                {pillar.title}
                              </h3>
                            </div>
                            <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-ink-soft">
                              {pillar.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PRAYOGA TRAINING & PROPOSED SROWTHA STUDIES ── */}
      <section className="relative overflow-hidden bg-ivory py-16 sm:py-20 lg:py-24 border-b border-gold-soft/50 text-ink">
        <div className="site-container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-saffron-deep">
                Curriculum Scope &amp; Advanced Studies
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-maroon sm:text-4xl lg:text-[40px]">
                Applied Prayoga &amp; Srowtha Studies
              </h2>
              <p className="mt-3 text-sm text-ink-soft sm:text-base leading-relaxed">
                Equipping Vedic scholars to conduct sacred domestic and temple rituals while planning
                advanced initiatives in Srowtha Sastra.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Active Prayoga Training Card */}
            <Reveal delay={0.08}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-gold bg-cream/70 p-6 sm:p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-gold-soft/50">
                    <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft bg-ivory px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-saffron-deep">
                      <Sparkles size={13} className="text-saffron" aria-hidden="true" />
                      <span>Active Practical Curriculum</span>
                    </div>
                    <span className="font-serif text-xs font-semibold text-maroon">
                      Selected Students
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl font-bold text-maroon">
                    {prayogaTraining.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {prayogaTraining.description}
                  </p>

                  {/* Embedded Photo of Ceremonial Recitation */}
                  <div className="relative mt-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-gold-soft/70 bg-cream">
                    <img
                      src="/photos/veda-parayanam-recitation.jpg"
                      alt="Pandits and students performing ceremonial Veda Parayanam"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-maroon-dark/60 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    <span className="absolute bottom-2 left-3 rounded bg-ivory/95 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-maroon">
                      Practical Prayoga &amp; Parayanam
                    </span>
                  </div>

                  {/* Covered Functions */}
                  <div className="mt-6 pt-5 border-t border-gold-soft/50">
                    <p className="text-xs font-bold uppercase tracking-wider text-maroon">
                      Covered Vedic Functions &amp; Samskaras:
                    </p>
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {prayogaTraining.functions.map((fn) => (
                        <div
                          key={fn}
                          className="flex items-center gap-2 rounded-lg border border-gold-soft/60 bg-ivory/90 px-3 py-2 text-xs font-semibold text-ink shadow-2xs"
                        >
                          <CheckCircle2 size={14} className="text-saffron-deep shrink-0" />
                          <span>{fn}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gold-soft/40 text-xs text-ink-muted flex items-center justify-between">
                  <span>Conducted with traditional Vedic Swara</span>
                  <span className="font-semibold text-saffron-deep">Fidelity to Tradition</span>
                </div>
              </div>
            </Reveal>

            {/* Proposed Srowtha Classes Card */}
            <Reveal delay={0.16}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-gold-soft/80 bg-cream/70 p-6 sm:p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-elevated">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-gold-soft/50">
                    <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft bg-ivory px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-maroon">
                      <Clock size={13} className="text-gold" aria-hidden="true" />
                      <span>{proposedSrowthaClasses.status}</span>
                    </div>
                    <span className="text-[11px] font-semibold text-ink-muted">Under Planning</span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl font-bold text-maroon">
                    {proposedSrowthaClasses.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {proposedSrowthaClasses.description}
                  </p>

                  {/* Embedded Archival Photo for Srowtha & Higher Studies */}
                  <div className="relative mt-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-gold-soft/70 bg-cream">
                    <img
                      src="/photos/naimisharanya-mandapam-pandits.jpg"
                      alt="Vedic pandits and scholars gathered for Srowtha assemblies and higher studies"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-maroon-dark/60 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    <span className="absolute bottom-2 left-3 rounded bg-ivory/95 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-maroon">
                      Higher Vedic Studies &amp; Assemblies
                    </span>
                  </div>

                  {/* Sacred Srowtha Overview Box */}
                  <div className="mt-6 rounded-xl border border-gold/30 bg-ivory/80 p-5 shadow-2xs">
                    <div className="flex items-center gap-2 text-maroon text-xs font-bold uppercase tracking-wider">
                      <Flame size={14} className="text-saffron-deep" />
                      <span>Proposed Subject Areas:</span>
                    </div>

                    <ul className="mt-3 space-y-2.5">
                      {proposedSrowthaClasses.subjects.map((subj) => (
                        <li key={subj} className="flex items-center gap-2.5 text-xs sm:text-sm text-ink">
                          <CheckCircle2 size={15} className="text-gold-dark shrink-0" />
                          <span className="font-medium">{subj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 rounded-lg bg-gold/10 border border-gold/30 p-4 text-xs text-ink-soft leading-relaxed">
                    <p className="font-semibold text-maroon">Fulfilling the Trust Mandate:</p>
                    <p className="mt-1">
                      Designed to advance higher Vedic studies and produce erudite scholars to propagate
                      all four Vedas in accordance with the foundational charter of Seetha Rama Gurukulam
                      Trust.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gold-soft/40 text-xs text-ink-muted flex items-center justify-between">
                  <span>* Clearly distinguished as an institutional proposal</span>
                  <span className="font-semibold text-maroon">Higher Vedic Studies</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4. COMPLETE STUDENT WELFARE (100% Free of Cost) ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF5EC] via-[#F4EADA] to-[#FAF5EC] py-16 sm:py-20 lg:py-24 border-b border-gold-soft/50 text-ink">
        <div className="site-container">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Narrative Column (5 cols) */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ivory/95 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-saffron-deep shadow-2xs backdrop-blur-xs">
                  <Award size={13} className="text-saffron" aria-hidden="true" />
                  <span>Student Welfare &amp; Facilities</span>
                </div>

                <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-maroon sm:text-4xl lg:text-[40px] leading-tight">
                  Provided to Students <br />
                  <span className="italic font-normal text-saffron-deep">100% Free of Cost</span>
                </h2>

                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
                  In honoring the sacred tradition of Gurukula education, the Patasala provides every
                  enrolled student complete support throughout their 10 to 12-year course of study without
                  any fees whatsoever.
                </p>

                {/* Courtyard Photo */}
                <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-gold bg-cream shadow-card">
                  <img
                    src="/photos/gurukulam-courtyard-vidyarthis.jpg"
                    alt="Vidyarthis in the courtyard of Veda Bhavan patasala"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-maroon-dark/70 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-3 left-3 text-cream">
                    <p className="font-serif text-sm font-bold text-ivory">Campus Courtyard Assembly</p>
                    <p className="text-[11px] text-cream/80">Veda Bhavan · Alwarpet, Chennai</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Facilities Cards (7 cols) */}
            <div className="lg:col-span-7">
              <div className="space-y-3">
                {verifiedFacilities.map((facility, idx) => {
                  const FacilityIcon = facility.icon
                  return (
                    <Reveal key={facility.id} delay={idx * 0.06}>
                      <div className="group rounded-xl border border-gold-soft/80 bg-ivory/95 p-4 sm:p-5 shadow-2xs transition-all duration-300 hover:border-gold hover:shadow-card hover:-translate-y-0.5">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3.5">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-saffron/10 text-maroon transition-transform duration-300 group-hover:scale-110">
                              <FacilityIcon size={18} aria-hidden="true" />
                            </div>
                            <div>
                              <h3 className="font-serif text-base font-bold text-maroon">
                                {facility.title}
                              </h3>
                              <p className="mt-0.5 text-xs text-ink-soft leading-relaxed">
                                {facility.subtitle}
                              </p>
                            </div>
                          </div>
                          <span className="shrink-0 rounded-full border border-gold-soft bg-cream px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-saffron-deep">
                            {facility.tag}
                          </span>
                        </div>
                      </div>
                    </Reveal>
                  )
                })}
              </div>

              {/* Course Tenure Assurance */}
              <Reveal delay={0.35}>
                <div className="mt-6 rounded-xl border border-gold/40 bg-cream/70 p-4 sm:p-5 shadow-2xs text-xs text-ink-soft leading-relaxed flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-saffron-deep shrink-0" />
                  <span>
                    <strong>Comprehensive Residential Care:</strong> All boarding, satvik food, clothing,
                    medicines, and travel expenses are fully covered by Seetha Rama Gurukulam Trust.
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. VIDYA PURASKAR: COURSE COMPLETION RECOGNITION ── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-maroon via-maroon-dark to-maroon py-16 sm:py-20 text-cream">
        <div className="pattern-kolam absolute inset-0 opacity-[0.1]" aria-hidden="true" />
        <div className="site-container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-gold-soft">
                <Award size={14} className="text-saffron animate-pulse" aria-hidden="true" />
                <span>Vidya Puraskar &amp; Scholastic Honour</span>
              </div>

              <h2 className="mt-4 font-serif text-3xl font-bold text-ivory sm:text-4xl lg:text-[44px] leading-tight">
                Course Completion Recognition &amp; Higher Studies
              </h2>

              <p className="mt-4 text-[15.5px] sm:text-[17px] leading-relaxed text-cream/90 max-w-2xl mx-auto">
                {curriculum.completionRecognition}
              </p>

              {/* Prestige Badges */}
              <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-bold">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/25 px-4 py-2 text-gold-soft">
                  <Award size={14} className="text-saffron" />
                  <span>Cash Awards &amp; Medals</span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/25 px-4 py-2 text-gold-soft">
                  <CheckCircle2 size={14} className="text-saffron" />
                  <span>Merit Certificates Extended</span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/25 px-4 py-2 text-gold-soft">
                  <Sparkles size={14} className="text-saffron" />
                  <span>Stipends for Higher Studies</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  to="/admission"
                  className="group inline-flex items-center gap-2 rounded-xl bg-saffron px-6 py-3.5 font-sans text-sm font-bold text-maroon-dark shadow-md transition-all duration-300 hover:bg-[#f0a64a] hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-ivory"
                >
                  <span>Admission Enquiry &amp; Eligibility</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href={contactWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-gold/50 bg-ivory/10 px-6 py-3.5 font-sans text-sm font-semibold text-ivory backdrop-blur-xs transition hover:bg-ivory/20 focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <MessageCircle size={16} className="text-whatsapp" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
