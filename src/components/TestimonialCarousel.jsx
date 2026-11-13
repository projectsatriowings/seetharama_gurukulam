import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useState } from 'react'
import testimonials from '../data/testimonials.json'

export default function TestimonialCarousel() {
  const [i, setI] = useState(0)
  const t = testimonials[i]
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Quote size={36} className="mx-auto text-gold" aria-hidden="true" />
      <blockquote className="mt-5 min-h-[150px]">
        <p className="font-serif text-2xl italic leading-relaxed text-maroon sm:text-3xl">“{t.quote}”</p>
        <footer className="mt-5 text-sm font-semibold uppercase tracking-widest text-ink-soft">{t.name} · {t.role}</footer>
      </blockquote>
      <p className="mt-3 text-xs text-ink-soft">Testimonials shown here are placeholders. Real quotes will replace them before launch.</p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <button type="button" aria-label="Previous testimonial" onClick={() => setI((i - 1 + testimonials.length) % testimonials.length)} className="flex h-11 w-11 items-center justify-center rounded-full border border-gold text-maroon hover:bg-gold-soft/40"><ChevronLeft size={20} /></button>
        <div className="flex gap-2" role="tablist" aria-label="Choose testimonial">
          {testimonials.map((_, idx) => (
            <button key={idx} type="button" aria-label={`Testimonial ${idx + 1}`} onClick={() => setI(idx)} className={`h-3 rounded-full transition ${idx === i ? 'w-8 bg-saffron' : 'w-3 bg-gold-soft'}`} />
          ))}
        </div>
        <button type="button" aria-label="Next testimonial" onClick={() => setI((i + 1) % testimonials.length)} className="flex h-11 w-11 items-center justify-center rounded-full border border-gold text-maroon hover:bg-gold-soft/40"><ChevronRight size={20} /></button>
      </div>
    </div>
  )
}
