export const inputCls = 'w-full rounded-xl border border-gold-soft bg-ivory px-4 py-3 text-base text-ink placeholder:text-ink-soft/60 focus:border-saffron focus:outline-none focus:ring-2 focus:ring-saffron/40'

export default function FormField({ label, id, error, children, hint }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-maroon">{label}</label>
      {children}
      {hint ? <p className="mt-1 text-sm text-ink-soft">{hint}</p> : null}
      {error ? <p id={`${id}-error`} role="alert" aria-live="polite" className="mt-1 text-sm font-semibold text-red-800">{error.message || error}</p> : null}
    </div>
  )
}
