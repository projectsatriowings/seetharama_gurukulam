import { ArrowRight, Camera, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

/**
 * PHASE 2.2 — SECTION 04: MOMENTS AT THE GURUKULAM
 * Purpose: Provide a visual preview of institutional activities.
 * Photos: 5 authentic photographs with different proportions, minimal captions, elegant hover interactions.
 * CTA: Explore the Gallery -> /gallery
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

        {/* Asymmetrical Editorial Gallery Preview */}
        <div className="mt-10 sm:mt-14 space-y-4">
          {/* Top Row: Asymmetric 7 / 5 Column Split */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            {/* Image 1: Veda Parayanam Chanting Session (7 cols) */}
            <div className="lg:col-span-7">
              <Reveal>
                <Link
                  to="/gallery"
                  className="group relative block overflow-hidden rounded-xl sm:rounded-2xl border border-gold-soft bg-cream shadow-xs transition duration-300 hover:shadow-card focus:outline-none focus:ring-2 focus:ring-saffron"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <img
                      src="/photos/veda-parayanam-recitation.jpg"
                      alt="Students and devotees gathered with sacred Vedic scriptures during parayanam"
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-maroon-dark/75 via-maroon-dark/20 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95"
                      aria-hidden="true"
                    />
                    <div className="absolute top-3 left-3 rounded-full bg-ivory/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-maroon backdrop-blur-xs border border-gold-soft">
                      Poojas & Chanting
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-cream">
                      <p className="font-serif text-base font-semibold sm:text-lg">
                        Veda Parayanam & Scripture Chanting
                      </p>
                      <p className="text-xs text-cream/80">
                        Gathered in collective chanting with traditional pothis
                      </p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            </div>

            {/* Image 2: Vidyarthis at Sacred Temple Visit (5 cols) */}
            <div className="lg:col-span-5">
              <Reveal>
                <Link
                  to="/gallery"
                  className="group relative block overflow-hidden rounded-xl sm:rounded-2xl border border-gold-soft bg-cream shadow-xs transition duration-300 hover:shadow-card focus:outline-none focus:ring-2 focus:ring-saffron"
                >
                  <div className="relative aspect-[16/10] lg:aspect-[16/10] w-full overflow-hidden">
                    <img
                      src="/photos/vidyarthis-temple-visit.jpg"
                      alt="Gurukulam students and elders seated on traditional temple stone steps"
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-maroon-dark/75 via-maroon-dark/20 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95"
                      aria-hidden="true"
                    />
                    <div className="absolute top-3 left-3 rounded-full bg-ivory/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-maroon backdrop-blur-xs border border-gold-soft">
                      Festivals & Visits
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-cream">
                      <p className="font-serif text-base font-semibold sm:text-lg">
                        Sacred Temple Step Gathering
                      </p>
                      <p className="text-xs text-cream/80">
                        Experiencing centuries-old heritage firsthand
                      </p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            </div>
          </div>

          {/* Bottom Row: 3 Editorial Tiles (4 cols each on desktop) */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Image 3: Vidyarthis of Gurukulam */}
            <Reveal>
              <Link
                to="/gallery"
                className="group relative block overflow-hidden rounded-xl border border-gold-soft bg-cream shadow-xs transition duration-300 hover:shadow-card focus:outline-none focus:ring-2 focus:ring-saffron"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/photos/gurukulam-vidyarthis.jpg"
                    alt="Young Vedic students of Sri Seetharama Gurukulam sitting together in traditional attire"
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-maroon-dark/70 via-transparent to-transparent opacity-85 group-hover:opacity-95"
                    aria-hidden="true"
                  />
                  <div className="absolute top-2.5 left-2.5 rounded-full bg-ivory/90 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-maroon backdrop-blur-xs border border-gold-soft">
                    Campus Life
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-cream">
                    <p className="font-serif text-sm font-semibold">
                      Vidyarthis in Traditional Attire
                    </p>
                    <p className="text-[11px] text-cream/80">
                      Discipline and humble simplicity
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Image 4: Vidyarthis at Ganesha & Hanuman Sannidhi */}
            <Reveal>
              <Link
                to="/gallery"
                className="group relative block overflow-hidden rounded-xl border border-gold-soft bg-cream shadow-xs transition duration-300 hover:shadow-card focus:outline-none focus:ring-2 focus:ring-saffron"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/photos/vidyarthis-ganesha-hanuman-mural.jpg"
                    alt="Vidyarthis and elders standing before Sri Ganesha and Sri Hanuman temple mural"
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-maroon-dark/70 via-transparent to-transparent opacity-85 group-hover:opacity-95"
                    aria-hidden="true"
                  />
                  <div className="absolute top-2.5 left-2.5 rounded-full bg-ivory/90 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-maroon backdrop-blur-xs border border-gold-soft">
                    Temple Sannidhi
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-cream">
                    <p className="font-serif text-sm font-semibold">
                      Devotion at Sacred Sannidhi
                    </p>
                    <p className="text-[11px] text-cream/80">
                      Blessings before deities
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Image 5: Naimisharanya Mandapam Pandits */}
            <Reveal className="sm:col-span-2 lg:col-span-1">
              <Link
                to="/gallery"
                className="group relative block overflow-hidden rounded-xl border border-gold-soft bg-cream shadow-xs transition duration-300 hover:shadow-card focus:outline-none focus:ring-2 focus:ring-saffron"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/photos/naimisharanya-mandapam-pandits.jpg"
                    alt="Vedic pandits and acharyas standing in rows during parayanam at Naimisharanya Mandapam"
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-maroon-dark/70 via-transparent to-transparent opacity-85 group-hover:opacity-95"
                    aria-hidden="true"
                  />
                  <div className="absolute top-2.5 left-2.5 rounded-full bg-ivory/90 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-maroon backdrop-blur-xs border border-gold-soft">
                    Scholars Assembly
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-cream">
                    <p className="font-serif text-sm font-semibold">
                      Vedic Pandits Assembly
                    </p>
                    <p className="text-[11px] text-cream/80">
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
            className="group inline-flex items-center gap-2 rounded-lg border border-gold bg-cream px-6 py-3 font-sans text-sm font-semibold text-maroon shadow-xs transition hover:bg-ivory hover:border-maroon focus:outline-none focus:ring-2 focus:ring-saffron"
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
