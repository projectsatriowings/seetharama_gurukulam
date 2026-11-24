import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Send, MessageCircle, Lock, Loader2, Sparkles, AlertCircle } from 'lucide-react'
import { buildEnquiryWhatsAppMessage, whatsappLink } from '../utils/whatsapp.js'
import FormField, { inputCls } from './FormField.jsx'

export const phoneRules = {
  required: 'Please enter a phone number.',
  pattern: { value: /^(?:\+91[\s-]?)?[6-9]\d{9}$/, message: 'Please enter a valid 10-digit Indian mobile number.' },
}
export const emailRules = {
  required: 'Please enter an email address.',
  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address.' },
}

function Field({ field, register, errors }) {
  const err = errors[field.name]
  const common = {
    id: field.name,
    'aria-invalid': !!err,
    'aria-describedby': err ? `${field.name}-error` : undefined,
    className: inputCls,
    ...register(field.name, field.rules || {}),
  }
  let control
  if (field.type === 'select') {
    control = (
      <select {...common} defaultValue="">
        <option value="" disabled>{field.placeholder || 'Please choose…'}</option>
        {field.options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    )
  } else if (field.type === 'textarea') {
    control = <textarea {...common} rows={4} placeholder={field.placeholder || ''} />
  } else if (field.type === 'date') {
    control = <input type="date" {...common} />
  } else {
    control = (
      <input
        type={field.type || 'text'}
        {...common}
        placeholder={field.placeholder || ''}
        autoComplete={field.autoComplete}
      />
    )
  }
  return <FormField label={field.label} id={field.name} error={err} hint={field.hint}>{control}</FormField>
}

export default function EnquiryForm({ formName, subject, fields, whatsappLabel, externalValues }) {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({ mode: 'onTouched' })
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()
  const values = watch()
  const key = import.meta.env.VITE_WEB3FORMS_KEY

  useEffect(() => {
    if (!externalValues) return
    Object.entries(externalValues).forEach(([fieldName, val]) => {
      if (val !== undefined && val !== null) {
        setValue(fieldName, val, { shouldDirty: true })
      }
    })
  }, [externalValues, setValue])

  const onSubmit = async (data) => {
    if (data.website) return
    if (!key) {
      setStatus('error')
      setErrorMsg('Online submissions are not set up yet (no Web3Forms key). Please use WhatsApp instead — your details are already filled in below.')
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: key, subject, from_name: 'Seetharama Gurukulam Website', ...data, website: undefined, botcheck: false }),
      })
      const json = await res.json()
      if (json.success) navigate('/thank-you')
      else throw new Error(json.message || 'Submission failed')
    } catch {
      setStatus('error')
      setErrorMsg('Sorry, something went wrong while sending your enquiry. Please try again, or send it via WhatsApp instead.')
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-3xl border border-gold-soft/80 bg-white/95 p-6 shadow-xl backdrop-blur-sm sm:p-9"
    >
      {/* Decorative top vibrant line */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-saffron via-gold to-maroon" />

      {/* Form Card Header Pill */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-gold-soft/40 pb-5">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-saffron-deep">
            <Sparkles size={13} className="text-saffron" />
            Direct Enquiry Desk
          </span>
          <h3 className="mt-1 font-serif text-xl font-bold text-maroon sm:text-2xl">
            {formName || 'Send an Enquiry'}
          </h3>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-3 py-1 text-xs font-semibold text-emerald-800 shadow-2xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Active Response
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => {
          if (f.type === 'section') {
            return (
              <div key={f.name} className="pt-3 first:pt-0 sm:col-span-2">
                <div className="flex items-center gap-2.5 border-b border-gold/40 pb-2">
                  {f.icon ? (
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-saffron-soft text-saffron-deep">
                      <f.icon size={16} aria-hidden="true" />
                    </span>
                  ) : null}
                  <div>
                    <h4 className="font-serif text-lg font-bold text-maroon sm:text-xl">{f.label}</h4>
                    {f.hint ? <p className="text-xs text-ink-soft">{f.hint}</p> : null}
                  </div>
                </div>
              </div>
            )
          }
          return (
            <div key={f.name} className={f.full ? 'sm:col-span-2' : ''}>
              <Field field={f} register={register} errors={errors} />
            </div>
          )
        })}
      </div>

      {/* Consent checkbox */}
      <div className="mt-6 rounded-xl border border-gold-soft/50 bg-[#FFFDF9] p-3.5 transition-colors hover:border-gold">
        <label className="flex cursor-pointer items-start gap-3 text-sm text-ink select-none">
          <input
            type="checkbox"
            {...register('consent', { required: 'Please tick the consent box so we can contact you regarding this enquiry.' })}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-gold-soft text-maroon accent-[#6B1D1D] focus:ring-saffron"
          />
          <span className="leading-snug">
            I agree to be contacted by Sri Seetharama Gurukulam Trust regarding this enquiry.
          </span>
        </label>
        {errors.consent ? (
          <p role="alert" aria-live="polite" className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-red-700 animate-fadeIn">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-600" />
            {errors.consent.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot: hidden from people, visible to bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>
      <input type="hidden" {...register('subject')} defaultValue={subject} />

      {status === 'error' ? (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
          aria-live="polite"
          className="mt-5 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-4 text-xs font-semibold text-red-900"
        >
          <AlertCircle size={16} className="shrink-0 text-red-600 mt-0.5" />
          <p>{errorMsg}</p>
        </motion.div>
      ) : null}

      {/* Submission CTA buttons with motion */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <motion.button
          type="submit"
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          disabled={status === 'loading'}
          className="group relative flex min-h-[50px] flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-maroon via-maroon to-[#8B2525] px-6 py-3.5 font-semibold text-white shadow-md transition-all duration-200 hover:shadow-lg hover:from-saffron-deep hover:via-saffron hover:to-saffron-deep disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={18} className="animate-spin text-white" />
              <span>Sending Details…</span>
            </>
          ) : (
            <>
              <span>Send Enquiry</span>
              <Send size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </>
          )}
        </motion.button>

        <motion.a
          href={whatsappLink(buildEnquiryWhatsAppMessage(whatsappLabel || formName, values))}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          className="group flex min-h-[50px] flex-1 items-center justify-center gap-2 rounded-xl border-2 border-[#25D366] bg-white px-6 py-3.5 font-semibold text-[#128C7E] shadow-2xs transition-all duration-200 hover:bg-[#25D366]/10 hover:shadow-sm"
        >
          <MessageCircle size={18} className="text-[#25D366] transition-transform duration-200 group-hover:scale-110" />
          <span>Send via WhatsApp</span>
        </motion.a>
      </div>

      {/* Privacy guarantee footer */}
      <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-ink-soft">
        <Lock size={12} className="text-saffron-deep/70 shrink-0" />
        <p>
          Your details are strictly kept confidential — see our{' '}
          <a href="/privacy" className="font-semibold text-maroon underline underline-offset-2 hover:text-saffron-deep">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </motion.form>
  )
}

