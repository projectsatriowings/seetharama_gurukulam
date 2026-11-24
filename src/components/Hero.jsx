import { useState, useEffect, useRef, useCallback } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
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

  // Continuous smooth auto-slide every 2 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(() => {
      handleNext()
    }, 2000)
    return () => clearInterval(timer)
  }, [isHovered, handleNext])

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
      {/* Decorative SVG Vedic Scriptures & Study illustration – top-left */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -left-12 top-16 w-60 opacity-[0.16] sm:w-76 lg:-left-6 lg:w-84"
        viewBox="0 0 320 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft aura glow behind open scripture */}
        <circle cx="160" cy="180" r="95" fill="#E8871E" opacity="0.08" />

        {/* Radiating Wisdom Rays from Scripture */}
        <g stroke="#C9A24B" strokeWidth="1.2" strokeDasharray="3 4" opacity="0.6">
          <line x1="160" y1="90" x2="160" y2="58" />
          <line x1="120" y1="105" x2="95" y2="78" />
          <line x1="200" y1="105" x2="225" y2="78" />
          <line x1="85" y1="140" x2="52" y2="128" />
          <line x1="235" y1="140" x2="268" y2="128" />
        </g>

        {/* Sacred Deepam / Lamp of Learning above open book */}
        <g transform="translate(160, 95)">
          {/* Flame of knowledge */}
          <path d="M0 -30 C-6 -18 -8 -10 0 0 C8 -10 6 -18 0 -30 Z" fill="#E8871E" opacity="0.9" />
          <path d="M0 -22 C-3 -14 -4 -8 0 0 C4 -8 3 -14 0 -22 Z" fill="#F4D06F" />
          {/* Lamp Base / Diya */}
          <path d="M-14 0 C-10 8 10 8 14 0 C16 4 12 7 0 7 C-12 7 -16 4 -14 0 Z" fill="#C9A24B" />
          <path d="M-4 7 L4 7 L6 13 L-6 13 Z" fill="#C9A24B" />
          <ellipse cx="0" cy="13" rx="10" ry="2.5" fill="#C9A24B" />
        </g>

        {/* ── OPEN VEDIC SCRIPTURE (Pustaka / Grantha on Reading Stand) ── */}
        {/* Back cover / shadow */}
        <path
          d="M48 160 C100 148 152 170 160 178 C168 170 220 148 272 160 L272 232 C220 220 168 242 160 250 C152 242 100 220 48 232 Z"
          fill="#8A2525"
          opacity="0.25"
        />
        {/* Page thickness block */}
        <path
          d="M50 164 C100 152 152 174 160 182 C168 174 220 152 270 164 L270 236 C220 224 168 246 160 254 C152 246 100 224 50 236 Z"
          fill="#C9A24B"
          opacity="0.35"
        />
        {/* Main Open Pages (Ivory leaf parchment) */}
        <path
          d="M54 156 C102 144 154 166 160 174 C166 166 218 144 266 156 L266 226 C218 214 166 236 160 244 C154 236 102 214 54 226 Z"
          fill="#FFFDF7"
          stroke="#C9A24B"
          strokeWidth="2"
        />
        {/* Center Spine Crease */}
        <line x1="160" y1="174" x2="160" y2="244" stroke="#8A2525" strokeWidth="2" />
        <path d="M160 174 C158 200 158 220 160 244" stroke="#C9A24B" strokeWidth="1.5" />

        {/* Flowing Bookmark Ribbon (Silk thread) */}
        <path
          d="M160 244 C162 265 170 275 166 295 C163 305 158 315 162 325"
          stroke="#8A2525"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Shloka Verse lines on Left Page */}
        <g stroke="#C9A24B" strokeWidth="1.2" opacity="0.65" strokeLinecap="round">
          <line x1="72" y1="168" x2="142" y2="178" />
          <line x1="72" y1="180" x2="142" y2="190" />
          <line x1="72" y1="192" x2="142" y2="202" />
          <line x1="72" y1="204" x2="130" y2="212" />
          <line x1="72" y1="216" x2="115" y2="222" />
        </g>

        {/* Shloka Verse lines on Right Page */}
        <g stroke="#C9A24B" strokeWidth="1.2" opacity="0.65" strokeLinecap="round">
          <line x1="178" y1="178" x2="248" y2="168" />
          <line x1="178" y1="190" x2="248" y2="180" />
          <line x1="178" y1="202" x2="248" y2="192" />
          <line x1="178" y1="212" x2="236" y2="204" />
          <line x1="178" y1="222" x2="221" y2="216" />
        </g>

        {/* ── WOODEN BOOKSTAND (Vyasapeeth / Rehal) ── */}
        <g stroke="#C9A24B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Crossed wooden legs */}
          <path d="M125 242 L185 305" />
          <path d="M195 242 L135 305" />
          {/* Base rests */}
          <line x1="115" y1="305" x2="148" y2="305" strokeWidth="3" />
          <line x1="172" y1="305" x2="205" y2="305" strokeWidth="3" />
          {/* Central carved joint medallion */}
          <circle cx="160" cy="273" r="5" fill="#FFFDF7" stroke="#8A2525" strokeWidth="2" />
        </g>

        {/* ── STACK OF BOUND VEDIC GRANTHAS (Palm Leaf & Scripture Books) ── */}
        {/* Book 1 (Top Stack Grantha) */}
        <g transform="translate(0, 318)">
          <rect x="75" y="0" width="170" height="22" rx="4" fill="#FFFDF7" stroke="#C9A24B" strokeWidth="1.8" />
          <rect x="75" y="0" width="16" height="22" rx="3" fill="#8A2525" opacity="0.8" />
          <line x1="105" y1="11" x2="225" y2="11" stroke="#C9A24B" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.7" />
          <line x1="233" y1="4" x2="233" y2="18" stroke="#E8871E" strokeWidth="1.5" />
        </g>

        {/* Book 2 (Middle Stack - Traditional Bound Pothi Scripture) */}
        <g transform="translate(0, 348)">
          <rect x="58" y="0" width="204" height="26" rx="4" fill="#FFFDF7" stroke="#C9A24B" strokeWidth="2" />
          <rect x="58" y="0" width="20" height="26" rx="3" fill="#C9A24B" opacity="0.6" />
          {/* Bound Sacred Cord (Sutra tie) */}
          <line x1="120" y1="0" x2="120" y2="26" stroke="#8A2525" strokeWidth="2" />
          <line x1="200" y1="0" x2="200" y2="26" stroke="#8A2525" strokeWidth="2" />
          {/* Title plate inscription */}
          <rect x="135" y="6" width="50" height="14" rx="2" fill="#FDFAF3" stroke="#C9A24B" strokeWidth="1" />
          <line x1="140" y1="13" x2="180" y2="13" stroke="#8A2525" strokeWidth="1.2" />
        </g>

        {/* Book 3 (Base Large Samhita Grantha Volume) */}
        <g transform="translate(0, 382)">
          <rect x="42" y="0" width="236" height="32" rx="5" fill="#FFFDF7" stroke="#C9A24B" strokeWidth="2.2" />
          <rect x="42" y="0" width="24" height="32" rx="4" fill="#8A2525" opacity="0.85" />
          {/* Gold foil embossed ribs on spine */}
          <line x1="44" y1="7" x2="64" y2="7" stroke="#C9A24B" strokeWidth="1.5" />
          <line x1="44" y1="16" x2="64" y2="16" stroke="#C9A24B" strokeWidth="1.5" />
          <line x1="44" y1="25" x2="64" y2="25" stroke="#C9A24B" strokeWidth="1.5" />
          {/* Page gilding line */}
          <line x1="76" y1="16" x2="266" y2="16" stroke="#C9A24B" strokeWidth="1.2" strokeDasharray="4 2" opacity="0.6" />
        </g>

        {/* Floating Sacred Wisdom Motifs */}
        <g fill="#C9A24B" opacity="0.75">
          <circle cx="50" cy="115" r="3" />
          <circle cx="270" cy="115" r="3" />
          <circle cx="40" cy="270" r="2.5" />
          <circle cx="280" cy="270" r="2.5" />
        </g>
      </svg>

      {/* Decorative SVG Vedic Scriptures & Study illustration – top-right */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-16 w-60 opacity-[0.15] sm:w-76 lg:-right-6 lg:w-84"
        viewBox="0 0 320 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft aura glow behind open scripture */}
        <circle cx="160" cy="180" r="95" fill="#E8871E" opacity="0.08" />

        {/* Radiating Wisdom Rays from Scripture */}
        <g stroke="#C9A24B" strokeWidth="1.2" strokeDasharray="3 4" opacity="0.6">
          <line x1="160" y1="90" x2="160" y2="58" />
          <line x1="120" y1="105" x2="95" y2="78" />
          <line x1="200" y1="105" x2="225" y2="78" />
          <line x1="85" y1="140" x2="52" y2="128" />
          <line x1="235" y1="140" x2="268" y2="128" />
        </g>

        {/* Sacred Deepam / Lamp of Learning above open book */}
        <g transform="translate(160, 95)">
          {/* Flame of knowledge */}
          <path d="M0 -30 C-6 -18 -8 -10 0 0 C8 -10 6 -18 0 -30 Z" fill="#E8871E" opacity="0.9" />
          <path d="M0 -22 C-3 -14 -4 -8 0 0 C4 -8 3 -14 0 -22 Z" fill="#F4D06F" />
          {/* Lamp Base / Diya */}
          <path d="M-14 0 C-10 8 10 8 14 0 C16 4 12 7 0 7 C-12 7 -16 4 -14 0 Z" fill="#C9A24B" />
          <path d="M-4 7 L4 7 L6 13 L-6 13 Z" fill="#C9A24B" />
          <ellipse cx="0" cy="13" rx="10" ry="2.5" fill="#C9A24B" />
        </g>

        {/* ── OPEN VEDIC SCRIPTURE (Pustaka / Grantha on Reading Stand) ── */}
        {/* Back cover / shadow */}
        <path
          d="M48 160 C100 148 152 170 160 178 C168 170 220 148 272 160 L272 232 C220 220 168 242 160 250 C152 242 100 220 48 232 Z"
          fill="#8A2525"
          opacity="0.25"
        />
        {/* Page thickness block */}
        <path
          d="M50 164 C100 152 152 174 160 182 C168 174 220 152 270 164 L270 236 C220 224 168 246 160 254 C152 246 100 224 50 236 Z"
          fill="#C9A24B"
          opacity="0.35"
        />
        {/* Main Open Pages (Ivory leaf parchment) */}
        <path
          d="M54 156 C102 144 154 166 160 174 C166 166 218 144 266 156 L266 226 C218 214 166 236 160 244 C154 236 102 214 54 226 Z"
          fill="#FFFDF7"
          stroke="#C9A24B"
          strokeWidth="2"
        />
        {/* Center Spine Crease */}
        <line x1="160" y1="174" x2="160" y2="244" stroke="#8A2525" strokeWidth="2" />
        <path d="M160 174 C158 200 158 220 160 244" stroke="#C9A24B" strokeWidth="1.5" />

        {/* Flowing Bookmark Ribbon (Silk thread) */}
        <path
          d="M160 244 C158 265 150 275 154 295 C157 305 162 315 158 325"
          stroke="#8A2525"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Shloka Verse lines on Left Page */}
        <g stroke="#C9A24B" strokeWidth="1.2" opacity="0.65" strokeLinecap="round">
          <line x1="72" y1="168" x2="142" y2="178" />
          <line x1="72" y1="180" x2="142" y2="190" />
          <line x1="72" y1="192" x2="142" y2="202" />
          <line x1="72" y1="204" x2="130" y2="212" />
          <line x1="72" y1="216" x2="115" y2="222" />
        </g>

        {/* Shloka Verse lines on Right Page */}
        <g stroke="#C9A24B" strokeWidth="1.2" opacity="0.65" strokeLinecap="round">
          <line x1="178" y1="178" x2="248" y2="168" />
          <line x1="178" y1="190" x2="248" y2="180" />
          <line x1="178" y1="202" x2="248" y2="192" />
          <line x1="178" y1="212" x2="236" y2="204" />
          <line x1="178" y1="222" x2="221" y2="216" />
        </g>

        {/* ── WOODEN BOOKSTAND (Vyasapeeth / Rehal) ── */}
        <g stroke="#C9A24B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Crossed wooden legs */}
          <path d="M125 242 L185 305" />
          <path d="M195 242 L135 305" />
          {/* Base rests */}
          <line x1="115" y1="305" x2="148" y2="305" strokeWidth="3" />
          <line x1="172" y1="305" x2="205" y2="305" strokeWidth="3" />
          {/* Central carved joint medallion */}
          <circle cx="160" cy="273" r="5" fill="#FFFDF7" stroke="#8A2525" strokeWidth="2" />
        </g>

        {/* ── STACK OF BOUND VEDIC GRANTHAS (Palm Leaf & Scripture Books) ── */}
        {/* Book 1 (Top Stack Grantha) */}
        <g transform="translate(0, 318)">
          <rect x="75" y="0" width="170" height="22" rx="4" fill="#FFFDF7" stroke="#C9A24B" strokeWidth="1.8" />
          <rect x="229" y="0" width="16" height="22" rx="3" fill="#8A2525" opacity="0.8" />
          <line x1="95" y1="11" x2="215" y2="11" stroke="#C9A24B" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.7" />
          <line x1="87" y1="4" x2="87" y2="18" stroke="#E8871E" strokeWidth="1.5" />
        </g>

        {/* Book 2 (Middle Stack - Traditional Bound Pothi Scripture) */}
        <g transform="translate(0, 348)">
          <rect x="58" y="0" width="204" height="26" rx="4" fill="#FFFDF7" stroke="#C9A24B" strokeWidth="2" />
          <rect x="242" y="0" width="20" height="26" rx="3" fill="#C9A24B" opacity="0.6" />
          {/* Bound Sacred Cord (Sutra tie) */}
          <line x1="120" y1="0" x2="120" y2="26" stroke="#8A2525" strokeWidth="2" />
          <line x1="200" y1="0" x2="200" y2="26" stroke="#8A2525" strokeWidth="2" />
          {/* Title plate inscription */}
          <rect x="135" y="6" width="50" height="14" rx="2" fill="#FDFAF3" stroke="#C9A24B" strokeWidth="1" />
          <line x1="140" y1="13" x2="180" y2="13" stroke="#8A2525" strokeWidth="1.2" />
        </g>

        {/* Book 3 (Base Large Samhita Grantha Volume) */}
        <g transform="translate(0, 382)">
          <rect x="42" y="0" width="236" height="32" rx="5" fill="#FFFDF7" stroke="#C9A24B" strokeWidth="2.2" />
          <rect x="254" y="0" width="24" height="32" rx="4" fill="#8A2525" opacity="0.85" />
          {/* Gold foil embossed ribs on spine */}
          <line x1="256" y1="7" x2="276" y2="7" stroke="#C9A24B" strokeWidth="1.5" />
          <line x1="256" y1="16" x2="276" y2="16" stroke="#C9A24B" strokeWidth="1.5" />
          <line x1="256" y1="25" x2="276" y2="25" stroke="#C9A24B" strokeWidth="1.5" />
          {/* Page gilding line */}
          <line x1="54" y1="16" x2="244" y2="16" stroke="#C9A24B" strokeWidth="1.2" strokeDasharray="4 2" opacity="0.6" />
        </g>

        {/* Floating Sacred Wisdom Motifs */}
        <g fill="#C9A24B" opacity="0.75">
          <circle cx="50" cy="115" r="3" />
          <circle cx="270" cy="115" r="3" />
          <circle cx="40" cy="270" r="2.5" />
          <circle cx="280" cy="270" r="2.5" />
        </g>
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
            <div className="mt-8 border-t border-gold-soft/60 pt-6 hidden sm:block lg:mt-10">
              <div className="grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-4 sm:gap-x-3 lg:grid-cols-2 lg:gap-x-4 lg:gap-y-4 xl:grid-cols-4 xl:gap-x-4">
                {stats.map(({ value, label }) => (
                  <div key={label} className="min-w-0 border-l-2 border-gold-soft/80 pl-3">
                    <p className="font-sans text-[17px] sm:text-[18px] md:text-[20px] lg:text-[19px] xl:text-[21px] font-bold leading-tight text-maroon tracking-tight">
                      {value}
                    </p>
                    <p className="mt-0.5 text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-wider text-ink-soft/90 leading-snug">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
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
              <div className="mb-3 flex items-center gap-2 px-2">
                <span className="flex h-2 w-2 rounded-full bg-saffron animate-pulse" aria-hidden="true" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-maroon/80">
                  Gurukula Oral Vedic Education · Visual Showcase
                </span>
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
          <div key={label} className="min-w-0 bg-[#FDFAF3] px-5 py-4">
            <p className="font-sans text-[19px] font-bold text-maroon">{value}</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-ink-soft/90 leading-snug">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
