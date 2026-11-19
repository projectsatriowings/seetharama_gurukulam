import { Camera, Compass, Expand, Eye, Layers, Sparkles } from 'lucide-react'
import { useId, useMemo, useState } from 'react'
import HeritageLightbox from '../components/HeritageLightbox.jsx'
import SEO from '../components/SEO.jsx'
import galleryData from '../data/gallery.json'

export const ALBUMS = ['All', 'Festivals', 'Classes', 'Poojas', 'Campus']

export default function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(-1)
  const tablistId = useId()

  // Compute category counts dynamically from gallery.json
  const categoryCounts = useMemo(() => {
    const counts = { All: galleryData.length }
    galleryData.forEach((item) => {
      counts[item.album] = (counts[item.album] || 0) + 1
    })
    return counts
  }, [])

  // Filtered photograph collection based on selected category
  const filteredPhotos = useMemo(() => {
    if (selectedAlbum === 'All') return galleryData
    return galleryData.filter((item) => item.album === selectedAlbum)
  }, [selectedAlbum])

  // Featured spotlight items for Section Three (when All is active)
  // Selected authentic plates covering: Acharyas chanting, students learning, group vidyarthis, temple visit
  const featuredSpotlight = useMemo(() => {
    const heroPlate = galleryData.find((p) => p.id === 'g06') || galleryData[0] // Acharya Leading Sacred Veda Parayanam
    const widePlate = galleryData.find((p) => p.id === 'g01') || galleryData[1] // Vidyarthis group
    const squarePlate = galleryData.find((p) => p.id === 'g02') || galleryData[2] // Acharya Conducting Shastra Class
    const archivalPlate = galleryData.find((p) => p.id === 'g04') || galleryData[3] // Temple Visit
    return { heroPlate, widePlate, squarePlate, archivalPlate }
  }, [])

  // Helper to trigger lightbox for a specific photo within currently filtered list
  const openLightboxForPhoto = (photo) => {
    const idx = filteredPhotos.findIndex((p) => p.id === photo.id)
    if (idx !== -1) {
      setLightboxIndex(idx)
    } else {
      // If photo was in featured but filtered list does not contain it (e.g. clicked from intro), switch to All
      setSelectedAlbum('All')
      const allIdx = galleryData.findIndex((p) => p.id === photo.id)
      setLightboxIndex(allIdx !== -1 ? allIdx : 0)
    }
  }

  // Keyboard navigation for tablist
  const handleTabKeyDown = (e, index) => {
    let nextIndex = null
    if (e.key === 'ArrowRight') {
      nextIndex = (index + 1) % ALBUMS.length
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (index - 1 + ALBUMS.length) % ALBUMS.length
    } else if (e.key === 'Home') {
      nextIndex = 0
    } else if (e.key === 'End') {
      nextIndex = ALBUMS.length - 1
    }

    if (nextIndex !== null) {
      e.preventDefault()
      setSelectedAlbum(ALBUMS[nextIndex])
      const nextBtn = document.getElementById(`${tablistId}-tab-${ALBUMS[nextIndex]}`)
      if (nextBtn) nextBtn.focus()
    }
  }

  return (
    <>
      <SEO
        title="Visual Heritage Journal | Gallery"
        description="A curated photographic documentary of Sri Seetharama Gurukulam Trust & Veda Patasala: traditional Vedic adhyayanam, Guru-Shishya Parampara, festivals, and campus life."
        path="/gallery"
      />

      <div className="bg-cream text-ink">
        {/* ── SECTION ONE: EDITORIAL INTRODUCTION (OUR VISUAL HERITAGE) ── */}
        <section className="relative overflow-hidden border-b border-gold-soft/50 bg-gradient-to-b from-[#FBF5E9] via-[#FAF3E4] to-[#FBF5E9] pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-18 lg:pb-20">
          {/* Subtle architectural manuscript background motifs */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-saffron/8 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="site-container relative z-10">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Editorial Headline & Heritage Narrative */}
              <div className="lg:col-span-7">
                {/* Eyebrow with traditional double-rule flourishes */}
                <div className="flex items-center gap-2.5">
                  <span className="h-px w-8 bg-gold/80" aria-hidden="true" />
                  <span className="text-[11px] font-sans font-bold uppercase tracking-[0.26em] text-saffron-deep sm:text-xs">
                    OUR VISUAL HERITAGE
                  </span>
                  <span className="h-px w-8 bg-gold/80" aria-hidden="true" />
                </div>

                {/* Main Editorial Heading */}
                <h1 className="mt-4 font-serif text-3xl sm:text-5xl lg:text-[56px] font-bold leading-[1.12] tracking-tight text-maroon">
                  Life, Learning &amp; Tradition
                </h1>

                {/* Editorial Supporting Description */}
                <p className="mt-4 sm:mt-5 max-w-xl font-sans text-base sm:text-lg leading-relaxed text-ink-soft">
                  Every photograph tells a story of devotion, discipline, learning and the timeless traditions preserved at Seetharama Gurukulam.
                </p>

                {/* Archival Collection Metadata Index */}
                <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3 border-t border-gold-soft/70 pt-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft bg-ivory px-3.5 py-1.5 shadow-2xs">
                    <Camera size={14} className="text-saffron-deep" aria-hidden="true" />
                    <span className="text-xs font-semibold text-maroon">
                      {galleryData.length} Curated Archival Plates
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft bg-ivory px-3.5 py-1.5 shadow-2xs">
                    <Layers size={14} className="text-saffron-deep" aria-hidden="true" />
                    <span className="text-xs font-semibold text-ink-soft">
                      4 Heritage Categories
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft bg-ivory px-3.5 py-1.5 shadow-2xs">
                    <Sparkles size={14} className="text-gold" aria-hidden="true" />
                    <span className="text-xs font-semibold text-ink-soft">
                      Est. 1996 · Kanchi Paramacharya Blessings
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Featured Introductory Plate */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Archival Matting and Double-Gold Framing */}
                  <div className="relative rounded-lg border-2 border-gold/45 bg-ivory p-3 shadow-card transition-all duration-300 hover:border-gold hover:shadow-warm">
                    {/* Corner decorative notches */}
                    <div className="pointer-events-none absolute -top-1.5 -left-1.5 h-3.5 w-3.5 border-t-2 border-l-2 border-gold" aria-hidden="true" />
                    <div className="pointer-events-none absolute -top-1.5 -right-1.5 h-3.5 w-3.5 border-t-2 border-r-2 border-gold" aria-hidden="true" />
                    <div className="pointer-events-none absolute -bottom-1.5 -left-1.5 h-3.5 w-3.5 border-b-2 border-l-2 border-gold" aria-hidden="true" />
                    <div className="pointer-events-none absolute -bottom-1.5 -right-1.5 h-3.5 w-3.5 border-b-2 border-r-2 border-gold" aria-hidden="true" />

                    {/* Image Action Wrapper */}
                    <button
                      type="button"
                      onClick={() => openLightboxForPhoto(galleryData[0])}
                      className="group relative block w-full overflow-hidden rounded-sm text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
                      aria-label="Enlarge introductory archival photograph: Vidyarthis of Sri Seetharama Gurukulam"
                    >
                      <img
                        src="/photos/gurukulam-vidyarthis.jpg"
                        alt="Young Vedic students of Sri Seetharama Gurukulam sitting together in traditional attire"
                        width="1024"
                        height="497"
                        loading="eager"
                        fetchpriority="high"
                        className="aspect-[16/10] sm:aspect-[16/9] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />

                      {/* Hover Overlay Hint */}
                      <div className="absolute inset-0 flex items-center justify-center bg-maroon-dark/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <span className="flex items-center gap-1.5 rounded-full border border-gold-soft/50 bg-maroon-dark/85 px-3 py-1.5 text-xs font-bold text-gold-soft shadow-md backdrop-blur-xs">
                          <Expand size={13} aria-hidden="true" />
                          <span>View Full Plate</span>
                        </span>
                      </div>
                    </button>

                    {/* Archival Label Plate */}
                    <div className="mt-3 flex items-center justify-between border-t border-gold-soft/50 pt-2.5">
                      <div className="flex flex-col">
                        <span className="font-mono text-[10.5px] font-bold uppercase tracking-widest text-gold-deep">
                          ARCHIVAL PLATE № 01
                        </span>
                        <span className="font-serif text-[15px] font-bold text-maroon">
                          Vidyarthis of Sri Seetharama Gurukulam
                        </span>
                      </div>
                      <span className="rounded-full border border-gold-soft bg-gold-soft/25 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-saffron-deep">
                        Campus Life
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION TWO: EDITORIAL CATEGORY NAVIGATION ── */}
        <nav
          className="sticky top-[76px] z-30 border-b border-gold-soft/40 bg-ivory/95 py-3.5 shadow-header backdrop-blur-md lg:top-[84px]"
          aria-label="Filter visual archives by category"
        >
          <div className="site-container">
            <div className="flex items-center justify-between gap-4">
              {/* Category Filter Pills (Keyboard-accessible Tablist) */}
              <div
                role="tablist"
                aria-label="Heritage photograph categories"
                className="no-scrollbar flex flex-nowrap items-center gap-2 overflow-x-auto py-1 sm:gap-2.5"
              >
                {ALBUMS.map((category, idx) => {
                  const isSelected = selectedAlbum === category
                  const count = categoryCounts[category] || 0
                  return (
                    <button
                      key={category}
                      id={`${tablistId}-tab-${category}`}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      tabIndex={isSelected ? 0 : -1}
                      onClick={() => setSelectedAlbum(category)}
                      onKeyDown={(e) => handleTabKeyDown(e, idx)}
                      className={`group relative inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-[13.5px] font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron ${
                        isSelected
                          ? 'border border-gold bg-maroon text-cream shadow-xs'
                          : 'border border-gold-soft/70 bg-cream/70 text-ink hover:border-gold hover:bg-gold-soft/30 hover:text-maroon'
                      }`}
                    >
                      <span>{category}</span>
                      <span
                        className={`inline-flex items-center justify-center rounded-full px-1.5 py-0.2 text-[10.5px] font-mono font-bold transition-colors ${
                          isSelected
                            ? 'bg-saffron text-maroon-dark'
                            : 'bg-gold-soft/40 text-maroon group-hover:bg-gold-soft group-hover:text-maroon-dark'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Status Indicator */}
              <div className="hidden shrink-0 items-center gap-1.5 font-mono text-xs font-semibold text-ink-muted md:flex">
                <Compass size={14} className="text-saffron-deep" aria-hidden="true" />
                <span>
                  Showing {filteredPhotos.length} of {galleryData.length} Plates
                </span>
              </div>
            </div>
          </div>
        </nav>

        {/* ── SECTION THREE: FEATURED PHOTOGRAPHIC COLLECTION (SPOTLIGHT QUARTET) ── */}
        {selectedAlbum === 'All' && (
          <section className="relative border-b border-gold-soft/40 bg-gradient-to-b from-[#FBF5E9] to-[#F5EEDB] py-12 sm:py-16">
            <div className="site-container">
              {/* Section Header */}
              <div className="mb-8 flex flex-col justify-between gap-2 sm:flex-row sm:items-end border-b border-gold-soft/60 pb-4">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-saffron-deep">
                    CURATED DOCUMENTARY PLATES
                  </span>
                  <h2 className="mt-1 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-maroon">
                    Featured Visual Heritage Spotlight
                  </h2>
                </div>
                <p className="font-sans text-xs sm:text-sm text-ink-muted">
                  Four signature moments of devotion, Vedic adhyayanam and guru-shishya parampara.
                </p>
              </div>

              {/* Asymmetric 4-Plate Editorial Grid */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
                {/* 1. Large Hero Centerpiece (Acharyas Chanting / Veda Parayanam) */}
                <div className="lg:col-span-7">
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-md border-2 border-gold/45 bg-ivory p-3 shadow-card transition-all duration-300 hover:border-gold hover:shadow-warm">
                    <button
                      type="button"
                      onClick={() => openLightboxForPhoto(featuredSpotlight.heroPlate)}
                      className="group relative block w-full flex-1 overflow-hidden rounded-sm text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
                      aria-label={`Open featured plate: ${featuredSpotlight.heroPlate.caption}`}
                    >
                      <img
                        src={featuredSpotlight.heroPlate.src}
                        alt={featuredSpotlight.heroPlate.alt}
                        width="1024"
                        height="768"
                        loading="lazy"
                        decoding="async"
                        className="h-full min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/85 via-maroon-dark/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                      
                      {/* Floating Category Tag */}
                      <div className="absolute top-4 left-4">
                        <span className="rounded-full border border-gold-soft/50 bg-maroon-dark/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-soft backdrop-blur-xs">
                          {featuredSpotlight.heroPlate.album} · FEATURED SPOTLIGHT
                        </span>
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-cream">
                        <span className="font-mono text-xs font-semibold tracking-widest text-gold-soft">
                          PLATE № 06 · SACRED VEDA PARAYANAM
                        </span>
                        <h3 className="mt-1 font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-cream">
                          {featuredSpotlight.heroPlate.caption}
                        </h3>
                        <p className="mt-1.5 hidden sm:block max-w-xl font-sans text-xs sm:text-sm text-cream/80 line-clamp-2">
                          {featuredSpotlight.heroPlate.alt}
                        </p>
                        <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-gold-soft group-hover:text-white">
                          <Eye size={14} aria-hidden="true" />
                          <span>View Full Resolution Plate</span>
                        </span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Right Column: 3 Asymmetric Plates */}
                <div className="flex flex-col gap-6 lg:col-span-5">
                  {/* 2. Supporting Plate 1: Wide Proportions (Vidyarthis Group) */}
                  <div className="group relative overflow-hidden rounded-md border border-gold-soft/80 bg-ivory p-3 shadow-xs transition-all duration-300 hover:border-gold hover:shadow-card">
                    <button
                      type="button"
                      onClick={() => openLightboxForPhoto(featuredSpotlight.widePlate)}
                      className="group relative block w-full overflow-hidden rounded-sm text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
                      aria-label={`Open plate: ${featuredSpotlight.widePlate.caption}`}
                    >
                      <img
                        src={featuredSpotlight.widePlate.src}
                        alt={featuredSpotlight.widePlate.alt}
                        width="1024"
                        height="497"
                        loading="lazy"
                        decoding="async"
                        className="aspect-[2.1/1] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/80 via-transparent to-transparent opacity-70 group-hover:opacity-90" />
                      <div className="absolute inset-x-0 bottom-0 p-3.5 text-cream">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-gold-soft">
                          PLATE № 01 · {featuredSpotlight.widePlate.album}
                        </span>
                        <h4 className="font-serif text-base sm:text-lg font-bold text-cream leading-tight">
                          {featuredSpotlight.widePlate.caption}
                        </h4>
                      </div>
                    </button>
                  </div>

                  {/* Bottom Row: 2 Supporting Plates side by side */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* 3. Supporting Plate 2: Square Proportion (Acharya Teaching Session) */}
                    <div className="group relative overflow-hidden rounded-md border border-gold-soft/80 bg-ivory p-2.5 shadow-xs transition-all duration-300 hover:border-gold hover:shadow-card">
                      <button
                        type="button"
                        onClick={() => openLightboxForPhoto(featuredSpotlight.squarePlate)}
                        className="group relative block w-full overflow-hidden rounded-sm text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
                        aria-label={`Open plate: ${featuredSpotlight.squarePlate.caption}`}
                      >
                        <img
                          src={featuredSpotlight.squarePlate.src}
                          alt={featuredSpotlight.squarePlate.alt}
                          width="1023"
                          height="1024"
                          loading="lazy"
                          decoding="async"
                          className="aspect-square w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        />
                        <div className="mt-2.5 px-1 pb-1">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-gold-deep">
                            PLATE № 02 · {featuredSpotlight.squarePlate.album}
                          </span>
                          <h4 className="font-serif text-sm sm:text-[15px] font-bold text-maroon leading-snug line-clamp-1">
                            {featuredSpotlight.squarePlate.caption}
                          </h4>
                        </div>
                      </button>
                    </div>

                    {/* 4. Supporting Plate 3: Archival Temple Visit */}
                    <div className="group relative overflow-hidden rounded-md border border-gold-soft/80 bg-ivory p-2.5 shadow-xs transition-all duration-300 hover:border-gold hover:shadow-card">
                      <button
                        type="button"
                        onClick={() => openLightboxForPhoto(featuredSpotlight.archivalPlate)}
                        className="group relative block w-full overflow-hidden rounded-sm text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
                        aria-label={`Open plate: ${featuredSpotlight.archivalPlate.caption}`}
                      >
                        <img
                          src={featuredSpotlight.archivalPlate.src}
                          alt={featuredSpotlight.archivalPlate.alt}
                          width="1024"
                          height="575"
                          loading="lazy"
                          decoding="async"
                          className="aspect-square w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        />
                        <div className="mt-2.5 px-1 pb-1">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-gold-deep">
                            PLATE № 04 · {featuredSpotlight.archivalPlate.album}
                          </span>
                          <h4 className="font-serif text-sm sm:text-[15px] font-bold text-maroon leading-snug line-clamp-1">
                            {featuredSpotlight.archivalPlate.caption}
                          </h4>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── SECTION FOUR: MAIN PHOTO COLLECTION (THE VISUAL HERITAGE JOURNAL ARCHIVE) ── */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="site-container">
            {/* Archive Section Header */}
            <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end border-b border-gold-soft/60 pb-4">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-saffron-deep">
                  {selectedAlbum === 'All' ? 'COMPLETE CHRONICLES ARCHIVE' : `${selectedAlbum.toUpperCase()} ARCHIVE`}
                </span>
                <h2 className="mt-1 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-maroon">
                  {selectedAlbum === 'All'
                    ? 'The Photographic Documentary'
                    : `Photographs of ${selectedAlbum}`}
                </h2>
              </div>
              <p className="font-sans text-xs sm:text-sm text-ink-muted">
                Showing {filteredPhotos.length} {filteredPhotos.length === 1 ? 'archival photograph' : 'archival photographs'}
              </p>
            </div>

            {/* Asymmetric Multi-Column Editorial Masonry Grid */}
            <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4 space-y-6">
              {filteredPhotos.map((photo, index) => {
                const plateNumber = String(index + 1).padStart(2, '0')

                return (
                  <article
                    key={photo.id}
                    className="break-inside-avoid group relative block overflow-hidden rounded-md border border-gold-soft/70 bg-ivory p-3 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-card"
                  >
                    {/* Photograph Container */}
                    <button
                      type="button"
                      onClick={() => openLightboxForPhoto(photo)}
                      className="group relative block w-full overflow-hidden rounded-sm text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
                      aria-label={`Enlarge photograph plate ${plateNumber}: ${photo.caption}`}
                    >
                      <div className="relative overflow-hidden bg-cream/40">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          width="1024"
                          height="768"
                          loading="lazy"
                          decoding="async"
                          className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        />

                        {/* Subtle Vignette & View Icon on Hover */}
                        <div className="absolute inset-0 flex items-center justify-center bg-maroon-dark/35 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                          <span className="flex items-center gap-1.5 rounded-full border border-gold-soft/50 bg-maroon-dark/85 px-3 py-1.5 text-xs font-bold text-gold-soft shadow-md backdrop-blur-xs">
                            <Expand size={13} aria-hidden="true" />
                            <span>Enlarge</span>
                          </span>
                        </div>
                      </div>

                      {/* Editorial Card Footer / Metadata */}
                      <div className="mt-3.5 border-t border-gold-soft/50 pt-2.5">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-gold-deep">
                            PLATE № {plateNumber}
                          </span>
                          <span className="rounded-full border border-gold-soft/80 bg-gold-soft/30 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-maroon">
                            {photo.album}
                          </span>
                        </div>

                        {/* Caption in Cormorant Garamond */}
                        <h3 className="mt-1.5 font-serif text-[17px] sm:text-[18px] font-bold leading-snug text-maroon transition-colors duration-200 group-hover:text-saffron-deep">
                          {photo.caption}
                        </h3>

                        {/* Verified Context / Alt Description */}
                        {photo.alt && (
                          <p className="mt-1 font-sans text-[12px] leading-relaxed text-ink-muted line-clamp-2">
                            {photo.alt}
                          </p>
                        )}
                      </div>
                    </button>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      </div>

      {/* ── SECTION FIVE: PREMIUM HERITAGE LIGHTBOX ── */}
      <HeritageLightbox
        isOpen={lightboxIndex >= 0}
        photos={filteredPhotos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(-1)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </>
  )
}
