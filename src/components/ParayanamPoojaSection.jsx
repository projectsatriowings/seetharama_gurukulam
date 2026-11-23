import { ArrowRight, Flame, MapPin, MessageCircle, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { site, whatsappMessages } from '../data/site.js'
import { whatsappLink } from '../utils/whatsapp.js'
import Reveal from './Reveal.jsx'

/**
 * PHASE 2.2 — SECTION 03: PARAYANAM & POOJA
 * Purpose: Introduce the spiritual services offered by the Trust.
 * Verified content: Services verified in the client brochure (Veda Parayanam, Sri Rudram, Ganapathi Homam, Ayush Homam, Navagraha Homam, Griha Pravesham).
 * Design: Distinctive spiritual editorial composition, restrained maroon, cream and antique gold palette, authentic approved photographs, concise introduction, clear service enquiry CTA.
 * CTA: Explore Parayanam & Pooja -> /parayanam-pooja
 */
export default function ParayanamPoojaSection() {
  const whatsappUrl = whatsappLink(
    site.whatsappNumber,
    whatsappMessages['/parayanam-pooja'] || 'Namaste, I would like to enquire about parayanam / pooja services.'
  )

  const curatedServices = [
    {
      name: 'Veda Parayanam',
      sanskrit: 'वेद पारायणम्',
      desc: 'Traditional chanting of Krishna Yajur Veda with strict adherence to swara and pronunciation.',
    },
    {
      name: 'Sri Rudra Parayanam',
      sanskrit: 'श्री रुद्र पारायणम्',
      desc: 'Reverent recitation of Namakam & Chamakam invoking health, peace, and inner serenity.',
    },
    {
      name: 'Vedic Homams',
      sanskrit: 'गणपति · आयुष्य · नवग्रह होमः',
      desc: 'Ganapathi, Ayush, and Navagraha homams performed for auspicious beginnings and milestones.',
    },
    {
      name: 'Griha Pravesham & Poojas',
      sanskrit: 'गृहप्रवेश एवं वास्तु पूजा',
      desc: 'Sacred housewarming rituals and traditional shastra-guided family poojas.',
    },
  ]

  return (
    <section
      id="parayanam-pooja-section"
      aria-labelledby="parayanam-pooja-heading"
      className="relative overflow-hidden bg-maroon-dark text-cream py-16 sm:py-20 lg:py-24 border-b border-gold/30"
    >
      {/* Traditional Kolam pattern overlay with low opacity */}
      <div className="pattern-kolam absolute inset-0 opacity-[0.08]" aria-hidden="true" />

      {/* Atmospheric warm golden glow */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-saffron/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="site-container relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Narrative & Curated Services (7 cols on desktop) */}
          <div className="lg:col-span-7">
            <Reveal>
              {/* Eyebrow badge with golden flame */}
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-maroon/60 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-saffron-soft shadow-xs backdrop-blur-xs">
                <Flame className="h-3 w-3 text-saffron" aria-hidden="true" />
                <span>Spiritual Services & Sacred Sevas</span>
              </div>

              {/* Sanskrit Kicker */}
              <p className="mt-3 font-serif text-sm tracking-wide text-gold-soft/80 sm:text-base">
                ॥ धर्म एव हतो हन्ति धर्मो रक्षति रक्षितः ॥
              </p>

              {/* Serif Heading */}
              <h2
                id="parayanam-pooja-heading"
                className="mt-2 font-serif text-3xl font-bold tracking-tight text-cream sm:text-4xl lg:text-[42px] leading-[1.18]"
              >
                Vedic Parayanam & <br className="hidden sm:inline" />
                <span className="italic font-normal text-saffron">Sacred Pooja Services</span>
              </h2>

              {/* Concise Supporting Editorial Narrative */}
              <p className="mt-4 text-[16px] leading-relaxed text-cream/85 sm:text-[17px]">
                Under the blessings of His Holiness Sri Paramacharyal, our learned Acharyas and senior vidyaarthis conduct traditional Vedic parayanams and sacred homams. Whether for housewarming, birthday milestones, or spiritual peace, services can be performed at the Gurukulam prayer hall or at your residence.
              </p>

              {/* Curated Spiritual Services (2x2 grid) */}
              <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {curatedServices.map((service, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-gold/25 bg-maroon/40 p-4 backdrop-blur-xs transition hover:border-gold/50"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-base font-bold text-cream">
                        {service.name}
                      </h3>
                      <span className="text-[11px] font-serif text-gold-soft/90">
                        {service.sanskrit}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-cream/75 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Venue availability note */}
              <p className="mt-5 flex items-center gap-1.5 text-xs text-gold-soft/90">
                <MapPin className="h-3.5 w-3.5 text-saffron shrink-0" aria-hidden="true" />
                <span>Conducted at the Gurukulam in Alwarpet or at Devotees' Residences.</span>
              </p>

              {/* Clear CTA Pathways */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/parayanam-pooja"
                  className="group inline-flex items-center gap-2 rounded-lg bg-saffron px-6 py-3 font-sans text-sm font-bold text-maroon-dark shadow-sm transition hover:bg-[#f0a64a] focus:outline-none focus:ring-2 focus:ring-cream"
                >
                  <span>Explore Parayanam & Pooja</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-gold/40 bg-maroon/60 px-4 py-3 font-sans text-sm font-semibold text-cream hover:bg-maroon hover:border-gold transition focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <MessageCircle className="h-4 w-4 text-whatsapp" aria-hidden="true" />
                  <span>Quick WhatsApp Enquiry</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Authentic Recitation Photograph (5 cols on desktop) */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Antique gold ornamental frame border */}
                <div
                  className="absolute -inset-2.5 rounded-2xl border border-gold/30 bg-maroon/30 hidden sm:block rotate-1"
                  aria-hidden="true"
                />

                <div className="relative overflow-hidden rounded-xl border border-gold/40 bg-maroon/80 shadow-warm">
                  <div className="relative aspect-[4/3] sm:aspect-[5/4] w-full overflow-hidden bg-maroon">
                    <img
                      src="/photos/acharya-parayanam-recitation.jpg"
                      alt="Acharya Sri Srikrishna Ganapatigal leading a sacred Veda Parayanam recitation"
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-103"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-maroon-dark/80 via-transparent to-transparent"
                      aria-hidden="true"
                    />

                    {/* Badge */}
                    <div className="absolute top-3 right-3 rounded-full bg-maroon-dark/90 px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-gold-soft border border-gold/40 shadow-xs backdrop-blur-xs">
                      Veda Parayanam
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-cream">
                      <p className="font-serif text-sm font-semibold sm:text-base text-cream">
                        Acharya Leading Sacred Recitation
                      </p>
                      <p className="text-[11px] text-cream/80">
                        Chanting Vedic stotras and mantras with traditional swara
                      </p>
                    </div>
                  </div>

                  {/* Caption strip */}
                  <div className="flex items-center justify-between border-t border-gold/25 bg-maroon px-4 py-2.5 text-xs text-cream/70">
                    <span className="flex items-center gap-1.5 font-medium text-gold-soft">
                      <Sparkles className="h-3.5 w-3.5 text-saffron" aria-hidden="true" />
                      Authentic Vaithika Vidhana
                    </span>
                    <span className="text-[11px] text-cream/60">Alwarpet, Chennai</span>
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
