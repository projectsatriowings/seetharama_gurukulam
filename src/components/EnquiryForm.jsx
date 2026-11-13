import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
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
  const common = { id: field.name, 'aria-invalid': !!err, 'aria-describedby': err ? `${field.name}-error` : undefined, className: inputCls, ...register(field.name, field.rules || {}) }
  let control
  if (field.type === 'select') {
    control = <select {...common} defaultValue=""><option value="" disabled>{field.placeholder || 'Please choose…'}</option>{field.options.map((o) => <option key={o} value={o}>{o}</option>)}</select>
  } else if (field.type === 'textarea') {
    control = <textarea {...common} rows={4} placeholder={field.placeholder || ''} />
  } else if (field.type === 'date') {
    control = <input type="date" {...common} />
  } else {
    control = <input type={field.type || 'text'} {...common} placeholder={field.placeholder || ''} autoComplete={field.autoComplete} />
  }
  return <FormField label={field.label} id={field.name} error={err} hint={field.hint}>{control}</FormField>
}

export default function EnquiryForm({ formName, subject, fields, whatsappLabel }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: 'onTouched' })
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()
  const values = watch()
  const key = import.meta.env.VITE_WEB3FORMS_KEY

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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-card border border-gold-soft bg-ivory p-6 shadow-card sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name} className={f.full ? 'sm:col-span-2' : ''}><Field field={f} register={register} errors={errors} /></div>
        ))}
      </div>
      <div className="mt-6">
        <label className="flex items-start gap-3 text-[15px] leading-snug">
          <input type="checkbox" {...register('consent', { required: 'Please tick the consent box so we can contact you about this enquiry.' })} className="mt-1 h-5 w-5 shrink-0 accent-[#6B1D1D]" />
          <span>I agree to be contacted by the trust regarding this enquiry.</span>
        </label>
        {errors.consent ? <p role="alert" aria-live="polite" className="mt-1 text-sm font-semibold text-red-800">{errors.consent.message}</p> : null}
      </div>
      {/* Honeypot: hidden from people, visible to bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>
      <input type="hidden" {...register('subject')} defaultValue={subject} />
      {status === 'error' ? <p role="alert" aria-live="polite" className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-900">{errorMsg}</p> : null}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="submit" disabled={status === 'loading'} className="min-h-[48px] flex-1 rounded-full bg-maroon px-6 py-3 font-semibold text-cream transition hover:bg-saffron-deep disabled:opacity-60">
          {status === 'loading' ? 'Sending…' : 'Send enquiry'}
        </button>
        <a href={whatsappLink(buildEnquiryWhatsAppMessage(whatsappLabel || formName, values))} target="_blank" rel="noopener noreferrer" className="flex min-h-[48px] flex-1 items-center justify-center rounded-full border-2 border-[#25D366] px-6 py-3 font-semibold text-[#1a7a3a] hover:bg-[#25D366]/10">
          Send via WhatsApp instead
        </a>
      </div>
      <p className="mt-5 text-center text-sm text-ink-soft">We will respond within 24 to 48 hours. Your details are used only to respond to this enquiry — see our <a href="/privacy" className="font-semibold text-maroon underline">Privacy Policy</a>.</p>
    </form>
  )
}
