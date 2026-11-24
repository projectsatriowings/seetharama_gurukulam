export const inputCls =
  'w-full rounded-xl border border-gold-soft/80 bg-[#FFFDF9] px-4 py-3 text-[15px] text-ink placeholder:text-ink-soft/45 shadow-xs transition-all duration-200 focus:border-saffron focus:bg-white focus:outline-none focus:ring-4 focus:ring-saffron/15 hover:border-gold'

export default function FormField({ label, id, error, children, hint }) {
  return (
    <div className="group">
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-maroon transition-colors group-focus-within:text-saffron-deep"
      >
        {label}
      </label>
      <div className="relative">
        {children}
      </div>
      {hint ? <p className="mt-1.5 text-xs text-ink-soft">{hint}</p> : null}
      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          aria-live="polite"
          className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-red-700 animate-fadeIn"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-600" />
          {error.message || error}
        </p>
      ) : null}
    </div>
  )
}

