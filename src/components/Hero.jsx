import { useState, useEffect, useRef, useCallback } from 'react'
import { ArrowRight, Pause, Play, Sparkles } from 'lucide-react'
import Button from './Button.jsx'

// Authentic Gurukulam photography for the 3D coverflow showcase
// User requested: pure image cards with NO words/text on them
const galleryCards = [
  {
    id: 'c1',
    src: '/hero/slide-2.jpg',
    alt: 'Traditional oral Vedic education at Sri Seetharama Gurukulam',
  },
  {
    id: 'c2',
    src: '/hero/slide-1.jpg',
    alt: 'Krishna Yajur Veda adhyayanam session',
  },
  {
    id: 'c3',
    src: '/photos/acharya-srikrishna-ganapatigal.jpg',
    alt: 'Brahmasri R. Srikrishna Ganapatigal carrying forward the work',
  },
  {
    id: 'c4',
    src: '/photos/acharya-teaching-session.jpg',
    alt: 'Acharya conducting sacred teaching session',
  },
  {
    id: 'c5',
    src: '/photos/gurukulam-courtyard-vidyarthis.jpg',
    alt: 'Vidyarthis gathered in the Gurukulam courtyard',
  },
  {
    id: 'c6',
    src: '/hero/slide-3.jpg',
    alt: 'Vedic recitation and swara intonation practice',
  },
  {
    id: 'c7',
    src: '/photos/vidyarthis-temple-visit.jpg',
    alt: 'Vidyarthis and elders on sacred temple visit',
  },
]

// Verified stats from PDF
const stats = [
  { value: '1996', label: 'Started (2 Students)' },
  { value: '2008', label: 'Trust Registered' },
  { value: '100% Free', label: 'Vedic Education' },
  { value: 'Sec. 80\u2011G', label: 'Tax Exemption' },
]

export default function Hero({
  eyebrow = 'Seetha Rama Gurukula Veda Patasala · Estd. 1996 · Alwarpet, Chennai',
  title = 'The Vedas – Eternal Glory of Our Tradition',
  subtitle = 'Founded in 1996 with two students under Veda Vidyalankara, Vidya Ratnam Sri V. Rajagopala Ganapatigal with the blessings of His Holiness Sri Paramacharyal of Sri Kanchi Kamakoti Peetam, imparting traditional Gurukula oral education in Krishna Yajur Veda.',
  primary = { label: 'Explore the Gurukulam', to: '/gurukulam' },
  secondary = { label: 'Admission Enquiry', to: '/admission' },
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const count = galleryCards.length

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + count) % count)
  }, [count])

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % count)
  }, [count])

  // Continuous smooth auto-slide every 2 seconds (pauses on hover or manual toggle)
  useEffect(() => {
    if (isPaused || isHovered) return
    const timer = setInterval(() => {
      handleNext()
    }, 2000)
    return () => clearInterval(timer)
  }, [isPaused, isHovered, handleNext])

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (diff > 45) {
      handleNext()
    } else if (diff < -45) {
      handlePrev()
    }
  }

  // Calculate cyclic shortest difference from activeIndex
  const getDiff = (index) => {
    let diff = (index - activeIndex) % count
    if (diff > count / 2) diff -= count
    if (diff < -count / 2) diff += count
    return diff
  }

  // 3D Coverflow geometry matching Image 1
  const getCardTransform = (diff) => {
    if (diff === 0) {
      return {
        xPercent: 0,
        scale: 1.06,
        rotateY: 0,
        zOffset: 45,
        zIndex: 30,
        opacity: 1,
        boxShadow:
          '0 25px 50px -12px rgba(74, 18, 18, 0.28), 0 10px 24px -4px rgba(43, 26, 20, 0.14), 0 0 0 1px rgba(201, 162, 75, 0.25)',
        cursor: 'default',
        isClickable: false,
      }
    } else if (diff === -1) {
      return {
        xPercent: -58,
        scale: 0.86,
        rotateY: -26,
        zOffset: -20,
        zIndex: 20,
        opacity: 0.88,
        boxShadow: '0 16px 32px -8px rgba(43, 26, 20, 0.2)',
        cursor: 'pointer',
        isClickable: true,
      }
    } else if (diff === 1) {
      return {
        xPercent: 58,
        scale: 0.86,
        rotateY: 26,
        zOffset: -20,
        zIndex: 20,
        opacity: 0.88,
        boxShadow: '0 16px 32px -8px rgba(43, 26, 20, 0.2)',
        cursor: 'pointer',
        isClickable: true,
      }
    } else if (diff === -2) {
      return {
        xPercent: -100,
        scale: 0.72,
        rotateY: -36,
        zOffset: -70,
        zIndex: 10,
        opacity: 0.52,
        boxShadow: '0 10px 22px -6px rgba(43, 26, 20, 0.14)',
        cursor: 'pointer',
        isClickable: true,
      }
    } else if (diff === 2) {
      return {
        xPercent: 100,
        scale: 0.72,
        rotateY: 36,
        zOffset: -70,
        zIndex: 10,
        opacity: 0.52,
        boxShadow: '0 10px 22px -6px rgba(43, 26, 20, 0.14)',
        cursor: 'pointer',
        isClickable: true,
      }
    } else {
      const sign = diff < 0 ? -1 : 1
      return {
        xPercent: sign * 135,
        scale: 0.56,
        rotateY: sign * 45,
        zOffset: -120,
        zIndex: 0,
        opacity: 0,
        boxShadow: 'none',
        cursor: 'default',
        isClickable: false,
      }
    }
  }

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
          <div className="lg:col-span-6 xl:col-span-5">
            {/* Eyebrow badge */}
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-gold-soft/90 bg-ivory px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-saffron-deep shadow-xs sm:px-3.5 sm:text-[11px] sm:tracking-[0.22em]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-saffron animate-pulse" aria-hidden="true" />
              <span className="truncate">{eyebrow}</span>
            </div>

            {/* Exact PDF Heading: The Vedas – Eternal Glory of Our Tradition */}
            <h1 className="mt-3 font-serif text-[32px] sm:text-[44px] md:text-[50px] lg:text-[50px] xl:text-[56px] font-bold leading-[1.1] tracking-tight text-maroon">
              The Vedas –{' '}
              <span className="block font-serif italic font-normal text-saffron-deep">
                Eternal Glory of Our Tradition
              </span>
            </h1>

            {/* Supporting description based strictly on PDF */}
            <p className="mt-4 max-w-[500px] font-sans text-[15px] leading-relaxed text-ink-soft sm:text-[16.5px]">
              {subtitle}
            </p>

            {/* Action Pathways */}
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

            {/* Verified Stats strip */}
            <div className="mt-9 hidden grid-cols-4 divide-x divide-gold-soft/60 border-t border-gold-soft/60 pt-6 sm:grid lg:mt-11">
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col justify-start px-2 sm:px-3 lg:px-2.5 xl:px-3.5 first:pl-0 last:pr-0">
                  <div className="flex h-7 items-center">
                    <p className="font-sans text-[17px] sm:text-[19px] md:text-[21px] lg:text-[19px] xl:text-[22px] font-bold leading-none text-maroon whitespace-nowrap tracking-tight">
                      {value}
                    </p>
                  </div>
                  <p className="mt-1 text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-wider text-ink-soft/90 leading-snug">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: 3D Coverflow Cards Showcase (Image 1 Design) ── */}
          <div className="min-w-0 lg:col-span-6 xl:col-span-7">
            <div
              className="relative w-full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Showcase Top Header Pill */}
              <div className="mb-3 flex items-center justify-between gap-3 px-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-saffron animate-pulse" aria-hidden="true" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-maroon/80">
                    Gurukula Oral Vedic Education · Visual Showcase
                  </span>
                </div>

                {/* Pause / Play interactive toggle button */}
                <button
                  type="button"
                  onClick={() => setIsPaused((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gold-soft bg-ivory/90 px-3 py-1 text-[11px] font-medium text-maroon shadow-2xs transition hover:bg-gold-soft/30 hover:border-gold focus-visible:outline-2 cursor-pointer"
                  aria-label={isPaused ? 'Resume showcase playback' : 'Pause showcase playback'}
                >
                  {isPaused ? (
                    <>
                      <Play size={12} className="text-saffron-deep" />
                      <span>Resume</span>
                    </>
                  ) : (
                    <>
                      <Pause size={12} className="text-saffron-deep" />
                      <span>{isHovered ? 'Paused' : 'Pause on Hover'}</span>
                    </>
                  )}
                </button>
              </div>

              {/* 3D Coverflow Cards Stage */}
              <div
                className="relative h-[340px] sm:h-[390px] lg:h-[420px] w-full overflow-hidden py-3"
                style={{
                  perspective: '1100px',
                  perspectiveOrigin: 'center center',
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Subtle soft edge gradient vignette */}
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 z-25 w-6 sm:w-12 bg-gradient-to-r from-[#FDFAF3] via-[#FDFAF3]/70 to-transparent"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 z-25 w-6 sm:w-12 bg-gradient-to-l from-[#FDFAF3] via-[#FDFAF3]/70 to-transparent"
                  aria-hidden="true"
                />

                {/* Coverflow Cards */}
                {galleryCards.map((card, idx) => {
                  const diff = getDiff(idx)
                  const transform = getCardTransform(diff)
                  const isVisible = Math.abs(diff) <= 2

                  return (
                    <div
                      key={card.id}
                      onClick={() => {
                        if (transform.isClickable) {
                          setActiveIndex(idx)
                        }
                      }}
                      className="absolute left-1/2 top-1/2 w-[215px] h-[285px] sm:w-[255px] sm:h-[340px] lg:w-[275px] lg:h-[365px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] select-none"
                      style={{
                        transform: `translate(-50%, -50%) translateX(${transform.xPercent}%) translateZ(${transform.zOffset}px) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
                        transformStyle: 'preserve-3d',
                        zIndex: transform.zIndex,
                        opacity: transform.opacity,
                        cursor: transform.cursor,
                        pointerEvents: isVisible ? 'auto' : 'none',
                      }}
                      role={diff === 0 ? 'group' : 'button'}
                      aria-label={card.alt}
                      tabIndex={transform.isClickable ? 0 : -1}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setActiveIndex(idx)
                        }
                      }}
                    >
                      {/* White framed card container matching Image 1 (NO words on the card) */}
                      <div
                        className="h-full w-full rounded-[24px] sm:rounded-[28px] bg-white p-2.5 sm:p-3 border border-gold-soft/60 transition-shadow duration-300"
                        style={{ boxShadow: transform.boxShadow }}
                      >
                        <div className="h-full w-full overflow-hidden rounded-[18px] sm:rounded-[22px] bg-cream">
                          <img
                            src={card.src}
                            alt={card.alt}
                            loading={Math.abs(diff) <= 1 ? 'eager' : 'lazy'}
                            className="h-full w-full object-cover object-center pointer-events-none select-none"
                            draggable={false}
                          />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Coverflow Pagination Dots (matching Image 1) */}
              <div className="mt-4 flex items-center justify-center gap-1.5" role="tablist" aria-label="Select card">
                {galleryCards.map((card, idx) => {
                  const isActive = idx === activeIndex
                  return (
                    <button
                      key={card.id}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      aria-selected={isActive}
                      role="tab"
                      className={`transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron ${
                        isActive
                          ? 'h-2 w-7 bg-maroon'
                          : 'h-2 w-2 bg-gold-soft/80 hover:bg-gold hover:scale-125'
                      }`}
                    />
                  )
                })}
              </div>

              {/* Bottom helper footnote */}
              <div className="mt-2.5 flex items-center justify-between border-t border-gold-soft/40 pt-2 px-1 text-[11px] text-ink-soft">
                <div className="flex items-center gap-1.5">
                  <Sparkles size={12} className="text-saffron-deep" />
                  <span className="italic">Hover over any card to pause · Click or swipe to explore</span>
                </div>
                <span className="hidden sm:inline font-serif font-semibold text-maroon">
                  Seetha Rama Gurukula Veda Patasala
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
            <p className="font-sans text-[20px] font-bold text-maroon whitespace-nowrap">{value}</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-ink-soft/90 leading-snug">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
