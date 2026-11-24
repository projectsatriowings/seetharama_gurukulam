import Card from '../components/Card.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import SEO, { orgJsonLd } from '../components/SEO.jsx'
import { site } from '../data/site.js'
import { vedaPatshala } from '../data/vedaPatshala.js'

export default function About() {
  const { history, acharyaBlessing, aimsAndObjectives, leadership, contributions } = vedaPatshala

  return (
    <>
      <SEO
        title="About"
        description="Official institutional history, sacred patronage, aims and objectives of Seetha Rama Gurukulam Trust."
        path="/about"
        jsonLd={orgJsonLd}
      />
      <PageHero
        eyebrow="About the Trust"
        title="Seetha Rama Gurukulam Trust"
        description="Established under the blessings and grace of His Holiness Sri Paramacharyal of Sri Kanchi Kamakoti Peetam for the propagation of Vedic education."
      />

      {/* ── 1. HISTORICAL FOUNDATION & SACRED BLESSINGS ── */}
      <section className="py-14 sm:py-18">
        <div className="site-container grid grid-cols-1 gap-10 lg:grid-cols-12 w-full min-w-0 max-w-full">
          {/* Institutional History */}
          <div className="w-full min-w-0 max-w-full lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft bg-cream px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-saffron-deep">
                Institutional Origin
              </div>
              <h2 className="mt-3 font-serif text-3xl font-bold text-maroon sm:text-4xl">
                The Origin &amp; Sacred Journey
              </h2>
              <div className="mt-6 space-y-4 text-ink-soft leading-relaxed">
                <p>
                  <strong className="text-maroon">Seetha Rama Gurukula Veda Patasala</strong> was
                  started in the year <strong>1996</strong> with initially two students under{' '}
                  <strong className="text-maroon">
                    Veda Vidyalankara, Vidya Ratnam Sri V. Rajagopala Ganapatigal
                  </strong>
                  .
                </p>
                <p>
                  The institution was founded with the benign blessings and grace of{' '}
                  <strong className="text-maroon">
                    His Holiness Sri Paramacharyal of Sri Kanchi Kamakoti Peetam
                  </strong>
                  . Housed originally in Sri Ganapatigal&apos;s residence as a traditional Gurukulam,
                  the Patasala grew steadily over the years.
                </p>
                <p>
                  As directed by Sri Aacharyal to institute a separate Trust for its future upkeep and
                  growth, the Trust was constituted and registered in <strong>2008</strong> as a
                  Non-Profitable Charitable Trust under the Indian Trusts Act.
                </p>
                <p>
                  Later, the Patasala was shifted to its present premises at{' '}
                  <strong>Veda Bhavan, No. 486, T.T.K. Road, Alwarpet, Chennai – 600018</strong>.
                </p>
                <p>
                  Today, <strong className="text-maroon">Brahmasri R. Srikrishna Ganapatigal</strong>{' '}
                  carries forward the sacred work of his father and guru, ensuring the unbroken
                  transmission of Vedic adhyayanam in the traditional Gurukula method.
                </p>
              </div>

              {/* Verified Chronology Tiles */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-gold-soft bg-cream p-4">
                  <span className="font-sans text-2xl font-bold text-saffron-deep sm:text-3xl">1996</span>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-maroon">Patasala Founded</p>
                  <p className="mt-1 text-xs text-ink-soft">Started with two students under Sri V. Rajagopala Ganapatigal.</p>
                </div>
                <div className="rounded-xl border border-gold-soft bg-cream p-4">
                  <span className="font-sans text-2xl font-bold text-saffron-deep sm:text-3xl">2008</span>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-maroon">Trust Registered</p>
                  <p className="mt-1 text-xs text-ink-soft">Registered under the Indian Trusts Act as directed by Sri Aacharyal.</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Acharya Blessing Card */}
          <div className="w-full min-w-0 max-w-full lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl border border-gold/40 bg-maroon-dark p-6 sm:p-8 text-cream shadow-warm flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold-soft">
                    Sacred Benediction
                  </span>
                  <h3 className="mt-2 font-serif text-2xl font-bold text-cream sm:text-3xl">
                    Sri Paramacharyal&apos;s Blessing
                  </h3>
                  <blockquote className="mt-6 border-l-2 border-gold pl-4 font-serif text-lg leading-relaxed text-cream/90 italic">
                    &ldquo;{acharyaBlessing.quote}&rdquo;
                  </blockquote>
                  <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gold-soft">
                    — {acharyaBlessing.source}
                  </p>
                </div>

                <div className="mt-8 rounded-xl border border-gold/20 bg-maroon/50 p-4">
                  <p className="text-xs leading-relaxed text-cream/80">
                    The Trust adheres faithfully to the guidance of His Holiness, dedicated entirely to
                    preserving Vedic sciences, Shastras, and traditional oral learning.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 2. AIMS & OBJECTIVES OF THE TRUST ── */}
      <section className="bg-ivory py-14 sm:py-18 border-y border-gold-soft/50">
        <div className="site-container">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-saffron-deep">
                Official Charter
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-maroon sm:text-4xl">
                Aims &amp; Objectives of the Trust
              </h2>
              <p className="mt-3 text-sm text-ink-soft sm:text-base">
                As set forth in the official charter of Seetha Rama Gurukulam Trust.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aimsAndObjectives.map((aim, idx) => (
              <Reveal key={aim.id} delay={idx * 0.06}>
                <div className="flex h-full flex-col justify-between rounded-xl border border-gold-soft bg-cream p-5 sm:p-6 shadow-xs transition hover:shadow-card hover:border-gold">
                  <div>
                    <span className="font-serif text-2xl font-bold text-gold-soft">
                      0{aim.id}
                    </span>
                    <h3 className="mt-2 font-serif text-lg font-bold text-maroon">
                      {aim.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {aim.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. PATRONAGE & CONTINUITY ── */}
      <section className="py-14 sm:py-18">
        <div className="site-container">
          <Reveal>
            <SectionHeading
              eyebrow="Guru-Shishya Parampara"
              title="Sacred Leadership &amp; Lineage"
              description="Guided by devotion to the Vedas and continuous adherence to traditional adhyayanam."
              align="center"
            />
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Founder */}
            <Reveal>
              <div className="flex h-full flex-col rounded-2xl border border-gold-soft bg-cream p-6 sm:p-8 shadow-xs">
                <div className="flex items-center gap-4">
                  <img
                    src={leadership.founder.image}
                    alt={leadership.founder.name}
                    width="80"
                    height="80"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/logo-photo-original.png'
                    }}
                    className="h-20 w-20 shrink-0 rounded-full border-2 border-gold object-cover object-top shadow-sm"
                  />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-saffron-deep">
                      {leadership.founder.role}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-maroon">
                      {leadership.founder.name}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  Founded Seetha Rama Gurukula Veda Patasala in 1996 with two students under the blessings
                  of His Holiness Sri Paramacharyal of Sri Kanchi Kamakoti Peetam. He nurtured the
                  institution as a traditional Gurukulam and laid the sacred foundation for the Trust.
                </p>
              </div>
            </Reveal>

            {/* Successor */}
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-gold-soft bg-cream p-6 sm:p-8 shadow-xs">
                <div className="flex items-center gap-4">
                  <img
                    src={leadership.acharya.image}
                    alt={leadership.acharya.name}
                    width="80"
                    height="80"
                    loading="lazy"
                    className="h-20 w-20 shrink-0 rounded-full border-2 border-gold object-cover object-top shadow-sm"
                  />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-saffron-deep">
                      {leadership.acharya.role}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-maroon">
                      {leadership.acharya.name}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  Son and disciple of Sri V. Rajagopala Ganapatigal, Brahmasri R. Srikrishna Ganapatigal
                  carries forward the sacred work of his father and guru, guiding the Vidyarthis in oral
                  Veda adhyayanam, correct intonation, swara, and traditional discipline.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4. OFFICIAL TRUST & CONTRIBUTION INFORMATION ── */}
      <section className="bg-cream py-14 border-t border-gold-soft/50">
        <div className="site-container max-w-4xl mx-auto">
          <Reveal>
            <div className="rounded-2xl border border-gold-soft bg-ivory p-6 sm:p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-maroon">
                Trust Registration &amp; Tax Exemption
              </h3>
              <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-lg bg-cream/70 p-3.5 border border-gold-soft/40">
                  <dt className="text-[10px] font-bold uppercase tracking-widest text-ink-soft">Legal Constitution</dt>
                  <dd className="mt-1 text-sm font-semibold text-maroon">Non-Profitable Charitable Trust</dd>
                </div>
                <div className="rounded-lg bg-cream/70 p-3.5 border border-gold-soft/40">
                  <dt className="text-[10px] font-bold uppercase tracking-widest text-ink-soft">Registration</dt>
                  <dd className="mt-1 text-sm font-semibold text-maroon">Under Indian Trusts Act (2008)</dd>
                </div>
                <div className="rounded-lg bg-cream/70 p-3.5 border border-gold-soft/40">
                  <dt className="text-[10px] font-bold uppercase tracking-widest text-ink-soft">Income Tax Status</dt>
                  <dd className="mt-1 text-sm font-semibold text-maroon">Section 80-G Tax Exemption</dd>
                </div>
              </dl>

              <div className="mt-6 border-t border-gold-soft/60 pt-4 text-xs text-ink-soft leading-relaxed space-y-2">
                <p>
                  <strong>Contributions:</strong> {contributions.solicitation}
                </p>
                <p>
                  <strong>Accepted Modes:</strong> {contributions.paymentModes.join(', ')} payable to{' '}
                  <strong className="text-maroon">{contributions.payeeName}</strong>.
                </p>
                <p>
                  All monetary donations to Seetha Rama Gurukulam Trust attract tax exemption under{' '}
                  <strong>Section 80-G</strong> of the Income Tax Act.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
