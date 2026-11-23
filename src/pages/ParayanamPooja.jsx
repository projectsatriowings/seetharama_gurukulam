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
} from 'lucide-react'
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
              <span className="font-serif text-3xl font-bold text-saffron-deep">10–12</span>
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
      <section className="py-14 sm:py-18">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-12 max-w-5xl mx-auto items-start">
            <div className="lg:col-span-5 space-y-6">
              <Reveal>
                <div className="rounded-2xl border border-gold-soft bg-cream p-6 sm:p-8 shadow-xs">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-saffron-deep">
                    Devotee Connection
                  </span>
                  <h3 className="mt-2 font-serif text-2xl font-bold text-maroon">
                    Enquire With the Trust
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    Devotees, patrons, and well-wishers seeking guidance regarding Prayoga training, traditional observances, or wishing to support our Vedic education mission may contact the office directly.
                  </p>

                  <div className="mt-6 space-y-3 text-sm text-ink">
                    <p className="flex items-center gap-2.5">
                      <Phone size={16} className="text-saffron-deep shrink-0" />
                      <a href={`tel:${site.phoneTel}`} className="font-semibold text-maroon hover:underline">
                        {site.phoneDisplay}
                      </a>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <MessageCircle size={16} className="text-whatsapp shrink-0" />
                      <a
                        href={contactWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-whatsapp hover:underline"
                      >
                        WhatsApp Us
                      </a>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Mail size={16} className="text-saffron-deep shrink-0" />
                      <a href={`mailto:${site.email}`} className="font-semibold text-maroon hover:underline">
                        {site.email}
                      </a>
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <EnquiryForm
                  formName="Prayoga & Studies Enquiry"
                  subject="New Prayoga / Studies Enquiry"
                  whatsappLabel="studies"
                  fields={[
                    { name: 'name', label: 'Your Full Name *', rules: { required: 'Please enter your name.' } },
                    { name: 'phone', label: 'Phone Number *', type: 'tel', autoComplete: 'tel', placeholder: '10-digit mobile number', rules: phoneRules },
                    { name: 'email', label: 'Email Address *', type: 'email', autoComplete: 'email', rules: emailRules },
                    {
                      name: 'interest',
                      label: 'Area of Enquiry *',
                      type: 'select',
                      placeholder: 'Please select…',
                      options: [
                        'Prayoga Training Information',
                        'Proposed Srowtha Classes Inquiry',
                        'Veda Patasala Patronage / Seva',
                        'General Spiritual Enquiry',
                      ],
                      rules: { required: 'Please select an area of enquiry.' },
                    },
                    { name: 'message', label: 'Message / Remarks *', type: 'textarea', full: true, rules: { required: 'Please enter your message.' } },
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
