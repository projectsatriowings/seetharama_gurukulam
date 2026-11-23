import { ArrowRight, CheckCircle2, ShieldCheck, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

/**
 * PHASE 2.2 / PDF CORRECTION — SECTION 02: LIFE AT THE GURUKULAM
 * Authoritative Source: SGT Folder file correction.pdf ONLY.
 * Verified Facilities: Free Vedic education throughout course, Free boarding & lodging,
 * Free clothing, Medical care, Travelling expenses to hometown.
 * All unsupported items (books/stationery, weekly oil bath, free general transport, recreational kits, daily routines) removed.
 */
export default function GurukulamLifeSection() {
  const verifiedFacilities = [
    'Free Vedic education throughout the course',
    'Free boarding and lodging',
    'Free clothing',
    'Medical care',
    'Travelling expenses to hometown',
  ]

  return (
    <section
      id="gurukulam-life"
      aria-labelledby="gurukulam-life-heading"
      className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24 border-b border-gold-soft/40"
    >
      <div
        className="pointer-events-none absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-saffron/6 blur-3xl"
        aria-hidden="true"
      />

      <div className="site-container relative">
        {/* Section Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft bg-ivory px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-saffron-deep shadow-xs">
              <Sun className="h-3 w-3 text-saffron" aria-hidden="true" />
              <span>Residential Veda Patasala</span>
            </div>
            <h2
              id="gurukulam-life-heading"
              className="mt-4 font-serif text-3xl font-bold tracking-tight text-maroon sm:text-4xl lg:text-[44px] leading-tight"
            >
              Life at the Gurukulam &amp; <br className="hidden sm:inline" />
              <span className="italic font-normal text-saffron-deep">Student Facilities</span>
            </h2>
            <p className="mt-4 text-base text-ink-soft sm:text-lg">
              Under the traditional Gurukula method, students reside at the Patasala in Veda Bhavan,
              Alwarpet, receiving Vedic education in a dedicated residential environment.
            </p>
          </div>
        </Reveal>

        {/* Photographic Storytelling Composition */}
        <div className="mt-12 lg:mt-16 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Authentic Photographs (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative">
                {/* Primary Photo */}
                <div className="relative overflow-hidden rounded-2xl border border-gold-soft bg-ivory shadow-card">
                  <div className="aspect-[16/10] w-full overflow-hidden bg-cream">
                    <img
                      src="/photos/gurukulam-courtyard-vidyarthis.jpg"
                      alt="Students of Seetha Rama Gurukula Veda Patasala gathered in the campus courtyard"
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-102"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-maroon-dark/60 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    <div className="absolute bottom-3 left-4 right-4 text-cream">
                      <p className="font-serif text-base font-medium tracking-wide sm:text-lg">
                        Students at Seetha Rama Gurukula Veda Patasala
                      </p>
                      <p className="text-xs text-cream/80">
                        Veda Bhavan, No. 486, T.T.K. Road, Alwarpet, Chennai – 600018
                      </p>
                    </div>
                  </div>
                </div>

                {/* Secondary Photos */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative overflow-hidden rounded-xl border border-gold-soft bg-ivory shadow-xs">
                    <div className="aspect-[4/3] w-full overflow-hidden bg-cream">
                      <img
                        src="/photos/gurukulam-students-assembly.jpg"
                        alt="Patasala students seated together in morning assembly"
                        loading="lazy"
                        className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-maroon-dark/50 via-transparent to-transparent"
                        aria-hidden="true"
                      />
                      <div className="absolute bottom-2.5 left-3 right-3 text-cream">
                        <p className="font-serif text-sm font-semibold">
                          Students Assembly
                        </p>
                        <p className="text-[11px] text-cream/80">
                          Residential Patasala Gathering
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-xl border border-gold-soft bg-ivory shadow-xs">
                    <div className="aspect-[4/3] w-full overflow-hidden bg-cream">
                      <img
                        src="/photos/vidyarthis-temple-visit.jpg"
                        alt="Patasala students seated on traditional stone steps"
                        loading="lazy"
                        className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-maroon-dark/50 via-transparent to-transparent"
                        aria-hidden="true"
                      />
                      <div className="absolute bottom-2.5 left-3 right-3 text-cream">
                        <p className="font-serif text-sm font-semibold">
                          Patasala Excursions
                        </p>
                        <p className="text-[11px] text-cream/80">
                          Living Vedic Tradition
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Verified Facilities strictly from PDF (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="rounded-2xl border border-gold-soft bg-ivory p-6 sm:p-8 shadow-card">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-saffron-deep" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-saffron-deep">
                    Verified Facilities
                  </span>
                </div>

                <h3 className="mt-3 font-serif text-2xl font-bold text-maroon sm:text-[26px] leading-snug">
                  Provided to Students Free of Cost
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-[15px]">
                  As specified in the official institutional document, all admitted students receive
                  the following facilities completely free throughout their course of study:
                </p>

                {/* Exact Verified Facilities from PDF */}
                <div className="mt-6 rounded-xl border border-gold-soft/80 bg-cream/70 p-4 sm:p-5">
                  <ul className="space-y-3 text-xs sm:text-[14px] text-ink-soft">
                    {verifiedFacilities.map((facility, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-saffron-deep mt-0.5" aria-hidden="true" />
                        <span className="font-medium text-ink">{facility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Course Duration & Sastra Note from PDF */}
                <p className="mt-5 text-xs text-ink-muted leading-relaxed">
                  Normally it takes 10 to 12 years to acquire mastery in one Shakha, encompassing
                  Vedic chanting, Swara accuracy, and Prayoga training.
                </p>

                {/* Action CTA */}
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <Link
                    to="/gurukulam"
                    className="group inline-flex items-center gap-2 rounded-lg bg-maroon px-5 py-2.5 font-sans text-sm font-semibold text-cream shadow-xs transition hover:bg-maroon-dark focus:outline-none focus:ring-2 focus:ring-saffron"
                  >
                    <span>Discover Student Life</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                  <Link
                    to="/admission"
                    className="text-xs font-semibold text-saffron-deep hover:underline"
                  >
                    Admission Information &rarr;
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
