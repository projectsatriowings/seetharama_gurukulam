import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Button from './Button.jsx'

const slides = [
  { src: '/hero/slide-1.jpg', alt: 'Students, teachers and families together at Seetharama Gurukulam', position: 'object-center', zoom: true },
  // Slide 2 is a 4:3 photo whose standing figure's head sits near the top edge:
  // it is padded to the hero's 16:10 frame, top-aligned, and never zoomed, so the head is never cropped.
  { src: '/hero/slide-2.jpg', alt: 'A teacher with students studying together at the gurukulam', position: 'object-top', zoom: false },
  { src: '/hero/slide-3.jpg', alt: 'The gurukulam community gathered together in a hall', position: 'object-center', zoom: true },
]

export default function Hero({ title, subtitle, primary, secondary }) {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduce) return undefined
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000)
    return () => clearInterval(id)
  }, [reduce])

  const anim = (delay) => reduce ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay } }
  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-maroon-dark">
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={i === index ? slide.alt : ''}
          aria-hidden={i !== index}
          width="1536"
          height="1024"
          loading={i === 0 ? 'eager' : 'lazy'}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${slide.position} ${i === index ? 'opacity-100' : 'opacity-0'} ${i === index && slide.zoom && !reduce ? 'kenburns' : ''}`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-maroon-dark/95 via-maroon-dark/75 to-maroon-dark/45" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-maroon-dark/80 to-transparent" aria-hidden="true" />
      <div className="site-container relative pb-20 pt-36">
        <motion.p {...anim(0)} className="text-xs font-bold uppercase tracking-[0.25em] text-gold-soft">Seetharama Gurukulam Trust</motion.p>
        <motion.h1 {...anim(0.12)} className="mt-4 max-w-3xl font-serif text-[38px] font-semibold leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-[76px]">{title}</motion.h1>
        <motion.p {...anim(0.24)} className="mt-5 max-w-xl text-lg leading-relaxed text-cream/90">{subtitle}</motion.p>
        <motion.div {...anim(0.36)} className="mt-8 flex flex-wrap gap-3">
          <Button to={primary.to} className="bg-saffron text-maroon-dark hover:bg-[#f0a64a]">{primary.label}</Button>
          {secondary ? <Button to={secondary.to} variant="light">{secondary.label}</Button> : null}
        </motion.div>
        <motion.div {...anim(0.48)} className="mt-8 flex flex-wrap gap-2" aria-label="Subjects taught">
          {['Veda Adhyayanam', 'Sanskrit', 'Shastras', 'Seva & Discipline'].map((chip) => (
            <span key={chip} className="rounded-full border border-gold/60 bg-maroon-dark/40 px-4 py-1.5 text-sm font-semibold text-cream/90 backdrop-blur-sm">{chip}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
