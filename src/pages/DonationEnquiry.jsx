import { HandHeart, Home, Sprout, UtensilsCrossed, GraduationCap } from 'lucide-react'
import Card from '../components/Card.jsx'
import EnquiryForm, { emailRules, phoneRules } from '../components/EnquiryForm.jsx'
import PageHero from '../components/PageHero.jsx'
import SEO from '../components/SEO.jsx'

const ways = [
  { icon: UtensilsCrossed, title: 'Annadanam', text: 'Sponsor a meal for students and devotees on a day of your choosing.' },
  { icon: GraduationCap, title: 'Student Sponsorship', text: 'Support a student’s learning, stay and daily needs at the gurukulam.' },
  { icon: Home, title: 'Building and Maintenance', text: 'Help maintain and improve the gurukulam’s buildings and facilities.' },
  { icon: Sprout, title: 'Goshala / General Seva', text: 'Support the goshala, garden and the everyday running of the gurukulam.' },
  { icon: HandHeart, title: 'In-kind Contribution', text: 'Books, food, materials or other items — tell us what you would like to offer.' },
]

export default function DonationEnquiry() {
  return (
    <>
      <SEO title="Donation Enquiry" description="Support Seetharama Gurukulam Trust through annadanam, student sponsorship and general seva. Donations are enquiry-only." path="/donation-enquiry" />
      <PageHero eyebrow="Support" title="Support the gurukulam" description="Voluntary contributions support Vedic students, daily samradhana, free boarding and education, and ancient scripture preservation. Thank you for considering a contribution." />
      <section className="py-10">
        <div className="site-container">
          <div className="rounded-card border-2 border-gold bg-saffron-soft px-6 py-5 text-center font-semibold text-maroon">
            Our team will share the official donation details after your enquiry.
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ways.map((w) => (
              <Card key={w.title} className="h-full"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-saffron-soft text-saffron-deep"><w.icon size={24} /></span><h3 className="mt-4 font-serif text-2xl font-semibold text-maroon">{w.title}</h3><p className="mt-2 text-ink-soft">{w.text}</p></Card>
            ))}
            <Card className="flex h-full flex-col justify-center bg-maroon text-cream">
              <p className="font-serif text-2xl font-semibold">Every contribution, large or small, is received with gratitude.</p>
              <p className="mt-2 text-cream/80">No bank details or payment links are shown on this website, by design.</p>
            </Card>
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
            <EnquiryForm
              formName="Donation Enquiry" subject="New Donation Enquiry" whatsappLabel="donation / support"
              fields={[
                { name: 'name', label: 'Your name *', rules: { required: 'Please enter your name.' } },
                { name: 'phone', label: 'Phone *', type: 'tel', autoComplete: 'tel', placeholder: '10-digit mobile number', rules: phoneRules },
                { name: 'email', label: 'Email *', type: 'email', autoComplete: 'email', rules: emailRules },
                { name: 'supportType', label: 'Type of support *', type: 'select', options: ways.map((w) => w.title), rules: { required: 'Please choose a type of support.' } },
                { name: 'amount', label: 'Approximate amount (optional)', type: 'number', placeholder: 'e.g. 5000', hint: 'Optional — helps us prepare the right details for you. Leave blank if unsure.' },
                { name: 'message', label: 'Message *', type: 'textarea', full: true, rules: { required: 'Please write a short message about your enquiry.' } },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  )
}
