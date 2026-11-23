import {
  AlertCircle,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  GraduationCap,
  Heart,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  User,
  Users,
} from 'lucide-react'
import EnquiryForm, { emailRules, phoneRules } from '../components/EnquiryForm.jsx'
import Reveal from '../components/Reveal.jsx'
import SEO from '../components/SEO.jsx'
import { site } from '../data/site.js'
import { vedaPatshala } from '../data/vedaPatshala.js'
import { whatsappLink } from '../utils/whatsapp.js'

export default function Admission() {
  const { admission, freeStudentFacilities, ageDiscrepancyNote, curriculum } = vedaPatshala

  const admissionWhatsappUrl = whatsappLink(
    site.whatsappNumber,
    'Namaste, I would like to enquire about student admission at Seetha Rama Gurukulam Veda Patasala.'
  )

  return (
    <>
      <SEO
        title="Admission Enquiry — Veda Patasala"
        description="Official admission information for Seetha Rama Gurukula Veda Patasala, Chennai. Traditional Krishna Yajur Veda adhyayanam, 100% free education, boarding and care."
        path="/admission"
      />

      {/* ── 1. ADMISSION HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream via-[#F7EFE2] to-cream py-14 sm:py-18 border-b border-gold/30">
        <div className="pattern-kolam absolute inset-0 opacity-[0.14]" aria-hidden="true" />
        <div className="site-container relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold bg-gold-soft/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-maroon">
                <Sparkles size={14} className="text-saffron-deep" aria-hidden="true" />
                <span>Admission &amp; Vidyarthi Pravesham</span>
              </div>

              <h1 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-maroon sm:text-4xl md:text-5xl">
                Gurukulam Student Admission
              </h1>

              <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
                Seetha Rama Gurukula Veda Patasala welcomes parents seeking authentic hereditary Krishna Yajur Veda adhyayanam for their sons under the sacred Guru-Shishya Parampara — completely free of cost.
              </p>

              {/* Verified Pillars */}
              <div className="mt-8 flex flex-wrap justify-center gap-2.5 sm:gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-ivory px-3.5 py-1.5 text-xs font-semibold text-maroon shadow-xs">
                  <BookOpen size={14} className="text-saffron-deep" />
                  <span>Krishna Yajur Veda</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-ivory px-3.5 py-1.5 text-xs font-semibold text-maroon shadow-xs">
                  <User size={14} className="text-saffron-deep" />
                  <span>Screened Post-Upanayanam</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-ivory px-3.5 py-1.5 text-xs font-semibold text-maroon shadow-xs">
                  <Calendar size={14} className="text-saffron-deep" />
                  <span>Academic Year: June to May</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-ivory px-3.5 py-1.5 text-xs font-semibold text-maroon shadow-xs">
                  <Clock size={14} className="text-saffron-deep" />
                  <span>Admissions Close 2nd Week of June</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 2. ADMISSION CRITERIA & COURSE STRUCTURE ── */}
      <section className="py-14 sm:py-18">
        <div className="site-container">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-saffron-deep">
                Official Guidelines
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-maroon sm:text-4xl">
                Courses &amp; Admission Guidelines
              </h2>
              <p className="mt-3 text-sm text-ink-soft sm:text-base">
                Verified from the official charter of Seetha Rama Gurukula Veda Patasala.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal delay={0.05}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-gold-soft bg-ivory p-6 shadow-xs">
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
              <div className="flex h-full flex-col justify-between rounded-xl border border-gold-soft bg-ivory p-6 shadow-xs">
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
              <div className="flex h-full flex-col justify-between rounded-xl border border-gold-soft bg-ivory p-6 shadow-xs">
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
            <div className="mt-8 rounded-xl border border-gold/40 bg-cream p-5 sm:p-6 shadow-xs max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
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
        </div>
      </section>

      {/* ── 3. 100% FREE FACILITIES ── */}
      <section className="bg-ivory py-14 sm:py-18 border-y border-gold-soft/50">
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
                In adherence to traditional Gurukulam tenets, all provisions are offered free of cost throughout the 10 to 12 years study tenure.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {freeStudentFacilities.map((facility, idx) => (
              <Reveal key={facility} delay={idx * 0.05}>
                <div className="flex items-start gap-3.5 rounded-xl border border-gold-soft bg-cream p-4 sm:p-5 shadow-xs">
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

      {/* ── 4. ADMISSION ENQUIRY FORM & DIRECT CONTACT ── */}
      <section className="py-14 sm:py-18">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-12 max-w-5xl mx-auto items-start">
            {/* Contact Details & Direct Help */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal>
                <div className="rounded-2xl border border-gold-soft bg-cream p-6 sm:p-8 shadow-xs">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-saffron-deep">
                    Direct Assistance
                  </span>
                  <h3 className="mt-2 font-serif text-2xl font-bold text-maroon">
                    Admissions Desk
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    Parents and guardians are encouraged to reach out directly to discuss eligibility, upcoming session dates, and the screening process.
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
                        href={admissionWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-whatsapp hover:underline"
                      >
                        Message on WhatsApp
                      </a>
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-gold-soft/50 text-xs text-ink-soft leading-relaxed">
                    <p>
                      <strong>Veda Patasala Address:</strong><br />
                      {site.addressLines.join(', ')}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Admission Enquiry Form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <EnquiryForm
                  formName="Student Admission Enquiry"
                  subject="New Admission Enquiry"
                  whatsappLabel="admission"
                  fields={[
                    { name: 'name', label: 'Parent / Guardian Name *', rules: { required: 'Please enter parent/guardian name.' } },
                    { name: 'phone', label: 'Phone Number *', type: 'tel', autoComplete: 'tel', placeholder: '10-digit mobile number', rules: phoneRules },
                    { name: 'email', label: 'Email Address *', type: 'email', autoComplete: 'email', rules: emailRules },
                    { name: 'childAge', label: "Student's Age *", placeholder: 'e.g. 9 or 10 years', rules: { required: "Please enter the child's age." } },
                    {
                      name: 'upanayanamDone',
                      label: 'Has Upanayanam been performed? *',
                      type: 'select',
                      placeholder: 'Please select…',
                      options: [
                        'Yes, Upanayanam is completed',
                        'Planned soon / In progress',
                        'Not yet performed',
                      ],
                      rules: { required: 'Please select an option.' },
                    },
                    { name: 'message', label: 'Additional Details / Questions *', type: 'textarea', full: true, rules: { required: 'Please provide some brief background.' } },
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
