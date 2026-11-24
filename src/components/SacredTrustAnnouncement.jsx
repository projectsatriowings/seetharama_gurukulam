import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion'
import {
  ArrowRight,
  Award,
  BookOpen,
  Building,
  CheckCircle2,
  Heart,
  History,
  Library,
  MapPin,
  Scroll,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

// Verified Aims & Objectives strictly from SGT Folder file correction.pdf
const officialObjectives = [
  {
    id: 'obj-1',
    number: '01',
    sanskritNumber: '०१',
    shortTitle: 'Vedic Sciences',
    title: 'Vedic Sciences & Sastras',
    description:
      'To impart Vedic Sciences and Sastras in the traditional Gurukulam method and other related subjects in depth, conducting daily classes, holding meetings and publishing books.',
    icon: BookOpen,
    accent: 'from-[#E8871E]/20 to-[#C9A24B]/10',
    tags: ['Daily Classes', 'Traditional Gurukulam Method', 'Publishing Books'],
    milestone: 'In-Depth Sastra Adhyayanam',
  },
  {
    id: 'obj-2',
    number: '02',
    sanskritNumber: '०२',
    shortTitle: 'Veda Patasalas',
    title: 'Veda Patasalas Nationwide',
    description:
      'To establish, maintain and run Gurukula Veda Patasalas in various parts of the country and produce Vedic scholars to propagate all four Vedas.',
    icon: Building,
    accent: 'from-[#C9A24B]/20 to-[#E8871E]/10',
    tags: ['Nationwide Patasalas', 'Four Vedas Propagation', 'Vedic Scholars'],
    milestone: 'Institutional Network',
  },
  {
    id: 'obj-3',
    number: '03',
    sanskritNumber: '०३',
    shortTitle: 'Spiritual Studies',
    title: 'Spiritual Studies for the Public',
    description:
      'To encourage spiritual studies by augmenting spiritual training centres for the general public.',
    icon: Users,
    accent: 'from-[#E8871E]/20 to-[#6B1D1D]/10',
    tags: ['Training Centres', 'General Public', 'Spiritual Encouragement'],
    milestone: 'Public Spiritual Outreach',
  },
  {
    id: 'obj-4',
    number: '04',
    sanskritNumber: '०४',
    shortTitle: 'Sacred Libraries',
    title: 'Libraries for Students & Scholars',
    description:
      'To establish and maintain libraries for students, scholars and the general public.',
    icon: Library,
    accent: 'from-[#C9A24B]/20 to-[#380E0E]/10',
    tags: ['Reference Libraries', 'Students & Scholars', 'Vedic Preservation'],
    milestone: 'Knowledge Repositories',
  },
  {
    id: 'obj-5',
    number: '05',
    sanskritNumber: '०५',
    shortTitle: 'Social Seva',
    title: 'Support for Social Institutions',
    description:
      'To provide help to institutions such as homes for the aged, disabled, orphaned, handicapped people and poor children.',
    icon: Heart,
    accent: 'from-[#6B1D1D]/20 to-[#E8871E]/10',
    tags: ['Homes for the Aged', 'Disabled & Orphaned', 'Care for Poor Children'],
    milestone: 'Compassionate Seva',
  },
]

// Verified Chronology Milestones from PDF
const milestones = [
  {
    year: '1996',
    title: 'Patasala Founded',
    subtitle: 'Started with 2 students under Sri V. Rajagopala Ganapatigal with the blessings of Sri Paramacharyal',
    icon: History,
  },
  {
    year: '2008',
    title: 'Trust Registered',
    subtitle: 'Constituted as a Non-Profitable Charitable Trust under the Indian Trusts Act as directed by Sri Aacharyal',
    icon: ShieldCheck,
  },
  {
    year: 'Today',
    title: 'Veda Bhavan, Alwarpet',
    subtitle: 'Brahmasri R. Srikrishna Ganapatigal carries forward the sacred work of his father and guru',
    icon: MapPin,
  },
]

export default function SacredTrustAnnouncement() {
  const [activeTab, setActiveTab] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [mounted, setMounted] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Auto-cycle through objectives every 7s unless hovered
  useEffect(() => {
    if (isHovering || reduceMotion) return undefined
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % officialObjectives.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [isHovering, reduceMotion])

  const activeObj = officialObjectives[activeTab]
  const ActiveIcon = activeObj.icon

  return (
    <section
      id="sacred-trust-announcement"
      aria-labelledby="trust-announcement-heading"
      className="relative overflow-hidden bg-gradient-to-b from-[#FAF5EC] via-[#F6EEE1] to-[#FAF5EC] py-16 sm:py-20 lg:py-28 border-b border-gold-soft/50 text-ink"
    >
      {/* Decorative Traditional Kolam Background Motif */}
      <div className="pattern-kolam absolute inset-0 opacity-[0.08]" aria-hidden="true" />

      {/* Radiant Atmospheric Glow Orbs */}
      <div
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-saffron/8 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="site-container relative z-10">
        {/* ── PART 1: INSTITUTIONAL HERITAGE & HEROIC MILESTONE ── */}
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-ivory/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-saffron-deep shadow-xs backdrop-blur-xs">
              <Sparkles size={13} className="text-saffron animate-pulse" aria-hidden="true" />
              <span>Historical Charter &amp; Foundation</span>
            </div>

            <h2
              id="trust-announcement-heading"
              className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-maroon sm:text-4xl md:text-5xl lg:text-[46px]"
            >
              Seetha Rama Gurukulam Trust
            </h2>

            <p className="mx-auto mt-4 max-w-3xl font-sans text-base leading-relaxed text-ink-soft sm:text-lg">
              Seetha Rama Gurukula Veda Patasala started in <strong>1996</strong> with two students under{' '}
              <em className="text-maroon font-medium">Veda Vidyalankara, Vidya Ratnam</em> Sri V.
              Rajagopala Ganapatigal with the blessings and grace of His Holiness Sri Paramacharyal of
              Sri Kanchi Kamakoti Peetam. Following its growth, the Trust was constituted and
              registered in <strong>2008</strong> as a Non-Profitable Charitable Trust under the
              Indian Trusts Act, later shifting to{' '}
              <strong>Veda Bhavan, No. 486, T.T.K. Road, Alwarpet, Chennai – 600018</strong>. Today,{' '}
              <strong className="text-maroon">Brahmasri R. Srikrishna Ganapatigal</strong> carries
              forward the sacred work of his father and guru.
            </p>
          </Reveal>

          {/* ── 3-Stage Milestone Horizon (Motion Timeline) ── */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 text-left">
            {milestones.map((item, idx) => {
              const ItemIcon = item.icon
              return (
                <Reveal key={item.year} delay={idx * 0.1}>
                  <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-gold-soft bg-ivory/90 p-5 shadow-xs backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-card">
                    {/* Top connector bar indicator */}
                    <div className="flex items-center justify-between pb-3 border-b border-gold-soft/40">
                      <span className="font-serif text-2xl font-bold text-saffron-deep sm:text-3xl">
                        {item.year}
                      </span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-saffron/10 text-maroon transition-transform duration-300 group-hover:scale-110">
                        <ItemIcon size={16} aria-hidden="true" />
                      </div>
                    </div>
                    <div className="mt-3">
                      <h3 className="font-serif text-base font-bold text-maroon">{item.title}</h3>
                      <p className="mt-1 text-xs text-ink-soft leading-relaxed">{item.subtitle}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>

          {/* ── Institutional Credential Badges ── */}
          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-maroon">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-soft bg-ivory px-4 py-1.5 shadow-2xs transition hover:border-gold">
                <ShieldCheck size={14} className="text-saffron-deep" />
                <span>Non-Profitable Charitable Trust (Regd. 2008)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-soft bg-ivory px-4 py-1.5 shadow-2xs transition hover:border-gold">
                <Scroll size={14} className="text-saffron-deep" />
                <span>Section 80-G Tax Exemption</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-soft bg-ivory px-4 py-1.5 shadow-2xs transition hover:border-gold">
                <Award size={14} className="text-saffron-deep" />
                <span>100% Free Vedic Education Throughout Course</span>
              </span>
            </div>
          </Reveal>
        </div>

        {/* ── PART 2: REDESIGNED MODERN AIMS & OBJECTIVES SHOWCASE ── */}
        <div
          className="mt-16 lg:mt-24"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-saffron-deep">
              Official Objectives
            </span>
            <h3 className="mt-2 font-serif text-3xl font-bold text-maroon sm:text-4xl">
              Aims and Objectives of the Trust
            </h3>
            <p className="mt-3 text-sm text-ink-soft sm:text-base">
              The foundational pillars enshrined in the official charter of Seetha Rama Gurukulam Trust.
            </p>
          </div>

          {/* ── Interactive Objective Nav Tabs (Motion Slider) ── */}
          <div className="relative mx-auto max-w-5xl">
            <div className="no-scrollbar flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 pt-1 px-2">
              {officialObjectives.map((obj, idx) => {
                const isSelected = activeTab === idx
                const TabIcon = obj.icon
                return (
                  <button
                    key={obj.id}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`relative flex items-center gap-2 shrink-0 rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron ${
                      isSelected
                        ? 'text-maroon shadow-sm'
                        : 'text-ink-soft hover:text-maroon hover:bg-gold-soft/30'
                    }`}
                  >
                    {isSelected && mounted && !reduceMotion && (
                      <motion.div
                        layoutId="activeObjectiveTab"
                        className="absolute inset-0 rounded-full border border-gold/70 bg-ivory shadow-xs"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.45 }}
                      />
                    )}
                    {isSelected && (!mounted || reduceMotion) && (
                      <div className="absolute inset-0 rounded-full border border-gold/70 bg-ivory shadow-xs" />
                    )}
                    <span className="relative z-10 font-mono text-[11px] text-saffron-deep">
                      {obj.number}
                    </span>
                    <TabIcon size={14} className="relative z-10" />
                    <span className="relative z-10 whitespace-nowrap">{obj.shortTitle}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* ── Spotlight Feature Card with Animated Motion Switch ── */}
          <div className="mt-6 mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl border-2 border-gold/50 bg-gradient-to-br from-[#FFFDF9] via-[#FAF3E5] to-[#F5EAD4] p-6 sm:p-10 shadow-elevated transition-all duration-300">
              {/* Background Sacred Sanskrit Watermark */}
              <div
                className="pointer-events-none absolute -right-6 -bottom-8 select-none font-serif text-[140px] font-bold text-gold/10 sm:text-[180px]"
                aria-hidden="true"
              >
                {activeObj.sanskritNumber}
              </div>

              {/* Decorative corner flourish */}
              <div
                className="pointer-events-none absolute top-4 right-4 text-xs font-mono font-bold tracking-widest text-gold-soft/80"
                aria-hidden="true"
              >
                CHARTER REF: {activeObj.number}/05
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeObj.id}
                  initial={reduceMotion || !mounted ? {} : { opacity: 0, y: 14 }}
                  animate={reduceMotion || !mounted ? {} : { opacity: 1, y: 0 }}
                  exit={reduceMotion || !mounted ? {} : { opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center"
                >
                  {/* Left Column: Number badge, icon & details */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-saffron to-gold text-maroon-dark shadow-sm">
                        <ActiveIcon size={24} aria-hidden="true" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-saffron-deep">
                          Objective {activeObj.number}
                        </span>
                        <h4 className="font-serif text-2xl font-bold text-maroon sm:text-3xl">
                          {activeObj.title}
                        </h4>
                      </div>
                    </div>

                    <p className="text-base sm:text-lg leading-relaxed text-ink font-normal pt-1">
                      {activeObj.description}
                    </p>

                    {/* Verified Highlights Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {activeObj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-gold-soft/70 bg-ivory/80 px-3 py-1 text-xs font-semibold text-maroon shadow-2xs"
                        >
                          <CheckCircle2 size={13} className="text-saffron-deep" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Institutional Action Card */}
                  <div className="lg:col-span-4 flex flex-col justify-between rounded-2xl border border-gold/40 bg-cream/70 p-6 backdrop-blur-xs shadow-xs">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-soft">
                        Institutional Role
                      </span>
                      <p className="mt-1 font-serif text-xl font-bold text-maroon">
                        {activeObj.milestone}
                      </p>
                      <p className="mt-2 text-xs text-ink-soft leading-relaxed">
                        Fulfilling the foundational mandate under the guidance of Kanchi Kamakoti Peetam.
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gold-soft/50">
                      <Link
                        to="/about"
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-maroon px-4 py-2.5 text-xs font-bold text-cream shadow-xs transition hover:bg-maroon-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
                      >
                        <span>Read Full Charter</span>
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Minimal Pagination Dots */}
              <div className="mt-8 flex items-center justify-center gap-2 pt-2 border-t border-gold-soft/30">
                {officialObjectives.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveTab(i)}
                    aria-label={`Go to objective ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeTab === i ? 'w-8 bg-saffron' : 'w-2 bg-gold/40 hover:bg-gold'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
