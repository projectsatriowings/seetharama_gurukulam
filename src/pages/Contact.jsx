import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import CallButton from '../components/CallButton.jsx'
import EnquiryForm, { emailRules, phoneRules } from '../components/EnquiryForm.jsx'
import PageHero from '../components/PageHero.jsx'
import SEO from '../components/SEO.jsx'
import { site } from '../data/site.js'
import { whatsappLink } from '../utils/whatsapp.js'

export default function Contact() {
  return (
    <>
      <SEO title="Contact" description="Contact Seetharama Gurukulam Trust — address, phone, email, WhatsApp and visiting hours." path="/contact" />
      <PageHero eyebrow="Contact" title="We would love to hear from you" description="Visit us, call, email or message us on WhatsApp. We respond within 24 to 48 hours." />
      <section className="py-10">
        <div className="site-container grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <div className="rounded-card border border-gold-soft bg-ivory p-6 shadow-card">
              <h2 className="font-serif text-2xl font-semibold text-maroon">Visit or reach us</h2>
              <address className="mt-4 space-y-3 not-italic text-ink-soft">
                <p className="flex gap-2"><MapPin className="mt-1 shrink-0 text-saffron-deep" size={20} />{site.addressLines.join(', ')}</p>
                <p><a href={`tel:${site.phoneTel}`} className="flex gap-2 hover:text-maroon"><Phone className="mt-1 shrink-0 text-saffron-deep" size={20} />{site.phoneDisplay}</a></p>
                <p><a href={`mailto:${site.email}`} className="flex gap-2 hover:text-maroon"><Mail className="mt-1 shrink-0 text-saffron-deep" size={20} />{site.email}</a></p>
                <p className="flex gap-2"><Clock className="mt-1 shrink-0 text-saffron-deep" size={20} />Visiting hours: {site.visitingHours}</p>
              </address>
              <div className="mt-5 flex flex-wrap gap-3">
                <CallButton />
                <a href={whatsappLink('Namaste, I would like to get in touch with Seetharama Gurukulam Trust.')} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center rounded-full bg-whatsapp px-5 py-2 font-semibold text-white">Chat on WhatsApp</a>
              </div>
            </div>
            <div className="overflow-hidden rounded-card border border-gold-soft shadow-card">
              <iframe title="Map to Seetharama Gurukulam Trust (placeholder location — replace with the real location)" src={site.mapEmbedUrl} width="600" height="360" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className="w-full border-0" />
              <p className="bg-ivory px-4 py-3 text-sm text-ink-soft">Map location is a placeholder. Replace the embed URL in <code>src/data/site.js</code> with the trust’s real location.</p>
            </div>
          </div>
          <EnquiryForm
            formName="General Contact Enquiry" subject="New General Contact Enquiry" whatsappLabel="general contact"
            fields={[
              { name: 'name', label: 'Your name *', rules: { required: 'Please enter your name.' } },
              { name: 'phone', label: 'Phone *', type: 'tel', autoComplete: 'tel', placeholder: '10-digit mobile number', rules: phoneRules },
              { name: 'email', label: 'Email *', type: 'email', autoComplete: 'email', rules: emailRules },
              { name: 'message', label: 'Message *', type: 'textarea', full: true, rules: { required: 'Please write your message.' } },
            ]}
          />
        </div>
      </section>
    </>
  )
}
