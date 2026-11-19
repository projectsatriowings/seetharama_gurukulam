export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`card-border rounded-card border border-gold-soft bg-ivory p-6 shadow-card sm:p-7 ${
        hover ? 'transition-all duration-200 hover:-translate-y-1 hover:border-gold hover:shadow-warm' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
