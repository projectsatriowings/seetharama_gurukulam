import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Flame,
  MapPin,
  Sparkles,
  Volume2,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

/**
 * PHASE 2.2 / PDF CORRECTION — SECTION 01: THE TRADITION OF VEDIC LEARNING
 * Authoritative Source: SGT Folder file correction.pdf ONLY.
 * Content: Krishna Yajur Veda, Prescribed Shakhas, Gurukula oral Vedic education,
 * oral chanting, hearing, repeating, committing to memory, correct intonation and Swara / Pitch, Prayoga training.
 * Enhanced with modern fluid motion animations, interactive method spotlight, and dual-perspective photo showcase.
 */

// 3 Core Pillars strictly from PDF
const traditionPillars = [
  {
    id: 'oral-chanting',
    title: 'Oral Chanting & Memorising',
    subtitle: 'Karna Parampara (Hearing & Repeating)',
    description:
      'Teaching is conducted entirely by oral chanting — students learn through attentive hearing, repeating, and committing every mantra to memory without reliance on texts.',
    badge: '100% Oral Pedagogy',
    icon: Volume2,
    accent: 'from-[#E8871E]/20 to-[#C9A24B]/10',
    stat: 'Vedic Adhyayanam',
    details: 'Oral repetition under direct acharya supervision',
    image: '/photos/gurukulam-hall-gathering.jpg',
    imageCaption: 'Daily Oral Chanting & Adhyayanam at Veda Bhavan',
  },
  {
    id: 'swara-precision',
    title: 'Swara, Pitch & Intonation Rigor',
    subtitle: 'Prescribed Shakhas of Krishna Yajur Veda',
    description:
      'Every syllable is mastered with strict adherence to correct intonation, Swara, and Pitch, preserving the pristine phonetic resonance handed down through millennia.',
    badge: 'Phonetic Accuracy',
    icon: Sparkles,
    accent: 'from-[#C9A24B]/20 to-[#6B1D1D]/10',
    stat: 'Exact Swara & Pitch',
    details: 'Udatta, Anudatta & Svarita tonal precision',
    image: '/photos/acharya-teaching-session.jpg',
    imageCaption: 'Acharya guiding vidyarthis in precise Vedic Swara & Intonation',
  },
  {
    id: 'prayoga-training',
    title: 'Practical Prayoga Training',
    subtitle: 'Sacred Rituals & Vedic Rites',
    description:
      'Selected senior students receive hands-on practical training in Prayoga for Upanayanam, Vivaham, Seemantham, and other Vedic functions.',
    badge: 'Practical Application',
    icon: BookOpen,
    accent: 'from-[#6B1D1D]/20 to-[#E8871E]/10',
    stat: 'Prayoga Training',
    details: 'Upanayanam, Vivaham, Seemantham ceremonies',
    image: '/photos/veda-parayanam-recitation.jpg',
    imageCaption: 'Selected students in practical Prayoga and Veda Parayanam',
  },
]

export default function VedicTraditionSection() {
  const [activeTab, setActiveTab] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const reduceMotion = useReducedMotion()

  // Auto-cycle through pillars every 8s unless user is interacting
  useEffect(() => {
    if (isHovering || reduceMotion) return undefined
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % traditionPillars.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [isHovering, reduceMotion])

  const currentPillar = traditionPillars[activeTab]
  const CurrentIcon = currentPillar.icon

  return (
    <section
      id="vedic-tradition"
      aria-labelledby="vedic-tradition-heading"
      className="relative overflow-hidden bg-gradient-to-b from-[#FAF5EC] via-[#F4EBDC] to-[#FAF5EC] py-16 sm:py-20 lg:py-28 border-b border-gold-soft/50 text-ink"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Sacred Subtle Background Kolam & Texture */}
      <div className="pattern-kolam absolute inset-0 opacity-[0.07]" aria-hidden="true" />

      {/* Atmospheric Radial Glowing Orbs */}
      <div
        className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-saffron/10 blur-3xl animate-pulse"
        style={{ animationDuration: '7s' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="site-container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* ── LEFT COLUMN: EDITORIAL STORYTELLING & INTERACTIVE PILLARS (7 cols) ── */}
          <div className="lg:col-span-7">
            <Reveal>
              {/* Animated Audio-Wave Heritage Eyebrow */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-ivory/90 px-3.5 py-1.5 shadow-2xs backdrop-blur-xs">
                {/* Micro Audio Wave Sound Indicator */}
                <div className="flex items-center gap-0.5" aria-hidden="true">
                  <motion.span
                    className="h-3 w-0.5 rounded-full bg-saffron-deep"
                    animate={reduceMotion ? {} : { height: [4, 12, 6, 14, 4] }}
                    transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                  />
                  <motion.span
                    className="h-4 w-0.5 rounded-full bg-saffron"
                    animate={reduceMotion ? {} : { height: [8, 16, 6, 12, 8] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
                  />
                  <motion.span
                    className="h-2.5 w-0.5 rounded-full bg-gold"
                    animate={reduceMotion ? {} : { height: [5, 10, 14, 6, 5] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut', delay: 0.4 }}
                  />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-saffron-deep sm:text-xs">
                  Vedic Educational Tradition
                </span>
                <span className="h-1 w-1 rounded-full bg-gold-dark opacity-60" />
                <span className="text-[10px] font-semibold text-maroon/80 hidden sm:inline">
                  Oral Karna Parampara
                </span>
              </div>

              {/* Main Editorial Heading */}
              <h2
                id="vedic-tradition-heading"
                className="mt-4 font-serif text-3xl font-bold tracking-tight text-maroon sm:text-4xl lg:text-[44px] leading-[1.14]"
              >
                Gurukula Oral Vedic Education in <br className="hidden sm:inline" />
                <span className="italic font-normal text-saffron-deep">Krishna Yajur Veda</span>
              </h2>

              {/* Authoritative PDF Grounded Narrative */}
              <p className="mt-4 text-[15.5px] leading-relaxed text-ink-soft sm:text-[16.5px]">
                At Seetha Rama Gurukula Veda Patasala, education is imparted through the traditional
                Gurukula method in the prescribed Shakhas of{' '}
                <strong className="text-maroon font-semibold">Krishna Yajur Veda</strong>. Teaching
                is conducted entirely by oral chanting — students learn through attentive hearing,
                repeating, and committing every mantra to memory with strict adherence to correct
                intonation, Swara, and Pitch.
              </p>
            </Reveal>

            {/* ── INTERACTIVE METHOD SPOTLIGHT CARDS (Motion Tabs) ── */}
            <div className="mt-7 space-y-3">
              {traditionPillars.map((pillar, idx) => {
                const isSelected = activeTab === idx
                const PillarIcon = pillar.icon

                return (
                  <motion.button
                    key={pillar.id}
                    onClick={() => setActiveTab(idx)}
                    type="button"
                    className={`group relative w-full text-left rounded-xl p-3.5 sm:p-4 transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-saffron/40 ${
                      isSelected
                        ? 'border-gold bg-ivory shadow-card ring-1 ring-gold/50'
                        : 'border-gold-soft/50 bg-ivory/60 hover:bg-ivory/90 hover:border-gold-soft hover:shadow-2xs'
                    }`}
                    whileHover={{ scale: reduceMotion ? 1 : 1.008 }}
                    whileTap={{ scale: 0.995 }}
                  >
                    {/* Active Accent Glow Ribbon */}
                    {isSelected && (
                      <motion.div
                        layoutId="activePillarIndicator"
                        className="absolute inset-y-0 left-0 w-1 rounded-l-xl bg-gradient-to-b from-saffron to-maroon"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}

                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                            isSelected
                              ? 'bg-saffron text-ivory shadow-xs'
                              : 'bg-saffron/10 text-maroon group-hover:bg-saffron/20'
                          }`}
                        >
                          <PillarIcon size={18} aria-hidden="true" />
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <h3
                              className={`font-serif text-base font-bold leading-snug transition-colors ${
                                isSelected ? 'text-maroon' : 'text-ink group-hover:text-maroon'
                              }`}
                            >
                              {pillar.title}
                            </h3>
                            <span
                              className={`hidden sm:inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                                isSelected
                                  ? 'bg-saffron-deep/10 text-saffron-deep'
                                  : 'bg-gold-soft/30 text-ink-muted'
                              }`}
                            >
                              {pillar.badge}
                            </span>
                          </div>

                          <p className="mt-1 text-xs text-ink-soft leading-relaxed">
                            {pillar.description}
                          </p>

                          {isSelected && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2.5 flex items-center gap-2 text-[11px] font-semibold text-saffron-deep pt-2 border-t border-gold-soft/40"
                            >
                              <CheckCircle2 size={13} className="text-saffron-deep" />
                              <span>{pillar.details}</span>
                            </motion.div>
                          )}
                        </div>
                      </div>

                      <ChevronRight
                        size={16}
                        className={`shrink-0 transition-transform duration-200 mt-1 ${
                          isSelected
                            ? 'text-saffron-deep rotate-90'
                            : 'text-ink-muted opacity-40 group-hover:opacity-80 group-hover:translate-x-0.5'
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  </motion.button>
                )
              })}
            </div>

            {/* ── ACTION BUTTON & GURUKULA ASSURANCE ── */}
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/gurukulam"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-maroon via-maroon to-maroon-dark px-6 py-3 font-sans text-sm font-semibold text-cream shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-saffron focus:ring-offset-2"
                >
                  <span>Explore Gurukulam Curriculum</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  to="/admission"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-maroon hover:text-saffron-deep transition-colors"
                >
                  <span>Admission Enquiry &amp; Eligibility</span>
                  <ChevronRight size={13} />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* ── RIGHT COLUMN: CINEMATIC DUAL-PERSPECTIVE MEDIA STAGE (5 cols) ── */}
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Elegant Decorative Framed Backdrop with Gold Accents */}
                <div
                  className="absolute -inset-3 rounded-2xl border border-gold/40 bg-gradient-to-tr from-saffron/10 via-cream/40 to-gold/10 -rotate-1 hidden sm:block"
                  aria-hidden="true"
                />

                {/* Main Media Showcase Container */}
                <div className="relative overflow-hidden rounded-2xl border border-gold bg-ivory shadow-card">
                  {/* Image Display with AnimatePresence Smooth Fade */}
                  <div className="relative aspect-[4/3] sm:aspect-[5/4] w-full overflow-hidden bg-cream">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentPillar.id}
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="h-full w-full"
                      >
                        <img
                          src={currentPillar.image}
                          alt={currentPillar.imageCaption}
                          loading="lazy"
                          className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Gradient overlay for legibility */}
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-maroon-dark/85 via-maroon-dark/20 to-transparent"
                      aria-hidden="true"
                    />

                    {/* Top Floating Badge: Location */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-ivory/95 px-3 py-1 text-[10.5px] font-bold tracking-wider uppercase text-maroon backdrop-blur-md border border-gold-soft shadow-xs">
                      <MapPin size={11} className="text-saffron-deep" />
                      <span>Veda Bhavan, Alwarpet</span>
                    </div>

                    {/* Top Right Floating Indicator: Live Shakha Tag */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-maroon/90 px-2.5 py-1 text-[10px] font-semibold text-ivory backdrop-blur-md border border-gold/40 shadow-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-saffron animate-pulse" />
                      <span>Krishna Yajur Veda</span>
                    </div>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 text-cream">
                      <div className="flex items-center gap-1.5 text-saffron text-xs font-semibold">
                        <Flame size={12} className="text-saffron animate-pulse" />
                        <span>{currentPillar.stat}</span>
                      </div>
                      <p className="mt-0.5 font-serif text-sm sm:text-base font-bold tracking-wide text-ivory">
                        {currentPillar.imageCaption}
                      </p>
                    </div>
                  </div>

                  {/* Interactive Thumbnail Perspective Switcher */}
                  <div className="border-t border-gold-soft/50 bg-cream/70 p-3">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-ink-muted mb-2 px-1">
                      <span>View Tradition In Action:</span>
                      <span className="text-saffron-deep">{activeTab + 1} of 3</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {traditionPillars.map((p, idx) => {
                        const isCurrent = activeTab === idx
                        return (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => setActiveTab(idx)}
                            className={`group relative overflow-hidden rounded-lg border text-left transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-saffron ${
                              isCurrent
                                ? 'border-saffron ring-2 ring-saffron/30 scale-[1.02]'
                                : 'border-gold-soft/60 opacity-75 hover:opacity-100 hover:border-gold'
                            }`}
                          >
                            <div className="relative aspect-[16/10] w-full overflow-hidden">
                              <img
                                src={p.image}
                                alt={p.title}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              <div
                                className={`absolute inset-0 transition-colors ${
                                  isCurrent ? 'bg-transparent' : 'bg-maroon-dark/25'
                                }`}
                              />
                            </div>
                            <div
                              className={`p-1 text-center text-[10px] font-bold truncate transition-colors ${
                                isCurrent ? 'bg-maroon text-ivory' : 'bg-ivory/90 text-maroon'
                              }`}
                            >
                              {p.badge}
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Trust Footer Bar */}
                  <div className="flex items-center justify-between border-t border-gold-soft/40 bg-ivory px-4 py-2 text-xs text-ink-soft">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Award className="h-3.5 w-3.5 text-saffron-deep" aria-hidden="true" />
                      <span>Traditional Gurukula Method</span>
                    </span>
                    <span className="text-[11px] font-semibold text-saffron-deep">
                      Chennai – 600018
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
