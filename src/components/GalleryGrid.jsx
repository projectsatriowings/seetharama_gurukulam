import { Expand } from 'lucide-react'
import { useState } from 'react'
import gallery from '../data/gallery.json'
import HeritageLightbox from './HeritageLightbox.jsx'

export const ALBUMS = ['All', 'Festivals', 'Classes', 'Poojas', 'Campus']

export default function GalleryGrid({ initialAlbum = 'All', limit }) {
  const [album, setAlbum] = useState(initialAlbum)
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const filtered = album === 'All' ? gallery : gallery.filter((g) => g.album === album)
  const shown = limit ? filtered.slice(0, limit) : filtered

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery by category">
        {ALBUMS.map((a) => {
          const isSelected = album === a
          return (
            <button
              key={a}
              type="button"
              onClick={() => setAlbum(a)}
              aria-pressed={isSelected}
              className={`min-h-[42px] rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron ${
                isSelected
                  ? 'border border-gold bg-maroon text-cream shadow-xs'
                  : 'border border-gold-soft/80 bg-ivory text-maroon hover:border-gold hover:bg-gold-soft/40'
              }`}
            >
              {a}
            </button>
          )
        })}
      </div>

      {/* Grid */}
      <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3 space-y-5">
        {shown.map((item) => {
          const realIndex = filtered.indexOf(item)
          return (
            <article
              key={item.id}
              className="break-inside-avoid group relative block overflow-hidden rounded-md border border-gold-soft/70 bg-ivory p-3 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-card"
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(realIndex)}
                className="group relative block w-full overflow-hidden rounded-sm text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
                aria-label={`Open photograph: ${item.caption}`}
              >
                <div className="relative overflow-hidden bg-cream/40">
                  <img
                    src={item.src}
                    alt={item.alt}
                    width="1024"
                    height="768"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-maroon-dark/35 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="flex items-center gap-1.5 rounded-full border border-gold-soft/50 bg-maroon-dark/85 px-3 py-1.5 text-xs font-bold text-gold-soft shadow-md backdrop-blur-xs">
                      <Expand size={13} aria-hidden="true" />
                      <span>Enlarge</span>
                    </span>
                  </div>
                </div>

                <div className="mt-3 border-t border-gold-soft/50 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-gold-deep">
                      {item.album}
                    </span>
                  </div>
                  <h3 className="mt-1 font-serif text-[16px] sm:text-[17px] font-bold leading-snug text-maroon transition-colors duration-200 group-hover:text-saffron-deep">
                    {item.caption}
                  </h3>
                </div>
              </button>
            </article>
          )
        })}
      </div>

      {/* Lightbox */}
      <HeritageLightbox
        isOpen={lightboxIndex >= 0}
        photos={filtered}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(-1)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </div>
  )
}
