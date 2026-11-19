import { ArrowRight } from 'lucide-react'
import Button from './Button.jsx'
import Reveal from './Reveal.jsx'

export default function Hero({
  eyebrow = 'Veda Patasala · Estd. 1996 · Alwarpet, Chennai',
  title = 'Preserving the Sacred Tradition of Vedic Learning',
  subtitle = 'Sri Seetharama Gurukulam is an authentic traditional Veda Patasala dedicated to the preservation of Krishna Yajur Veda adhyayanam and Dharma Shastras. Guided by the sacred Guru-Shishya Parampara, we nurture young vidyaarthis in a residential sanctuary of discipline, chanting, and devotion.',
  primary = { label: 'Explore the Gurukulam', to: '/gurukulam' },
  secondary = { label: 'Admission Enquiry', to: '/admission' },
}) {
  return (
    <section className="relative overflow-hidden border-b border-gold-soft/40 bg-[#FFFDF8] pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
      {/* Faint traditional Kolam dot pattern */}
      <div className="pattern-kolam absolute inset-0 opacity-[0.14]" aria-hidden="true" />

      {/* Atmospheric ambient glows */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-saffron/8 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="site-container relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* ─────────────────────────────────────────────────────────────
              LEFT COLUMN: Strong Typographic Hierarchy & Editorial Narrative
             ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-7 xl:col-span-7">
            <Reveal>
              {/* Eyebrow Kicker */}
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft/90 bg-ivory px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-saffron-deep shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-saffron animate-pulse" aria-hidden="true" />
                <span>{eyebrow}</span>
              </div>

              {/* Primary Page Heading */}
              <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-maroon sm:text-5xl lg:text-[52px] xl:text-[60px] leading-[1.08]">
                Preserving the Sacred Tradition of{' '}
                <span className="italic font-normal text-saffron-deep">Vedic Learning</span>
              </h1>

              {/* Concise Supporting Description */}
              <p className="mt-5 max-w-2xl font-sans text-[16px] leading-relaxed text-ink-soft sm:text-[17.5px]">
                {subtitle}
              </p>

              {/* Action Pathways */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Button to={primary.to} variant="primary" size="lg" className="shadow-md">
                  <span>{primary.label}</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Button>
                <Button to={secondary.to} variant="saffron" size="lg" className="shadow-xs">
                  <span>{secondary.label}</span>
                </Button>
              </div>

              {/* Verified Institutional Highlights Strip */}
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-gold-soft/60 pt-6 sm:grid-cols-3 sm:gap-6 lg:mt-12">
                <div>
                  <p className="font-serif text-2xl font-bold text-maroon sm:text-3xl">1996</p>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-ink-soft">
                    Patasala Established
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-saffron-deep sm:text-3xl">100% Free</p>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-ink-soft">
                    Boarding &amp; Vedic Study
                  </p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="font-serif text-2xl font-bold text-maroon sm:text-3xl">Sec. 80-G</p>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-ink-soft">
                    Tax Exempt Trust (2008)
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              RIGHT COLUMN: Asymmetrical Editorial Photography & Inscription
             ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-5 xl:col-span-5">
            <Reveal delay={0.15}>
              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                {/* Antique gold offset structural framing */}
                <div
                  className="pointer-events-none absolute -bottom-3 -right-3 hidden h-full w-full rounded-2xl border-2 border-gold/45 sm:block"
                  aria-hidden="true"
                />

                {/* Main Authentic Photographic Card */}
                <div className="relative overflow-hidden rounded-2xl border border-gold-soft bg-ivory shadow-warm">
                  {/* Delicate corner markers */}
                  <div className="pointer-events-none absolute -top-1.5 -left-1.5 h-4 w-4 border-t-2 border-l-2 border-gold z-20" aria-hidden="true" />
                  <div className="pointer-events-none absolute -top-1.5 -right-1.5 h-4 w-4 border-t-2 border-r-2 border-gold z-20" aria-hidden="true" />

                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream">
                    <img
                      src="/photos/acharya-teaching-session.jpg"
                      alt="Acharya conducting traditional Krishna Yajur Veda recitation with young vidyaarthis at Sri Seetharama Gurukulam"
                      width="800"
                      height="1000"
                      fetchpriority="high"
                      loading="eager"
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.03]"
                    />

                    {/* Top Tag Pill */}
                    <div className="absolute left-3.5 top-3.5 z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-soft/80 bg-ivory/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-maroon shadow-xs backdrop-blur-xs">
                        <span className="text-saffron-deep">✦</span>
                        <span>Guru-Shishya Adhyayanam</span>
                      </span>
                    </div>

                    {/* Bottom subtle gradient vignette */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#2B0E0E]/85 via-[#2B0E0E]/30 to-transparent" />

                    {/* Caption over vignette */}
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-cream">
                      <p className="font-serif text-lg font-bold leading-snug sm:text-xl">
                        Oral Transmission of the Vedas
                      </p>
                      <p className="text-xs text-cream/80">
                        Unbroken lineage of Krishna Yajur Veda recitation
                      </p>
                    </div>
                  </div>

                  {/* Archival Inscription Strip */}
                  <div className="flex items-center justify-between border-t border-gold-soft/70 bg-ivory px-4 py-2.5 text-xs text-ink-soft">
                    <span className="font-serif font-semibold text-maroon">
                      ॥ स्वाध्यायोऽध्येतव्यः ॥
                    </span>
                    <span className="text-[11px] font-medium text-ink-muted">
                      Alwarpet, Chennai
                    </span>
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
