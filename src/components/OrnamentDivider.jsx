export default function OrnamentDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-gold sm:w-24" />
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="3" fill="#C9A24B" />
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <ellipse key={a} cx="14" cy="7" rx="3.2" ry="6" fill="#E9D8A6" transform={`rotate(${a} 14 14)`} />
        ))}
      </svg>
      <span className="h-px w-16 bg-gold sm:w-24" />
    </div>
  )
}
