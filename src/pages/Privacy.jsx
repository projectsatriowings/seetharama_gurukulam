import PageHero from '../components/PageHero.jsx'
import SEO from '../components/SEO.jsx'
import { site } from '../data/site.js'

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" description="How Seetharama Gurukulam Trust collects and uses information from enquiry forms." path="/privacy" />
      <PageHero eyebrow="Privacy" title="Privacy policy" description="A simple, plain-language summary of how we handle the details you share with us." />
      <section className="py-14">
        <div className="site-container">
          <div className="mx-auto max-w-3xl space-y-8 text-ink-soft">
          <section><h2 className="font-serif text-2xl font-bold text-maroon">What we collect</h2><p className="mt-2">Only what you enter in an enquiry form: your name, phone number, email address, and the details of your enquiry (for example, a student’s name and date of birth on an admission form, or a preferred date for a pooja).</p></section>
          <section><h2 className="font-serif text-2xl font-bold text-maroon">How we use it</h2><p className="mt-2">Solely to respond to your enquiry and, where relevant, to arrange admission, a service, or a donation discussion. We do not sell your details, and we do not use them for unrelated marketing.</p></section>
          <section><h2 className="font-serif text-2xl font-bold text-maroon">Children’s data</h2><p className="mt-2">Admission enquiries are made by a parent or guardian, not by children. Details about a child are used only to assess and arrange admission, and are handled with care.</p></section>
          <section><h2 className="font-serif text-2xl font-bold text-maroon">Forms and third parties</h2><p className="mt-2">Enquiry forms are submitted through Web3Forms, which forwards your message to the trust by email. If you choose WhatsApp instead, your message goes directly through WhatsApp under WhatsApp’s own privacy policy.</p></section>
          <section><h2 className="font-serif text-2xl font-bold text-maroon">Questions or corrections</h2><p className="mt-2">Write to us at <a href={`mailto:${site.email}`} className="font-semibold text-maroon underline">{site.email}</a> and we will help, including correcting or deleting your enquiry details where reasonable.</p></section>
          </div>
        </div>
      </section>
    </>
  )
}
