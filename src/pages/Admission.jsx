import { CheckCircle2 } from 'lucide-react'
import Card from '../components/Card.jsx'
import EnquiryForm, { emailRules, phoneRules } from '../components/EnquiryForm.jsx'
import PageHero from '../components/PageHero.jsx'
import SEO from '../components/SEO.jsx'
import { vedaPatshala } from '../data/vedaPatshala.js'

const steps = [
  ['1', 'Enquire', 'Fill in the admission form below or message us on WhatsApp.'],
  ['2', 'Conversation', 'We speak with the parents and the child, and answer your questions.'],
  ['3', 'Visit', 'Visit the gurukulam, meet the acharyas and see daily life.'],
  ['4', 'Join', 'If it is a good fit, we confirm admission and next steps.'],
]

export default function Admission() {
  return (
    <>
      <SEO title="Admission Enquiry" description="Enquire about admission to Sri Seetharama Gurukulam Trust Veda Patasala — free boarding, lodging, books and care for Vedic students." path="/admission" />
      <PageHero eyebrow="Admission" title="Gurukulam student admission" description="Thank you for considering Sri Seetharama Gurukulam Veda Patasala for your child. Share the student and family details below, and we will respond within 24 to 48 hours." />
      <section className="py-10">
        <div className="site-container">
          <ol className="grid gap-5 md:grid-cols-4">
            {steps.map(([n, t, d]) => (
              <li key={t} className="rounded-card border border-gold-soft bg-ivory p-5 shadow-card">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon font-serif text-lg font-bold text-cream">{n}</span>
                <h3 className="mt-3 font-serif text-2xl font-bold text-maroon">{t}</h3>
                <p className="mt-1 text-sm text-ink-soft">{d}</p>
              </li>
            ))}
          </ol>

          <Card className="mx-auto mt-10 max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-saffron-deep">Student Welfare</p>
            <h2 className="mt-1 font-serif text-2xl font-bold text-maroon">Provided to students without any cost</h2>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {vedaPatshala.freeProvisions.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-ink">
                  <CheckCircle2 size={16} className="shrink-0 text-saffron-deep" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <div className="mx-auto mt-10 max-w-3xl">
            <EnquiryForm
              formName="Admission Enquiry" subject="New Gurukulam Student Admission Enquiry" whatsappLabel="admission"
              fields={[
                { name: 'studentName', label: 'Name of the child *', placeholder: 'Enter full name of the child', rules: { required: 'Please enter the child’s name.' } },
                { name: 'dateOfBirth', label: 'Date of birth *', type: 'date', rules: { required: 'Please enter the date of birth.' } },
                { name: 'age', label: 'Age (in years) *', type: 'number', placeholder: 'e.g. 9', rules: { required: 'Please enter the child’s age.' } },
                { name: 'nakshatram', label: 'Star of the child (Nakshatram) *', placeholder: 'e.g. Rohini, Ashwini', rules: { required: 'Please enter the child’s nakshatram.' } },
                { name: 'nativePlace', label: 'Native place *', placeholder: 'Enter native location', rules: { required: 'Please enter the native place.' } },
                { name: 'previousEducation', label: 'Education details *', placeholder: 'e.g. 5th Standard Passed', rules: { required: 'Please share education details.' } },
                { name: 'guardianName', label: 'Parent / Guardian name *', placeholder: 'Enter parent or guardian full name', rules: { required: 'Please enter the parent or guardian’s name.' } },
                { name: 'relationship', label: 'Relationship to child *', placeholder: 'e.g. Father, Mother, Guardian', rules: { required: 'Please enter the relationship.' } },
                { name: 'occupation', label: 'Parent’s occupation *', placeholder: 'Enter parent’s occupation', rules: { required: 'Please enter the parent’s occupation.' } },
                { name: 'fatherGothram', label: 'Father’s Gothram *', placeholder: 'Enter Father’s Gothram', rules: { required: 'Please enter Father’s Gothram.' } },
                { name: 'motherGothram', label: 'Mother’s Gothram *', placeholder: 'Enter Mother’s Gothram', rules: { required: 'Please enter Mother’s Gothram.' } },
                { name: 'cityState', label: 'Current place of living *', placeholder: 'Current address / city & state', rules: { required: 'Please enter your current place of living.' } },
                { name: 'phone', label: 'Contact number *', type: 'tel', autoComplete: 'tel', placeholder: '10-digit mobile number', rules: phoneRules },
                { name: 'email', label: 'Email address *', type: 'email', autoComplete: 'email', rules: emailRules },
                { name: 'vedicBackground', label: 'Vedic background (optional)', full: true, hint: 'Any prior recitation, Sanskrit or gurukulam experience — leave blank if none.' },
                { name: 'message', label: 'Purpose of joining Gurukulam *', type: 'textarea', full: true, placeholder: 'Explain reason and purpose for joining the Gurukulam…', rules: { required: 'Please share the purpose of joining the Gurukulam.' } },
              ]}
            />
            <p className="mt-4 text-center text-sm text-ink-soft">
              Note: Copies of the child’s Birth Certificate, Aadhaar Card, and Bank Passbook may be requested by the Gurukulam administration office during admission verification.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
