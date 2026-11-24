import {
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Flame,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react'
import { motion } from 'framer-motion'
import EnquiryForm, { emailRules, phoneRules } from '../components/EnquiryForm.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import SEO from '../components/SEO.jsx'
import { site } from '../data/site.js'
import { vedaPatshala } from '../data/vedaPatshala.js'
import { whatsappLink } from '../utils/whatsapp.js'

export default function ParayanamPooja() {
  const { prayogaTraining, proposedSrowthaClasses, curriculum } = vedaPatshala

  const contactWhatsappUrl = whatsappLink(
    site.whatsappNumber,
    'Namaste, I would like to enquire about Prayoga and spiritual studies at Seetha Rama Gurukulam Trust.'
  )

  return (
    <>
      <SEO
        title="Prayoga & Srowtha Studies — Vedic Services & Training"
        description="Prayoga training in Vedic rituals for selected students and proposed Srowtha classes under Seetha Rama Gurukulam Trust, Chennai."
        path="/parayanam-pooja"
      />
      <PageHero
        eyebrow="Vedic Rituals & Studies"
        title="Prayoga Training &amp; Vedic Studies"
        description="Preparing selected students in sacred Vedic functions and developing advanced Srowtha studies under the Guru-Shishya Parampara."
      />

      {/* ── 1. SACRED TRADITION OF PRAYOGA ── */}
      <section className="py-14 sm:py-18">
        <div className="site-container">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-saffron-deep">
                Traditional Training
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-maroon sm:text-4xl">
                Prayoga Training for Selected Students
              </h2>
              <p className="mt-4 text-ink-soft leading-relaxed">
                In addition to rigorous Krishna Yajur Veda adhyayanam, the Patasala imparts specialized Prayoga training to selected students. This practical training equips scholars with the competence to conduct Vedic functions with precise Mantras, Swara, and traditional procedure.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Active Prayoga Functions */}
            <Reveal>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-gold-soft bg-cream p-6 sm:p-8 shadow-xs">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft bg-ivory px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-saffron-deep">
                    <Sparkles size={13} aria-hidden="true" />
                    <span>Active Prayoga Curriculum</span>
                  </div>
                  <h3 className="mt-3 font-serif text-2xl font-bold text-maroon">
                    {prayogaTraining.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {prayogaTraining.description}
                  </p>

                  <div className="mt-6 border-t border-gold-soft/50 pt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-maroon">
                      Key Functions Taught:
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {prayogaTraining.functions.map((fn) => (
                        <li key={fn} className="flex items-center gap-2.5 text-sm text-ink">
                          <CheckCircle2 size={16} className="text-saffron-deep shrink-0" aria-hidden="true" />
                          <span className="font-medium">{fn}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 rounded-xl bg-ivory p-4 border border-gold-soft/50 text-xs text-ink-soft">
                  Imparted through direct oral transmission and practical simulation under experienced Ganapatigals.
                </div>
              </div>
            </Reveal>

            {/* Proposed Srowtha Classes */}
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-gold-soft bg-cream p-6 sm:p-8 shadow-xs">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ivory px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-maroon">
                    <Clock size={13} aria-hidden="true" />
                    <span>Future Institutional Initiative</span>
                  </div>
                  <h3 className="mt-3 font-serif text-2xl font-bold text-maroon">
                    {proposedSrowthaClasses.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {proposedSrowthaClasses.description}
                  </p>

                  <div className="mt-6 border-t border-gold-soft/50 pt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-maroon">
                      Curriculum Areas Under Planning:
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {proposedSrowthaClasses.subjects.map((subj) => (
                        <li key={subj} className="flex items-center gap-2.5 text-sm text-ink">
                          <CheckCircle2 size={16} className="text-gold shrink-0" aria-hidden="true" />
                          <span className="font-medium">{subj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 rounded-xl bg-ivory p-4 border border-gold-soft/50 text-xs text-ink-soft italic">
                  * Note: Srowtha classes are an institutional proposal currently under planning and not yet open for routine public enrolment.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 2. VEDIC RECITATION & PRESERVATION ── */}
      <section className="bg-ivory py-14 sm:py-18 border-y border-gold-soft/50">
        <div className="site-container">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-saffron-deep">
                Core Mission
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-maroon sm:text-4xl">
                Preserving Oral Chanting, Swara &amp; Pitch
              </h2>
              <p className="mt-4 text-ink-soft leading-relaxed">
                The preservation of the Vedas rests entirely on accurate oral chanting without reliance on printed texts alone. Seetha Rama Gurukulam ensures that every student commits the prescribed Shakhas of Krishna Yajur Veda to memory with uncompromised fidelity to authentic Vedic Swara.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
            <div className="rounded-xl border border-gold-soft bg-cream p-5 text-center">
              <span className="font-sans text-3xl font-bold text-saffron-deep">10–12</span>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-maroon">Years to Complete</p>
              <p className="mt-1 text-xs text-ink-soft">Dedication required for complete mastery in one Shakha.</p>
            </div>
            <div className="rounded-xl border border-gold-soft bg-cream p-5 text-center">
              <span className="font-serif text-3xl font-bold text-saffron-deep">Swara</span>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-maroon">Correct Intonation</p>
              <p className="mt-1 text-xs text-ink-soft">Strict adherence to traditional Vedic pitch and cadence.</p>
            </div>
            <div className="rounded-xl border border-gold-soft bg-cream p-5 text-center">
              <span className="font-serif text-3xl font-bold text-saffron-deep">Parampara</span>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-maroon">Oral Tradition</p>
              <p className="mt-1 text-xs text-ink-soft">Chanting, hearing, repeating, and memorising directly from the Guru.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SPIRITUAL ENQUIRY & CONTACT ── */}
      <section className="relative overflow-hidden border-t border-gold-soft/60 bg-gradient-to-b from-[#FDFBF7] via-ivory to-[#F7F2E7] py-16 sm:py-20 lg:py-24">
        {/* Ambient subtle background decorative blurs */}
        <div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-saffron/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />

        <div className="site-container relative">
          {/* Section Subheading */}
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-white/80 px-4 py-1 text-xs font-bold uppercase tracking-widest text-saffron-deep shadow-2xs">
              <Sparkles size={13} className="text-saffron" />
              Devotee Connection & Spiritual Enquiries
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-maroon sm:text-4xl">
              Connect With the Gurukulam Trust
            </h2>
            <p className="mt-3 text-base text-ink-soft leading-relaxed">
              Seeking Prayoga study, Veda Parayanam details, or wishing to support our Vedic vidyarthies? Reach out directly through our dedicated desk.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 max-w-6xl mx-auto items-start">
            {/* Left Column: Direct Connection Hub */}
            <div className="lg:col-span-5 space-y-4">
              <Reveal>
                <div className="rounded-3xl border border-gold-soft/80 bg-white/90 p-6 sm:p-7 shadow-lg backdrop-blur-xs">
                  <div className="flex items-center justify-between gap-3 border-b border-gold-soft/40 pb-4">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-saffron-deep">
                        Direct Desk
                      </span>
                      <h3 className="font-serif text-xl font-bold text-maroon">
                        Direct Assistance
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Office Open
                    </span>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-ink-soft">
                    Devotees, patrons, and prospective scholars may connect with the trust administrators directly through any of the channels below:
                  </p>

                  <div className="mt-5 space-y-3">
                    {/* Phone Desk Card */}
                    <motion.a
                      href={`tel:${site.phoneTel}`}
                      whileHover={{ y: -2, scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="group flex items-center justify-between rounded-2xl border border-gold-soft/70 bg-[#FFFDF9] p-3.5 transition-all duration-200 hover:border-saffron hover:bg-white hover:shadow-md"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-saffron-soft text-saffron-deep transition-transform duration-200 group-hover:scale-110">
                          <Phone size={18} />
                        </span>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-ink-soft/75">
                            Telephone Desk
                          </p>
                          <p className="font-sans text-sm font-bold text-maroon group-hover:text-saffron-deep">
                            {site.phoneDisplay}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-saffron-deep">
                        <span>Call</span>
                        <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </motion.a>

                    {/* WhatsApp Desk Card */}
                    <motion.a
                      href={contactWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2, scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="group flex items-center justify-between rounded-2xl border border-[#25D366]/30 bg-emerald-50/40 p-3.5 transition-all duration-200 hover:border-[#25D366] hover:bg-white hover:shadow-md"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#128C7E] transition-transform duration-200 group-hover:scale-110">
                          <MessageCircle size={18} />
                        </span>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800/80">
                            WhatsApp Messaging
                          </p>
                          <p className="text-sm font-bold text-[#128C7E]">
                            Chat with Trust Office
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-[#128C7E]">
                        <span>Chat</span>
                        <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </motion.a>

                    {/* Email Card */}
                    <motion.a
                      href={`mailto:${site.email}`}
                      whileHover={{ y: -2, scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="group flex items-center justify-between rounded-2xl border border-gold-soft/70 bg-[#FFFDF9] p-3.5 transition-all duration-200 hover:border-gold hover:bg-white hover:shadow-md"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-soft/70 text-maroon transition-transform duration-200 group-hover:scale-110">
                          <Mail size={18} />
                        </span>
                        <div className="min-w-0">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-ink-soft/75">
                            Official Email
                          </p>
                          <p className="truncate text-xs font-bold text-maroon group-hover:text-saffron-deep">
                            {site.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-maroon shrink-0 ml-2">
                        <span>Mail</span>
                        <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </motion.a>
                  </div>

                  {/* Registered Location Snippet */}
                  <div className="mt-5 rounded-2xl border border-gold-soft/50 bg-[#FBF8F1] p-3.5">
                    <div className="flex items-start gap-2.5">
                      <MapPin size={16} className="text-saffron-deep shrink-0 mt-0.5" />
                      <div className="text-xs text-ink-soft leading-relaxed">
                        <p className="font-semibold text-maroon">Sri Seetharama Gurukulam Trust</p>
                        <p className="mt-0.5 font-sans">New No. 486 (Old No. 176), T.T.K. Road, Alwarpet, Chennai – 600018</p>
                      </div>
                    </div>
                  </div>

                  {/* Section 80-G Tax Benefit Notice */}
                  <div className="mt-4 flex items-center gap-2.5 rounded-2xl border border-amber-200/80 bg-amber-50/70 p-3 text-xs text-amber-900">
                    <ShieldCheck size={18} className="shrink-0 text-amber-700" />
                    <p className="leading-snug">
                      Patronage and donations to the Trust are eligible for tax exemption under <span className="font-bold">Section 80-G</span>.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Modern Animated Enquiry Form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <EnquiryForm
                  formName="Prayoga & Studies Enquiry"
                  subject="New Prayoga / Studies Enquiry"
                  whatsappLabel="studies"
                  fields={[
                    { name: 'name', label: 'Your Full Name *', placeholder: 'Sri / Smt / Kum…', rules: { required: 'Please enter your name.' } },
                    { name: 'phone', label: 'Phone Number *', type: 'tel', autoComplete: 'tel', placeholder: '10-digit mobile number', rules: phoneRules },
                    { name: 'email', label: 'Email Address *', type: 'email', autoComplete: 'email', placeholder: 'name@example.com', rules: emailRules },
                    {
                      name: 'interest',
                      label: 'Area of Enquiry *',
                      type: 'select',
                      placeholder: 'Please select an area…',
                      options: [
                        'Prayoga Training Information',
                        'Proposed Srowtha Classes Inquiry',
                        'Veda Patasala Patronage / Seva',
                        'General Spiritual Enquiry',
                      ],
                      rules: { required: 'Please select an area of enquiry.' },
                    },
                    {
                      name: 'message',
                      label: 'Message / Remarks *',
                      type: 'textarea',
                      placeholder: 'Please describe your query, background, or how you would like to connect with the Patasala…',
                      full: true,
                      rules: { required: 'Please enter your message.' },
                    },
                  ]}
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
