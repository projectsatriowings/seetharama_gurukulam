import Reveal from './Reveal.jsx'

const trustObjectives = [
  {
    number: '01',
    title: 'Vedic Education',
    description:
      'Impart Vedic sciences and Shastras through the traditional Gurukulam system.',
  },
  {
    number: '02',
    title: 'Veda Patasalas',
    description:
      'Establish and maintain Veda Patasalas in different parts of the country.',
  },
  {
    number: '03',
    title: 'Vedic Scholars',
    description:
      'Encourage the development of Vedic scholars who can propagate Vedic knowledge.',
  },
  {
    number: '04',
    title: 'Spiritual Studies',
    description: 'Encourage spiritual studies among the general public.',
  },
  {
    number: '05',
    title: 'Knowledge & Libraries',
    description:
      'Establish and maintain libraries for students, scholars and the public.',
  },
  {
    number: '06',
    title: 'Social Support',
    description:
      'Support institutions serving aged, disabled, orphaned and underprivileged people.',
  },
]

/**
 * Subtle antique-gold architectural corner bracket for institutional framing
 */
function CornerAccent({ className = '' }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M1 21V1H21" stroke="#C9A24B" strokeWidth="1.5" />
      <path d="M5 17V5H17" stroke="#E9D8A6" strokeWidth="1" />
    </svg>
  )
}

/**
 * Phase 3 — Section 2: Our Mission
 * Concept: Heritage Manifesto — Two-Part Institutional Editorial
 */
export default function TrustMission() {
  return (
    <section
      id="our-mission"
      aria-labelledby="our-mission-heading"
      className="relative scroll-mt-20 overflow-hidden border-y border-gold/35 bg-ivory py-16 sm:py-20 lg:scroll-mt-24 lg:py-24"
    >
      {/* Faint Kolam motif along top-right edge */}
      <div
        className="pattern-kolam pointer-events-none absolute right-0 top-0 h-64 w-64 opacity-25 sm:h-80 sm:w-80"
        aria-hidden="true"
      />

      <div className="site-container relative">
        {/* PART A: Two-Column Institutional Manifesto Masthead */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
          {/* LEFT: Editorial Heading, Statement & Highlighted Manifesto Line */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gold" aria-hidden="true" />
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-saffron-deep sm:text-xs">
                  Our Purpose
                </p>
              </div>

              <h2
                id="our-mission-heading"
                className="mt-3 font-serif text-[34px] font-bold leading-[1.06] tracking-tight text-maroon sm:text-[44px] lg:text-[50px]"
              >
                Keeping the Eternal Knowledge Alive
              </h2>

              <p className="mt-5 font-sans text-[15.5px] leading-relaxed text-ink-soft sm:text-[17px]">
                Seetha Rama Gurukulam Trust is dedicated to preserving Vedic sciences and Shastras,
                supporting traditional institutions and encouraging spiritual learning for
                generations to come.
              </p>

              {/* Prominent Highlighted Manifesto Statement */}
              <div className="mt-7 border-y border-gold/45 border-l-4 border-l-maroon bg-cream/85 px-5 py-4 sm:mt-8 sm:px-6 sm:py-5">
                <p className="font-serif text-[21px] font-semibold italic leading-snug text-maroon-dark sm:text-[24px] lg:text-[26px]">
                  Preserving knowledge. Nurturing scholars. Serving society.
                </p>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: Large Authentic Institutional Photograph */}
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <figure className="relative">
                <div className="relative border border-gold/50 bg-cream p-3 shadow-card sm:p-4">
                  {/* Subtle heritage corner ornamentation */}
                  <CornerAccent className="pointer-events-none absolute -left-1.5 -top-1.5" />
                  <CornerAccent className="pointer-events-none absolute -bottom-1.5 -right-1.5 rotate-180" />

                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-maroon-surface">
                    <img
                      src="/photos/acharya-parayanam-recitation.jpg"
                      alt="Acharyas and Vedic scholars of Seetha Rama Gurukulam Trust reciting Veda Parayanam beside a lit brass lamp in a traditional mandapam"
                      width="1024"
                      height="768"
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.02]"
                    />
                  </div>

                  <figcaption className="mt-3 flex items-center justify-between gap-4 border-t border-gold/30 pt-2.5">
                    <p className="font-serif text-[14.5px] italic text-maroon sm:text-[15.5px]">
                      Acharyas and scholars upholding traditional Veda Parayanam and scholarship.
                    </p>
                    <span
                      className="hidden shrink-0 text-[10px] font-bold uppercase tracking-[0.2em] text-ink-muted sm:inline"
                      aria-hidden="true"
                    >
                      Veda Rakshanam
                    </span>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* PART B: Six Objectives of the Trust — Numbered Editorial Manifesto Index */}
        <div className="mt-14 border-t border-gold/50 pt-10 sm:mt-16 lg:mt-20 lg:pt-12">
          <Reveal>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-maroon sm:text-xs">
                Objectives of Seetha Rama Gurukulam Trust
              </p>
              <p className="font-serif text-[15px] italic text-ink-muted">
                Six founding commitments guiding the Trust&apos;s work
              </p>
            </div>
          </Reveal>

          <ol
            className="mt-6 grid grid-cols-1 gap-x-12 lg:mt-8 lg:grid-cols-2 lg:gap-x-16"
            aria-label="Six founding objectives of Seetha Rama Gurukulam Trust"
          >
            {trustObjectives.map((objective, index) => (
              <li
                key={objective.number}
                className="group relative border-t border-gold/35 py-5 transition-colors duration-200 hover:bg-cream/65 sm:py-6"
              >
                {/* Subtle antique-gold hover indicator bar */}
                <span
                  className="pointer-events-none absolute inset-y-3 left-0 w-0.5 bg-saffron-deep opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <Reveal delay={index * 0.05}>
                  <div className="flex items-start gap-4 transition-transform duration-200 group-hover:translate-x-1.5 sm:gap-6">
                    <span
                      className="w-11 shrink-0 font-serif text-[32px] font-semibold leading-none text-saffron-deep transition-colors duration-200 group-hover:text-maroon sm:w-14 sm:text-[38px]"
                      aria-hidden="true"
                    >
                      {objective.number}
                    </span>

                    <div className="min-w-0 flex-1 pt-0.5">
                      <h3 className="font-serif text-[20px] font-bold uppercase tracking-[0.06em] text-maroon sm:text-[22px]">
                        <span className="sr-only">Objective {objective.number}: </span>
                        {objective.title}
                      </h3>
                      <p className="mt-1.5 font-sans text-[15px] leading-relaxed text-ink-soft sm:text-[15.5px]">
                        {objective.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          {/* Closing hairline rule */}
          <div className="border-t border-gold/35" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
