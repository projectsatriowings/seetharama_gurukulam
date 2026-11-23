import {
  ArrowRight,
  BookOpen,
  Building2,
  Calendar,
  GraduationCap,
  Heart,
  Library,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

// Official Aims & Objectives from SGT Folder file correction.pdf (Exact PDF text)
const primaryObjective = {
  id: 'obj-1',
  number: '01',
  title: 'Vedic Sciences & Sastras',
  category: 'Core Mandate',
  description:
    'To impart Vedic Sciences and Sastras in the traditional Gurukulam method and other related subjects in depth, conducting daily classes, holding meetings and publishing books.',
  icon: BookOpen,
}

const secondaryObjectives = [
  {
    id: 'obj-2',
    number: '02',
    title: 'Veda Patasalas Nationwide',
    category: 'National Propagation',
    description:
      'To establish, maintain and run Gurukula Veda Patasalas in various parts of the country and produce Vedic scholars to propagate all four Vedas.',
    icon: Building2,
  },
  {
    id: 'obj-3',
    number: '03',
    title: 'Spiritual Training for Public',
    category: 'Public Outreach',
    description:
      'To encourage spiritual studies by augmenting spiritual training centres for the general public.',
    icon: Users,
  },
  {
    id: 'obj-4',
    number: '04',
    title: 'Libraries for Scholars & Public',
    category: 'Knowledge Preservation',
    description:
      'To establish and maintain libraries for students, scholars and the general public.',
    icon: Library,
  },
  {
    id: 'obj-5',
    number: '05',
    title: 'Support for Social Institutions',
    category: 'Compassionate Seva',
    description:
      'To provide help to institutions such as homes for the aged, disabled, orphaned, handicapped people and poor children.',
    icon: Heart,
  },
]

export default function SacredTrustAnnouncement() {
  return (
    <section
      id="sacred-trust-announcement"
      aria-labelledby="trust-announcement-heading"
      className="relative overflow-hidden border-b border-gold-soft/40 bg-gradient-to-b from-cream via-[#FAF3E4] to-cream py-16 sm:py-20 lg:py-24"
    >
      {/* Delicate kolam background motif */}
      <div className="pattern-kolam absolute inset-0 opacity-[0.09]" aria-hidden="true" />

      {/* Radiant ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-96 w-96 rounded-full bg-saffron/6 blur-3xl"
        aria-hidden="true"
      />

      <div className="site-container relative">
        {/* ── PART 1: Historical Standing & Institutional Journey ── */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft bg-ivory px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-saffron-deep shadow-xs">
              <Sparkles size={13} className="text-saffron-deep" aria-hidden="true" />
              <span>Institutional Origin &amp; Standing</span>
            </div>

            <h2
              id="trust-announcement-heading"
              className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-maroon sm:text-4xl lg:text-[44px]"
            >
              Seetha Rama Gurukulam Trust
            </h2>
            <p className="mt-2 font-serif text-lg italic text-saffron-deep sm:text-xl">
              Founded Under Sri Paramacharyal&apos;s Divine Command &amp; Grace
            </p>
          </div>
        </Reveal>

        {/* Narrative & Credentials Split Architecture */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 items-stretch max-w-5xl mx-auto">
          {/* Left Narrative Box */}
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <div className="h-full rounded-2xl border border-gold-soft bg-ivory p-6 sm:p-8 shadow-xs flex flex-col justify-between">
                <div className="space-y-4 text-ink-soft leading-relaxed text-[15px] sm:text-base">
                  <p>
                    <strong className="text-maroon">Seetha Rama Gurukula Veda Patasala</strong> was
                    started in the year <strong>1996</strong> with initially two students under{' '}
                    <strong className="text-maroon">
                      Veda Vidyalankara, Vidya Ratnam Sri V. Rajagopala Ghanapatigal
                    </strong>
                    , blessed by His Holiness Sri Paramacharyal of Sri Kanchi Kamakoti Peetam.
                  </p>
                  <p>
                    Following the steady growth of the Gurukulam, Sri Aacharyal directed that a
                    separate Trust be instituted for its future upkeep and growth. Accordingly, in{' '}
                    <strong>2008</strong>, the Trust was constituted and registered as a{' '}
                    <strong>Non-Profitable Charitable Trust</strong> under the Indian Trusts Act.
                  </p>
                  <p>
                    The Patasala was later shifted to its permanent premises at{' '}
                    <strong>Veda Bhavan, No. 486, T.T.K. Road, Alwarpet, Chennai – 600018</strong>.
                    Today, <strong className="text-maroon">Brahmasri R. Srikrishna Ganapatigal</strong>{' '}
                    carries forward the sacred work of his father and guru.
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-gold-soft/50 flex flex-wrap items-center justify-between gap-3 text-xs text-ink-soft">
                  <span className="flex items-center gap-1.5 font-medium text-maroon">
                    <MapPin size={15} className="text-saffron-deep shrink-0" />
                    <span>Veda Bhavan, Alwarpet, Chennai</span>
                  </span>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1 font-bold text-saffron-deep hover:text-maroon transition"
                  >
                    <span>Read institutional story</span>
                    <ArrowRight size={13} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Credentials / Standing Badges */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="h-full flex flex-col justify-between gap-3.5">
                {/* Milestone 1: Founding & Lineage */}
                <div className="rounded-xl border border-gold-soft bg-ivory p-4 sm:p-5 shadow-xs transition hover:border-gold hover:shadow-card">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-saffron-soft text-saffron-deep">
                      <Calendar size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-lg font-bold text-maroon">1996</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-saffron-deep rounded bg-saffron/10 px-1.5 py-0.5">Founded</span>
                      </div>
                      <p className="mt-1 text-xs text-ink-soft leading-relaxed">
                        Started with two students under Sri V. Rajagopala Ghanapatigal; nurtured under Guru-Shishya Parampara.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Milestone 2: Legal Registration */}
                <div className="rounded-xl border border-gold-soft bg-ivory p-4 sm:p-5 shadow-xs transition hover:border-gold hover:shadow-card">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-soft/60 text-maroon">
                      <Building2 size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-lg font-bold text-maroon">2008</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-maroon rounded bg-gold-soft px-1.5 py-0.5">Trust Registered</span>
                      </div>
                      <p className="mt-1 text-xs text-ink-soft leading-relaxed">
                        Registered Non-Profitable Charitable Trust under the Indian Trusts Act as directed by Sri Aacharyal.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Milestone 3: Tax Exemption & Free Welfare */}
                <div className="rounded-xl border border-gold-soft bg-ivory p-4 sm:p-5 shadow-xs transition hover:border-gold hover:shadow-card">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-saffron-soft text-saffron-deep">
                      <ShieldCheck size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-sm font-bold text-maroon">Section 80-G</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-saffron-deep rounded bg-saffron/10 px-1.5 py-0.5">Tax Exemption</span>
                      </div>
                      <p className="mt-1 text-xs text-ink-soft leading-relaxed">
                        Contributions eligible for 80-G tax exemption. 100% free Vedic education, boarding, and student welfare.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── PART 2: Official Aims & Objectives of the Trust ── */}
        <div className="mt-16 sm:mt-20">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-saffron-deep">
                Official Charter
              </span>
              <h3 className="mt-2 font-serif text-3xl font-bold text-maroon sm:text-4xl">
                Aims and Objectives of the Trust
              </h3>
              <p className="mt-3 text-sm text-ink-soft sm:text-base leading-relaxed">
                As set forth in the registered trust charter, guiding every educational and spiritual endeavour.
              </p>
            </div>
          </Reveal>

          {/* Editorial Grid: 1 Hero Objective + 4 Balanced Cards */}
          <div className="mt-10 grid gap-6 lg:grid-cols-12 max-w-5xl mx-auto items-stretch">
            {/* Primary / Hero Objective (Col 5) */}
            <div className="lg:col-span-5">
              <Reveal delay={0.05}>
                <div className="h-full rounded-2xl border-2 border-gold/70 bg-ivory p-6 sm:p-8 shadow-card flex flex-col justify-between transition hover:border-gold hover:shadow-warm">
                  <div>
                    <div className="flex items-center justify-between border-b border-gold-soft/60 pb-4">
                      <span className="font-serif text-2xl font-bold text-saffron-deep">
                        {primaryObjective.number}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-maroon rounded-full border border-gold-soft bg-gold-soft/40 px-2.5 py-1">
                        {primaryObjective.category}
                      </span>
                    </div>

                    <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-saffron text-maroon-dark shadow-xs">
                      <primaryObjective.icon size={24} aria-hidden="true" />
                    </div>

                    <h4 className="mt-4 font-serif text-2xl font-bold leading-tight text-maroon">
                      {primaryObjective.title}
                    </h4>

                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {primaryObjective.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-gold-soft/50 text-xs font-semibold text-saffron-deep">
                    Imparted in the sacred Guru-Shishya Parampara
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Secondary Objectives: 2x2 Grid (Col 7) */}
            <div className="lg:col-span-7 grid gap-5 sm:grid-cols-2">
              {secondaryObjectives.map((obj, idx) => {
                const Icon = obj.icon
                return (
                  <Reveal key={obj.id} delay={0.1 + idx * 0.05}>
                    <div className="flex h-full flex-col justify-between rounded-xl border border-gold-soft bg-ivory p-5 sm:p-6 shadow-xs transition hover:border-gold hover:shadow-card">
                      <div>
                        <div className="flex items-center justify-between border-b border-gold-soft/40 pb-3">
                          <span className="font-serif text-lg font-bold text-gold">
                            {obj.number}
                          </span>
                          <span className="text-[9px] font-bold uppercase tracking-wider text-ink-soft">
                            {obj.category}
                          </span>
                        </div>

                        <div className="mt-3.5 flex items-center gap-2.5">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-saffron-soft text-maroon">
                            <Icon size={16} aria-hidden="true" />
                          </div>
                          <h4 className="font-serif text-lg font-bold leading-snug text-maroon">
                            {obj.title}
                          </h4>
                        </div>

                        <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-ink-soft">
                          {obj.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>

          {/* Dignified Closing Action */}
          <div className="mt-10 sm:mt-12 text-center">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 rounded-lg border border-gold bg-cream px-6 py-3 font-sans text-sm font-semibold text-maroon shadow-xs transition hover:bg-ivory hover:border-maroon focus:outline-none focus:ring-2 focus:ring-saffron"
            >
              <span>Explore the Trust Charter &amp; History</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
