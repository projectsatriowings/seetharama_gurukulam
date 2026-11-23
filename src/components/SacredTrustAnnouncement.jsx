import { BookOpen, Building, Heart, Library, Sparkles, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

// Actual Aims & Objectives from SGT Folder file correction.pdf (Exact PDF text)
const officialObjectives = [
  {
    id: 'obj-1',
    number: '01',
    title: 'Vedic Sciences & Sastras',
    description:
      'To impart Vedic Sciences and Sastras in the traditional Gurukulam method and other related subjects in depth, conducting daily classes, holding meetings and publishing books.',
    icon: BookOpen,
  },
  {
    id: 'obj-2',
    number: '02',
    title: 'Veda Patasalas Nationwide',
    description:
      'To establish, maintain and run Gurukula Veda Patasalas in various parts of the country and produce Vedic scholars to propagate all four Vedas.',
    icon: Building,
  },
  {
    id: 'obj-3',
    number: '03',
    title: 'Spiritual Studies for the Public',
    description:
      'To encourage spiritual studies by augmenting spiritual training centres for the general public.',
    icon: Users,
  },
  {
    id: 'obj-4',
    number: '04',
    title: 'Libraries for Students & Scholars',
    description:
      'To establish and maintain libraries for students, scholars and the general public.',
    icon: Library,
  },
  {
    id: 'obj-5',
    number: '05',
    title: 'Support for Social Institutions',
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
      className="relative overflow-hidden border-b border-gold-soft/40 bg-cream py-16 sm:py-20 lg:py-24"
    >
      <div className="pattern-kolam absolute inset-0 opacity-[0.09]" aria-hidden="true" />

      <div className="site-container relative">
        {/* ── PART 1: Historical Milestones & Institutional Journey ── */}
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-gold-soft bg-ivory px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-saffron-deep shadow-xs sm:px-3.5 sm:text-[11px] sm:tracking-[0.22em]">
              <Sparkles size={12} className="shrink-0 text-saffron" aria-hidden="true" />
              <span className="truncate">Historical Information &amp; Standing</span>
            </div>

            <h2
              id="trust-announcement-heading"
              className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-maroon sm:text-4xl lg:text-[42px]"
            >
              Seetha Rama Gurukulam Trust
            </h2>

            {/* Factual Institutional History strictly from PDF */}
            <p className="mx-auto mt-4 max-w-3xl font-sans text-[15.5px] leading-relaxed text-ink-soft sm:text-[17px]">
              Seetha Rama Gurukula Veda Patasala started in <strong>1996</strong> with two students
              under <em>Veda Vidyalankara, Vidya Ratnam</em> Sri V. Rajagopala Ghanapatigal with the
              blessings of His Holiness Sri Paramacharyal of Sri Kanchi Kamakoti Peetam. Following
              its growth, the Trust was constituted and registered in <strong>2008</strong> as a
              Non-Profitable Charitable Trust under the Indian Trusts Act, later shifting to Veda
              Bhavan, No. 486, T.T.K. Road, Alwarpet, Chennai – 600018. Today, Brahmasri R.
              Srikrishna Ganapatigal carries forward the work of his father and guru.
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
                🕊️ Free Vedic Education Throughout the Course
              </span>
            </div>
          </div>
        </Reveal>

        {/* ── PART 2: Official Aims and Objectives (Strictly from PDF) ── */}
        <div className="mt-14 lg:mt-16">
          <div className="text-center mb-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-saffron-deep">
              Official Objectives
            </p>
            <h3 className="mt-1 font-serif text-2xl font-bold text-maroon sm:text-3xl">
              Aims and Objectives of the Trust
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {officialObjectives.map((obj, idx) => {
              const Icon = obj.icon
              return (
                <Reveal key={obj.id} delay={idx * 0.08}>
                  <div className="group relative flex h-full flex-col justify-between rounded-card border border-gold-soft bg-ivory p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-warm sm:p-6">
                    <div>
                      <div className="flex items-center justify-between border-b border-gold-soft/50 pb-3">
                        <span className="font-serif text-sm font-bold tracking-widest text-gold">
                          {obj.number}
                        </span>
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-soft/80 bg-saffron-soft text-maroon transition-colors duration-200 group-hover:bg-saffron group-hover:text-maroon-dark">
                          <Icon size={18} aria-hidden="true" />
                        </div>
                      </div>

                      <h4 className="mt-3.5 font-serif text-[17px] font-bold leading-snug text-maroon sm:text-[18px]">
                        {obj.title}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-ink-soft sm:text-[13px]">
                        {obj.description}
                      </p>
                    </div>

                    <div className="mt-4 border-t border-gold-soft/40 pt-3">
                      <Link
                        to="/about"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-maroon transition-colors duration-150 hover:text-saffron-deep group-hover:underline group-hover:decoration-gold group-hover:underline-offset-4"
                      >
                        <span>Learn more</span>
                        <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
