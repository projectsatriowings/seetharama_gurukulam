import { ArrowRight, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

/**
 * PHASE 2.2 — SECTION 01: THE TRADITION OF VEDIC LEARNING
 * Purpose: Introduce the actual Vedic educational tradition followed by the Gurukulam.
 * Themes: Krishna Yajur Veda Adhyayanam, Traditional oral learning, Shravanam & Smaranam, Guru-Shishya Parampara.
 * Design: Asymmetric editorial layout, strong serif heading, authentic photograph, concise narrative, minimal details.
 */
export default function VedicTraditionSection() {
  return (
    <section
      id="vedic-tradition"
      aria-labelledby="vedic-tradition-heading"
      className="relative overflow-hidden bg-ivory py-16 sm:py-20 lg:py-24 border-b border-gold-soft/40"
    >
      {/* Ambient background accent */}
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-gold/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="site-container relative">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Narrative Column (7 cols on desktop) */}
          <div className="lg:col-span-7">
            <Reveal>
              {/* Eyebrow badge */}
              <div className="flex items-center gap-2.5">
                <span className="h-px w-6 bg-gold" aria-hidden="true" />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-saffron-deep sm:text-xs">
                  Vedic Educational Tradition
                </span>
              </div>

              {/* Sanskrit Kicker */}
              <p className="mt-3 font-serif text-sm tracking-wide text-maroon/70 sm:text-base">
                ॥ स्वाध्यायोऽध्येतव्यः · गुरुशिष्यपरम्परा ॥
              </p>

              {/* Strong Serif Heading */}
              <h2
                id="vedic-tradition-heading"
                className="mt-2 font-serif text-3xl font-bold tracking-tight text-maroon sm:text-4xl lg:text-[42px] leading-[1.15]"
              >
                The Living Oral Stream of <br className="hidden sm:inline" />
                <span className="italic font-normal text-saffron-deep">Krishna Yajur Veda</span>
              </h2>

              {/* Concise Supporting Editorial Narrative */}
              <p className="mt-5 text-[16px] leading-relaxed text-ink-soft sm:text-[17px]">
                At Sri Seetharama Gurukulam, Vedic learning is not approached as an academic subject, but as a living oral stream received directly from Guru to Shishya. Through the time-honoured disciplines of <strong className="font-semibold text-ink">Shravanam</strong> (receptive listening to the Acharya's swara) and <strong className="font-semibold text-ink">Smaranam</strong> (continuous internal recitation), vidyaarthis commit the sacred Taittiriya Shakha to heart—preserving every intonation, syllable, and accent in pristine clarity.
              </p>

              {/* Minimal Supporting Visual Details: Two Quiet Pillars of Oral Transmission */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 pt-6 border-t border-gold-soft/50">
                <div className="rounded-lg bg-cream/70 p-4 border border-gold-soft/40">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-saffron" aria-hidden="true" />
                    <h3 className="font-serif text-base font-bold text-maroon">
                      Shravanam <span className="text-xs font-normal text-ink-muted">· श्रवणम्</span>
                    </h3>
                  </div>
                  <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-ink-soft">
                    Attentive, direct auditory transmission from the Acharya, absorbing accurate Vedic swara and phonetics without textual distortion.
                  </p>
                </div>

                <div className="rounded-lg bg-cream/70 p-4 border border-gold-soft/40">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                    <h3 className="font-serif text-base font-bold text-maroon">
                      Smaranam <span className="text-xs font-normal text-ink-muted">· स्मरणम्</span>
                    </h3>
                  </div>
                  <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-ink-soft">
                    Repetition and contemplative internalization, transforming learned mantras into permanent spiritual knowledge and daily lived practice.
                  </p>
                </div>
              </div>

              {/* Clear CTA */}
              <div className="mt-8 flex items-center gap-4">
                <Link
                  to="/gurukulam"
                  className="group inline-flex items-center gap-2 rounded-lg bg-maroon px-6 py-3 font-sans text-sm font-semibold text-cream shadow-sm transition hover:bg-maroon-dark focus:outline-none focus:ring-2 focus:ring-saffron focus:ring-offset-2"
                >
                  <span>Explore the Gurukulam</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <span className="hidden sm:inline text-xs text-ink-muted">
                  Curriculum & Traditional Method
                </span>
              </div>
            </Reveal>
          </div>

          {/* Authentic Photograph Column (5 cols on desktop) */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative hairline offset frame */}
                <div
                  className="absolute -inset-2.5 rounded-2xl border border-gold/40 bg-cream/30 -rotate-1 hidden sm:block"
                  aria-hidden="true"
                />

                <div className="relative overflow-hidden rounded-xl border border-gold-soft bg-surface shadow-card">
                  {/* Authentic Learning Photograph */}
                  <div className="relative aspect-[4/3] sm:aspect-[5/4] w-full overflow-hidden bg-cream">
                    <img
                      src="/photos/gurukulam-hall-gathering.jpg"
                      alt="Students and Acharyas engaged in traditional Krishna Yajur Veda recitation in the gurukulam prayer hall"
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-maroon-dark/60 via-transparent to-transparent"
                      aria-hidden="true"
                    />

                    {/* Image corner badge */}
                    <div className="absolute top-3 left-3 rounded-full bg-ivory/95 px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-maroon backdrop-blur-xs border border-gold-soft shadow-xs">
                      Alwarpet, Chennai
                    </div>

                    {/* In-image caption tag */}
                    <div className="absolute bottom-3 left-3 right-3 text-cream">
                      <p className="font-serif text-sm font-medium tracking-wide sm:text-base">
                        Daily Adhyayanam in the Gurukulam Hall
                      </p>
                      <p className="text-[11px] text-cream/80">
                        Taittiriya Shakha Recitation & Swara Abhyasa
                      </p>
                    </div>
                  </div>

                  {/* Architectural metadata caption strip */}
                  <div className="flex items-center justify-between border-t border-gold-soft/50 bg-cream/60 px-4 py-2.5 text-xs text-ink-soft">
                    <span className="flex items-center gap-1.5 font-medium">
                      <BookOpen className="h-3.5 w-3.5 text-saffron-deep" aria-hidden="true" />
                      Oral Guru-Shishya Transmission
                    </span>
                    <span className="text-[11px] text-ink-muted">Estd. 1996</span>
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
