import {
  AlertCircle,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  User,
} from 'lucide-react'
import CallButton from '../components/CallButton.jsx'
import EnquiryForm, { emailRules, phoneRules } from '../components/EnquiryForm.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SEO from '../components/SEO.jsx'
import { site } from '../data/site.js'
import { vedaPatshala } from '../data/vedaPatshala.js'
import { whatsappLink } from '../utils/whatsapp.js'

export default function Contact() {
  const {
    admission,
    freeStudentFacilities,
    ageDiscrepancyNote,
    contributions,
  } = vedaPatshala

  const contactWhatsappUrl = whatsappLink(
    site.whatsappNumber,
    'Namaste, I would like to get in touch with Seetha Rama Gurukulam Trust.'
  )

  const admissionWhatsappUrl = whatsappLink(
    site.whatsappNumber,
    'Namaste, I would like to enquire about student admission at Seetha Rama Gurukulam Veda Patasala.'
  )

  return (
    <>
      <SEO
        title="Contact & Admission Enquiry"
        description="Official contact details, campus address, and student admission information for Seetha Rama Gurukulam Trust & Veda Patasala, Alwarpet, Chennai. 100% free Vedic education."
        path="/contact"
      />

      <PageHero
        eyebrow="Contact & Admission Enquiry"
        title="Connect With Seetha Rama Gurukulam Trust"
        description="Reach our administration, enquire about student admission and Prayoga studies, or support our sacred Vedic mission."
      />

      {/* ── 1. CONTACT CARDS & INTERACTIVE LOCATION ── */}
      <section className="py-14 sm:py-18">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start w-full min-w-0 max-w-full">
            {/* Contact Details & Direct Help */}
            <div className="w-full min-w-0 max-w-full lg:col-span-5 space-y-6">
              <Reveal>
                <div className="rounded-2xl border border-gold-soft bg-ivory p-6 sm:p-8 shadow-xs">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-saffron-deep">
                    Institutional Office
                  </span>
                  <h2 className="mt-2 font-serif text-2xl font-bold text-maroon">
                    Visit or Reach Us
                  </h2>

                  <address className="mt-5 space-y-3.5 not-italic text-sm text-ink-soft">
                    <p className="flex items-start gap-3">
                      <MapPin className="mt-1 shrink-0 text-saffron-deep" size={18} />
                      <span className="leading-relaxed">
                        <strong className="text-maroon">Veda Bhavan</strong><br />
                        {site.addressLines.join(', ')}
                      </span>
                    </p>
                    <p className="flex items-center gap-3">
                      <Phone className="shrink-0 text-saffron-deep" size={18} />
                      <a href={`tel:${site.phoneTel}`} className="font-semibold text-maroon hover:underline">
                        {site.phoneDisplay}
                      </a>
                    </p>
                    <p className="flex items-center gap-3">
                      <Mail className="shrink-0 text-saffron-deep" size={18} />
                      <a href={`mailto:${site.email}`} className="font-semibold text-maroon hover:underline">
                        {site.email}
                      </a>
                    </p>
                    <p className="flex items-center gap-3">
                      <Globe className="shrink-0 text-saffron-deep" size={18} />
                      <a href={site.siteUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-maroon hover:underline">
                        {site.websiteDisplay}
                      </a>
                    </p>
                  </address>

                  <div className="mt-6 flex flex-wrap gap-3 pt-5 border-t border-gold-soft/50">
                    <CallButton />
                    <a
                      href={contactWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-whatsapp px-5 py-2 text-sm font-semibold text-white shadow-xs transition hover:bg-[#1ebd5a]"
                    >
                      <MessageCircle size={18} />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Map Embed & Direct Directions */}
              <Reveal delay={0.1}>
                <div className="overflow-hidden rounded-2xl border border-gold-soft bg-ivory shadow-xs">
                  <div className="relative aspect-[16/10] sm:aspect-[2/1] w-full bg-cream">
                    <iframe
                      title="Map to Seetha Rama Gurukulam Trust, Alwarpet, Chennai"
                      src={site.mapEmbedUrl}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full border-0"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2 p-3.5 bg-cream/70 text-xs text-ink-soft border-t border-gold-soft/40">
                    <div className="flex items-center gap-1.5 text-center sm:text-left">
                      <MapPin size={14} className="text-saffron-deep shrink-0" />
                      <span>{site.locationName}: {site.addressLines[0]}, {site.addressLines[1]}, {site.addressLines[2]}</span>
                    </div>
                    <a
                      href={site.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1 font-semibold text-maroon hover:text-saffron-deep hover:underline"
                    >
                      <span>Open Map</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* General & Admission Enquiry Form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <EnquiryForm
                  formName="Contact & Admission Enquiry"
                  subject="New Contact / Admission Enquiry"
                  whatsappLabel="contact, admission and seva"
                  fields={[
                    { name: 'name', label: 'Your Full Name *', placeholder: 'Sri / Smt / Kum…', rules: { required: 'Please enter your name.' } },
                    { name: 'phone', label: 'Phone Number *', type: 'tel', autoComplete: 'tel', placeholder: '10-digit mobile number', rules: phoneRules },
                    { name: 'email', label: 'Email Address *', type: 'email', autoComplete: 'email', placeholder: 'name@example.com', rules: emailRules },
                    {
                      name: 'purpose',
                      label: 'Purpose of Enquiry *',
                      type: 'select',
                      placeholder: 'Please select a topic…',
                      options: [
                        'Student Admission Inquiry',
                        'General Enquiry',
                        'Prayoga / Spiritual Studies Information',
                        'Trust Support / Corpus Fund / Seva',
                        'In-Kind Contribution (Rice / Dal / Oil)',
                        'Other',
                      ],
                      rules: { required: 'Please choose a purpose.' },
                    },
                    {
                      name: 'message',
                      label: 'Message / Remarks *',
                      type: 'textarea',
                      placeholder: 'Please enter your enquiry, student background (if for admission), or how you would like to connect with the Trust…',
                      full: true,
                      rules: { required: 'Please write your message.' },
                    },
                  ]}
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. GURUKULAM STUDENT ADMISSION & GUIDELINES ── */}
      <section id="admission" className="scroll-mt-24 bg-gradient-to-b from-[#FDFBF7] via-cream/50 to-ivory py-16 sm:py-20 border-t border-gold-soft/50">
        <div className="site-container">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold bg-gold-soft/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-maroon">
                <Sparkles size={14} className="text-saffron-deep" aria-hidden="true" />
                <span>Admission &amp; Vidyarthi Pravesham</span>
              </div>

              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-maroon sm:text-4xl md:text-5xl">
                Gurukulam Student Admission
              </h2>

              <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
                Seetha Rama Gurukula Veda Patasala welcomes parents seeking authentic hereditary Krishna Yajur Veda adhyayanam for their sons under the sacred Guru-Shishya Parampara — completely free of cost.
              </p>

              {/* Verified Pillars */}
              <div className="mt-8 flex flex-wrap justify-center gap-2.5 sm:gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-white px-3.5 py-1.5 text-xs font-semibold text-maroon shadow-xs">
                  <BookOpen size={14} className="text-saffron-deep" />
                  <span>Krishna Yajur Veda</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-white px-3.5 py-1.5 text-xs font-semibold text-maroon shadow-xs">
                  <User size={14} className="text-saffron-deep" />
                  <span>Screened Post-Upanayanam</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-white px-3.5 py-1.5 text-xs font-semibold text-maroon shadow-xs">
                  <Calendar size={14} className="text-saffron-deep" />
                  <span>Academic Year: June to May</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-white px-3.5 py-1.5 text-xs font-semibold text-maroon shadow-xs">
                  <Clock size={14} className="text-saffron-deep" />
                  <span>Admissions Close 2nd Week of June</span>
                </span>
              </div>
            </div>
          </Reveal>

          {/* Guidelines Cards Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <Reveal delay={0.05}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-gold-soft bg-white p-6 shadow-xs transition hover:shadow-md">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-saffron-soft text-saffron-deep">
                    <User size={22} />
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-bold text-maroon">
                    Selection &amp; Upanayanam
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {admission.selectionCriteria}. The course is hereditary, and students are screened and selected following Upanayanam.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-gold-soft bg-white p-6 shadow-xs transition hover:shadow-md">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-saffron-soft text-saffron-deep">
                    <Calendar size={22} />
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-bold text-maroon">
                    Academic Year &amp; Schedule
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    Academic year runs from <strong>{admission.academicYear}</strong>. Admissions for each session close by the <strong>{admission.admissionClosing}</strong>.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-gold-soft bg-white p-6 shadow-xs transition hover:shadow-md">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-saffron-soft text-saffron-deep">
                    <Award size={22} />
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-bold text-maroon">
                    Recognition &amp; Stipends
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    Upon successful course completion, Cash Awards, Medals, and Merit Certificates are awarded, and stipends are extended for higher studies.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Age Discrepancy Note */}
          <Reveal delay={0.2}>
            <div className="mt-8 rounded-2xl border border-gold/40 bg-cream p-5 sm:p-6 shadow-xs max-w-4xl mx-auto">
              <div className="flex items-start gap-3.5">
                <AlertCircle size={22} className="mt-0.5 shrink-0 text-saffron-deep" aria-hidden="true" />
                <div>
                  <h4 className="font-serif text-base font-bold text-maroon">
                    Official Note on Eligible Age Group
                  </h4>
                  <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                    {ageDiscrepancyNote}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Quick WhatsApp Admission Chat */}
          <div className="mt-8 text-center">
            <a
              href={admissionWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-white px-6 py-3 text-sm font-bold text-emerald-800 shadow-xs transition hover:bg-emerald-50 hover:shadow-sm"
            >
              <MessageCircle size={18} className="text-[#25D366]" />
              <span>Direct WhatsApp Desk for Student Admissions</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 3. 100% FREE FACILITIES ── */}
      <section className="bg-ivory py-16 sm:py-20 border-b border-gold-soft/50">
        <div className="site-container">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-saffron-deep">
                Complete Student Welfare
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-maroon sm:text-4xl">
                Provided 100% Free of Cost
              </h2>
              <p className="mt-3 text-sm text-ink-soft sm:text-base">
                In adherence to traditional Gurukulam tenets, all provisions are offered completely free of cost throughout the 10 to 12 years study tenure.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {freeStudentFacilities.map((facility, idx) => (
              <Reveal key={facility} delay={idx * 0.05}>
                <div className="flex items-start gap-3.5 rounded-2xl border border-gold-soft bg-white p-4 sm:p-5 shadow-xs">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-saffron-deep" aria-hidden="true" />
                  <div>
                    <h3 className="font-serif text-base font-bold text-maroon">
                      {facility}
                    </h3>
                    <p className="mt-1 text-xs text-ink-soft">
                      No tuition fees, boarding fees, or living charges are ever levied.
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CONTRIBUTIONS & SECTION 80-G EXEMPTION ── */}
      <section className="bg-cream py-16 sm:py-20 border-t border-gold-soft/50">
        <div className="site-container">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="rounded-2xl border border-gold-soft bg-ivory p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-saffron-deep" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-saffron-deep">
                  Official Contribution Information
                </span>
              </div>

              <h3 className="mt-2 font-serif text-2xl font-bold text-maroon sm:text-3xl">
                Support the Gurukulam &amp; Veda Patasala
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {contributions.solicitation}
              </p>

              {/* Supported Contribution Schemes */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {contributions.schemes.map((scheme) => (
                  <div key={scheme} className="flex items-center gap-2 rounded-lg bg-cream/70 p-3 border border-gold-soft/40 text-xs font-medium text-ink">
                    <CheckCircle2 size={16} className="text-saffron-deep shrink-0" />
                    <span>{scheme}</span>
                  </div>
                ))}
              </div>

              {/* Payment Particulars */}
              <div className="mt-6 rounded-xl border border-gold-soft bg-cream p-5 text-xs text-ink leading-relaxed space-y-2">
                <p>
                  <strong>Payee Name:</strong> <span className="font-semibold text-maroon">{contributions.payeeName}</span>
                </p>
                <p>
                  <strong>Accepted Payment Modes:</strong> {contributions.paymentModes.join(', ')}
                </p>
                <p className="pt-2 border-t border-gold-soft/40 text-gold-deep font-medium">
                  {contributions.taxExemption}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
    </>
  )
}
