import {
  CheckCircle2,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
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
  const { contributions } = vedaPatshala

  const contactWhatsappUrl = whatsappLink(
    site.whatsappNumber,
    'Namaste, I would like to get in touch with Seetha Rama Gurukulam Trust.'
  )

  return (
    <>
      <SEO
        title="Contact"
        description="Official contact details for Seetha Rama Gurukulam Trust & Veda Patasala, Alwarpet, Chennai. Address, phone, email, WhatsApp and donation information."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact & Support"
        title="Connect With Seetha Rama Gurukulam Trust"
        description="Reach our administration, enquire about student admission and Prayoga studies, or support our sacred Vedic mission."
      />

      {/* ── 1. CONTACT CARDS & INTERACTIVE LOCATION ── */}
      <section className="py-14 sm:py-18">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Contact Details & Contribution Info */}
            <div className="lg:col-span-5 space-y-6">
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

              {/* Map Embed */}
              <Reveal delay={0.1}>
                <div className="overflow-hidden rounded-2xl border border-gold-soft bg-ivory shadow-xs">
                  <iframe
                    title="Map to Seetha Rama Gurukulam Trust, Alwarpet, Chennai"
                    src={site.mapEmbedUrl}
                    width="600"
                    height="280"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    className="w-full border-0"
                  />
                  <div className="p-3.5 bg-cream/70 text-xs text-ink-soft text-center border-t border-gold-soft/40">
                    Veda Bhavan, No. 486, T.T.K. Road, Alwarpet, Chennai – 600018
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Contact / Seva Enquiry Form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <EnquiryForm
                  formName="General Contact Enquiry"
                  subject="New Contact / Seva Enquiry"
                  whatsappLabel="contact and seva"
                  fields={[
                    { name: 'name', label: 'Your Full Name *', rules: { required: 'Please enter your name.' } },
                    { name: 'phone', label: 'Phone Number *', type: 'tel', autoComplete: 'tel', placeholder: '10-digit mobile number', rules: phoneRules },
                    { name: 'email', label: 'Email Address *', type: 'email', autoComplete: 'email', rules: emailRules },
                    {
                      name: 'purpose',
                      label: 'Purpose of Enquiry *',
                      type: 'select',
                      placeholder: 'Please select a topic…',
                      options: [
                        'General Enquiry',
                        'Student Admission Inquiry',
                        'Trust Support / Corpus Fund / Seva',
                        'In-Kind Contribution (Rice / Dal / Oil)',
                        'Prayoga / Spiritual Studies Information',
                        'Other',
                      ],
                      rules: { required: 'Please choose a purpose.' },
                    },
                    { name: 'message', label: 'Message *', type: 'textarea', full: true, rules: { required: 'Please write your message.' } },
                  ]}
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. CONTRIBUTIONS & SECTION 80-G EXEMPTION ── */}
      <section className="bg-cream py-14 sm:py-18 border-t border-gold-soft/50">
        <div className="site-container max-w-4xl mx-auto">
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
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
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
      </section>
    </>
  )
}
