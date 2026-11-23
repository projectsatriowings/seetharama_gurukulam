import { ArrowRight, CheckCircle2, HeartHandshake, ShieldCheck, Sparkles, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

/**
 * PHASE 2.2 — SECTION 02: LIFE AT THE GURUKULAM
 * Purpose: Give visitors an authentic understanding of student life.
 * Verified content: Daily learning, discipline, residential environment, student welfare, traditional practices.
 * Design: Photographic storytelling composition rather than another grid of cards.
 * CTA: Discover Student Life -> /gurukulam
 */
export default function GurukulamLifeSection() {
  return (
    <section
      id="gurukulam-life"
      aria-labelledby="gurukulam-life-heading"
      className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24 border-b border-gold-soft/40"
    >
      {/* Decorative ambient backdrop */}
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
              <span>Residential Patasala Experience</span>
            </div>
            <h2
              id="gurukulam-life-heading"
              className="mt-4 font-serif text-3xl font-bold tracking-tight text-maroon sm:text-4xl lg:text-[44px] leading-tight"
            >
              A Sanctuary of Discipline, Devotion, and <br className="hidden sm:inline" />
              <span className="italic font-normal text-saffron-deep">Wholesome Student Care</span>
            </h2>
            <p className="mt-4 text-base text-ink-soft sm:text-lg">
              Life at Sri Seetharama Gurukulam is an immersive residential journey where traditional Vedic study harmonizes with loving paternal care, character development, and spiritual discipline.
            </p>
          </div>
        </Reveal>

        {/* Photographic Storytelling Composition */}
        <div className="mt-12 lg:mt-16 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Interlocking Editorial Photographic Montage (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative">
                {/* Primary Large Focus Photo: Courtyard Vidyarthis */}
                <div className="relative overflow-hidden rounded-2xl border border-gold-soft bg-ivory shadow-card">
                  <div className="aspect-[16/10] sm:aspect-[16/10] w-full overflow-hidden bg-cream">
                    <img
                      src="/photos/gurukulam-courtyard-vidyarthis.jpg"
                      alt="Vidyarthis of Sri Seetharama Gurukulam gathered joyfully in the campus courtyard"
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-102"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-maroon-dark/60 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    <div className="absolute bottom-3 left-4 right-4 text-cream">
                      <p className="font-serif text-base font-medium tracking-wide sm:text-lg">
                        Courtyard Gathering & Camaraderie
                      </p>
                      <p className="text-xs text-cream/80">
                        Nurturing lifelong brotherhood under traditional Gurukula values
                      </p>
                    </div>
                  </div>
                </div>

                {/* Secondary Staggered Photos (Two asymmetric companion glimpses) */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Photo 2: Students Assembly */}
                  <div className="relative overflow-hidden rounded-xl border border-gold-soft bg-ivory shadow-xs">
                    <div className="aspect-[4/3] w-full overflow-hidden bg-cream">
                      <img
                        src="/photos/gurukulam-students-assembly.jpg"
                        alt="Gurukulam students seated together in morning prayer assembly"
                        loading="lazy"
                        className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-maroon-dark/50 via-transparent to-transparent"
                        aria-hidden="true"
                      />
                      <div className="absolute bottom-2.5 left-3 right-3 text-cream">
                        <p className="font-serif text-sm font-semibold">
                          Daily Prayer & Chanting
                        </p>
                        <p className="text-[11px] text-cream/80">
                          Structured morning discipline
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Photo 3: Traditional Temple Excursion */}
                  <div className="relative overflow-hidden rounded-xl border border-gold-soft bg-ivory shadow-xs">
                    <div className="aspect-[4/3] w-full overflow-hidden bg-cream">
                      <img
                        src="/photos/vidyarthis-temple-visit.jpg"
                        alt="Gurukulam students seated on temple stone steps during sacred excursion"
                        loading="lazy"
                        className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-maroon-dark/50 via-transparent to-transparent"
                        aria-hidden="true"
                      />
                      <div className="absolute bottom-2.5 left-3 right-3 text-cream">
                        <p className="font-serif text-sm font-semibold">
                          Sacred Temple Excursions
                        </p>
                        <p className="text-[11px] text-cream/80">
                          Immersion in living heritage
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Editorial Narrative & Verified Welfare Facts (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="rounded-2xl border border-gold-soft bg-ivory p-6 sm:p-8 shadow-card">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-saffron-deep" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-saffron-deep">
                    Holistic Residential Sanctuary
                  </span>
                </div>

                <h3 className="mt-3 font-serif text-2xl font-bold text-maroon sm:text-[26px] leading-snug">
                  Nurturing Heart, Mind, and Spirit
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-[15px]">
                  Under the constant, affectionate mentorship of Salakshana Ganapatigals, vidyaarthis embrace a pure and disciplined way of life. From early morning Sandhyavandanam and sacred Agni karyam to quiet study and evening parayanam, student life is designed to foster humility, clarity of thought, and spiritual poise.
                </p>

                {/* Verified Free Provisions Callout (from official brochure) */}
                <div className="mt-6 rounded-xl border border-gold-soft/80 bg-cream/70 p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-maroon font-serif font-bold text-base">
                    <HeartHandshake className="h-4 w-4 text-saffron-deep" aria-hidden="true" />
                    <span>100% Free Complete Student Welfare</span>
                  </div>
                  <p className="mt-1 text-xs text-ink-muted leading-relaxed">
                    Provided freely by the Trust so every devoted student can study without financial barriers:
                  </p>
                  <ul className="mt-3 space-y-2 text-xs sm:text-[13px] text-ink-soft">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-saffron mt-0.5" aria-hidden="true" />
                      <span>Clean boarding, lodging, and sattvic nourishing meals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-saffron mt-0.5" aria-hidden="true" />
                      <span>Traditional clothing, course books, stationery, and medical care</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-saffron mt-0.5" aria-hidden="true" />
                      <span>Weekly oil bath, organized transport, and recreational kits</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Action */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
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
                    View Admissions & Criteria →
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
