import { ArrowRight, BookOpen, Flame, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

/**
 * PHASE 2.2 / PDF CORRECTION — SECTION 03: PRAYOGA & VEDIC STUDIES
 * Authoritative Source: SGT Folder file correction.pdf ONLY.
 * No public booking catalogue.
 * Covers only: Prayoga training for selected students (Upanayanam, Vivaham, Seemantham, other functions)
 * and proposal for Srowtha classes (rituals & Yagnas), clearly marked as a proposal.
 */
export default function ParayanamPoojaSection() {
  const prayogaFunctions = [
    'Upanayanam',
    'Vivaham',
    'Seemantham',
    'Other Vedic functions',
  ]

  return (
    <section
      id="parayanam-pooja-section"
      aria-labelledby="parayanam-pooja-heading"
      className="relative overflow-hidden bg-maroon-dark text-cream py-16 sm:py-20 lg:py-24 border-b border-gold/30"
    >
      <div className="pattern-kolam absolute inset-0 opacity-[0.08]" aria-hidden="true" />

      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-saffron/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="site-container relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-maroon/60 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-saffron-soft shadow-xs backdrop-blur-xs">
                <Flame className="h-3 w-3 text-saffron" aria-hidden="true" />
                <span>Curriculum &amp; Training</span>
              </div>

              <h2
                id="parayanam-pooja-heading"
                className="mt-3 font-serif text-3xl font-bold tracking-tight text-cream sm:text-4xl lg:text-[42px] leading-[1.18]"
              >
                Prayoga Training &amp; <br className="hidden sm:inline" />
                <span className="italic font-normal text-saffron">Vedic Ritual Studies</span>
              </h2>

              <p className="mt-4 text-[16px] leading-relaxed text-cream/85 sm:text-[17px]">
                In addition to Krishna Yajur Veda adhyayanam, selected students of Seetha Rama
                Gurukula Veda Patasala receive practical training in Prayoga under the traditional
                Gurukulam method.
              </p>

              {/* Active Curriculum Box: Prayoga Training */}
              <div className="mt-6 rounded-xl border border-gold/30 bg-maroon/50 p-5 backdrop-blur-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-saffron" aria-hidden="true" />
                  <h3 className="font-serif text-lg font-bold text-cream">
                    Prayoga Training (Active Curriculum)
                  </h3>
                </div>
                <p className="mt-2 text-xs text-cream/80 leading-relaxed sm:text-[13px]">
                  Selected students are given practical training in the conduct of Vedic procedures
                  and Samskaras:
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {prayogaFunctions.map((fn) => (
                    <div
                      key={fn}
                      className="rounded-lg border border-gold/20 bg-maroon-dark/60 px-3 py-2 text-center text-xs font-medium text-gold-soft"
                    >
                      {fn}
                    </div>
                  ))}
                </div>
              </div>

              {/* Proposed Future Offering Box: Srowtha Classes */}
              <div className="mt-5 rounded-xl border border-gold/25 bg-black/25 p-5 backdrop-blur-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-gold-soft" aria-hidden="true" />
                    <h3 className="font-serif text-base font-bold text-cream">
                      Proposal to Introduce Srowtha Classes
                    </h3>
                  </div>
                  <span className="rounded-full border border-gold/40 bg-gold/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold-soft">
                    Proposal
                  </span>
                </div>
                <p className="mt-2 text-xs text-cream/75 leading-relaxed">
                  The Trust has formulated a proposal to introduce advanced Srowtha classes covering
                  Vedic rituals and Yagnas. <em>Please note: This is a planned institutional proposal and is not currently an active class offering.</em>
                </p>
              </div>

              {/* Clear CTA */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/parayanam-pooja"
                  className="group inline-flex items-center gap-2 rounded-lg bg-saffron px-6 py-3 font-sans text-sm font-bold text-maroon-dark shadow-sm transition hover:bg-[#f0a64a] focus:outline-none focus:ring-2 focus:ring-cream"
                >
                  <span>Read About Prayoga &amp; Srowtha</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-gold/40 bg-maroon/60 px-4 py-3 font-sans text-sm font-semibold text-cream hover:bg-maroon hover:border-gold transition focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <span>General Enquiry</span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Authentic Photograph Column (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div
                  className="absolute -inset-2.5 rounded-2xl border border-gold/30 bg-maroon/30 hidden sm:block rotate-1"
                  aria-hidden="true"
                />

                <div className="relative overflow-hidden rounded-xl border border-gold/40 bg-maroon/80 shadow-warm">
                  <div className="relative aspect-[4/3] sm:aspect-[5/4] w-full overflow-hidden bg-maroon">
                    <img
                      src="/photos/acharya-parayanam-recitation.jpg"
                      alt="Vedic recitation session at Seetha Rama Gurukula Veda Patasala"
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-103"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-maroon-dark/80 via-transparent to-transparent"
                      aria-hidden="true"
                    />

                    <div className="absolute top-3 right-3 rounded-full bg-maroon-dark/90 px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-gold-soft border border-gold/40 shadow-xs backdrop-blur-xs">
                      Curriculum
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-cream">
                      <p className="font-serif text-sm font-semibold sm:text-base text-cream">
                        Vedic Recitation &amp; Prayoga
                      </p>
                      <p className="text-[11px] text-cream/80">
                        Imparting Vedic sciences and rituals in the traditional method
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-gold/25 bg-maroon px-4 py-2.5 text-xs text-cream/70">
                    <span className="flex items-center gap-1.5 font-medium text-gold-soft">
                      <BookOpen className="h-3.5 w-3.5 text-saffron" aria-hidden="true" />
                      Traditional Gurukulam Method
                    </span>
                    <span className="text-[11px] text-cream/60">Veda Bhavan, Alwarpet</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
