import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import gallery from '../data/gallery.json'

export const ALBUMS = ['All', 'Festivals', 'Classes', 'Poojas', 'Campus']

export default function GalleryGrid({ initialAlbum = 'All', limit }) {
  const [album, setAlbum] = useState(initialAlbum)
  const [index, setIndex] = useState(-1)
  const filtered = album === 'All' ? gallery : gallery.filter((g) => g.album === album)
  const shown = limit ? filtered.slice(0, limit) : filtered
  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery by album">
        {ALBUMS.map((a) => (
          <button key={a} type="button" onClick={() => setAlbum(a)} aria-pressed={album === a} className={`min-h-[44px] rounded-full px-5 py-2 text-sm font-semibold transition ${album === a ? 'bg-maroon text-cream' : 'border border-gold bg-ivory text-maroon hover:bg-gold-soft/40'}`}>
            {a}
          </button>
        ))}
      </div>
      <div className="mt-8 columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
        {shown.map((item) => {
          const realIndex = filtered.indexOf(item)
          return (
            <button key={item.id} type="button" onClick={() => setIndex(realIndex)} className="group relative block w-full overflow-hidden rounded-card text-left" aria-label={`Open ${item.caption}`}>
              <img src={item.src} alt={item.alt} width="1200" height="800" loading="lazy" className="w-full object-cover transition duration-300 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-maroon-dark/85 to-transparent px-5 pb-4 pt-10 text-base font-semibold text-cream opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">{item.caption}</span>
            </button>
          )
        })}
      </div>
      <Lightbox open={index >= 0} close={() => setIndex(-1)} index={index} slides={filtered.map((g) => ({ src: g.src, alt: g.alt, title: g.caption }))} />
    </div>
  )
}
