import { CheckCircle2 } from 'lucide-react'
import Button from '../components/Button.jsx'
import PageHero from '../components/PageHero.jsx'
import SEO from '../components/SEO.jsx'

export default function ThankYou() {
  return (
    <>
      <SEO title="Thank You" description="Thank you for your enquiry to Seetharama Gurukulam Trust." path="/thank-you" />
      <PageHero eyebrow="Thank you" title="Your enquiry has been sent" description="We are grateful you reached out. Our team will respond within 24 to 48 hours." />
      <section className="site-container py-14 text-center">
        <CheckCircle2 size={56} className="mx-auto text-saffron-deep" aria-hidden="true" />
        <p className="mx-auto mt-5 max-w-xl text-ink-soft">If your matter is urgent, you can also message us on WhatsApp using the green button at the bottom-right of this page.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/">Back to home</Button>
          <Button to="/events" variant="secondary">View events</Button>
        </div>
      </section>
    </>
  )
}
