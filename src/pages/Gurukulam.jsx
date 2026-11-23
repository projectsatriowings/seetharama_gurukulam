import {
  AlertCircle,
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  Compass,
  GraduationCap,
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import SEO from '../components/SEO.jsx'
import { vedaPatshala } from '../data/vedaPatshala.js'

export default function Gurukulam() {
  const { curriculum, freeStudentFacilities, prayogaTraining, proposedSrowthaClasses, ageDiscrepancyNote, acharyaBlessing } = vedaPatshala

  return (
    <>
      <SEO
        title="The Gurukulam & Veda Patasala"
        description="Veda Patasala education: Krishna Yajur Veda adhyayanam, oral tradition, swara intonation, prayoga training, and free student facilities at Seetha Rama Gurukulam."
        path="/gurukulam"
      />
      <PageHero
        eyebrow="Educational Institution"
        title="Seetha Rama Gurukula Veda Patasala"
        description="Preserving and propagating Krishna Yajur Veda through traditional oral education under the Guru-Shishya Parampara."
      />

      {/* ── 1. PATTERN OF VEDIC EDUCATION ── */}
      <section className="py-14 sm:py-18">
        <div className="site-container">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-saffron-deep">
                Pattern of Education
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-maroon sm:text-4xl">
                The Sacred Tradition of Vedic Adhyayanam
              </h2>
              <p className="mt-4 text-ink-soft leading-relaxed">
                The Vedas are the eternal glory of our tradition. In accordance with authentic Gurukula oral Vedic education, learning is transmitted directly from the Guru to the Shishya through hearing, repeating, and committing the sacred Mantras to memory with strict adherence to correct intonation and Swara / Pitch.
              </p>
            </div>
          </Reveal>

          {/* Core Educational Dimensions */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal delay={0.05}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-gold-soft bg-cream p-6 shadow-xs">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-saffron-soft text-saffron-deep">
                    <BookOpen size={24} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-bold text-maroon">
                    {curriculum.veda}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    Imparting {curriculum.veda} in its {curriculum.shakhas.toLowerCase()} in complete fidelity to the Guru-Shishya tradition.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-gold-soft bg-cream p-6 shadow-xs">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-saffron-soft text-saffron-deep">
                    <Users size={24} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-bold text-maroon">
                    Oral Tradition
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {curriculum.pedagogy.method}. Chanting, hearing, repeating, and committing to memory.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-gold-soft bg-cream p-6 shadow-xs">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-saffron-soft text-saffron-deep">
                    <Sparkles size={24} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-bold text-maroon">
                    Swara &amp; Pitch
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {curriculum.pedagogy.focus}. Ensuring every syllable is rendered with authentic Vedic pitch.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-gold-soft bg-cream p-6 shadow-xs">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-saffron-soft text-saffron-deep">
                    <Clock size={24} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-bold text-maroon">
                    Course Duration
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    Normally takes {curriculum.duration} for complete mastery in one Shakha under residential guidance.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 2. FREE STUDENT FACILITIES (VERIFIED ONLY) ── */}
      <section className="bg-ivory py-14 sm:py-18 border-y border-gold-soft/50">
        <div className="site-container">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-saffron-deep">
                Student Welfare
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-maroon sm:text-4xl">
                Verified Facilities Provided Free of Cost
              </h2>
              <p className="mt-3 text-sm text-ink-soft sm:text-base">
                The Patasala provides every enrolled student complete support throughout the course duration without any fees.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {freeStudentFacilities.map((facility, idx) => (
              <Reveal key={facility} delay={idx * 0.06}>
                <div className="flex items-start gap-3.5 rounded-xl border border-gold-soft bg-cream p-5 shadow-xs">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-saffron-deep" aria-hidden="true" />
                  <div>
                    <h3 className="font-serif text-base font-bold text-maroon">
                      {facility}
                    </h3>
                    <p className="mt-1 text-xs text-ink-soft">
                      Provided 100% free of cost throughout the study tenure.
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Age Discrepancy Official Documentation Note */}
          <Reveal delay={0.25}>
            <div className="mt-8 rounded-xl border border-gold/40 bg-cream/70 p-5 sm:p-6 shadow-xs">
              <div className="flex items-start gap-3">
                <AlertCircle size={20} className="mt-0.5 shrink-0 text-saffron-deep" aria-hidden="true" />
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

      {/* ── 3. PRAYOGA TRAINING & PROPOSED SROWTHA CLASSES ── */}
      <section className="py-14 sm:py-18">
        <div className="site-container">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-saffron-deep">
                Curriculum Scope
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-maroon sm:text-4xl">
                Prayoga Training &amp; Proposed Srowtha Studies
              </h2>
              <p className="mt-3 text-sm text-ink-soft sm:text-base">
                Preparing Vedic scholars for sacred rituals while advancing proposals for higher Vedic studies.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Active Prayoga Training */}
            <Reveal>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-gold-soft bg-cream p-6 sm:p-8 shadow-xs">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-soft bg-ivory px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-saffron-deep">
                    <Sparkles size={13} aria-hidden="true" />
                    <span>Active Training</span>
                  </div>
                  <h3 className="mt-3 font-serif text-2xl font-bold text-maroon">
                    {prayogaTraining.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {prayogaTraining.description}
                  </p>
                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-maroon">Covered Functions:</p>
                    <ul className="mt-3 space-y-2">
                      {prayogaTraining.functions.map((fn) => (
                        <li key={fn} className="flex items-center gap-2 text-sm text-ink">
                          <CheckCircle2 size={16} className="text-saffron-deep shrink-0" aria-hidden="true" />
                          <span>{fn}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Proposed Srowtha Classes */}
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-gold-soft bg-cream p-6 sm:p-8 shadow-xs">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-ivory px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-maroon">
                    <Clock size={13} aria-hidden="true" />
                    <span>Future Proposal</span>
                  </div>
                  <h3 className="mt-3 font-serif text-2xl font-bold text-maroon">
                    {proposedSrowthaClasses.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {proposedSrowthaClasses.description}
                  </p>
                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-maroon">Proposed Subject Areas:</p>
                    <ul className="mt-3 space-y-2">
                      {proposedSrowthaClasses.subjects.map((subj) => (
                        <li key={subj} className="flex items-center gap-2 text-sm text-ink">
                          <CheckCircle2 size={16} className="text-gold shrink-0" aria-hidden="true" />
                          <span>{subj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-6 text-xs text-ink-soft/80 italic border-t border-gold-soft/50 pt-3">
                    * Clearly distinguished as an institutional proposal under planning.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4. COMPLETION RECOGNITION & ADMISSION CTA ── */}
      <section className="bg-cream py-14 border-t border-gold-soft/50">
        <div className="site-container text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-saffron-deep">
              Course Completion
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-maroon sm:text-4xl">
              Recognition &amp; Higher Studies
            </h2>
            <p className="mt-3 text-sm text-ink-soft sm:text-base leading-relaxed">
              Upon successful completion of the course, Cash Awards, Medals, and Merit Certificates are extended to successful Vidyarthis, and stipends are provided to encourage higher studies.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button to="/admission">Admission Enquiry</Button>
              <Button to="/contact" variant="secondary">Contact the Gurukulam</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
