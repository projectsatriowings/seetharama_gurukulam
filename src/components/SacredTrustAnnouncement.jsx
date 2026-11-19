import { ArrowRight, BookOpen, Flame, HeartHandshake, Sparkles, Sun, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

const institutionalThemes = [
  {
    id: 'vedic-education',
    number: '01',
    title: 'Vedic Education',
    subtitle: 'Krishna Yajur Veda & Shastras',
    description:
      'Rigorous curriculum focusing on traditional Krishna Yajur Veda adhyayanam, Sanskrit vyakarana, and Dharma Shastras.',
    icon: BookOpen,
    link: { label: 'Explore Curriculum', to: '/gurukulam' },
  },
  {
    id: 'oral-learning',
    number: '02',
    title: 'Traditional Oral Learning',
    subtitle: 'Shravanam · Ucharanam · Smaranam',
    description:
      'Preserving the ancient oral transmission through attentive listening, accurate svara pronunciation, and disciplined daily chanting.',
    icon: Flame,
    link: { label: 'Our Learning Rhythm', to: '/gurukulam' },
  },
  {
    id: 'guru-shishya',
    number: '03',
    title: 'Guru-Shishya Parampara',
    subtitle: 'Lived Knowledge & Devotion',
    description:
      'Direct, compassionate mentorship under qualified Salakshana Ganapatigals in an authentic residential Gurukula atmosphere.',
    icon: Users,
    link: { label: 'About the Lineage', to: '/about' },
  },
  {
    id: 'student-life',
    number: '04',
    title: 'Student Life & Holistic Seva',
    subtitle: '100% Free Residential Sanctuary',
    description:
      'All vidyaarthis receive clean boarding, wholesome sattvic food, clothing, books, and healthcare completely free of cost.',
    icon: HeartHandshake,
    link: { label: 'Student Welfare & Admission', to: '/admission' },
  },
  {
    id: 'parayanam-pooja',
    number: '05',
    title: 'Parayanam & Sacred Poojas',
    subtitle: 'Vedic Services for Seekers & Devotees',
    description:
      'Our Ganapatigals conduct authentic Jata & Ghana Veda Parayanams, sacred homams, and poojas for homes, temples, and institutions.',
    icon: Sun,
    link: { label: 'View Parayanam Services', to: '/parayanam-pooja' },
  },
]

export default function SacredTrustAnnouncement() {
  return (
    <section
      id="sacred-trust-announcement"
      aria-labelledby="trust-announcement-heading"
      className="relative overflow-hidden border-b border-gold-soft/40 bg-cream py-16 sm:py-20 lg:py-24"
    >
      {/* Subtle Kolam pattern along edges */}
      <div className="pattern-kolam absolute inset-0 opacity-[0.09]" aria-hidden="true" />

      <div className="site-container relative">
        {/* ─────────────────────────────────────────────────────────────
            PART 1: Editorial Herald & Institutional Journey Summary
           ───────────────────────────────────────────────────────────── */}
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            {/* Sacred Kicker */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft bg-ivory px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-saffron-deep shadow-xs">
              <Sparkles size={13} className="text-saffron" aria-hidden="true" />
              <span>Sacred Trust Announcement · Estd. 1996</span>
            </div>

            {/* Main Section Heading */}
            <h2
              id="trust-announcement-heading"
              className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-maroon sm:text-4xl lg:text-[42px]"
            >
              An Unbroken Heritage of Vedic Preservation
            </h2>

            {/* Factual Institutional Journey (1996 Patasala founding → 2008 Trust registration) */}
            <p className="mx-auto mt-4 max-w-3xl font-sans text-[15.5px] leading-relaxed text-ink-soft sm:text-[17px]">
              Seetha Rama Gurukula Veda Patasala began in <strong>1996</strong> with two students
              under <em>Veda Vidyalankara, Vidya Ratnam</em> Sri V. Rajagopala Ghanapatigal,
              blessed by His Holiness Sri Paramacharyal of Sri Kanchi Kamakoti Peetam. Housed
              originally in his residence, the Patasala flourished, and under Sri Aacharyal&apos;s
              guidance, a separate non-profit Trust was constituted and registered in{' '}
              <strong>2008</strong> under the Indian Trusts Act.
            </p>

            {/* Trust Standing Badge Strip */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-maroon">
              <span className="rounded-full border border-gold-soft bg-ivory px-3.5 py-1 shadow-2xs">
                🏛️ Registered Charitable Trust (2008)
              </span>
              <span className="rounded-full border border-gold-soft bg-ivory px-3.5 py-1 shadow-2xs">
                📜 Section 80-G Tax Exemption
              </span>
              <span className="rounded-full border border-gold-soft bg-ivory px-3.5 py-1 shadow-2xs">
                🕊️ 100% Free Residential Education
              </span>
            </div>
          </div>
        </Reveal>

        {/* ─────────────────────────────────────────────────────────────
            PART 2: Five Core Institutional Pillars (Distinct Non-3-Card Layout)
           ───────────────────────────────────────────────────────────── */}
        <div className="mt-14 lg:mt-16">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {institutionalThemes.map((theme, idx) => {
              const Icon = theme.icon
              return (
                <Reveal key={theme.id} delay={idx * 0.08}>
                  <div className="group relative flex h-full flex-col justify-between rounded-card border border-gold-soft bg-ivory p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-warm sm:p-6">
                    {/* Top Row: Index Number + Icon */}
                    <div>
                      <div className="flex items-center justify-between border-b border-gold-soft/50 pb-3">
                        <span className="font-serif text-sm font-bold tracking-widest text-gold">
                          {theme.number}
                        </span>
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-soft/80 bg-saffron-soft text-maroon transition-colors duration-200 group-hover:bg-saffron group-hover:text-maroon-dark">
                          <Icon size={18} aria-hidden="true" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="mt-3.5 font-serif text-[18px] font-bold leading-snug text-maroon sm:text-[19px]">
                        {theme.title}
                      </h3>
                      <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-saffron-deep">
                        {theme.subtitle}
                      </p>
                      <p className="mt-2.5 text-xs leading-relaxed text-ink-soft sm:text-[13px]">
                        {theme.description}
                      </p>
                    </div>

                    {/* Bottom Link Action */}
                    <div className="mt-4 border-t border-gold-soft/40 pt-3">
                      <Link
                        to={theme.link.to}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-maroon transition-colors duration-150 hover:text-saffron-deep group-hover:underline group-hover:decoration-gold group-hover:underline-offset-4"
                      >
                        <span>{theme.link.label}</span>
                        <ArrowRight size={13} className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            PART 3: Editorial Quote & Link to Heritage Page
           ───────────────────────────────────────────────────────────── */}
        <div className="mt-12 text-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-maroon transition hover:text-saffron-deep hover:underline hover:decoration-gold hover:underline-offset-4"
          >
            <span>Read the full institutional journey &amp; Guru Parampara history</span>
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
