import Button from '../components/Button.jsx'
import PageHero from '../components/PageHero.jsx'
import SEO from '../components/SEO.jsx'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="This page could not be found on the Seetharama Gurukulam Trust website." path="/404" />
      <PageHero eyebrow="Not found" title="This path seems to wander elsewhere" description="The page you were looking for may have moved, or the link may be incomplete. Let us guide you back." />
      <section className="site-container py-14 text-center">
        <p className="font-serif text-7xl font-semibold text-maroon">404</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/">Back to home</Button>
          <Button to="/contact" variant="secondary">Contact us</Button>
        </div>
      </section>
    </>
  )
}
