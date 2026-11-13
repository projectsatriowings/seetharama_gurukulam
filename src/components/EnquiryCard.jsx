import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Card from './Card.jsx'

export default function EnquiryCard({ icon: Icon, title, description, to, buttonLabel }) {
  return (
    <Card className="relative overflow-hidden">
      <div className="pattern-kolam absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-saffron-soft text-saffron-deep"><Icon size={26} /></span>
        <h3 className="mt-5 font-serif text-3xl font-bold text-maroon">{title}</h3>
        <p className="mt-2 text-ink-soft">{description}</p>
        <Link to={to} className="mt-5 inline-flex min-h-[44px] items-center gap-2 font-semibold text-maroon hover:text-saffron-deep">
          {buttonLabel} <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </Card>
  )
}
