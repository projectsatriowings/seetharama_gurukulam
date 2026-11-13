import { site, whatsappMessages } from '../data/site.js'

export function whatsappLink(message, number = site.whatsappNumber) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
export function messageForRoute(pathname) {
  return whatsappMessages[pathname] || whatsappMessages.default
}
export function buildEnquiryWhatsAppMessage(formName, values) {
  const lines = [`Namaste, this is an enquiry about ${formName} at Seetharama Gurukulam.`]
  Object.entries(values || {}).forEach(([key, value]) => {
    if (value && key !== 'consent' && key !== 'website') lines.push(`${key}: ${value}`)
  })
  return lines.join('\n')
}
