import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  FileCheck2,
  Heart,
  HelpCircle,
  Home as HomeIcon,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  User,
  Users,
  Utensils,
} from 'lucide-react'
import EnquiryForm, { emailRules, phoneRules } from '../components/EnquiryForm.jsx'
import Reveal from '../components/Reveal.jsx'
import SEO from '../components/SEO.jsx'
import { site } from '../data/site.js'
import { whatsappLink } from '../utils/whatsapp.js'

/**
 * 4-Step Guiding Admission Journey
 */
const admissionSteps = [
  {
    step: '1',
    title: 'Submit Enquiry',
    desc: 'Fill in the admission form below or message our admissions desk directly on WhatsApp.',
  },
  {
    step: '2',
    title: 'Acharya Dialogue',
    desc: 'A gentle preliminary conversation with parents and the child to answer all questions.',
  },
  {
    step: '3',
    title: 'Campus Visit',
    desc: 'Visit our Gurukulam in Alwarpet, Chennai, meet Acharya Sri Srikrishna Ganapatigal, and see daily life.',
  },
  {
    step: '4',
    title: 'Formal Pravesham',
    desc: 'Following document verification and blessings, the student is formally inducted into Vedic adhyayanam.',
  },
]

/**
 * Verified Curriculum & Admission Highlights (from client brochure)
 */
const admissionGuidelines = [
  {
    icon: User,
    title: 'Eligible Age & Selection',
    subtitle: 'Ages 8 to 12 Years',
    desc: 'Students are screened and selected at the tender age of 8 to 12 years immediately following Upanayanam. Screening evaluates sincerity, discipline, and earnest desire to learn.',
  },
  {
    icon: BookOpen,
    title: 'Veda Shakha & Method',
    subtitle: 'Krishna Yajur Veda',
    desc: 'Oral adhyayanam by chanting, hearing, repeating, and committing to memory. Strict adherence to authentic Swara and Pitch under residential Guru-Shishya Parampara.',
  },
  {
    icon: Clock,
    title: 'Course Duration & Prayoga',
    subtitle: '10 to 12 Years to Mastery',
    desc: 'Normally takes 10 to 12 years for complete mastery in one Shakha, encompassing Veda Adhyayanam, Sanskrit, Dharma Sastras, and practical ritual training (Prayoga).',
  },
  {
    icon: Award,
    title: 'Recognition & Higher Studies',
    subtitle: 'Awards, Medals & Stipends',
    desc: 'Successful vidyarthis upon completion receive Cash Awards, Medals, and Merit Certificates, with stipends extended to support advanced Vedic research and higher studies.',
  },
]

/**
 * 100% Free Complete Student Welfare Provisions
 */
const welfareItems = [
  {
    icon: Utensils,
    title: 'Sattvic Food & Boarding',
    desc: 'Three wholesome, pure vegetarian traditional meals prepared daily with devotion.',
  },
  {
    icon: HomeIcon,
    title: 'Residential Lodging',
    desc: 'Peaceful, safe, and clean living quarters under 24/7 care and guidance of acharyas.',
  },
  {
    icon: ShieldCheck,
    title: 'Traditional Attire (Vastrams)',
    desc: 'Free traditional veshtis, angavastrams, and personal clothing throughout the course.',
  },
  {
    icon: Heart,
    title: 'Complete Healthcare',
    desc: 'Free medical care, routine checkups, first aid, and physician visits whenever needed.',
  },
  {
    icon: BookOpen,
    title: 'Books & Study Material',
    desc: 'All sacred texts, recitation manuals, stationery, and learning aids supplied free.',
  },
  {
    icon: Compass,
    title: 'Travel & Wellness Care',
    desc: 'Hometown travel support during scheduled breaks and weekly traditional oil bath.',
  },
]

function Compass(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}

/**
 * Parent FAQs
 */
const parentFaqs = [
  {
    q: 'Can parents visit their children at the Gurukulam?',
    a: 'Yes. Parents are warmly welcomed to visit during designated visiting hours and scheduled family weekends, ensuring a balanced rhythm between focused study and family bonding.',
  },
  {
    q: 'Is there any tuition fee, donation, or hidden cost?',
    a: 'Absolutely none. Vedic education, lodging, sattvic boarding, clothing, books, and healthcare are provided completely 100% free of cost by Seetharama Gurukulam Trust.',
  },
  {
    q: 'What is the academic term and admission window?',
    a: 'The academic year runs from June to May. Admissions for each upcoming batch close by the second week of June every year.',
  },
  {
    q: 'What if the child has no prior Sanskrit or chanting background?',
    a: 'Prior experience is not mandatory. Our experienced acharyas patiently instruct students from the foundational alphabets and swaras, provided the child is between 8–12 years and has completed Upanayanam.',
  },
]

export default function Admission() {
  return (
    <>
      <SEO
        title="Admission Enquiry — Veda Patasala"
        description="Enquire for student admission at Sri Seetharama Gurukulam Trust Veda Patasala, Chennai. 100% free residential Vedic education, boarding, lodging, clothing, and complete care."
        path="/admission"
      />

      {/* ── 1. MAJESTIC ADMISSION HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream via-[#F7EFE2] to-cream py-14 sm:py-18 lg:py-20 border-b border-gold/30">
        <div className="pattern-kolam absolute inset-0 opacity-[0.14]" aria-hidden="true" />
        <div className="site-container relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-gold bg-gold-soft/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-maroon">
                <Sparkles size={14} className="text-saffron-deep" aria-hidden="true" />
                <span>Admission &amp; Vidyarthi Pravesham</span>
              </div>

              {/* Main Headline */}
              <h1 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-maroon sm:text-4xl md:text-5xl lg:text-[52px]">
                Gurukulam Student Admission
              </h1>

              {/* Editorial Description */}
              <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
                Thank you for considering Sri Seetharama Gurukulam Veda Patasala for your child.
                Dedicated to imparting authentic Krishna Yajur Veda adhyayanam, Sanskrit, and
                Shastras under the sacred Guru-Shishya Parampara — completely free of cost.
              </p>

              {/* Key Trust Pillars Strip */}
              <div className="mt-8 flex flex-wrap justify-center gap-2.5 sm:gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-ivory px-3.5 py-1.5 text-xs font-semibold text-maroon shadow-xs">
                  <User size={14} className="text-saffron-deep" />
                  <span>Ages 8 to 12 Years (Post-Upanayanam)</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-ivory px-3.5 py-1.5 text-xs font-semibold text-maroon shadow-xs">
                  <Award size={14} className="text-saffron-deep" />
                  <span>100% Free Education &amp; Care</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-ivory px-3.5 py-1.5 text-xs font-semibold text-maroon shadow-xs">
                  <BookOpen size={14} className="text-saffron-deep" />
                  <span>Krishna Yajur Veda Adhyayanam</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-ivory px-3.5 py-1.5 text-xs font-semibold text-maroon shadow-xs">
                  <Calendar size={14} className="text-saffron-deep" />
                  <span>Term: June–May (Closes 2nd Wk June)</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 2. GUIDELINES & CURRICULUM HIGHLIGHTS ── */}
      <section className="py-14 sm:py-18">
        <div className="site-container">
          <Reveal>
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-saffron-deep">
                Eligibility &amp; Structure
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-maroon sm:text-4xl">
                Admission Guidelines &amp; Vedic Curriculum
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-ink-soft">
                Authentic traditional adhyayanam structured in strict accordance with the age-old
                Gurukula system of oral learning and spiritual discipline.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {admissionGuidelines.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="flex h-full flex-col justify-between rounded-card border border-gold-soft bg-ivory p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-gold hover:shadow-elevated">
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-saffron-soft text-saffron-deep">
                      <item.icon size={22} aria-hidden="true" />
                    </span>
                    <p className="mt-4 text-[11px] font-bold uppercase tracking-wider text-saffron-deep">
                      {item.subtitle}
                    </p>
                    <h3 className="mt-1 font-serif text-2xl font-bold text-maroon">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. 100% FREE STUDENT WELFARE SECTION ── */}
      <section className="border-y border-gold/30 bg-ivory py-14 sm:py-18">
        <div className="site-container">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-saffron-soft/60 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-maroon">
                <CheckCircle2 size={13} className="text-saffron-deep" />
                <span>100% Free of Cost</span>
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-maroon sm:text-4xl">
                Comprehensive Student Welfare &amp; Paternal Care
              </h2>
              <p className="mt-3 text-ink-soft">
                All expenses are fully supported through philanthropist donations and the Trust corpus
                fund. No fees, donations, or hidden charges are ever collected from student families.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {welfareItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="flex h-full items-start gap-4 rounded-xl border border-gold-soft/80 bg-cream/70 p-5 shadow-xs transition hover:border-gold hover:bg-cream">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-maroon text-cream">
                    <item.icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-maroon">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. THE 4-STEP ADMISSION JOURNEY ── */}
      <section className="py-14 sm:py-18">
        <div className="site-container">
          <Reveal>
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-saffron-deep">
                Step-by-Step Flow
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-maroon sm:text-4xl">
                The Admission Journey
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-ink-soft">
                A transparent, compassionate pathway designed to make families feel welcomed and guided.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {admissionSteps.map((step, idx) => (
              <Reveal key={step.title} delay={idx * 0.08}>
                <div className="relative flex h-full flex-col rounded-card border border-gold-soft bg-ivory p-6 shadow-card">
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-maroon font-serif text-xl font-bold text-cream shadow-xs">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-saffron-deep">
                      Stage {idx + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl font-bold text-maroon">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. APPLICATION FORM & PARENT GUIDANCE ── */}
      <section id="application-form" className="bg-ivory py-14 sm:py-18 border-t border-gold/30">
        <div className="site-container">
          {/* Section Introduction */}
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-saffron-deep">
                Application Form
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-maroon sm:text-4xl">
                Begin Student Admission Enquiry
              </h2>
              <p className="mt-3 text-ink-soft">
                Please complete the details below. Our admissions coordinator and acharyas will
                review and reach out within 24 to 48 hours.
              </p>
            </div>
          </Reveal>

          {/* Verification Guidance & WhatsApp Quick Access Card */}
          <div className="mx-auto mt-8 max-w-3xl">
            <Reveal>
              <div className="flex flex-col gap-4 rounded-xl border border-gold/60 bg-saffron-soft/40 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                <div className="flex items-start gap-3">
                  <FileCheck2 size={24} className="mt-0.5 shrink-0 text-maroon" />
                  <div>
                    <h4 className="font-serif text-lg font-bold text-maroon">
                      Verification Documents Required at Admission
                    </h4>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink-soft">
                      Copies of the child’s <strong>Birth Certificate</strong>, <strong>Aadhaar Card</strong>,
                      and <strong>Bank Passbook</strong> will be requested by the administration office during formal verification.
                    </p>
                  </div>
                </div>

                <a
                  href={whatsappLink('Namaste, I would like to enquire about student admission at Seetharama Gurukulam.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-whatsapp bg-white px-4 py-2 text-xs font-bold text-[#1a7a3a] shadow-xs transition hover:bg-whatsapp/10"
                >
                  <MessageCircle size={15} />
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Form Container */}
          <div className="mx-auto mt-8 max-w-3xl">
            <Reveal delay={0.1}>
              <EnquiryForm
                formName="Admission Enquiry"
                subject="New Gurukulam Student Admission Enquiry"
                whatsappLabel="admission"
                fields={[
                  // ── 1. Student Particulars ──
                  {
                    type: 'section',
                    name: 'sec_student',
                    label: '1. Student Particulars (विद्यार्थी विवरण)',
                    hint: 'Details of the child seeking admission into the Patasala',
                    icon: User,
                  },
                  {
                    name: 'studentName',
                    label: 'Name of the child *',
                    placeholder: 'Enter full name of the child',
                    rules: { required: 'Please enter the child’s name.' },
                  },
                  {
                    name: 'dateOfBirth',
                    label: 'Date of birth *',
                    type: 'date',
                    rules: { required: 'Please enter the date of birth.' },
                  },
                  {
                    name: 'age',
                    label: 'Age in years * (Eligible: 8 to 12)',
                    type: 'number',
                    placeholder: 'e.g. 9',
                    rules: {
                      required: 'Please enter the child’s age.',
                      min: { value: 7, message: 'Eligible age is typically 8 to 12 years.' },
                      max: { value: 16, message: 'Please confirm age with the admissions desk.' },
                    },
                  },
                  {
                    name: 'nakshatram',
                    label: 'Birth Star of the child (Nakshatram) *',
                    placeholder: 'e.g. Rohini, Ashwini, Hastham',
                    rules: { required: 'Please enter the child’s nakshatram.' },
                  },
                  {
                    name: 'nativePlace',
                    label: 'Native place / Origin *',
                    placeholder: 'e.g. Kumbakonam, Thanjavur, Chennai',
                    rules: { required: 'Please enter the native place.' },
                  },
                  {
                    name: 'previousEducation',
                    label: 'Current / previous schooling details *',
                    placeholder: 'e.g. 4th or 5th Standard completed',
                    rules: { required: 'Please share current schooling details.' },
                  },

                  // ── 2. Lineage & Gothram ──
                  {
                    type: 'section',
                    name: 'sec_lineage',
                    label: '2. Lineage & Gothram (गोत्र एवं परम्परा)',
                    hint: 'Hereditary Shakha and family lineage details',
                    icon: BookOpen,
                  },
                  {
                    name: 'fatherGothram',
                    label: 'Father’s Gothram *',
                    placeholder: 'e.g. Koushika, Bharadwaja, Harita',
                    rules: { required: 'Please enter Father’s Gothram.' },
                  },
                  {
                    name: 'motherGothram',
                    label: 'Mother’s Gothram *',
                    placeholder: 'e.g. Vadhoola, Kashyapa, Srivatsa',
                    rules: { required: 'Please enter Mother’s Gothram.' },
                  },
                  {
                    name: 'vedicBackground',
                    label: 'Prior Vedic or Sanskrit exposure (optional)',
                    full: true,
                    hint: 'Any prior basic chanting, sandhyavandanam or sloka recitation experience — leave blank if none.',
                  },

                  // ── 3. Parent & Contact Details ──
                  {
                    type: 'section',
                    name: 'sec_parent',
                    label: '3. Parent / Guardian Contact (पालक सम्पर्क)',
                    hint: 'Contact details of the parent or guardian',
                    icon: Users,
                  },
                  {
                    name: 'guardianName',
                    label: 'Parent / Guardian name *',
                    placeholder: 'Enter parent or guardian full name',
                    rules: { required: 'Please enter the parent or guardian’s name.' },
                  },
                  {
                    name: 'relationship',
                    label: 'Relationship to child *',
                    placeholder: 'e.g. Father, Mother, Guardian',
                    rules: { required: 'Please enter the relationship.' },
                  },
                  {
                    name: 'occupation',
                    label: 'Parent’s occupation *',
                    placeholder: 'Enter occupation / profession',
                    rules: { required: 'Please enter occupation.' },
                  },
                  {
                    name: 'cityState',
                    label: 'Current city & state of living *',
                    placeholder: 'e.g. Chennai, Tamil Nadu',
                    rules: { required: 'Please enter your current place of living.' },
                  },
                  {
                    name: 'phone',
                    label: 'Primary contact mobile number *',
                    type: 'tel',
                    autoComplete: 'tel',
                    placeholder: '10-digit Indian mobile number',
                    rules: phoneRules,
                  },
                  {
                    name: 'email',
                    label: 'Email address *',
                    type: 'email',
                    autoComplete: 'email',
                    placeholder: 'name@example.com',
                    rules: emailRules,
                  },

                  // ── 4. Aspiration & Purpose ──
                  {
                    type: 'section',
                    name: 'sec_aspiration',
                    label: '4. Purpose of Joining Gurukulam (उद्देश्य)',
                    hint: 'Share your family’s vision for the child’s Vedic journey',
                    icon: Sparkles,
                  },
                  {
                    name: 'message',
                    label: 'Why would you like your child to join Seetharama Gurukulam? *',
                    type: 'textarea',
                    full: true,
                    placeholder: 'Briefly describe your interest in traditional Vedic adhyayanam and learning at the Gurukulam…',
                    rules: { required: 'Please share your family’s purpose for joining the Gurukulam.' },
                  },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 6. PARENT FAQS ── */}
      <section className="py-14 sm:py-18">
        <div className="site-container">
          <Reveal>
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold-soft/30 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-maroon">
                <HelpCircle size={14} className="text-saffron-deep" />
                <span>Parent Guidance</span>
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-maroon sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-ink-soft">
                Common questions answered for families considering traditional Gurukulam education.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {parentFaqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.08}>
                <div className="rounded-xl border border-gold-soft bg-ivory p-6 shadow-xs">
                  <h3 className="font-serif text-xl font-bold text-maroon">
                    {faq.q}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Need help footer strip */}
          <div className="mt-10 rounded-2xl border border-gold/40 bg-cream p-6 text-center sm:p-8">
            <h3 className="font-serif text-2xl font-bold text-maroon">
              Have specific questions about admission?
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-ink-soft">
              Our acharyas and admissions coordinators are happy to assist your family over phone or WhatsApp.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${site.phoneTel}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-maroon px-6 py-2.5 text-sm font-semibold text-cream transition hover:bg-saffron-deep"
              >
                <Phone size={15} />
                <span>Call {site.phoneDisplay}</span>
              </a>
              <a
                href={whatsappLink('Namaste, I have a few questions regarding student admission at Seetharama Gurukulam.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border-2 border-whatsapp bg-white px-6 py-2.5 text-sm font-semibold text-[#1a7a3a] transition hover:bg-whatsapp/10"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Admissions</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
