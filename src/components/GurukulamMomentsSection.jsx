import { ArrowRight, Camera } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

/**
 * SECTION 04: MOMENTS AT THE GURUKULAM
 * Redesigned for seamless visual balance:
 * - Top row: 2 equal-width, high-impact hero cards (50% / 50%) filling 100% width with no right-side gaps.
 * - Bottom row: 3 equal-width supporting editorial cards (33.33% each) filling 100% width.
 * - All rows align flush to left and right container edges with consistent spacing.
 */
export default function GurukulamMomentsSection() {
  return (
    <section
      id="gurukulam-moments"
      aria-labelledby="gurukulam-moments-heading"
      className="relative overflow-hidden bg-ivory py-16 sm:py-20 lg:py-24 border-b border-gold-soft/40"
    >
      <div className="site-container relative">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft bg-cream px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-saffron-deep shadow-xs">
              <Camera className="h-3 w-3 text-saffron" aria-hidden="true" />
              <span>Visual Heritage Archive</span>
            </div>
            <h2
              id="gurukulam-moments-heading"
              className="mt-3 font-serif text-3xl font-bold tracking-tight text-maroon sm:text-4xl lg:text-[42px]"
            >
              Moments at the <span className="italic font-normal text-saffron-deep">Gurukulam</span>
            </h2>
            <p className="mt-3 text-sm text-ink-soft sm:text-base">
              A glimpse into daily adhyayanam, temple visits, sacred festivals, and student life.
            </p>
          </div>
        </Reveal>

        {/* Seamless Editorial Grid */}
        <div className="mt-10 sm:mt-14 space-y-5">
          {/* Top Row: Balanced 2-Column Hero Split (100% full width, flush to both margins) */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Image 1: Veda Parayanam Chanting Session */}
            <Reveal className="h-full w-full">
              <Link
                to="/gallery"
                className="group relative block h-full w-full overflow-hidden rounded-2xl border border-gold-soft/90 bg-cream shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-card focus:outline-none focus:ring-2 focus:ring-saffron"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src="/photos/veda-parayanam-recitation.jpg"
                    alt="Students and devotees gathered with sacred Vedic scriptures during parayanam"
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-maroon-dark/85 via-maroon-dark/25 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95"
                    aria-hidden="true"
                  />
                  <div className="absolute top-3.5 left-3.5 rounded-full bg-ivory/95 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-maroon backdrop-blur-md border border-gold-soft shadow-xs">
                    Poojas &amp; Chanting
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-cream">
                    <p className="font-serif text-lg font-bold sm:text-xl leading-snug">
                      Veda Parayanam &amp; Scripture Chanting
                    </p>
                    <p className="mt-1 text-xs sm:text-[13px] text-cream/85">
                      Gathered in collective chanting with traditional pothis
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Image 2: Vidyarthis at Sacred Temple Visit */}
            <Reveal className="h-full w-full" delay={0.08}>
              <Link
                to="/gallery"
                className="group relative block h-full w-full overflow-hidden rounded-2xl border border-gold-soft/90 bg-cream shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-card focus:outline-none focus:ring-2 focus:ring-saffron"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src="/photos/vidyarthis-temple-visit.jpg"
                    alt="Gurukulam students and elders seated on traditional temple stone steps"
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-maroon-dark/85 via-maroon-dark/25 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95"
                    aria-hidden="true"
                  />
                  <div className="absolute top-3.5 left-3.5 rounded-full bg-ivory/95 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-maroon backdrop-blur-md border border-gold-soft shadow-xs">
                    Festivals &amp; Visits
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-cream">
                    <p className="font-serif text-lg font-bold sm:text-xl leading-snug">
                      Sacred Temple Step Gathering
                    </p>
                    <p className="mt-1 text-xs sm:text-[13px] text-cream/85">
                      Experiencing centuries-old heritage firsthand
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>

          {/* Bottom Row: 3 Equal-Width Editorial Tiles (100% full width, flush to both margins) */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Image 3: Vidyarthis of Gurukulam */}
            <Reveal className="h-full w-full" delay={0.12}>
              <Link
                to="/gallery"
                className="group relative block h-full w-full overflow-hidden rounded-xl sm:rounded-2xl border border-gold-soft/90 bg-cream shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-card focus:outline-none focus:ring-2 focus:ring-saffron"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/photos/gurukulam-vidyarthis.jpg"
                    alt="Young Vedic students of Sri Seetharama Gurukulam sitting together in traditional attire"
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-maroon-dark/80 via-transparent to-transparent opacity-85 group-hover:opacity-95"
                    aria-hidden="true"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-ivory/95 px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-maroon backdrop-blur-md border border-gold-soft">
                    Campus Life
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-cream">
                    <p className="font-serif text-base font-bold sm:text-[17px] leading-snug">
                      Vidyarthis in Traditional Attire
                    </p>
                    <p className="mt-0.5 text-[11.5px] text-cream/85">
                      Discipline and humble simplicity
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Image 4: Vidyarthis at Ganesha & Hanuman Sannidhi */}
            <Reveal className="h-full w-full" delay={0.16}>
              <Link
                to="/gallery"
                className="group relative block h-full w-full overflow-hidden rounded-xl sm:rounded-2xl border border-gold-soft/90 bg-cream shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-card focus:outline-none focus:ring-2 focus:ring-saffron"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/photos/vidyarthis-ganesha-hanuman-mural.jpg"
                    alt="Vidyarthis and elders standing before Sri Ganesha and Sri Hanuman temple mural"
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-maroon-dark/80 via-transparent to-transparent opacity-85 group-hover:opacity-95"
                    aria-hidden="true"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-ivory/95 px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-maroon backdrop-blur-md border border-gold-soft">
                    Temple Sannidhi
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-cream">
                    <p className="font-serif text-base font-bold sm:text-[17px] leading-snug">
                      Devotion at Sacred Sannidhi
                    </p>
                    <p className="mt-0.5 text-[11.5px] text-cream/85">
                      Blessings before deities
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Image 5: Naimisharanya Mandapam Pandits */}
            <Reveal className="h-full w-full sm:col-span-2 lg:col-span-1" delay={0.2}>
              <Link
                to="/gallery"
                className="group relative block h-full w-full overflow-hidden rounded-xl sm:rounded-2xl border border-gold-soft/90 bg-cream shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-card focus:outline-none focus:ring-2 focus:ring-saffron"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/photos/naimisharanya-mandapam-pandits.jpg"
                    alt="Vedic pandits and acharyas standing in rows during parayanam at Naimisharanya Mandapam"
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-maroon-dark/80 via-transparent to-transparent opacity-85 group-hover:opacity-95"
                    aria-hidden="true"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-ivory/95 px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-maroon backdrop-blur-md border border-gold-soft">
                    Scholars Assembly
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-cream">
                    <p className="font-serif text-base font-bold sm:text-[17px] leading-snug">
                      Vedic Pandits Assembly
                    </p>
                    <p className="mt-0.5 text-[11.5px] text-cream/85">
                      Naimisharanya Mandapam gathering
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Gallery CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2 rounded-full border border-gold bg-cream px-6 py-2.5 font-sans text-sm font-semibold text-maroon shadow-xs transition hover:bg-ivory hover:border-maroon focus:outline-none focus:ring-2 focus:ring-saffron"
          >
            <span>Explore the Gallery</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
