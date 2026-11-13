export default function Card({ children, className = '' }) {
  return (
    <div className={`card-border rounded-card border border-gold-soft bg-ivory p-6 shadow-card transition hover:-translate-y-1 hover:border-gold hover:shadow-warm sm:p-7 ${className}`}>
      {children}
    </div>
  )
}
