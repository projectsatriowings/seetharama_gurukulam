import { Sparkles } from 'lucide-react'
import Reveal from './Reveal.jsx'

/**
 * Traditional Indian manuscript / temple corner floret ornament
 */
function CornerFloret({ className = '' }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 22V6C2 3.79086 3.79086 2 6 2H22"
        stroke="#C9A24B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="6" cy="6" r="2.5" fill="#C9A24B" />
      <path
        d="M6 14C6 9.578 9.578 6 14 6"
        stroke="#E9D8A6"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
    </svg>
  )
}

/**
 * Sacred Peetam emblem inspired by traditional Kamakoti Peetam iconography
 */
function PeetamEmblem({ className = '' }) {
  return (
    <svg
      width="76"
      height="76"
      viewBox="0 0 76 76"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Outer decorative dashed halo */}
      <circle
        cx="38"
        cy="38"
        r="35"
        stroke="#C9A24B"
        strokeWidth="1.2"
        strokeDasharray="3 3"
        opacity="0.75"
      />
      {/* Outer concentric solid ring */}
      <circle cx="38" cy="38" r="31" stroke="#C9A24B" strokeWidth="1" opacity="0.9" />

      {/* 12 Radiating rays */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <line
          key={deg}
          x1="38"
          y1="9"
          x2="38"
          y2="14"
          stroke="#C9A24B"
          strokeWidth="1.5"
          strokeLinecap="round"
          transform={`rotate(${deg} 38 38)`}
        />
      ))}

      {/* 8 Inner lotus petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <ellipse
          key={deg}
          cx="38"
          cy="27"
          rx="3.5"
          ry="7.5"
          fill="#C9A24B"
          opacity="0.85"
          transform={`rotate(${deg} 38 38)`}
        />
      ))}

      {/* Inner sacred sanctum ring & Bindu */}
      <circle cx="38" cy="38" r="9" fill="#380E0E" stroke="#C9A24B" strokeWidth="1.5" />
      <circle cx="38" cy="38" r="4.5" fill="#C9A24B" />
      <circle cx="38" cy="38" r="1.5" fill="#FFFDF8" />
    </svg>
  )
}

/**
 * Phase 2.1 — Acharyas' Blessings & Divine Guidance Section
 * Authoritative content verified against client's SGT Folder file correction.pdf
 */
export default function AcharyaBlessings() {
  return (
    <section
      id="acharyas-blessings"
      aria-labelledby="paramacharyal-blessings-heading"
      className="relative overflow-hidden border-y border-gold/30 bg-maroon-dark py-16 text-cream sm:py-20 lg:py-24"
    >
      {/* Subtle traditional kolam dot matrix background pattern */}
      <div className="pattern-kolam absolute inset-0 opacity-[0.12]" aria-hidden="true" />

      {/* Soft ambient atmospheric glows */}
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-saffron/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="site-container relative">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
          {/* ─────────────────────────────────────────────────────────────
              LEFT SIDE: Sacred Archival Peetam Inscription & Memorial Plaque
             ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative mx-auto max-w-[460px] lg:max-w-none">
                {/* Outer ornamental gold double border */}
                <div className="relative rounded-2xl border border-gold/50 bg-gradient-to-b from-[#2A0808] via-[#380E0E] to-[#250707] p-7 sm:p-9 shadow-2xl">
                  {/* Archival corner florets */}
                  <CornerFloret className="absolute left-3 top-3 text-gold" />
                  <CornerFloret className="absolute right-3 top-3 rotate-90 text-gold" />
                  <CornerFloret className="absolute bottom-3 right-3 rotate-180 text-gold" />
                  <CornerFloret className="absolute bottom-3 left-3 -rotate-90 text-gold" />

                  {/* Inner hairline frame */}
                  <div className="border border-gold/25 rounded-xl p-5 sm:p-7 text-center">
                    {/* Sanskrit Kicker */}
                    <p className="font-serif text-sm font-semibold tracking-[0.25em] text-gold-soft/90">
                      ॥ श्री काञ्ची कामकोटि पीठम् ॥
                    </p>

                    {/* Sacred Portrait of His Holiness Sri Paramacharyal */}
                    <div className="relative my-5 mx-auto max-w-[210px] sm:max-w-[230px]">
                      {/* Soft sacred golden aura */}
                      <div
                        className="pointer-events-none absolute -inset-2 rounded-2xl bg-gradient-to-t from-saffron/20 via-gold/30 to-saffron/15 blur-md"
                        aria-hidden="true"
                      />
                      {/* Clean ornate gold frame without black border or dark padding */}
                      <div className="relative overflow-hidden rounded-xl border-2 border-gold/80 shadow-2xl transition-transform duration-300 hover:scale-[1.01]">
                        <img
                          src="/photos/paramacharyal-blessing.jpg"
                          alt="His Holiness Jagadguru Sri Chandrasekharendra Saraswathi Swamigal, Sri Paramacharyal of Kanchi, raising hand in divine blessing (Abhaya Mudra)"
                          width="616"
                          height="922"
                          loading="lazy"
                          className="block aspect-[616/922] w-full object-cover object-center"
                        />
                      </div>
                    </div>

                    {/* Paramacharyal Reverential Typography */}
                    <p className="text-[10px] font-sans font-bold uppercase tracking-[0.28em] text-saffron">
                      Divine Patron &amp; Guiding Light
                    </p>

                    <h3 className="mt-2 font-serif text-2xl font-bold leading-snug text-cream sm:text-3xl">
                      His Holiness Jagadguru
                      <span className="block text-gold-soft font-normal italic">
                        Sri Chandrasekharendra
                      </span>
                      Saraswathi Swamigal
                    </h3>

                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-saffron-deep">
                      Sri Paramacharyal of Kanchi
                    </p>
                    <p className="mt-0.5 text-[11px] font-medium text-cream/70">
                      68th Shankaracharya of Sri Kanchi Kamakoti Peetam · (1894–1994)
                    </p>

                    {/* Ornamental Divider */}
                    <div className="my-5 flex items-center justify-center gap-2" aria-hidden="true">
                      <span className="h-px w-10 bg-gold/40" />
                      <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
                      <span className="h-px w-10 bg-gold/40" />
                    </div>

                    {/* Archival Note */}
                    <p className="text-xs italic leading-relaxed text-cream/80">
                      Under whose divine command, grace, and blessings the Seetha Rama Gurukula Veda
                      Patasala was founded in 1996 for the eternal preservation of the Vedas.
                    </p>

                    <div className="mt-4 rounded-lg border border-gold/30 bg-black/25 px-3 py-2 text-[11px] font-medium tracking-wide text-gold-soft/90">
                      &ldquo;The Vedas are the root of all Dharma&rdquo;
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              RIGHT SIDE: Editorial Quotation, Storytelling & Milestones
             ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-gold-soft">
                <Sparkles size={13} className="text-saffron" aria-hidden="true" />
                <span>Blessings &amp; Divine Guidance</span>
              </div>

              {/* Main Heading */}
              <h2
                id="paramacharyal-blessings-heading"
                className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-cream sm:text-4xl lg:text-[42px] xl:text-[46px]"
              >
                A Legacy Rooted in Divine Blessings
              </h2>

              {/* Supporting Historical Explanation */}
              <p className="mt-4 font-sans text-[15.5px] leading-relaxed text-cream/85 sm:text-[16.5px]">
                Seetha Rama Gurukula Veda Patasala began its journey in 1996 with the blessings and
                grace of His Holiness Sri Paramacharyal of Sri Kanchi Kamakoti Peetam. What began
                with two students under the guidance of Sri V. Rajagopala Ghanapatigal grew into an
                institution dedicated to preserving the sacred tradition of Vedic learning.
              </p>

              {/* Featured Acharya Quotation Panel */}
              <blockquote className="relative mt-7 rounded-card border-l-4 border-l-gold border-y border-r border-gold/40 bg-[#FFFDF8] p-6 sm:p-8 shadow-elevated">
                {/* Top Quote Decorator */}
                <div
                  className="font-serif text-5xl leading-none text-gold/50 select-none sm:text-6xl"
                  aria-hidden="true"
                >
                  &ldquo;
                </div>

                {/* Exact Verified Quotation from SGT Folder file correction.pdf */}
                <p className="-mt-4 font-serif text-[17px] font-semibold italic leading-relaxed text-maroon-dark sm:text-[19px] lg:text-[20px]">
                  The Vedas that Constitute the Scripture common to all and which reveal the Godhead
                  that is common to us also teach us, how to lead our life, and - this is important -
                  they do us the ultimate good by showing us in the end the way to become that very
                  Godhead ourselves.
                </p>

                {/* Attribution */}
                <footer className="mt-5 flex flex-col gap-1 border-t border-gold/25 pt-4 sm:flex-row sm:items-baseline sm:justify-between">
                  <cite className="not-italic">
                    <span className="block font-serif text-lg font-bold leading-snug text-maroon sm:text-xl">
                      His Holiness Sri Paramacharyal
                    </span>
                    <span className="block text-xs font-bold uppercase tracking-[0.2em] text-saffron-deep">
                      Sri Kanchi Kamakoti Peetam
                    </span>
                  </cite>

                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-ink-muted">
                    Sacred Brochure Inscription
                  </span>
                </footer>
              </blockquote>

              {/* Historical Timeline Milestones */}
              <div className="mt-8 border-t border-gold/20 pt-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold-soft">
                  Chronology of Divine Guidance
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {/* 1996 Milestone */}
                  <div className="group rounded-xl border border-gold/30 bg-black/20 p-4 transition-all duration-200 hover:border-gold hover:bg-black/30">
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-2xl font-bold text-saffron sm:text-3xl">
                        1996
                      </span>
                      <span className="h-px flex-1 bg-gold/30" aria-hidden="true" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gold-soft/80">
                        Foundation
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-cream/90">
                      Establishment of the Veda Patasala with two students under the blessings of
                      His Holiness Sri Paramacharyal.
                    </p>
                  </div>

                  {/* 2008 Milestone */}
                  <div className="group rounded-xl border border-gold/30 bg-black/20 p-4 transition-all duration-200 hover:border-gold hover:bg-black/30">
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-2xl font-bold text-saffron sm:text-3xl">
                        2008
                      </span>
                      <span className="h-px flex-1 bg-gold/30" aria-hidden="true" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gold-soft/80">
                        Trust Registered
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-cream/90">
                      Formation and registration of a separate charitable trust following the growth
                      of the Patasala and the Acharya&apos;s direction.
                    </p>
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
