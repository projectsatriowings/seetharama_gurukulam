import {
  ArrowRight,
  BookOpen,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  Flame,
  HeartHandshake,
  Home as HomeIcon,
  Landmark,
  MapPin,
  MessageCircle,
  Phone,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Sun,
  User,
  X,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import EnquiryForm, { emailRules, phoneRules } from '../components/EnquiryForm.jsx'
import OrnamentDivider from '../components/OrnamentDivider.jsx'
import Reveal from '../components/Reveal.jsx'
import SEO from '../components/SEO.jsx'
import services from '../data/services.json'
import { site } from '../data/site.js'
import { whatsappLink } from '../utils/whatsapp.js'

/**
 * Delicate temple-manuscript corner ornament in antique gold
 */
function SacredCorner({ className = '' }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M1.5 20.5V5.5C1.5 3.29086 3.29086 1.5 5.5 1.5H20.5"
        stroke="#C9A24B"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="5.5" cy="5.5" r="2" fill="#C9A24B" />
    </svg>
  )
}

/**
 * Subtle geometric Yajna-Lotus mandala watermark for the sanctum hero
 */
function YajnaMandala({ className = '' }) {
  return (
    <svg
      width="420"
      height="420"
      viewBox="0 0 420 420"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="210" cy="210" r="200" stroke="#C9A24B" strokeWidth="1" strokeDasharray="4 6" />
      <circle cx="210" cy="210" r="158" stroke="#C9A24B" strokeWidth="1.2" />
      <circle cx="210" cy="210" r="110" stroke="#C9A24B" strokeWidth="1" />
      <rect
        x="132"
        y="132"
        width="156"
        height="156"
        stroke="#C9A24B"
        strokeWidth="1"
        transform="rotate(45 210 210)"
      />
      <rect x="132" y="132" width="156" height="156" stroke="#C9A24B" strokeWidth="1" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <ellipse
          key={deg}
          cx="210"
          cy="76"
          rx="10"
          ry="28"
          stroke="#C9A24B"
          strokeWidth="1"
          transform={`rotate(${deg} 210 210)`}
        />
      ))}
      <circle cx="210" cy="210" r="14" stroke="#C9A24B" strokeWidth="1.5" />
    </svg>
  )
}

/**
 * Refined Purna Kalasha vector emblem for the Residence Venue panel
 */
function KalashaEmblem({ className = '' }) {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="28" cy="28" r="26" stroke="#C9A24B" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
      {/* Sacred coconut & mango leaves */}
      <path d="M28 11C25 14 24 17.5 24 20.5H32C32 17.5 31 14 28 11Z" fill="#E9D8A6" stroke="#C9A24B" strokeWidth="1.2" />
      <path d="M23 20C19.5 17 16 17.5 14.5 19.5C17.5 20.5 20 21.5 22.5 23" stroke="#C9A24B" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M33 20C36.5 17 40 17.5 41.5 19.5C38.5 20.5 36 21.5 33.5 23" stroke="#C9A24B" strokeWidth="1.3" strokeLinecap="round" />
      {/* Kalasha vessel */}
      <path d="M22 22.5H34L32.5 26C36.5 28.5 38 33 36.5 38C35.2 42 32 44 28 44C24 44 20.8 42 19.5 38C18 33 19.5 28.5 23.5 26L22 22.5Z" stroke="#E9D8A6" strokeWidth="1.5" fill="#4A1212" />
      {/* Decorative band & bindu */}
      <path d="M20.2 33.5H35.8" stroke="#C9A24B" strokeWidth="1.1" strokeDasharray="2 2" />
      <circle cx="28" cy="36.5" r="2" fill="#E8871E" />
    </svg>
  )
}

const CATEGORIES = [
  { id: 'All', label: 'All Offerings', icon: Sparkles },
  { id: 'Parayanam', label: 'Vedic Parayanam', icon: BookOpen },
  { id: 'Homam', label: 'Sacred Homam', icon: Flame },
  { id: 'Pooja & Rites', label: 'Pooja & Rites', icon: Sun },
]

const CATEGORY_ICON_MAP = {
  Parayanam: BookOpen,
  Homam: Flame,
  'Pooja & Rites': Sun,
}

const OCCASION_GUIDES = [
  {
    id: 'new-home',
    title: 'New Home, Office or Undertaking',
    sanskrit: 'नूतन आरम्भः',
    note: 'Before stepping into a new home or beginning a fresh endeavour, Vedic tradition invokes Sri Maha Ganapathi and the Vastu Devatas for auspiciousness, protection, and harmony.',
    recommendedIds: ['s7', 's2'],
  },
  {
    id: 'birthdays',
    title: 'Birthdays & Milestone Years',
    sanskrit: 'जन्म नक्षत्रम्',
    note: 'On a child’s first birthday (Abdhapoorthi), annual Janma Nakshatram, or revered milestones like Shashtiabdapoorthi and Sadabhishekam, Ayush Homam and Veda Parayanam invoke health and longevity.',
    recommendedIds: ['s3', 's1'],
  },
  {
    id: 'peace-health',
    title: 'Health, Peace & Planetary Harmony',
    sanskrit: 'आरोग्य एवं शान्तिः',
    note: 'During periods of transition, recovery, or when seeking inner steadiness and balance, Navagraha Homam and Sri Rudra Parayanam offer deep spiritual solace and grace.',
    recommendedIds: ['s4', 's5'],
  },
  {
    id: 'festivals',
    title: 'Festivals & Spiritual Upliftment',
    sanskrit: 'उत्सव एवं भक्तिः',
    note: 'Sanctify auspicious days such as Pournami, Navaratri, Fridays, or family gatherings with the timeless resonance of Veda Parayanam and Sri Lalitha Sahasranamam.',
    recommendedIds: ['s6', 's1'],
  },
  {
    id: 'pitru',
    title: 'Ancestral Rites (Pitru Karya)',
    sanskrit: 'पितृ कर्म',
    note: 'Honouring forebears with clarity and reverence according to your family’s Sutra and tradition. Our acharyas provide compassionate, shastra-compliant guidance for Shraddham and Tarpanam.',
    recommendedIds: ['s8'],
  },
]

const PROCESS_STEPS = [
  {
    num: '01',
    sanskrit: 'सङ्कल्पः',
    title: 'Choose & Consult',
    desc: 'Select a parayanam, homam, or pooja from our offerings — or tell us the occasion and our acharya will recommend the right vidhi.',
  },
  {
    num: '02',
    sanskrit: 'मुहूर्तः',
    title: 'Muhurtham & Preparations',
    desc: 'Share your preferred date, venue, and family particulars. We confirm the acharya, auspicious timing, and a simple checklist if at your home.',
  },
  {
    num: '03',
    sanskrit: 'आशीर्वादः',
    title: 'Sacred Performance',
    desc: 'The ritual is conducted with authentic Krishna Yajur Veda swara and complete devotion, concluding with Ashirvadam and sacred prasadam.',
  },
]

const DEVOTEE_FAQS = [
  {
    q: 'Do we need to arrange pooja samagri (ritual materials) ourselves?',
    a: 'For rituals held at the Gurukulam, all samagri and arrangements are taken care of by the Patasala. For homams or poojas at your residence, we share a clear, concise checklist in advance — and our team can also help coordinate the materials upon request.',
  },
  {
    q: 'Can devotees living outside Chennai or abroad request a Sankalpam?',
    a: 'Yes. Many families residing outside Chennai or overseas request Veda Parayanam, Rudra Parayanam, or Homam Sankalpams to be performed at the Gurukulam in their family’s Gothram and Nakshatram. Prasadam can be collected by relatives or dispatched as discussed.',
  },
  {
    q: 'How far in advance should we submit an enquiry?',
    a: 'We recommend reaching out at least 7 to 14 days ahead for Homams and Griha Pravesham Poojas, especially during auspicious months. For urgent requirements or ancestral rites, please call or WhatsApp our office directly.',
  },
  {
    q: 'Is there a fixed price or online payment required on this website?',
    a: 'No. No payment or donation is ever collected on this website. All arrangements and traditional sambhavana are discussed directly and transparently with the Gurukulam office once your enquiry is received.',
  },
]

export default function ParayanamPooja() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeOccasionId, setActiveOccasionId] = useState(OCCASION_GUIDES[0].id)
  const [selectedService, setSelectedService] = useState(null)
  const [selectedVenue, setSelectedVenue] = useState(null)
  const [openFaq, setOpenFaq] = useState(0)

  const filteredServices = useMemo(() => {
    if (activeCategory === 'All') return services
    return services.filter((s) => s.category === activeCategory)
  }, [activeCategory])

  const activeOccasion = useMemo(
    () => OCCASION_GUIDES.find((o) => o.id === activeOccasionId) || OCCASION_GUIDES[0],
    [activeOccasionId]
  )

  const recommendedServices = useMemo(
    () =>
      activeOccasion.recommendedIds
        .map((id) => services.find((s) => s.id === id))
        .filter(Boolean),
    [activeOccasion]
  )

  const formPrefill = useMemo(() => {
    const obj = {}
    if (selectedService !== null) obj.service = selectedService
    if (selectedVenue !== null) obj.venue = selectedVenue
    return obj
  }, [selectedService, selectedVenue])

  const scrollToEnquiry = () => {
    const el = document.getElementById('sankalpam-enquiry')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleSelectService = (serviceName) => {
    setSelectedService(serviceName)
    scrollToEnquiry()
  }

  const handleSelectVenue = (venueLabel) => {
    setSelectedVenue(venueLabel)
    scrollToEnquiry()
  }

  const customWhatsappMessage = selectedService
    ? `Namaste, I would like to enquire about ${selectedService}${selectedVenue ? ` (${selectedVenue})` : ''} at Sri Seetharama Gurukulam.`
    : 'Namaste, I would like to enquire about Parayanam / Homam / Pooja services at Sri Seetharama Gurukulam.'

  return (
    <>
      <SEO
        title="Parayanam, Homam & Pooja Services"
        description="Book authentic Vedic Parayanam, Homam, and traditional Pooja services with Sri Seetharama Gurukulam Trust in Chennai — performed with devotion at the Gurukulam or at your home."
        path="/parayanam-pooja"
      />

      {/* ══════════════════════════════════════════════════════════════════
          1. ASYMMETRIC SANCTUM HERO (Deep Temple Maroon & Antique Gold)
         ══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-b border-gold/40 bg-gradient-to-br from-[#3B0D0D] via-[#4A1212] to-[#280707] py-14 text-cream sm:py-16 lg:py-20">
        {/* Background Kolam dot matrix & sacred geometric Yajna watermark */}
        <div className="pattern-kolam absolute inset-0 opacity-[0.14]" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-24 -top-20 opacity-[0.09] hidden lg:block"
          aria-hidden="true"
        >
          <YajnaMandala />
        </div>
        <div
          className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-saffron/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="site-container relative">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Editorial Invocation */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-gold/45 bg-black/25 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-gold-soft">
                  <span className="font-serif text-sm tracking-normal text-saffron">
                    ॥ वैदिक कर्म एवं पारायणम् ॥
                  </span>
                  <span className="h-3 w-px bg-gold/40" aria-hidden="true" />
                  <span>Sacred Services</span>
                </div>

                <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.08] tracking-tight text-cream sm:text-5xl lg:text-[56px]">
                  Parayanam, Homam
                  <span className="block font-normal italic text-gold-soft">
                    &amp; Traditional Pooja
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
                  Sacred Vedic recitations, fire offerings, and grihya rituals performed with
                  authentic <em>Swara Shuddhi</em> and quiet devotion by our learned acharyas and
                  vidyarthis — in the serene hall of the Gurukulam or in the warmth of your home.
                </p>

                {/* Primary & Secondary Actions */}
                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <button
                    type="button"
                    onClick={scrollToEnquiry}
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-saffron px-7 py-3 text-[15px] font-bold text-maroon-dark shadow-warm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f0a64a]"
                  >
                    <span>Request a Sankalpam</span>
                    <ArrowRight size={17} aria-hidden="true" />
                  </button>
                  <a
                    href="#rituals-compendium"
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-gold/55 bg-white/5 px-6 py-3 text-[15px] font-semibold text-cream transition-all duration-200 hover:border-gold hover:bg-gold/15"
                  >
                    <span>Explore Offerings</span>
                  </a>
                </div>

                {/* Heritage Pillars Strip */}
                <div className="mt-10 grid grid-cols-1 gap-4 border-t border-gold/25 pt-6 sm:grid-cols-3 sm:gap-6">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-saffron">
                      Tradition
                    </p>
                    <p className="mt-1 font-serif text-lg font-semibold text-cream">
                      Krishna Yajur Veda
                    </p>
                    <p className="text-xs text-cream/70">Authentic swara &amp; vidhi</p>
                  </div>
                  <div className="sm:border-l sm:border-gold/20 sm:pl-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-saffron">
                      Venues
                    </p>
                    <p className="mt-1 font-serif text-lg font-semibold text-cream">
                      Gurukulam or Home
                    </p>
                    <p className="text-xs text-cream/70">Alwarpet sanctum &amp; residences</p>
                  </div>
                  <div className="sm:border-l sm:border-gold/20 sm:pl-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-saffron">
                      Guidance
                    </p>
                    <p className="mt-1 font-serif text-lg font-semibold text-cream">
                      Acharya Counsel
                    </p>
                    <p className="text-xs text-cream/70">Tailored to your occasion</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Framed Sanctum Arch Composition */}
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="relative mx-auto max-w-[440px] lg:max-w-none">
                  <div className="relative rounded-2xl border border-gold/45 bg-[#2A0909]/90 p-3.5 shadow-2xl sm:p-4">
                    <SacredCorner className="absolute left-2.5 top-2.5" />
                    <SacredCorner className="absolute right-2.5 top-2.5 rotate-90" />
                    <SacredCorner className="absolute bottom-2.5 right-2.5 rotate-180" />
                    <SacredCorner className="absolute bottom-2.5 left-2.5 -rotate-90" />

                    {/* Temple-Arch Cropped Genuine Gurukulam Photograph */}
                    <div className="relative overflow-hidden rounded-t-[130px] rounded-b-xl border border-gold/30">
                      <img
                        src="/photos/acharya-parayanam-recitation.jpg"
                        alt="Acharyas and vidyarthis of Sri Seetharama Gurukulam performing Veda Parayanam in unison"
                        width="1024"
                        height="768"
                        className="h-[310px] w-full object-cover object-center sm:h-[360px]"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#280707]/85 via-[#280707]/15 to-transparent"
                        aria-hidden="true"
                      />

                      {/* Floating Ivory Caption Seal inside bottom of arch */}
                      <div className="absolute inset-x-3 bottom-3 rounded-xl border border-gold/40 bg-ivory/95 px-4 py-3 text-ink shadow-card backdrop-blur-sm">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-saffron-deep">
                            Veda Parayanam &amp; Sankalpam
                          </span>
                          <span className="font-serif text-xs font-semibold text-maroon">
                            Alwarpet, Chennai
                          </span>
                        </div>
                        <p className="mt-1 font-serif text-[16px] font-bold leading-snug text-maroon">
                          Chanted with discipline by our acharyas &amp; residential vidyarthis
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          2. INTERACTIVE SACRED OFFERINGS COMPENDIUM (Manuscript Ledger Grid)
         ══════════════════════════════════════════════════════════════════ */}
      <section id="rituals-compendium" className="scroll-mt-24 py-14 sm:py-16 lg:py-20">
        <div className="site-container">
          {/* Editorial Header + Category Filter Bar */}
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-saffron-deep">
                  Sacred Offerings · वैदिक सेवाः
                </p>
                <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-maroon sm:text-4xl lg:text-[42px]">
                  Compendium of Rituals &amp; Recitations
                </h2>
                <p className="mt-2.5 text-ink-soft">
                  Browse by tradition below and select any offering to pre-fill your Sankalpam
                  enquiry directly.
                </p>
              </div>

              {/* Segmented Category Filter Pills */}
              <div
                className="flex flex-wrap gap-2 rounded-2xl border border-gold-soft bg-ivory p-1.5 shadow-sm"
                role="tablist"
                aria-label="Filter rituals by category"
              >
                {CATEGORIES.map((cat) => {
                  const Icon = cat.icon
                  const isActive = activeCategory === cat.id
                  const count =
                    cat.id === 'All'
                      ? services.length
                      : services.filter((s) => s.category === cat.id).length
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`inline-flex min-h-[42px] items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold tracking-wide transition-all duration-200 sm:text-[13px] ${
                        isActive
                          ? 'bg-maroon text-cream shadow-sm'
                          : 'text-ink-soft hover:bg-cream hover:text-maroon'
                      }`}
                    >
                      <Icon
                        size={14}
                        className={isActive ? 'text-saffron' : 'text-saffron-deep'}
                        aria-hidden="true"
                      />
                      <span>{cat.label}</span>
                      <span
                        className={`ml-0.5 rounded-full px-1.5 py-0.5 text-[10px] ${
                          isActive
                            ? 'bg-white/15 text-gold-soft'
                            : 'bg-gold-soft/50 text-maroon'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </Reveal>

          {/* 2-Column Manuscript Folio Cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {filteredServices.map((s, idx) => {
              const CategoryIcon = CATEGORY_ICON_MAP[s.category] || Sparkles
              const isSelected = selectedService === s.name

              return (
                <Reveal key={s.id} delay={idx * 0.04}>
                  <article
                    className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-card border transition-all duration-200 ${
                      isSelected
                        ? 'border-maroon bg-[#FFFBF2] shadow-elevated ring-2 ring-maroon/20'
                        : 'border-gold-soft bg-ivory shadow-card hover:-translate-y-0.5 hover:border-gold hover:shadow-elevated'
                    }`}
                  >
                    {/* Subtle top sacred accent bar */}
                    <div
                      className={`h-1 w-full transition-colors duration-200 ${
                        isSelected
                          ? 'bg-gradient-to-r from-maroon via-saffron to-gold'
                          : 'bg-gradient-to-r from-gold-soft via-gold/70 to-gold-soft group-hover:from-maroon group-hover:via-saffron group-hover:to-gold'
                      }`}
                      aria-hidden="true"
                    />

                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      {/* Top Folio Header: Roman Numeral + Category + Sanskrit */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-gold/60 bg-maroon-surface font-serif text-base font-bold text-maroon">
                            {s.numeral}
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-soft bg-cream px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-maroon">
                            <CategoryIcon size={13} className="text-saffron-deep" aria-hidden="true" />
                            <span>{s.category}</span>
                          </span>
                        </div>
                        <span className="font-serif text-base font-semibold tracking-wide text-saffron-deep/90 sm:text-lg">
                          {s.sanskrit}
                        </span>
                      </div>

                      {/* Title & Focus */}
                      <div className="mt-4">
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-muted">
                          {s.deityOrFocus}
                        </p>
                        <h3 className="mt-1 font-serif text-2xl font-bold leading-snug text-maroon sm:text-[28px]">
                          {s.name}
                        </h3>
                        <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
                          {s.detail || s.description}
                        </p>
                      </div>

                      {/* Ideal Occasions Pills */}
                      {s.occasions?.length ? (
                        <div className="mt-4 flex flex-wrap items-center gap-1.5">
                          <span className="mr-1 text-[11px] font-bold uppercase tracking-wider text-ink-muted">
                            Ideal for:
                          </span>
                          {s.occasions.map((occ) => (
                            <span
                              key={occ}
                              className="rounded-md border border-gold-soft/80 bg-cream/80 px-2.5 py-0.5 text-xs font-medium text-ink"
                            >
                              {occ}
                            </span>
                          ))}
                        </div>
                      ) : null}

                      {/* Footer Metadata & Interactive Select Action */}
                      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-dashed border-gold/60 pt-4">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-semibold text-ink-soft">
                          <span className="inline-flex items-center gap-1.5">
                            <Clock size={14} className="text-saffron-deep" aria-hidden="true" />
                            <span>{s.duration}</span>
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin size={14} className="text-saffron-deep" aria-hidden="true" />
                            <span>{s.venue}</span>
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleSelectService(s.name)}
                          className={`inline-flex min-h-[40px] items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold tracking-wide transition-all duration-200 ${
                            isSelected
                              ? 'bg-maroon text-cream shadow-sm'
                              : 'border border-maroon/30 bg-maroon-surface/70 text-maroon hover:border-maroon hover:bg-maroon hover:text-cream'
                          }`}
                        >
                          {isSelected ? (
                            <>
                              <Check size={14} aria-hidden="true" />
                              <span>Selected for Enquiry</span>
                            </>
                          ) : (
                            <>
                              <span>Select &amp; Enquire</span>
                              <ArrowRight size={14} aria-hidden="true" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. INTERACTIVE OCCASION MATCHER ("Guidance by Occasion")
         ══════════════════════════════════════════════════════════════════ */}
      <section className="border-y border-gold/35 bg-ivory py-14 sm:py-16 lg:py-20">
        <div className="site-container">
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Occasion Selector List */}
            <div className="lg:col-span-5">
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-saffron-deep">
                  Acharya Guidance
                </p>
                <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-maroon sm:text-4xl">
                  Unsure which ritual suits your occasion?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                  Choose the milestone or intention closest to your family’s needs to see
                  traditional recommendations — or speak directly with our acharya.
                </p>

                <div className="mt-6 space-y-2" role="tablist" aria-label="Select life occasion">
                  {OCCASION_GUIDES.map((occ) => {
                    const active = occ.id === activeOccasionId
                    return (
                      <button
                        key={occ.id}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => setActiveOccasionId(occ.id)}
                        className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-200 ${
                          active
                            ? 'border-maroon bg-maroon text-cream shadow-card'
                            : 'border-gold-soft bg-cream/70 text-ink hover:border-gold hover:bg-cream'
                        }`}
                      >
                        <div>
                          <span
                            className={`block font-serif text-lg font-bold leading-snug ${
                              active ? 'text-cream' : 'text-maroon'
                            }`}
                          >
                            {occ.title}
                          </span>
                          <span
                            className={`text-xs font-medium ${
                              active ? 'text-gold-soft' : 'text-saffron-deep'
                            }`}
                          >
                            {occ.sanskrit}
                          </span>
                        </div>
                        <ArrowRight
                          size={16}
                          className={`shrink-0 transition-transform duration-200 ${
                            active ? 'translate-x-0.5 text-saffron' : 'text-ink-muted'
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    )
                  })}
                </div>
              </Reveal>
            </div>

            {/* Right Framed Recommendation Folio */}
            <div className="lg:col-span-7">
              <Reveal delay={0.08}>
                <div className="relative rounded-card border border-gold/60 bg-cream p-6 shadow-card sm:p-8 lg:p-9">
                  <SacredCorner className="absolute left-3 top-3" />
                  <SacredCorner className="absolute right-3 top-3 rotate-90" />
                  <SacredCorner className="absolute bottom-3 right-3 rotate-180" />
                  <SacredCorner className="absolute bottom-3 left-3 -rotate-90" />

                  <div className="relative">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-gold/35 pb-4">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-saffron-deep">
                          Recommended for this occasion
                        </p>
                        <h3 className="mt-1 font-serif text-2xl font-bold text-maroon sm:text-3xl">
                          {activeOccasion.title}
                        </h3>
                      </div>
                      <span className="font-serif text-lg font-semibold text-gold">
                        {activeOccasion.sanskrit}
                      </span>
                    </div>

                    <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                      {activeOccasion.note}
                    </p>

                    {/* Recommended Service Cards */}
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {recommendedServices.map((rec) => (
                        <div
                          key={rec.id}
                          className="flex flex-col justify-between rounded-xl border border-gold-soft bg-ivory p-5 shadow-sm"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-saffron-deep">
                                {rec.category}
                              </span>
                              <span className="font-serif text-sm text-ink-muted">
                                {rec.sanskrit}
                              </span>
                            </div>
                            <h4 className="mt-1 font-serif text-xl font-bold text-maroon">
                              {rec.name}
                            </h4>
                            <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">
                              {rec.description}
                            </p>
                          </div>

                          <div className="mt-4 flex items-center justify-between gap-2 border-t border-gold-soft/70 pt-3">
                            <span className="text-[11px] font-semibold text-ink-muted">
                              {rec.duration}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleSelectService(rec.name)}
                              className="inline-flex items-center gap-1 text-xs font-bold text-maroon underline decoration-gold underline-offset-4 transition hover:text-saffron-deep"
                            >
                              <span>Choose this</span>
                              <ArrowRight size={13} aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Direct Consultation Footnote */}
                    <div className="mt-6 flex flex-col gap-3 rounded-xl border border-gold/40 bg-ivory/80 p-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-xs leading-relaxed text-ink-soft sm:text-[13px]">
                        <strong className="text-maroon">Have a specific Sankalpam or family custom?</strong>{' '}
                        Our acharya will gladly advise you based on your Gothram &amp; Nakshatram.
                      </p>
                      <a
                        href={whatsappLink(
                          `Namaste, I would like acharya guidance for an occasion: ${activeOccasion.title}.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[40px] shrink-0 items-center justify-center gap-1.5 rounded-full border border-whatsapp bg-white px-4 py-2 text-xs font-bold text-[#1a7a3a] transition hover:bg-whatsapp/10"
                      >
                        <MessageCircle size={15} aria-hidden="true" />
                        <span>Ask on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. TWO SACRED VENUES — Editorial Comparison
         ══════════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="site-container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-saffron-deep">
                Where It Is Performed
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-maroon sm:text-4xl lg:text-[42px]">
                At the Gurukulam or Your Residence
              </h2>
              <p className="mt-3 text-ink-soft">
                Whether you invite our acharyas to your home or request a Sankalpam in the tranquil
                hall of our Alwarpet Patasala, every detail is handled with care.
              </p>
              <OrnamentDivider className="mt-4" />
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Venue A: At the Gurukulam (Genuine Photography Card) */}
            <Reveal>
              <div className="flex h-full flex-col overflow-hidden rounded-card border border-gold-soft bg-ivory shadow-card">
                <div className="relative h-56 overflow-hidden sm:h-64">
                  <img
                    src="/photos/veda-parayanam-recitation.jpg"
                    alt="Vedic scholars and devotees seated in prayer and recitation at Sri Seetharama Gurukulam hall"
                    width="1024"
                    height="1024"
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#280707]/80 via-[#280707]/20 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-2">
                    <div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-saffron px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-maroon-dark">
                        <Landmark size={12} aria-hidden="true" />
                        <span>Alwarpet Sanctum</span>
                      </span>
                      <h3 className="mt-2 font-serif text-2xl font-bold text-cream sm:text-3xl">
                        At the Gurukulam
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <p className="text-sm leading-relaxed text-ink-soft">
                      Performed within the sacred atmosphere of Sri Seetharama Gurukulam Veda
                      Patasala in Alwarpet, Chennai — ideal for families near or far.
                    </p>
                    <ul className="mt-5 space-y-2.5 text-sm text-ink">
                      {[
                        'Chanted by our acharyas and residential vidyarthis in unison',
                        'All pooja samagri and traditional arrangements handled by the Patasala',
                        'Sankalpam performed in your family’s Gothram & Nakshatram — even if you live abroad',
                        'Sacred prasadam offered in person or dispatched as coordinated',
                      ].map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <Check
                            size={16}
                            className="mt-0.5 shrink-0 text-saffron-deep"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-gold-soft pt-5">
                    <button
                      type="button"
                      onClick={() => handleSelectVenue('At the gurukulam')}
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-maroon px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-saffron-deep"
                    >
                      <span>Book at the Gurukulam</span>
                      <ArrowRight size={15} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Venue B: At Your Residence (Editorial Maroon & Gold Top Panel) */}
            <Reveal delay={0.08}>
              <div className="flex h-full flex-col overflow-hidden rounded-card border border-gold-soft bg-ivory shadow-card">
                <div className="relative flex h-56 flex-col justify-between overflow-hidden bg-gradient-to-br from-[#5B1818] via-[#4A1212] to-[#320A0A] p-6 text-cream sm:h-64 sm:p-7">
                  <div className="pattern-kolam absolute inset-0 opacity-20" aria-hidden="true" />
                  <div className="relative flex items-start justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-black/25 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-soft">
                      <HomeIcon size={12} aria-hidden="true" />
                      <span>Grihya Tradition</span>
                    </span>
                    <KalashaEmblem />
                  </div>
                  <div className="relative">
                    <p className="font-serif text-sm italic text-gold-soft">
                      Bringing Vedic vibrations to your doorstep
                    </p>
                    <h3 className="mt-1 font-serif text-2xl font-bold text-cream sm:text-3xl">
                      At Your Residence
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <p className="text-sm leading-relaxed text-ink-soft">
                      Our acharyas visit your home or chosen venue at the confirmed auspicious
                      muhurtham — sanctifying your space with family present.
                    </p>
                    <ul className="mt-5 space-y-2.5 text-sm text-ink">
                      {[
                        'Ideal for Griha Pravesham, Ganapathi Homam, Ayush Homam & family milestones',
                        'Clear, simple checklist of pooja samagri shared well ahead of the date',
                        'Personal guidance on sacred setup, seating, and family participation',
                        'Punctual, serene, and unhurried adherence to complete Vedic vidhi',
                      ].map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <Check
                            size={16}
                            className="mt-0.5 shrink-0 text-saffron-deep"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-gold-soft pt-5">
                    <button
                      type="button"
                      onClick={() => handleSelectVenue('At my place')}
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-full border-2 border-maroon px-5 py-2.5 text-sm font-semibold text-maroon transition hover:bg-maroon hover:text-cream"
                    >
                      <span>Book at Your Residence</span>
                      <ArrowRight size={15} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. THE THREEFOLD SANKALPAM JOURNEY (Ornamental Maroon Ribbon)
         ══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-y border-gold/35 bg-maroon-dark py-14 text-cream sm:py-16">
        <div className="pattern-kolam absolute inset-0 opacity-[0.12]" aria-hidden="true" />
        <div className="site-container relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-saffron">
                Simple &amp; Reverent Process
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-cream sm:text-4xl">
                How a Sankalpam Is Arranged
              </h2>
            </div>
          </Reveal>

          <ol className="relative mt-10 grid gap-6 md:grid-cols-3">
            {/* Subtle connecting hairline on desktop */}
            <div
              className="pointer-events-none absolute left-[16%] right-[16%] top-9 hidden h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent md:block"
              aria-hidden="true"
            />
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.08}>
                <li className="relative flex h-full flex-col rounded-2xl border border-gold/30 bg-black/20 p-6 text-center backdrop-blur-sm">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-maroon font-serif text-2xl font-bold text-gold-soft shadow-warm">
                    {step.num}
                  </div>
                  <p className="mt-3 font-serif text-sm tracking-wider text-saffron">
                    {step.sanskrit}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl font-bold text-cream">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/80">{step.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          6. SANKALPAM BOOKING ATELIER (Sticky Guidance + Structured Form)
         ══════════════════════════════════════════════════════════════════ */}
      <section id="sankalpam-enquiry" className="scroll-mt-24 bg-ivory py-14 sm:py-16 lg:py-20">
        <div className="site-container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-saffron-deep">
                Sankalpam &amp; Booking Enquiry
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-maroon sm:text-4xl lg:text-[42px]">
                Request a Parayanam or Pooja
              </h2>
              <p className="mt-3 text-ink-soft">
                Share your preferred ritual, date, and venue below. Our Gurukulam office will
                confirm acharya availability and guide you on preparations.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid items-start gap-8 lg:grid-cols-12">
            {/* Left Sticky Consultation & Assurance Sidebar */}
            <aside className="space-y-5 lg:sticky lg:top-28 lg:col-span-4">
              {/* Active Selection Summary Pill Card (when devotee clicked a ritual or venue) */}
              {selectedService || selectedVenue ? (
                <div className="rounded-card border-2 border-gold bg-[#FFFBF2] p-5 shadow-card">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-saffron-deep">
                      Pre-filled Selection
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedService('')
                        setSelectedVenue('')
                      }}
                      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold text-ink-soft hover:bg-maroon-surface hover:text-maroon"
                      aria-label="Clear selected ritual and venue"
                    >
                      <X size={13} aria-hidden="true" />
                      <span>Clear</span>
                    </button>
                  </div>
                  {selectedService ? (
                    <p className="mt-2 font-serif text-2xl font-bold text-maroon">
                      {selectedService}
                    </p>
                  ) : null}
                  {selectedVenue ? (
                    <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-ink-soft">
                      <MapPin size={13} className="text-saffron-deep" aria-hidden="true" />
                      <span>Venue: {selectedVenue}</span>
                    </p>
                  ) : null}
                </div>
              ) : null}

              {/* Helpful Details & Trust Assurance Card */}
              <div className="rounded-card border border-gold-soft bg-cream p-6 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-maroon text-cream">
                    <ScrollText size={19} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-maroon">
                      Helpful for Your Sankalpam
                    </h3>
                    <p className="text-xs text-ink-soft">Optional details you may include</p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-deep" />
                    <span>Family Gothram &amp; Janma Nakshatram (for Sankalpam)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-deep" />
                    <span>Specific occasion or preferred morning muhurtham</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-deep" />
                    <span>Whether you need a pooja samagri checklist arranged</span>
                  </li>
                </ul>

                <div className="mt-5 rounded-xl border border-gold/50 bg-ivory p-4">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-maroon"
                      aria-hidden="true"
                    />
                    <p className="text-xs leading-relaxed text-ink-soft">
                      <strong className="text-maroon">No online payments:</strong> We never
                      collect fees or donations on this website. All sambhavana and arrangements
                      are discussed directly with the Gurukulam office.
                    </p>
                  </div>
                </div>

                {/* Direct Contact Buttons */}
                <div className="mt-5 space-y-2.5 border-t border-gold-soft pt-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-maroon">
                    Prefer to speak with us?
                  </p>
                  <a
                    href={`tel:${site.phoneTel}`}
                    className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-maroon px-4 py-2.5 text-sm font-semibold text-cream transition hover:bg-saffron-deep"
                  >
                    <Phone size={15} aria-hidden="true" />
                    <span>Call {site.phoneDisplay}</span>
                  </a>
                  <a
                    href={whatsappLink(customWhatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border-2 border-whatsapp bg-white px-4 py-2.5 text-sm font-semibold text-[#1a7a3a] transition hover:bg-whatsapp/10"
                  >
                    <MessageCircle size={15} aria-hidden="true" />
                    <span>WhatsApp the Office</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Right Structured Enquiry Form */}
            <div className="lg:col-span-8">
              <EnquiryForm
                formName="Parayanam / Pooja Enquiry"
                subject="New Parayanam / Pooja Enquiry"
                whatsappLabel="parayanam / pooja"
                externalValues={formPrefill}
                fields={[
                  {
                    type: 'section',
                    name: 'sec_devotee',
                    label: '1. Devotee Contact (सङ्कल्पकर्ता विवरण)',
                    hint: 'How our Gurukulam office can reach you to confirm timing',
                    icon: User,
                  },
                  {
                    name: 'name',
                    label: 'Your name *',
                    placeholder: 'Enter your full name',
                    rules: { required: 'Please enter your name.' },
                  },
                  {
                    name: 'phone',
                    label: 'Phone *',
                    type: 'tel',
                    autoComplete: 'tel',
                    placeholder: '10-digit mobile number',
                    rules: phoneRules,
                  },
                  {
                    name: 'email',
                    label: 'Email *',
                    type: 'email',
                    autoComplete: 'email',
                    placeholder: 'devotee@gmail.com',
                    full: true,
                    rules: emailRules,
                  },
                  {
                    type: 'section',
                    name: 'sec_ritual',
                    label: '2. Ritual, Date & Venue (कर्म एवं स्थल)',
                    hint: 'Select an offering or choose guidance if you are unsure',
                    icon: Calendar,
                  },
                  {
                    name: 'service',
                    label: 'Service *',
                    type: 'select',
                    options: [
                      ...services.map((s) => s.name),
                      'Need Acharya guidance to choose',
                    ],
                    rules: { required: 'Please choose a service.' },
                  },
                  {
                    name: 'preferredDate',
                    label: 'Preferred date *',
                    type: 'date',
                    rules: { required: 'Please choose a preferred date.' },
                  },
                  {
                    name: 'venue',
                    label: 'Venue *',
                    type: 'select',
                    options: ['At the gurukulam', 'At my place'],
                    rules: { required: 'Please choose a venue.' },
                  },
                  {
                    name: 'city',
                    label: 'City *',
                    placeholder: 'e.g. Chennai, Bengaluru',
                    rules: { required: 'Please enter your city.' },
                  },
                  {
                    type: 'section',
                    name: 'sec_sankalpam',
                    label: '3. Sankalpam Details (सङ्कल्प विवरण)',
                    hint: 'Optional traditional particulars and notes for our acharyas',
                    icon: HeartHandshake,
                  },
                  {
                    name: 'gothramNakshatram',
                    label: 'Gothram & Nakshatram (optional)',
                    placeholder: 'e.g. Bharadwaja Gothram, Rohini Nakshatram',
                    full: true,
                  },
                  {
                    name: 'message',
                    label: 'Message & Occasion Details *',
                    type: 'textarea',
                    full: true,
                    placeholder:
                      'Share the occasion, preferred morning/evening timing, or any questions for our acharya…',
                    rules: { required: 'Please write a short message about your enquiry.' },
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          7. DEVOTEE FAQs (Calm Accordion)
         ══════════════════════════════════════════════════════════════════ */}
      <section className="border-t border-gold/30 py-14 sm:py-16">
        <div className="site-container">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-saffron-deep">
                  Common Questions
                </p>
                <h2 className="mt-2 font-serif text-3xl font-bold text-maroon sm:text-4xl">
                  Before You Book
                </h2>
              </div>
            </Reveal>

            <div className="mt-8 space-y-3">
              {DEVOTEE_FAQS.map((item, idx) => {
                const isOpen = openFaq === idx
                return (
                  <div
                    key={item.q}
                    className={`overflow-hidden rounded-xl border transition-colors duration-200 ${
                      isOpen
                        ? 'border-gold bg-ivory shadow-card'
                        : 'border-gold-soft bg-ivory/75 hover:border-gold'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                      className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="font-serif text-lg font-bold text-maroon sm:text-xl">
                        {item.q}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-saffron-deep transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen ? (
                      <div className="border-t border-gold-soft/70 px-5 pb-5 pt-3.5 text-sm leading-relaxed text-ink-soft sm:text-[15px]">
                        {item.a}
                      </div>
                    ) : null}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
