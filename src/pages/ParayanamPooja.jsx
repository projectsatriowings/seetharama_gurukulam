import Card from '../components/Card.jsx'
import EnquiryForm, { emailRules, phoneRules } from '../components/EnquiryForm.jsx'
import PageHero from '../components/PageHero.jsx'
import SEO from '../components/SEO.jsx'
import services from '../data/services.json'

const steps = [
  ['1', 'Choose a service', 'Pick a parayanam or pooja from the list below, or ask us for guidance.'],
  ['2', 'Share date and venue', 'Tell us your preferred date, and whether it is at the gurukulam or at your place.'],
  ['3', 'We confirm', 'Our team confirms the acharya, timing and any preparations needed.'],
]

export default function ParayanamPooja() {
  return (
    <>
      <SEO title="Parayanam and Pooja" description="Book parayanam and pooja services with Seetharama Gurukulam Trust, at the gurukulam or at your home." path="/parayanam-pooja" />
      <PageHero eyebrow="Services" title="Parayanam and pooja" description="Recitations and poojas performed with devotion by our acharyas. If you are unsure which service suits your occasion, just ask — we will guide you." />
      <section className="py-10">
        <div className="site-container">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Card key={s.id} className="h-full">
                <h3 className="font-serif text-2xl font-bold text-maroon">{s.name}</h3>
                <p className="mt-2 text-sm text-ink-soft">{s.description}</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-widest text-saffron-deep">Typical duration: {s.duration}</p>
              </Card>
            ))}
          </div>
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map(([n, t, d]) => (
              <li key={t} className="rounded-card border border-gold-soft bg-ivory p-5 shadow-card">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon font-serif text-lg font-bold text-cream">{n}</span>
                <h3 className="mt-3 font-serif text-2xl font-bold text-maroon">{t}</h3>
                <p className="mt-1 text-sm text-ink-soft">{d}</p>
              </li>
            ))}
          </ol>
          <div className="mx-auto mt-10 max-w-3xl">
            <EnquiryForm
              formName="Parayanam / Pooja Enquiry" subject="New Parayanam / Pooja Enquiry" whatsappLabel="parayanam / pooja"
              fields={[
                { name: 'name', label: 'Your name *', rules: { required: 'Please enter your name.' } },
                { name: 'phone', label: 'Phone *', type: 'tel', autoComplete: 'tel', placeholder: '10-digit mobile number', rules: phoneRules },
                { name: 'email', label: 'Email *', type: 'email', autoComplete: 'email', rules: emailRules },
                { name: 'service', label: 'Service *', type: 'select', options: services.map((s) => s.name), rules: { required: 'Please choose a service.' } },
                { name: 'preferredDate', label: 'Preferred date *', type: 'date', rules: { required: 'Please choose a preferred date.' } },
                { name: 'venue', label: 'Venue *', type: 'select', options: ['At the gurukulam', 'At my place'], rules: { required: 'Please choose a venue.' } },
                { name: 'city', label: 'City *', rules: { required: 'Please enter your city.' } },
                { name: 'message', label: 'Message *', type: 'textarea', full: true, rules: { required: 'Please write a short message about your enquiry.' } },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  )
}
