import { Camera, Compass, Expand, MapPin, MessageCircle, Phone, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import HeritageLightbox from '../components/HeritageLightbox.jsx'
import SEO from '../components/SEO.jsx'
import galleryData from '../data/gallery.json'
import { site } from '../data/site.js'
import { whatsappLink } from '../utils/whatsapp.js'

// Export retained for backward compatibility
export const ALBUMS = ['All', 'Festivals', 'Classes', 'Poojas', 'Campus']

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const openLightboxForIndex = (index) => {
    setLightboxIndex(index)
  }

  return (
    <>
      <SEO
        title="Visual Heritage Journal | Gallery"
        description="A curated photographic documentary of Sri Seetharama Gurukulam Trust & Veda Patasala: traditional Krishna Yajur Veda adhyayanam, Guru-Shishya Parampara, and campus life at Veda Bhavan."
        path="/gallery"
      />

      <div className="bg-cream text-ink">
        {/* ── SECTION ONE: EDITORIAL HERO HEADER (WITHOUT DUPLICATE PHOTO CARD) ── */}
        <section className="relative overflow-hidden border-b border-gold-soft/50 bg-gradient-to-b from-[#FBF5E9] via-[#FAF3E4] to-[#FBF5E9] py-14 sm:py-18 lg:py-22">
          {/* Subtle architectural manuscript background glows */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-saffron/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-gold/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="site-container relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Traditional Vedic Eyebrow */}
            <div className="inline-flex items-center justify-center gap-3">
              <span className="h-px w-8 sm:w-12 bg-gold/80" aria-hidden="true" />
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.28em] text-saffron-deep sm:text-xs">
                VEDIC HERITAGE ARCHIVES
              </span>
              <span className="h-px w-8 sm:w-12 bg-gold/80" aria-hidden="true" />
            </div>

            {/* Main Editorial Heading */}
            <h1 className="mt-4 font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight text-maroon">
              Life, Learning &amp; Sacred Tradition
            </h1>

            {/* Refined Narrative Description */}
            <p className="mt-4 sm:mt-5 font-sans text-base sm:text-lg lg:text-xl leading-relaxed text-ink-soft max-w-2xl mx-auto">
              A curated photographic documentary of Sri Seetharama Gurukula Veda Patasala — capturing daily Krishna Yajur Veda adhyayanam, Guru-Shishya parampara, and authentic life at Veda Bhavan.
            </p>

            {/* Archival Metadata Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 border-t border-gold-soft/70 pt-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft bg-ivory px-4 py-1.5 shadow-2xs">
                <Camera size={14} className="text-saffron-deep" aria-hidden="true" />
                <span className="text-xs font-semibold text-maroon">
                  {galleryData.length} Verified Archival Plates
                </span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft bg-ivory px-4 py-1.5 shadow-2xs">
                <Sparkles size={14} className="text-gold" aria-hidden="true" />
                <span className="text-xs font-semibold text-ink-soft">
                  Krishna Yajur Veda Adhyayanam
                </span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft bg-ivory px-4 py-1.5 shadow-2xs">
                <MapPin size={14} className="text-saffron-deep" aria-hidden="true" />
                <span className="text-xs font-semibold text-ink-soft">
                  Veda Bhavan, Alwarpet, Chennai
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* ── SECTION TWO: CURATED VISUAL ARCHIVE GRID (ZERO DUPLICATION, NO 2-LINE DESCRIPTIONS) ── */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="site-container">
            {/* Gallery Grid Header */}
            <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end border-b border-gold-soft/60 pb-4">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-saffron-deep">
                  DOCUMENTARY COLLECTION
                </span>
                <h2 className="mt-1 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-maroon">
                  The Photographic Chronicle
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-ink-muted">
                <Compass size={14} className="text-saffron-deep" aria-hidden="true" />
                <span>Showing all {galleryData.length} authentic plates</span>
              </div>
            </div>

            {/* Responsive Editorial Gallery Grid (2 columns on tablet, 3 columns on desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 w-full min-w-0 max-w-full">
              {galleryData.map((photo, index) => {
                const plateNumber = String(index + 1).padStart(2, '0')

                return (
                  <article
                    key={photo.id}
                    className="group relative flex flex-col overflow-hidden rounded-xl border border-gold-soft/70 bg-ivory p-3.5 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-warm"
                  >
                    {/* Corner decorative accents */}
                    <div className="pointer-events-none absolute -top-1 -left-1 h-3 w-3 border-t-2 border-l-2 border-gold/40 group-hover:border-gold transition-colors duration-300" aria-hidden="true" />
                    <div className="pointer-events-none absolute -top-1 -right-1 h-3 w-3 border-t-2 border-r-2 border-gold/40 group-hover:border-gold transition-colors duration-300" aria-hidden="true" />
                    <div className="pointer-events-none absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-gold/40 group-hover:border-gold transition-colors duration-300" aria-hidden="true" />
                    <div className="pointer-events-none absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-gold/40 group-hover:border-gold transition-colors duration-300" aria-hidden="true" />

                    {/* Image Enlarge Trigger */}
                    <button
                      type="button"
                      onClick={() => openLightboxForIndex(index)}
                      className="group/btn relative block w-full overflow-hidden rounded-lg bg-cream/40 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
                      aria-label={`Enlarge photograph plate ${plateNumber}: ${photo.caption}`}
                    >
                      <div className="relative aspect-[16/11] w-full overflow-hidden">
                        <img
                          src={photo.src}
                          alt={photo.caption}
                          width="1024"
                          height="704"
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />

                        {/* Hover Overlay with View Badge */}
                        <div className="absolute inset-0 flex items-center justify-center bg-maroon-dark/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                          <span className="flex items-center gap-1.5 rounded-full border border-gold-soft/60 bg-maroon-dark/90 px-3.5 py-1.5 text-xs font-bold text-gold-soft shadow-md backdrop-blur-xs">
                            <Expand size={13} aria-hidden="true" />
                            <span>View Full Plate</span>
                          </span>
                        </div>
                      </div>
                    </button>

                    {/* Editorial Card Footer (Clean: Plate Number, Category Badge, Title ONLY - No 2-line description) */}
                    <div className="mt-3.5 flex flex-1 flex-col justify-between border-t border-gold-soft/50 pt-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-gold-deep">
                          ARCHIVAL PLATE № {plateNumber}
                        </span>
                        <span className="rounded-full border border-gold-soft/80 bg-gold-soft/25 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-saffron-deep">
                          {photo.album}
                        </span>
                      </div>

                      {/* Crisp Cormorant Garamond Title */}
                      <h3
                        onClick={() => openLightboxForIndex(index)}
                        className="mt-2 cursor-pointer font-serif text-[18px] sm:text-[19px] font-bold leading-snug text-maroon transition-colors duration-200 group-hover:text-saffron-deep"
                      >
                        {photo.caption}
                      </h3>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── SECTION THREE: TRADITIONAL CONNECT & VISIT PAVILION ── */}
        <section className="border-t border-gold-soft/50 bg-gradient-to-b from-[#F5EEDB] to-[#FAF3E4] py-14 sm:py-16">
          <div className="site-container">
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border-2 border-gold/45 bg-ivory p-8 sm:p-12 shadow-card text-center">
              {/* Decorative corner accents */}
              <div className="pointer-events-none absolute top-0 left-0 h-5 w-5 border-t-2 border-l-2 border-gold" aria-hidden="true" />
              <div className="pointer-events-none absolute top-0 right-0 h-5 w-5 border-t-2 border-r-2 border-gold" aria-hidden="true" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-gold" aria-hidden="true" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-gold" aria-hidden="true" />

              <span className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-saffron-deep">
                VISIT &amp; CONNECT
              </span>
              <h2 className="mt-2 font-serif text-2xl sm:text-4xl font-bold text-maroon">
                Experience the Living Heritage of Krishna Yajur Veda
              </h2>
              <p className="mt-3 font-sans text-sm sm:text-base text-ink-soft max-w-xl mx-auto leading-relaxed">
                Parents, devotees, and well-wishers are welcomed to visit Veda Bhavan, Alwarpet, Chennai, with prior notice to witness daily adhyayanam and support our sacred mission.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-saffron bg-saffron px-6 py-2.5 text-xs sm:text-sm font-bold text-maroon-dark transition-all duration-200 hover:bg-saffron-deep hover:text-white shadow-xs"
                >
                  <span>Admission &amp; Visit Enquiry</span>
                </Link>

                <a
                  href={whatsappLink('Namaste, I would like to enquire about visiting Sri Seetharama Gurukulam.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gold-soft bg-ivory px-6 py-2.5 text-xs sm:text-sm font-bold text-maroon transition-all duration-200 hover:border-gold hover:bg-gold-soft/30 shadow-2xs"
                >
                  <MessageCircle size={15} className="text-[#25D366]" aria-hidden="true" />
                  <span>Connect on WhatsApp</span>
                </a>

                <a
                  href={`tel:${site.phone}`}
                  className="inline-flex items-center gap-2 rounded-full border border-gold-soft bg-ivory px-6 py-2.5 text-xs sm:text-sm font-bold text-maroon transition-all duration-200 hover:border-gold hover:bg-gold-soft/30 shadow-2xs"
                >
                  <Phone size={14} className="text-saffron-deep" aria-hidden="true" />
                  <span>Call {site.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── SECTION FOUR: HERITAGE LIGHTBOX MODAL ── */}
      <HeritageLightbox
        isOpen={lightboxIndex >= 0}
        photos={galleryData}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(-1)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </>
  )
}
