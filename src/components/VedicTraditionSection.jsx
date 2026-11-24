import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Flame,
  GraduationCap,
  Sparkles,
  Volume2,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

/**
 * SECTION 01: THE TRADITION OF VEDIC LEARNING
 * Authoritative Source: SGT Folder file correction.pdf ONLY.
 * Content: Gurukula Oral Vedic Education in Krishna Yajur Veda.
 * Unique Design: 3-Card Sacred Bento Pavilion with distinct interactive motion cards,
 * acoustic soundwave visualizations, embedded authentic photography, and zero repetition
 * with neighboring sections.
 */

const traditionPillars = [
  {
    id: 'oral-pedagogy',
    number: '०१',
    latinNumber: '01',
    category: 'Oral Pedagogy',
    title: 'Oral Chanting & Memorising',
    subtitle: 'Karna Parampara · Ear-to-Ear Transmission',
    description:
      'Teaching is conducted entirely by oral chanting — students learn through attentive hearing, repeating, and committing every sacred mantra to memory without reliance on texts.',
    highlights: [
      'Attentive hearing & repeating',
      'Direct acharya supervision',
      'No manuscripts during chanting',
    ],
    image: '/photos/gurukulam-hall-gathering.jpg',
    imageAlt: 'Students seated for oral Vedic adhyayanam in the Patasala hall',
    badge: 'Oral Karna Parampara',
    icon: Volume2,
    hasSoundwave: true,
  },
  {
    id: 'swara-intonation',
    number: '०२',
    latinNumber: '02',
    category: 'Phonetic Accuracy',
    title: 'Strict Swara, Pitch & Meter',
    subtitle: 'Prescribed Shakhas of Krishna Yajur Veda',
    description:
      'Every syllable is mastered with strict adherence to correct intonation, Swara, and Pitch, preserving the pristine phonetic resonance and Vedic vibration passed down through generations.',
    highlights: [
      'Prescribed Shakhas of Krishna Yajur Veda',
      'Udatta, Anudatta & Svarita precision',
      'Uncompromising tonal fidelity',
    ],
    image: '/photos/acharya-parayanam-recitation.jpg',
    imageAlt: 'Acharya guiding vidyarthis with exact Swara intonation',
    badge: 'Phonetic Precision',
    icon: Sparkles,
    featured: true,
  },
  {
    id: 'prayoga-training',
    number: '०३',
    latinNumber: '03',
    category: 'Applied Praxis',
    title: 'Hands-on Prayoga Training',
    subtitle: 'Vedic Rites & Sacred Ceremonies',
    description:
      'Selected senior students receive rigorous practical training in Prayoga for conducting sacred Vedic functions such as Upanayanam, Vivaham, Seemantham, and ritual observances.',
    highlights: [
      'Selected student practical training',
      'Upanayanam, Vivaham & Seemantham',
      'Traditional ritual performance',
    ],
    image: '/photos/veda-parayanam-recitation.jpg',
    imageAlt: 'Vedic pandits and students in ceremonial Prayoga chanting',
    badge: 'Practical Prayoga',
    icon: BookOpen,
  },
]

export default function VedicTraditionSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="vedic-tradition"
      aria-labelledby="vedic-tradition-heading"
      className="relative overflow-hidden bg-gradient-to-b from-[#FAF5EC] via-[#F4EADA] to-[#FAF5EC] py-16 sm:py-20 lg:py-24 border-b border-gold-soft/50 text-ink"
    >
      {/* Sacred Traditional Kolam Background Motif */}
      <div className="pattern-kolam absolute inset-0 opacity-[0.06]" aria-hidden="true" />

      {/* Atmospheric Ambient Glow Orbs */}
      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-saffron/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="site-container relative z-10">
        {/* ── SECTION HEADER: CENTERED EDITORIAL HEROIC TITLE ── */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-ivory/95 px-4 py-1.5 shadow-2xs backdrop-blur-xs">
              <span className="flex h-2 w-2 rounded-full bg-saffron animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-saffron-deep sm:text-xs">
                Vedic Educational Tradition
              </span>
              <span className="h-1 w-1 rounded-full bg-gold opacity-60" />
              <span className="font-serif text-xs font-semibold text-maroon hidden sm:inline">
                ॥ कर्णपरम्परा ॥
              </span>
            </div>

            <h2
              id="vedic-tradition-heading"
              className="mt-4 font-serif text-3xl font-bold tracking-tight text-maroon sm:text-4xl lg:text-[46px] leading-[1.15]"
            >
              Gurukula Oral Vedic Education in{' '}
              <span className="italic font-normal text-saffron-deep block sm:inline">
                Krishna Yajur Veda
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft sm:text-[16.5px]">
              At Seetha Rama Gurukula Veda Patasala, education is imparted through the traditional
              Gurukula method in the prescribed Shakhas of{' '}
              <strong className="text-maroon font-semibold">Krishna Yajur Veda</strong>. Teaching is
              conducted entirely by oral chanting — students learn through attentive hearing,
              repeating, and committing every mantra to memory with strict adherence to correct
              intonation, Swara, and Pitch.
            </p>

            {/* Credential Tags */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-maroon">
              <span className="rounded-full border border-gold-soft bg-ivory/80 px-3 py-1 shadow-2xs">
                Prescribed Shakhas
              </span>
              <span className="rounded-full border border-gold-soft bg-ivory/80 px-3 py-1 shadow-2xs">
                100% Oral Pedagogy
              </span>
              <span className="rounded-full border border-gold-soft bg-ivory/80 px-3 py-1 shadow-2xs">
                Free Residential Gurukulam
              </span>
            </div>
          </Reveal>
        </div>

        {/* ── 3-CARD SACRED BENTO SHOWCASE (Completely Unique Architecture) ── */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-7 w-full min-w-0 max-w-full">
          {traditionPillars.map((pillar, idx) => {
            const PillarIcon = pillar.icon
            const isFeatured = pillar.featured

            return (
              <Reveal key={pillar.id} delay={idx * 0.1}>
                <motion.div
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isFeatured
                      ? 'border-gold bg-ivory shadow-card ring-1 ring-gold/40'
                      : 'border-gold-soft/70 bg-ivory/90 hover:border-gold hover:shadow-card'
                  }`}
                  whileHover={reduceMotion ? {} : { y: -5 }}
                >
                  {/* Top Featured Ribbon Accent */}
                  {isFeatured && (
                    <div className="bg-gradient-to-r from-maroon via-saffron-deep to-maroon px-4 py-1 text-center text-[10.5px] font-bold uppercase tracking-widest text-ivory">
                      Foundational Vedic Standard
                    </div>
                  )}

                  <div className="p-5 sm:p-6">
                    {/* Header: Number, Category & Icon */}
                    <div className="flex items-center justify-between pb-4 border-b border-gold-soft/40">
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-2xl font-bold text-saffron-deep">
                          {pillar.number}
                        </span>
                        <span className="text-[10.5px] font-bold uppercase tracking-wider text-ink-muted">
                          {pillar.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Live Soundwave Equalizer for Oral Chanting */}
                        {pillar.hasSoundwave && (
                          <div
                            className="flex items-center gap-0.5 rounded-full bg-saffron/10 px-2 py-1"
                            aria-hidden="true"
                          >
                            <motion.span
                              className="h-2.5 w-0.5 rounded-full bg-saffron-deep"
                              animate={reduceMotion ? {} : { height: [3, 11, 4, 13, 3] }}
                              transition={{ repeat: Infinity, duration: 1.3, ease: 'easeInOut' }}
                            />
                            <motion.span
                              className="h-3.5 w-0.5 rounded-full bg-saffron"
                              animate={reduceMotion ? {} : { height: [7, 15, 5, 11, 7] }}
                              transition={{ repeat: Infinity, duration: 1.1, ease: 'easeInOut', delay: 0.15 }}
                            />
                            <motion.span
                              className="h-2 w-0.5 rounded-full bg-gold"
                              animate={reduceMotion ? {} : { height: [4, 9, 12, 5, 4] }}
                              transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut', delay: 0.3 }}
                            />
                          </div>
                        )}

                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-saffron/10 text-maroon transition-transform duration-300 group-hover:scale-110">
                          <PillarIcon size={16} aria-hidden="true" />
                        </div>
                      </div>
                    </div>

                    {/* Integrated Authentic Photo Card (Embedded directly inside card) */}
                    <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-xl border border-gold-soft/60 bg-cream">
                      <img
                        src={pillar.image}
                        alt={pillar.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-106"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-maroon-dark/70 via-transparent to-transparent"
                        aria-hidden="true"
                      />
                      <span className="absolute bottom-2 left-2.5 rounded-md bg-ivory/95 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-maroon backdrop-blur-xs border border-gold-soft shadow-xs">
                        {pillar.badge}
                      </span>
                    </div>

                    {/* Card Title & Subtitle */}
                    <div className="mt-4">
                      <h3 className="font-serif text-lg font-bold text-maroon sm:text-xl leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="mt-0.5 text-[11px] font-semibold text-saffron-deep">
                        {pillar.subtitle}
                      </p>
                      <p className="mt-2.5 text-xs text-ink-soft leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Highlight Bullets */}
                    <ul className="mt-4 space-y-1.5 pt-3 border-t border-gold-soft/30 text-[11.5px] text-ink">
                      {pillar.highlights.map((point) => (
                        <li key={point} className="flex items-center gap-2">
                          <CheckCircle2 size={13} className="shrink-0 text-saffron-deep" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom Micro-Footer */}
                  <div className="border-t border-gold-soft/40 bg-cream/50 px-5 py-2.5 text-[11px] font-medium text-ink-muted flex items-center justify-between">
                    <span>Authentic Gurukula Method</span>
                    <span className="text-saffron-deep font-semibold">Veda Bhavan</span>
                  </div>
                </motion.div>
              </Reveal>
            )
          })}
        </div>

        {/* ── BOTTOM CALL-TO-ACTION HORIZON STRIP ── */}
        <Reveal delay={0.25}>
          <div className="mt-12 rounded-2xl border border-gold/40 bg-gradient-to-r from-maroon via-maroon-dark to-maroon p-6 sm:p-8 text-cream shadow-warm flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-saffron text-xs font-bold uppercase tracking-wider">
                <Flame size={14} className="animate-pulse" />
                <span>10 to 12-Year Krishna Yajur Veda Course</span>
              </div>
              <h3 className="mt-1 font-serif text-xl sm:text-2xl font-bold text-ivory">
                Experience Traditional Veda Adhyayanam at Veda Bhavan
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-cream/80 max-w-2xl leading-relaxed">
                Imparted free of cost under direct acharya guidance with residential facilities, satvik
                food, and traditional discipline in Alwarpet, Chennai.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap items-center gap-3 w-full md:w-auto">
              <Link
                to="/gurukulam"
                className="group inline-flex flex-1 md:flex-initial items-center justify-center gap-2 rounded-xl bg-saffron px-5 py-3 font-sans text-xs sm:text-sm font-bold text-maroon-dark shadow-sm transition-all duration-300 hover:bg-[#f0a64a] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-ivory"
              >
                <span>Curriculum &amp; Life</span>
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex flex-1 md:flex-initial items-center justify-center gap-2 rounded-xl border border-gold/50 bg-ivory/10 px-5 py-3 font-sans text-xs sm:text-sm font-semibold text-ivory backdrop-blur-xs transition hover:bg-ivory/20 focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <span>Admission Enquiry</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
