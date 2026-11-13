import GalleryGrid from '../components/GalleryGrid.jsx'
import PageHero from '../components/PageHero.jsx'
import SEO from '../components/SEO.jsx'

export default function Gallery() {
  return (
    <>
      <SEO title="Gallery" description="Photographs from festivals, classes, poojas and campus life at Seetharama Gurukulam Trust." path="/gallery" />
      <PageHero eyebrow="Gallery" title="Glimpses of gurukulam life" description="Tap any photograph to view it larger." />
      <section className="py-14">
        <div className="site-container"><GalleryGrid /></div>
      </section>
    </>
  )
}
