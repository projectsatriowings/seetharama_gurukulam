import { useState } from 'react'
import { ArrowRight, Pause, Play, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from './Button.jsx'

// Authentic Gurukulam cards for infinite scrolling showcase
const galleryCards = [
  {
    id: 'c1',
    src: '/hero/slide-2.jpg',
    tag: 'Parampara',
    label: 'Guru-Shishya Adhyayanam',
    sub: 'Living Vedic Tradition',
    rotate: '-rotate-2',
  },
  {
    id: 'c2',
    src: '/hero/slide-1.jpg',
    tag: 'Veda Vidya',
    label: 'Krishna Yajur Veda',
    sub: 'Sacred Recitation',
    rotate: 'rotate-1',
  },
  {
    id: 'c3',
    src: '/hero/slide-3.jpg',
    tag: 'Gurukulam',
    label: 'Vidyaarthi Life',
    sub: 'Discipline & Devotion',
    rotate: '-rotate-1',
  },
  {
    id: 'c4',
    src: '/photos/acharya-srikrishna-ganapatigal.jpg',
    tag: 'Margadarshak',
    label: 'Sri Acharya Ganapatigal',
    sub: 'Veda Bhashyam & Guidance',
    rotate: 'rotate-2',
  },
  {
    id: 'c5',
    src: '/photos/acharya-teaching-session.jpg',
    tag: 'Jnana',
    label: 'Sanskrit & Shastras',
    sub: 'Preserving Ancient Wisdom',
    rotate: '-rotate-2',
  },
  {
    id: 'c6',
    src: '/photos/gurukulam-courtyard-vidyarthis.jpg',
    tag: 'Sampradaya',
    label: 'Residential Sanctuary',
    sub: 'Unbroken Vedic Lineage',
    rotate: 'rotate-1',
  },
]

// Stats strip data
const stats = [
  { value: '1996', label: 'Patasala Estd.' },
  { value: '100%', label: 'Free Education' },
  { value: 'Sec. 80-G', label: 'Tax Exemption' },
  { value: 'Guru-Shishya', label: 'Parampara' },
]

export default function Hero({
  eyebrow = 'Veda Patasala · Estd. 1996 · Alwarpet, Chennai',
  title = 'Preserving the Sacred Tradition of Vedic Learning',
  subtitle = 'Sri Seetharama Gurukulam is an authentic traditional Veda Patasala dedicated to the preservation of Krishna Yajur Veda adhyayanam and Dharma Shastras. Guided by the sacred Guru-Shishya Parampara, we nurture young vidyaarthis in a residential sanctuary of discipline, chanting, and devotion.',
  primary = { label: 'Explore the Gurukulam', to: '/gurukulam' },
  secondary = { label: 'Admission Enquiry', to: '/admission' },
}) {
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate cards for seamless 100% infinite loop
  const infiniteCards = [...galleryCards, ...galleryCards]

  return (
    <section className="relative overflow-hidden bg-[#FDFAF3] pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 border-b border-gold-soft/40">
      {/* Decorative SVG lotus vine – top-left */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-20 w-56 opacity-[0.13] sm:w-72 lg:-left-6 lg:w-80"
        viewBox="0 0 320 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M160 480 C160 300, 100 220, 80 100" stroke="#C9A24B" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="80" cy="90" rx="22" ry="38" fill="#C9A24B" transform="rotate(-20 80 90)" />
        <ellipse cx="80" cy="90" rx="22" ry="38" fill="#C9A24B" transform="rotate(20 80 90)" />
        <ellipse cx="80" cy="90" rx="14" ry="30" fill="#E8871E" transform="rotate(-40 80 90)" />
        <ellipse cx="80" cy="90" rx="14" ry="30" fill="#E8871E" transform="rotate(40 80 90)" />
        <circle cx="80" cy="98" r="10" fill="#C9A24B" />
        <path d="M120 220 C170 190, 190 240, 140 260 C140 260, 115 240, 120 220Z" fill="#C9A24B" />
        <path d="M100 320 C60 290, 40 340, 90 360 C90 360, 115 340, 100 320Z" fill="#C9A24B" />
      </svg>

      {/* Decorative SVG lotus vine – top-right */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-16 w-56 opacity-[0.12] sm:w-72 lg:-right-4 lg:w-80"
        viewBox="0 0 320 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M160 480 C160 300, 220 220, 240 100" stroke="#C9A24B" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="240" cy="90" rx="22" ry="38" fill="#C9A24B" transform="rotate(20 240 90)" />
        <ellipse cx="240" cy="90" rx="22" ry="38" fill="#C9A24B" transform="rotate(-20 240 90)" />
        <ellipse cx="240" cy="90" rx="14" ry="30" fill="#E8871E" transform="rotate(40 240 90)" />
        <ellipse cx="240" cy="90" rx="14" ry="30" fill="#E8871E" transform="rotate(-40 240 90)" />
        <circle cx="240" cy="98" r="10" fill="#C9A24B" />
        <path d="M200 220 C150 190, 130 240, 180 260 C180 260, 205 240, 200 220Z" fill="#C9A24B" />
        <path d="M220 320 C260 290, 280 340, 230 360 C230 360, 205 340, 220 320Z" fill="#C9A24B" />
      </svg>

      <div className="site-container relative">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          {/* ── LEFT: Editorial content ── */}
          <div className="lg:col-span-5 xl:col-span-5">
            {/* Eyebrow — small editorial tagline */}
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-gold-soft/90 bg-ivory px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-saffron-deep shadow-xs sm:px-3.5 sm:text-[11px] sm:tracking-[0.22em]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-saffron animate-pulse" aria-hidden="true" />
              <span className="truncate">{eyebrow}</span>
            </div>

            {/* Split-font headline */}
            <h1 className="mt-3">
              <span className="block font-serif text-[32px] sm:text-[44px] md:text-[50px] lg:text-[52px] xl:text-[58px] font-bold leading-[1.08] tracking-tight text-maroon">
                Preserving the Sacred Tradition of
              </span>
              <span className="block font-serif text-[32px] sm:text-[44px] md:text-[50px] lg:text-[52px] xl:text-[58px] font-bold italic leading-[1.1] text-saffron-deep">
                Vedic Learning
              </span>
            </h1>

            {/* Supporting description */}
            <p className="mt-4 max-w-[500px] font-sans text-[15px] leading-relaxed text-ink-soft sm:text-[16.5px]">
              {subtitle}
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
              <Button to={primary.to} variant="primary" size="lg" className="shadow-md">
                <span>{primary.label}</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
              {secondary && (
                <Button to={secondary.to} variant="saffron" size="lg" className="shadow-xs">
                  <span>{secondary.label}</span>
                </Button>
              )}
            </div>

            {/* Stats strip — inline on desktop */}
            <div className="mt-10 hidden grid-cols-4 divide-x divide-gold-soft/60 border-t border-gold-soft/60 pt-7 sm:grid lg:mt-12">
              {stats.map(({ value, label }) => (
                <div key={label} className="px-3 first:pl-0 last:pr-0">
                  <p className="font-serif text-[22px] font-bold leading-none text-maroon lg:text-[26px]">
                    {value}
                  </p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-ink-soft">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Infinite Scrolling Cards Showcase ── */}
          <div className="min-w-0 lg:col-span-7 xl:col-span-7">
            <div className="relative w-full">
              {/* Showcase Top Header Pill */}
              <div className="mb-3 flex items-center justify-between gap-3 px-1">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-saffron animate-pulse" aria-hidden="true" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-maroon/80">
                    Gurukulam Adhyayanam · Continuous Gliding Showcase
                  </span>
                </div>

                {/* Pause / Play interactive toggle button */}
                <button
                  type="button"
                  onClick={() => setIsPaused((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gold-soft bg-ivory/90 px-3 py-1 text-[11px] font-medium text-maroon shadow-2xs transition hover:bg-gold-soft/30 hover:border-gold focus-visible:outline-2 cursor-pointer"
                  aria-label={isPaused ? 'Resume infinite scroll' : 'Pause infinite scroll'}
                >
                  {isPaused ? (
                    <>
                      <Play size={12} className="text-saffron-deep" />
                      <span>Resume</span>
                    </>
                  ) : (
                    <>
                      <Pause size={12} className="text-saffron-deep" />
                      <span>Pause on Hover</span>
                    </>
                  )}
                </button>
              </div>

              {/* Seamless Scrolling Container with Soft Edge Fade Masks */}
              <div className="relative overflow-hidden py-4">
                {/* Left & Right Soft Fade Masks for seamless edge dissolving */}
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 bg-gradient-to-r from-[#FDFAF3] via-[#FDFAF3]/80 to-transparent sm:w-14"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 bg-gradient-to-l from-[#FDFAF3] via-[#FDFAF3]/80 to-transparent sm:w-14"
                  aria-hidden="true"
                />

                {/* The Infinite Scrolling Track */}
                <div
                  className="animate-infinite-scroll flex gap-4 sm:gap-5 py-2"
                  style={{
                    animationPlayState: isPaused ? 'paused' : undefined,
                  }}
                >
                  {infiniteCards.map((card, idx) => (
                    <div
                      key={`${card.id}-${idx}`}
                      className={`group relative w-[210px] shrink-0 sm:w-[240px] lg:w-[250px] overflow-hidden rounded-2xl border border-gold-soft/90 bg-white shadow-card transition-all duration-300 hover:z-30 hover:-translate-y-2 hover:rotate-0 hover:border-gold hover:shadow-elevated ${card.rotate}`}
                    >
                      {/* Card Image */}
                      <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream">
                        <img
                          src={card.src}
                          alt={card.label}
                          loading={idx < 4 ? 'eager' : 'lazy'}
                          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                        />
                        {/* Top Tag Pill */}
                        <div className="absolute left-2.5 top-2.5">
                          <span className="inline-flex items-center gap-1 rounded-full border border-gold-soft/80 bg-ivory/95 px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-maroon shadow-xs backdrop-blur-xs">
                            <span className="text-saffron-deep">✦</span>
                            <span>{card.tag}</span>
                          </span>
                        </div>
                      </div>

                      {/* Card Caption Strip */}
                      <div className="border-t border-gold-soft/70 bg-gradient-to-b from-ivory to-cream px-3.5 py-3">
                        <p className="truncate font-serif text-[13.5px] font-bold text-maroon sm:text-[14.5px]">
                          {card.label}
                        </p>
                        <p className="mt-0.5 truncate font-sans text-[11px] italic text-saffron-deep font-medium">
                          {card.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom helper footnote with Sanskrit motto */}
              <div className="mt-1 flex items-center justify-between border-t border-gold-soft/40 pt-2 px-1 text-[11px] text-ink-soft">
                <div className="flex items-center gap-1.5">
                  <Sparkles size={12} className="text-saffron-deep" />
                  <span className="italic">Glides continuously · Hover over any card to pause</span>
                </div>
                <span className="hidden sm:inline font-serif font-semibold text-maroon">
                  ॥ धर्मो रक्षति रक्षितः ॥
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats strip (mobile only) ── */}
      <div className="mt-10 grid grid-cols-2 gap-px border-t border-gold-soft/50 bg-gold-soft/20 sm:hidden">
        {stats.map(({ value, label }) => (
          <div key={label} className="bg-[#FDFAF3] px-5 py-4">
            <p className="font-serif text-[22px] font-bold text-maroon">{value}</p>
            <p className="text-[10.5px] font-medium uppercase tracking-wider text-ink-soft">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
