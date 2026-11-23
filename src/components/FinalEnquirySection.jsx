import { ArrowRight, GraduationCap, Mail, MapPin, MessageCircle, Phone, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { site, whatsappMessages } from '../data/site.js'
import { whatsappLink } from '../utils/whatsapp.js'
import Reveal from './Reveal.jsx'

/**
 * PHASE 2.2 — SECTION 05: FINAL ENQUIRY CTA
 * Purpose: Create a visually strong closing section addressing two visitor groups:
 * 1. Parents interested in Vedic education -> CTA: Admission Enquiry (/admission)
 * 2. Devotees interested in spiritual services -> CTA: Contact the Gurukulam (/contact)
 * Verified details: site.phoneDisplay, site.email, site.fullAddress.
 */
export default function FinalEnquirySection() {
  const whatsappDevoteeUrl = whatsappLink(
    site.whatsappNumber,
    whatsappMessages['/contact'] || 'Namaste, I would like to get in touch with Seetharama Gurukulam Trust.'
  )

  return (
    <section
      id="final-enquiry-cta"
      aria-labelledby="final-enquiry-heading"
      className="relative overflow-hidden bg-[#2D0A0A] py-16 text-cream sm:py-20 lg:py-24"
    >
      {/* Traditional Kolam pattern background */}
      <div className="pattern-kolam absolute inset-0 opacity-[0.12]" aria-hidden="true" />

      {/* Radiant ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-saffron/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="site-container relative">
        <Reveal>
          {/* Section Introduction */}
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-maroon/60 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-saffron shadow-xs backdrop-blur-xs">
              <Sparkles className="h-3 w-3 text-saffron" aria-hidden="true" />
              <span>Begin Your Connection</span>
            </div>

            <h2
              id="final-enquiry-heading"
              className="mt-4 font-serif text-3xl font-bold tracking-tight text-cream sm:text-4xl lg:text-[44px] leading-tight"
            >
              Come, Listen, and Be Part of <br className="hidden sm:inline" />
              <span className="italic font-normal text-saffron">This Sacred Tradition</span>
            </h2>

            <p className="mt-4 text-base text-cream/85 sm:text-lg">
              We warmly welcome parents seeking traditional Vedic adhyayanam for their sons, and devotees wishing to support our sacred educational mission.
            </p>
          </div>
        </Reveal>

        {/* Dual Visitor Pathways */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 max-w-4xl mx-auto">
          {/* Visitor Group 1: Parents interested in Vedic education */}
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-gold/30 bg-maroon-dark/80 p-6 sm:p-8 backdrop-blur-xs transition hover:border-gold/60 shadow-warm">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-saffron/20 text-saffron border border-saffron/30">
                    <GraduationCap className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-soft">
                      For Parents & Families
                    </span>
                    <h3 className="font-serif text-xl font-bold text-cream sm:text-2xl">
                      Vedic Education & Admission
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-cream/80 sm:text-[15px]">
                  Enrol your son in traditional Krishna Yajur Veda adhyayanam. Candidates are screened and selected after Upanayanam. All facilities—free Vedic education throughout the course, boarding, lodging, clothing, medical care, and travel expenses to hometown—are provided.
                </p>

                <div className="mt-4 inline-flex items-center gap-2 text-xs text-gold-soft/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-saffron" aria-hidden="true" />
                  <span>Krishna Yajur Veda · 10–12 Years Course · Free of Cost</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gold/20">
                <Link
                  to="/admission"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-saffron px-5 py-3 font-sans text-sm font-bold text-maroon-dark shadow-sm transition hover:bg-[#f0a64a] focus:outline-none focus:ring-2 focus:ring-cream"
                >
                  <span>Admission Enquiry</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Visitor Group 2: Devotees & Well-Wishers */}
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-gold/30 bg-maroon-dark/80 p-6 sm:p-8 backdrop-blur-xs transition hover:border-gold/60 shadow-warm">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/20 text-gold-soft border border-gold/30">
                    <Sparkles className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-soft">
                      For Devotees & Well-Wishers
                    </span>
                    <h3 className="font-serif text-xl font-bold text-cream sm:text-2xl">
                      Spiritual Studies & Seva
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-cream/80 sm:text-[15px]">
                  Connect with the Trust regarding our Vedic educational mission, student welfare support, Corpus Fund contributions, and traditional spiritual studies.
                </p>

                <div className="mt-4 inline-flex items-center gap-2 text-xs text-gold-soft/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                  <span>Recognised Charitable Trust · 80-G Tax Exemption</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gold/20 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-cream px-5 py-3 font-sans text-sm font-bold text-maroon shadow-sm transition hover:bg-ivory focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <span>Contact the Gurukulam</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>

                <a
                  href={whatsappDevoteeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Enquire on WhatsApp"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-gold/40 bg-maroon px-4 py-3 font-sans text-sm font-semibold text-cream hover:border-gold transition focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <MessageCircle className="h-4 w-4 text-whatsapp" aria-hidden="true" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Verified Institutional Contact Information Bar */}
        <Reveal>
          <div className="mt-12 rounded-xl border border-gold/25 bg-maroon/40 p-6 backdrop-blur-xs max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 text-center sm:text-left">
              {/* Phone */}
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold-soft">
                  Telephone & WhatsApp
                </span>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="mt-1 font-serif text-base sm:text-lg font-bold text-cream hover:text-saffron transition"
                >
                  {site.phoneDisplay}
                </a>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold-soft">
                  Official Email
                </span>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 font-sans text-sm sm:text-base font-medium text-cream hover:text-saffron transition"
                >
                  {site.email}
                </a>
              </div>

              {/* Address */}
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold-soft">
                  Registered Location
                </span>
                <p className="mt-1 text-xs text-cream/80 leading-relaxed">
                  {site.addressLines[0]}, {site.addressLines[1]}, {site.addressLines[2]}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gold/15 text-center text-xs text-cream/60">
              Contributions to Sri Seetharama Gurukulam Trust are eligible for tax exemption under Section 80-G of the Income Tax Act.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
