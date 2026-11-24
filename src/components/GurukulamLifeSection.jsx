import { useState, useEffect } from 'react'
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  Luggage,
  ShieldCheck,
  Shirt,
  Sparkles,
  Sun,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

/**
 * SECTION 02: LIFE AT THE GURUKULAM & STUDENT FACILITIES
 * Redesigned for modern motion, interactive visual storytelling, and polished aesthetics.
 * - Left: Dynamic photo showcase with floating glass badges & interactive thumbnail switcher.
 * - Right: High-impact motion facility cards with dedicated iconography and verified trust badges.
 * - Strict PDF compliance: verified 5 free facilities only.
 */

// Authentic student life photography
const photos = [
  {
    id: 'courtyard',
    src: '/photos/gurukulam-courtyard-vidyarthis.jpg',
    title: 'Students at Seetha Rama Gurukula Veda Patasala',
    caption: 'Gathered in the courtyard of Veda Bhavan, No. 486, T.T.K. Road, Alwarpet',
    badge: 'Campus Courtyard',
  },
  {
    id: 'assembly',
    src: '/photos/gurukulam-students-assembly.jpg',
    title: 'Residential Patasala Assembly',
    caption: 'Vidyarthis seated together for morning chanting and discipline',
    badge: 'Daily Assembly',
  },
  {
    id: 'temple',
    src: '/photos/vidyarthis-temple-visit.jpg',
    title: 'Living Vedic Heritage Excursions',
    caption: 'Temple visits and traditional observances experiencing ancient roots',
    badge: 'Temple Excursion',
  },
]

// Exact verified facilities from institutional document
const facilities = [
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
    subtitle: 'Traditional vastrams and attire provided throughout the course',
    tag: 'Provided',
    icon: Shirt,
  },
  {
    id: 'f4',
    title: 'Medical Care',
    subtitle: 'Comprehensive healthcare support, doctor attention & medicines',
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

export default function GurukulamLifeSection() {
  const [activePhoto, setActivePhoto] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Gentle auto-cycle through photos every 4.5s unless user hovers
  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % photos.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [isHovered])

  return (
    <section
      id="gurukulam-life"
      aria-labelledby="gurukulam-life-heading"
      className="relative overflow-hidden bg-[#FBF6ED] py-16 sm:py-20 lg:py-24 border-b border-gold-soft/40"
    >
      {/* Decorative ambient glowing orbs */}
      <div
        className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-saffron/8 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="site-container relative">
        {/* Section Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft bg-ivory px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-saffron-deep shadow-2xs">
              <Sun className="h-3 w-3 text-saffron" aria-hidden="true" />
              <span>Residential Veda Patasala</span>
            </div>
            <h2
              id="gurukulam-life-heading"
              className="mt-3 font-serif text-3xl font-bold tracking-tight text-maroon sm:text-4xl lg:text-[44px] leading-tight"
            >
              Life at the Gurukulam &amp;{' '}
              <span className="italic font-normal text-saffron-deep">Student Facilities</span>
            </h2>
            <p className="mt-3 text-sm text-ink-soft sm:text-base leading-relaxed">
              Under the traditional Gurukula method, students reside at the Patasala in Veda Bhavan,
              Alwarpet, receiving pure Vedic education in a dedicated residential environment.
            </p>
          </div>
        </Reveal>

        {/* 2-Column Modern Grid */}
        <div className="mt-12 lg:mt-16 grid items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          {/* ── LEFT: Dynamic Photo Showcase with Floating Badges (7 cols) ── */}
          <div className="lg:col-span-7">
            <Reveal>
              <div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Main Active Featured Photo Frame */}
                <div className="group relative overflow-hidden rounded-3xl border border-gold-soft/90 bg-white p-2.5 sm:p-3 shadow-card transition-all duration-300 hover:shadow-warm">
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[20px] bg-cream">
                    {photos.map((p, idx) => (
                      <img
                        key={p.id}
                        src={p.src}
                        alt={p.title}
                        loading={idx === 0 ? 'eager' : 'lazy'}
                        className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 ease-in-out ${
                          idx === activePhoto
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-103 pointer-events-none'
                        }`}
                      />
                    ))}

                    {/* Gradient Overlay for Readable Typography */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-maroon-dark/90 via-maroon-dark/25 to-transparent opacity-90 transition-opacity duration-300"
                      aria-hidden="true"
                    />

                    {/* Top Floating Glass Badges */}
                    <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 rounded-full border border-gold-soft/80 bg-ivory/95 px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider text-maroon backdrop-blur-md shadow-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-saffron animate-pulse" />
                      <span>{photos[activePhoto].badge}</span>
                    </div>

                    <div className="absolute top-3.5 right-3.5 z-10 hidden sm:flex items-center gap-1.5 rounded-full border border-white/30 bg-maroon-dark/80 px-3 py-1 text-[11px] font-medium text-cream backdrop-blur-md shadow-xs">
                      <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                      <span>100% Free Care</span>
                    </div>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-cream">
                      <p className="font-serif text-base sm:text-xl font-bold tracking-wide leading-snug">
                        {photos[activePhoto].title}
                      </p>
                      <p className="mt-1 text-xs sm:text-[13px] text-cream/85">
                        {photos[activePhoto].caption}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Interactive Thumbnail Selector beneath */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {photos.map((p, idx) => {
                    const isCurrent = idx === activePhoto
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setActivePhoto(idx)}
                        className={`group relative overflow-hidden rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                          isCurrent
                            ? 'border-gold bg-white ring-2 ring-gold/40 shadow-sm -translate-y-0.5'
                            : 'border-gold-soft/70 bg-cream/70 opacity-75 hover:opacity-100 hover:border-gold hover:bg-white'
                        }`}
                        aria-label={`View ${p.title}`}
                      >
                        <div className="aspect-[16/10] w-full overflow-hidden bg-cream">
                          <img
                            src={p.src}
                            alt=""
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="px-2.5 py-1.5">
                          <p className="truncate text-[10.5px] font-bold text-maroon tracking-wide">
                            {p.badge}
                          </p>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── RIGHT: Motion-Rich Facilities Hub (5 cols) ── */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-gold-soft bg-ivory/95 p-6 sm:p-7 lg:p-8 shadow-card backdrop-blur-xs">
                {/* Header Badge & Title */}
                <div className="flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-soft bg-cream px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.18em] text-saffron-deep shadow-2xs">
                    <ShieldCheck className="h-3.5 w-3.5 text-saffron" aria-hidden="true" />
                    <span>Verified Facilities</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-maroon/70">
                    <Sparkles className="h-3 w-3 text-gold" aria-hidden="true" />
                    Strictly Free
                  </span>
                </div>

                <h3 className="mt-3.5 font-serif text-2xl sm:text-[28px] font-bold text-maroon leading-snug">
                  Provided to Students{' '}
                  <span className="font-serif italic font-normal text-saffron-deep">
                    Free of Cost
                  </span>
                </h3>

                <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-ink-soft">
                  As specified in the official institutional document, all admitted students receive
                  the following facilities completely free throughout their course of study:
                </p>

                {/* 5 Interactive Micro-Cards */}
                <div className="mt-5 space-y-2.5">
                  {facilities.map((fac) => {
                    const Icon = fac.icon
                    return (
                      <div
                        key={fac.id}
                        className="group flex items-center justify-between gap-3 rounded-xl border border-gold-soft/70 bg-cream/50 p-2.5 sm:p-3 transition-all duration-300 hover:translate-x-1.5 hover:border-gold hover:bg-white hover:shadow-2xs cursor-default"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold-soft/40 text-maroon transition-colors duration-300 group-hover:bg-saffron group-hover:text-cream shadow-2xs">
                            <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                          </div>
                          <div className="min-w-0">
                            <p className="truncate font-serif text-[14.5px] font-bold text-maroon transition-colors duration-200 group-hover:text-saffron-deep">
                              {fac.title}
                            </p>
                            <p className="truncate text-[11px] text-ink-soft">
                              {fac.subtitle}
                            </p>
                          </div>
                        </div>

                        <span className="shrink-0 inline-flex items-center gap-1 rounded-full border border-gold-soft/80 bg-ivory px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-saffron-deep shadow-2xs group-hover:bg-gold-soft/30">
                          <CheckCircle2 className="h-3 w-3 text-saffron-deep" aria-hidden="true" />
                          <span>{fac.tag}</span>
                        </span>
                      </div>
                    )
                  })}
                </div>

                {/* Course Duration & Sastra Note from PDF */}
                <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-gold-soft/70 bg-cream/40 p-3 text-xs text-ink-soft">
                  <Award className="h-4 w-4 shrink-0 text-saffron-deep mt-0.5" aria-hidden="true" />
                  <p className="text-[11.5px] leading-relaxed">
                    <strong className="text-maroon font-semibold">10 to 12 Years of Study:</strong> Normally it takes 10 to 12 years to acquire mastery in one Shakha, encompassing Vedic chanting, Swara accuracy, and Prayoga training.
                  </p>
                </div>

                {/* Action CTAs */}
                <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
                  <Link
                    to="/gurukulam"
                    className="group inline-flex items-center gap-2 rounded-full bg-maroon px-5 py-2.5 font-sans text-xs sm:text-sm font-semibold text-cream shadow-xs transition hover:bg-maroon-dark hover:shadow-card focus:outline-none focus:ring-2 focus:ring-saffron"
                  >
                    <span>Discover Student Life</span>
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 rounded-full border border-gold-soft bg-ivory px-3.5 py-2 text-xs font-semibold text-saffron-deep transition hover:border-gold hover:bg-gold-soft/20"
                  >
                    <span>Admission Information</span>
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
