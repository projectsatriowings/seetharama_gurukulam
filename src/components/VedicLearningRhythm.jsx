import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

const learningStages = [
  {
    number: '01',
    title: 'Shravanam',
    sanskrit: 'श्रवणम्',
    description: "Listening attentively to the Acharya's Vedic recitation.",
  },
  {
    number: '02',
    title: 'Ucharanam',
    sanskrit: 'उच्चारणम्',
    description: 'Repeating the mantras and learning correct pronunciation.',
  },
  {
    number: '03',
    title: 'Smaranam',
    sanskrit: 'स्मरणम्',
    description: 'Developing mastery through repetition and memorisation.',
  },
  {
    number: '04',
    title: 'Prayoga',
    sanskrit: 'प्रयोगः',
    description: 'Understanding the practical application of Vedic procedures.',
  },
]

/**
 * Phase 3 — Section 1: A Day at the Gurukulam
 * Concept: The Rhythm of Vedic Learning — Asymmetrical Editorial Storytelling
 */
export default function VedicLearningRhythm() {
  return (
    <section
      id="rhythm-of-vedic-learning"
      aria-labelledby="rhythm-of-vedic-learning-heading"
      className="relative scroll-mt-20 overflow-hidden bg-cream py-16 sm:py-20 lg:scroll-mt-24 lg:py-24"
    >
      {/* Subtle vertical heritage rule accent on wide screens */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="site-container relative">
        {/* Editorial Section Header — Asymmetrical left-anchored intro */}
        <Reveal>
          <div className="grid gap-6 border-b border-gold/35 pb-8 lg:grid-cols-12 lg:items-end lg:gap-10 lg:pb-10">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gold" aria-hidden="true" />
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-saffron-deep sm:text-xs">
                  The Guru-Shishya Parampara
                </p>
              </div>
              <h2
                id="rhythm-of-vedic-learning-heading"
                className="mt-3 font-serif text-[32px] font-bold leading-[1.08] tracking-tight text-maroon sm:text-[42px] lg:text-[48px]"
              >
                The Rhythm of Vedic Learning
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="font-sans text-[15.5px] leading-relaxed text-ink-soft sm:text-[16.5px]">
                Vedic knowledge is preserved through a time-honoured tradition of listening,
                recitation, memorisation and disciplined practice, guided by experienced Acharyas.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Asymmetrical Editorial Split: Left Framed Photograph + Right Vertical Timeline */}
        <div className="mt-10 grid items-start gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-14">
          {/* LEFT COLUMN: Authentic Acharya Teaching Photograph */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal>
              <figure className="relative mx-auto max-w-[480px] lg:max-w-none">
                {/* Architectural offset antique-gold back frame */}
                <div
                  className="pointer-events-none absolute -bottom-3 -right-3 hidden h-full w-full border border-gold/45 sm:block"
                  aria-hidden="true"
                />

                {/* Warm Ivory Archival Plate */}
                <div className="relative border border-gold/55 bg-ivory p-2.5 shadow-elevated sm:p-3.5">
                  <div className="relative aspect-[4/4] w-full overflow-hidden bg-maroon-surface">
                    <img
                      src="/photos/veda-parayanam-recitation.jpg"
                      alt="Acharya guiding Vedic learners seated with traditional scriptures inside the Seetha Rama Gurukulam hall"
                      width="1023"
                      height="1024"
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.02]"
                    />
                    {/* Subtle inner hairline vignette frame */}
                    <div
                      className="pointer-events-none absolute inset-2 border border-cream/30"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Editorial Plate Caption */}
                  <figcaption className="mt-3.5 flex items-start gap-3 border-t border-gold/30 pt-3">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold"
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <p className="font-serif text-[15px] italic leading-snug text-maroon sm:text-[16px]">
                        Oral Vedic recitation and scripture study guided by the Acharya inside the
                        Gurukulam hall.
                      </p>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                        Traditional Oral Adhyayanam &middot; Swara &amp; Prayoga
                      </p>
                    </div>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          </div>

          {/* RIGHT COLUMN: Vertical Four-Stage Learning Journey */}
          <div className="lg:col-span-7">
            <ol className="relative space-y-0" aria-label="Four stages of traditional Vedic learning">
              {/* Thin antique-gold vertical spine connecting the four stages */}
              <span
                className="pointer-events-none absolute bottom-10 left-[11px] top-4 w-px bg-gradient-to-b from-gold via-gold/75 to-gold/25 sm:left-[15px]"
                aria-hidden="true"
              />

              {learningStages.map((stage, index) => {
                const isLast = index === learningStages.length - 1
                return (
                  <li
                    key={stage.number}
                    className={`group relative pl-9 sm:pl-12 ${isLast ? 'pb-2' : 'pb-8 sm:pb-10'}`}
                  >
                    {/* Antique-gold timeline node */}
                    <span
                      className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-gold bg-cream transition-colors duration-200 group-hover:border-saffron-deep group-hover:bg-saffron-soft sm:left-0.5 sm:h-7 sm:w-7"
                      aria-hidden="true"
                    >
                      <span className="h-2 w-2 rotate-45 bg-gold transition-colors duration-200 group-hover:bg-saffron-deep" />
                    </span>

                    <Reveal delay={index * 0.08}>
                      <div
                        className={`transition-colors duration-200 ${
                          isLast
                            ? 'pb-0'
                            : 'border-b border-gold/25 pb-7 group-hover:border-gold/60 sm:pb-8'
                        }`}
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <div className="flex items-baseline gap-3 sm:gap-4">
                            <span
                              className="font-serif text-[32px] font-semibold leading-none tracking-tight text-saffron-deep transition-colors duration-200 group-hover:text-maroon sm:text-[40px]"
                              aria-hidden="true"
                            >
                              {stage.number}
                            </span>
                            <span className="h-px w-5 self-center bg-gold/70" aria-hidden="true" />
                            <h3 className="font-serif text-[22px] font-bold uppercase tracking-[0.08em] text-maroon sm:text-[26px]">
                              <span className="sr-only">Stage {stage.number}: </span>
                              {stage.title}
                            </h3>
                          </div>

                          <span
                            className="font-serif text-sm font-medium tracking-wider text-ink-muted sm:text-[15px]"
                            lang="sa"
                          >
                            {stage.sanskrit}
                          </span>
                        </div>

                        <p className="mt-2.5 max-w-xl font-sans text-[15.5px] leading-relaxed text-ink-soft sm:mt-3 sm:text-[16.5px]">
                          {stage.description}
                        </p>
                      </div>
                    </Reveal>
                  </li>
                )
              })}
            </ol>

            {/* Editorial Footnote & Subtle Pathway to Full Gurukulam Page */}
            <Reveal delay={0.28}>
              <div className="mt-8 flex flex-col gap-5 border-t border-gold/40 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-[13.5px] leading-relaxed text-ink-muted">
                  These stages reflect the traditional oral progression of Veda Adhyayanam,
                  preserving authentic Swara, pitch, and ritual understanding.
                </p>

                <Link
                  to="/gurukulam"
                  className="group inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2.5 rounded-full border-2 border-gold bg-ivory px-6 py-2.5 text-[15px] font-semibold text-maroon transition-all duration-200 hover:-translate-y-px hover:border-maroon hover:bg-maroon hover:text-cream"
                >
                  <span>Explore the Gurukulam</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
