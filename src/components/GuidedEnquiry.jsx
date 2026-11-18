import { ArrowRight, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { site, whatsappMessages } from '../data/site.js'
import { whatsappLink } from '../utils/whatsapp.js'
import Reveal from './Reveal.jsx'

const enquiryPathways = [
  {
    number: '01',
    title: 'Vedic Education',
    subtitle: 'Admissions & Student Enrolment',
    description:
      'For parents and families interested in learning about Vedic education, admission eligibility and the Gurukulam.',
    ctaLabel: 'Explore Admissions',
    to: '/admission',
    emphasis: 'primary',
  },
  {
    number: '02',
    title: 'Parayanam & Pooja',
    subtitle: 'Vedic Recitation & Sacred Services',
    description:
      'For devotees interested in arranging Vedic recitation and Pooja services.',
    ctaLabel: 'Enquire About Services',
    to: '/parayanam-pooja',
    emphasis: 'accent',
  },
  {
    number: '03',
    title: 'General Enquiries & Seva',
    subtitle: 'Visits, Correspondence & Trust Activities',
    description:
      'For visitors, devotees and well-wishers interested in connecting with the Trust or supporting its activities.',
    ctaLabel: 'Contact the Trust',
    to: '/contact',
    emphasis: 'quiet',
  },
]

/**
 * Phase 3 — Section 3: Begin with an Enquiry
 * Concept: A Guided Enquiry Experience — Asymmetrical Editorial Concierge
 */
export default function GuidedEnquiry() {
  return (
    <section
      id="begin-enquiry"
      aria-labelledby="begin-enquiry-heading"
      className="relative scroll-mt-20 overflow-hidden bg-[#F5EFE4] py-16 sm:py-20 lg:scroll-mt-24 lg:py-24"
    >
      {/* Subtle ambient warmth */}
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="site-container relative">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
          {/* LEFT COLUMN: Editorial Introduction, Institutional Setting & Verified Contact Details */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gold" aria-hidden="true" />
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-saffron-deep sm:text-xs">
                  Connect With Us
                </p>
              </div>

              <h2
                id="begin-enquiry-heading"
                className="mt-3 font-serif text-[32px] font-bold leading-[1.08] tracking-tight text-maroon sm:text-[40px] lg:text-[44px]"
              >
                Begin Your Connection with the Gurukulam
              </h2>

              <p className="mt-4 font-sans text-[15.5px] leading-relaxed text-ink-soft sm:text-[16.5px]">
                Whether you are exploring traditional Vedic education, seeking Parayanam and Pooja
                services, or wishing to support our activities, we welcome your enquiry.
              </p>

              {/* Authentic Institutional & Temple Architectural Photograph */}
              <figure className="mt-7 border border-gold/50 bg-ivory p-2.5 shadow-card">
                <div className="aspect-[16/10] w-full overflow-hidden bg-maroon-surface">
                  <img
                    src="/photos/vidyarthis-temple-visit.jpg"
                    alt="Vidyarthis of Seetha Rama Gurukulam seated on traditional carved stone temple steps"
                    width="1024"
                    height="575"
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="mt-2.5 flex items-center justify-between gap-3 px-1 pb-0.5">
                  <span className="font-serif text-[14px] italic text-maroon">
                    Seetha Rama Gurukulam Vidyarthis in a traditional temple setting
                  </span>
                </figcaption>
              </figure>

              {/* Verified Official Contact Details (Phone, WhatsApp, Address from site.js) */}
              <div className="mt-7 border-t border-gold/45 pt-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-maroon">
                  Trust Office &amp; Direct Correspondence
                </p>

                <address className="mt-3.5 space-y-3 not-italic text-[14.5px] leading-relaxed text-ink-soft">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={17}
                      className="mt-1 shrink-0 text-saffron-deep"
                      aria-hidden="true"
                    />
                    <span>{site.addressLines.join(', ')}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1">
                    <a
                      href={`tel:${site.phoneTel}`}
                      className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-maroon transition-colors hover:text-saffron-deep"
                    >
                      <Phone size={16} className="shrink-0 text-saffron-deep" aria-hidden="true" />
                      <span>{site.phoneDisplay}</span>
                    </a>

                    <a
                      href={whatsappLink(whatsappMessages['/contact'])}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-maroon transition-colors hover:text-saffron-deep"
                    >
                      <MessageCircle
                        size={16}
                        className="shrink-0 text-saffron-deep"
                        aria-hidden="true"
                      />
                      <span>WhatsApp Enquiry</span>
                    </a>
                  </div>
                </address>
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN: Three Visually Distinct Editorial Enquiry Pathways */}
          <div className="lg:col-span-7">
            <div className="space-y-5 sm:space-y-6">
              {enquiryPathways.map((pathway, index) => {
                if (pathway.emphasis === 'primary') {
                  /* Pathway 01 — Deep Maroon Featured Editorial Panel */
                  return (
                    <Reveal key={pathway.number} delay={index * 0.08}>
                      <article className="group relative overflow-hidden border border-gold/55 bg-maroon-dark p-6 text-cream shadow-elevated transition-transform duration-200 hover:-translate-y-0.5 sm:p-8">
                        <div
                          className="pattern-kolam pointer-events-none absolute inset-0 opacity-[0.1]"
                          aria-hidden="true"
                        />
                        <div
                          className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-saffron via-gold to-saffron/60"
                          aria-hidden="true"
                        />

                        <div className="relative">
                          <div className="flex items-center gap-3">
                            <span
                              className="font-serif text-[28px] font-semibold leading-none text-gold-soft sm:text-[34px]"
                              aria-hidden="true"
                            >
                              {pathway.number}
                            </span>
                            <span className="h-px w-6 bg-gold/60" aria-hidden="true" />
                            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-soft">
                              {pathway.subtitle}
                            </span>
                          </div>

                          <h3 className="mt-3 font-serif text-[26px] font-bold uppercase tracking-[0.04em] text-cream sm:text-[30px]">
                            <span className="sr-only">Pathway {pathway.number}: </span>
                            {pathway.title}
                          </h3>

                          <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                            <p className="max-w-md font-sans text-[15px] leading-relaxed text-cream/85 sm:text-[15.5px]">
                              {pathway.description}
                            </p>

                            <div className="shrink-0">
                              <Link
                                to={pathway.to}
                                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full bg-saffron px-6 py-3 text-[15px] font-bold text-maroon-dark shadow-sm transition-all duration-200 hover:-translate-y-px hover:bg-[#f0a64a] sm:w-auto"
                              >
                                <span>{pathway.ctaLabel}</span>
                                <ArrowRight
                                  size={16}
                                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                                  aria-hidden="true"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </article>
                    </Reveal>
                  )
                }

                if (pathway.emphasis === 'accent') {
                  /* Pathway 02 — Crisp Ivory Architectural Panel with Left Saffron Rule */
                  return (
                    <Reveal key={pathway.number} delay={index * 0.08}>
                      <article className="group relative border-y border-r border-l-4 border-y-gold/45 border-r-gold/45 border-l-saffron bg-ivory p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-y-gold hover:border-r-gold sm:p-8">
                        <div className="flex items-center gap-3">
                          <span
                            className="font-serif text-[28px] font-semibold leading-none text-saffron-deep sm:text-[34px]"
                            aria-hidden="true"
                          >
                            {pathway.number}
                          </span>
                          <span className="h-px w-6 bg-gold/70" aria-hidden="true" />
                          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-saffron-deep">
                            {pathway.subtitle}
                          </span>
                        </div>

                        <h3 className="mt-3 font-serif text-[24px] font-bold uppercase tracking-[0.04em] text-maroon sm:text-[28px]">
                          <span className="sr-only">Pathway {pathway.number}: </span>
                          {pathway.title}
                        </h3>

                        <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                          <p className="max-w-md font-sans text-[15px] leading-relaxed text-ink-soft sm:text-[15.5px]">
                            {pathway.description}
                          </p>

                          <div className="shrink-0">
                            <Link
                              to={pathway.to}
                              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full bg-maroon px-6 py-3 text-[15px] font-semibold text-cream shadow-xs transition-all duration-200 hover:-translate-y-px hover:bg-maroon-dark sm:w-auto"
                            >
                              <span>{pathway.ctaLabel}</span>
                              <ArrowRight
                                size={16}
                                className="transition-transform duration-200 group-hover:translate-x-0.5"
                                aria-hidden="true"
                              />
                            </Link>
                          </div>
                        </div>
                      </article>
                    </Reveal>
                  )
                }

                /* Pathway 03 — Warm Cream Open-Frame Correspondence Band */
                return (
                  <Reveal key={pathway.number} delay={index * 0.08}>
                    <article className="group relative border border-gold/55 border-t-2 border-t-maroon/75 bg-cream p-6 transition-all duration-200 hover:border-gold hover:bg-ivory sm:p-8">
                      <div className="flex items-center gap-3">
                        <span
                          className="font-serif text-[28px] font-semibold leading-none text-maroon/80 sm:text-[34px]"
                          aria-hidden="true"
                        >
                          {pathway.number}
                        </span>
                        <span className="h-px w-6 bg-gold/70" aria-hidden="true" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-ink-muted">
                          {pathway.subtitle}
                        </span>
                      </div>

                      <h3 className="mt-3 font-serif text-[24px] font-bold uppercase tracking-[0.04em] text-maroon sm:text-[28px]">
                        <span className="sr-only">Pathway {pathway.number}: </span>
                        {pathway.title}
                      </h3>

                      <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                        <p className="max-w-md font-sans text-[15px] leading-relaxed text-ink-soft sm:text-[15.5px]">
                          {pathway.description}
                        </p>

                        <div className="shrink-0">
                          <Link
                            to={pathway.to}
                            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full border-2 border-gold bg-transparent px-6 py-3 text-[15px] font-semibold text-maroon transition-all duration-200 hover:-translate-y-px hover:border-maroon hover:bg-maroon hover:text-cream sm:w-auto"
                          >
                            <span>{pathway.ctaLabel}</span>
                            <ArrowRight
                              size={16}
                              className="transition-transform duration-200 group-hover:translate-x-0.5"
                              aria-hidden="true"
                            />
                          </Link>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
