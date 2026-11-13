import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const heritageChips = [
  'Krishna Yajur Veda',
  'Guru-Shishya Parampara',
  'Sanskrit & Shastras',
  'Free Boarding & Education',
]

export default function Hero({
  title = 'Preserving the Timeless Wisdom of the Vedas',
  subtitle = 'A sacred institution founded under the divine command and blessings of His Holiness Sri Paramacharyal of Kanchi — imparting authentic Krishna Yajur Veda adhyayanam, Sanskrit, and Shastras with discipline, devotion, and care.',
  primary = { label: 'Explore the Gurukulam', to: '/gurukulam' },
  secondary = { label: 'Admission Enquiry', to: '/admission' },
}) {
  const reduce = useReducedMotion()

  const anim = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
        }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-[#FBF5E9] to-[#F7EFE1] pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
      {/* Subtle Vedic Kolam background texture */}
      <div className="pattern-kolam absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />

      {/* Decorative antique gold manuscript corner lines */}
      <div
        className="pointer-events-none absolute left-6 top-24 hidden h-16 w-16 border-l border-t border-gold/40 lg:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-6 top-24 hidden h-16 w-16 border-r border-t border-gold/40 lg:block"
        aria-hidden="true"
      />

      <div className="site-container relative">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Left / Editorial Content Area */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Institutional Kicker Eyebrow */}
            <motion.div {...anim(0)}>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft bg-ivory/90 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-saffron-deep shadow-xs sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-saffron" aria-hidden="true" />
                <span>Sri Seetharama Gurukulam Trust · Veda Patasala</span>
              </div>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1
              {...anim(0.1)}
              className="mt-4 font-serif text-[32px] font-semibold leading-[1.08] tracking-tight text-maroon sm:text-[44px] md:text-[50px] lg:text-[56px] xl:text-[62px]"
            >
              {title}
            </motion.h1>

            {/* Supporting Editorial Description */}
            <motion.p
              {...anim(0.2)}
              className="mt-4 max-w-xl font-sans text-base leading-relaxed text-ink-soft sm:text-[17.5px]"
            >
              {subtitle}
            </motion.p>

            {/* Call To Action Buttons */}
            <motion.div
              {...anim(0.3)}
              className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4"
            >
              <Link
                to={primary.to}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-maroon px-6 py-3 text-[15px] font-semibold text-cream shadow-sm transition-all duration-200 hover:-translate-y-px hover:bg-maroon-dark active:translate-y-0 sm:px-7"
              >
                <span>{primary.label}</span>
                <ArrowRight size={17} aria-hidden="true" />
              </Link>

              {secondary ? (
                <Link
                  to={secondary.to}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border-2 border-gold bg-ivory px-5 py-3 text-[15px] font-semibold text-maroon shadow-xs transition-all duration-200 hover:-translate-y-px hover:bg-gold-soft/30 active:translate-y-0 sm:px-6"
                >
                  <span>{secondary.label}</span>
                </Link>
              ) : null}
            </motion.div>

            {/* Sacred Heritage Pillar Chips */}
            <motion.div
              {...anim(0.4)}
              className="mt-8 flex flex-wrap items-center gap-2 border-t border-gold-soft/60 pt-6 sm:mt-10 sm:gap-2.5"
              aria-label="Gurukulam Tradition Pillars"
            >
              {heritageChips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gold-soft/80 bg-ivory/80 px-3 py-1 text-[11.5px] font-medium text-ink shadow-xs sm:text-xs"
                >
                  <span className="text-saffron-deep" aria-hidden="true">✦</span>
                  <span>{chip}</span>
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right / Visual Composition: Circular Image Portal */}
          <div className="lg:col-span-5 xl:col-span-5">
            <motion.div
              {...anim(0.25)}
              className="relative mx-auto flex w-full max-w-[300px] items-center justify-center sm:max-w-[380px] lg:max-w-[440px] xl:max-w-[480px]"
            >
              {/* Outer delicate concentric dashed halo */}
              <div
                className="pointer-events-none absolute -inset-3 sm:-inset-5 rounded-full border border-dashed border-gold/50"
                aria-hidden="true"
              />

              {/* Middle fine concentric ring */}
              <div
                className="pointer-events-none absolute -inset-1.5 sm:-inset-2.5 rounded-full border border-gold/30"
                aria-hidden="true"
              />

              {/* Prominent Circular Photographic Portal */}
              <div className="relative aspect-square w-full overflow-hidden rounded-full border-4 border-gold bg-cream shadow-elevated">
                <img
                  src="/hero/slide-2.jpg"
                  alt="Vedic students and Acharya engaged in traditional Veda adhyayanam at Sri Seetharama Gurukulam Veda Patasala"
                  width="640"
                  height="640"
                  loading="eager"
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
                />

                {/* Subtle internal sacred vignette ring */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_24px_rgba(74,18,18,0.22)]"
                  aria-hidden="true"
                />
              </div>

              {/* Anchored Traditional Manuscript Seal */}
              <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-gold bg-ivory px-4 py-1.5 shadow-card">
                <div className="flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.18em] text-maroon sm:text-xs">
                  <span
                    className="flex h-5 w-5 items-center justify-center rounded-full bg-saffron-soft text-[11px] font-serif font-bold text-saffron-deep"
                    aria-hidden="true"
                  >
                    ॐ
                  </span>
                  <span>Guru-Shishya Adhyayanam</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
