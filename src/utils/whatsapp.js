import { site, whatsappMessages } from '../data/site.js'

/**
 * Generates an authoritative, valid WhatsApp chat link: https://wa.me/<digits>?text=<encoded_text>
 * Flexibly handles any order of parameters:
 * - whatsappLink(message)
 * - whatsappLink(number, message)
 * - whatsappLink(message, number)
 */
export function whatsappLink(arg1, arg2) {
  let message = ''
  let rawNumber = site.whatsappNumber

  if (arg1 && arg2) {
    const str1 = String(arg1).trim()
    const str2 = String(arg2).trim()
    const digits1 = str1.replace(/\D/g, '')
    const digits2 = str2.replace(/\D/g, '')

    // Check which argument is the phone number (has 10+ digits, no alphabetic letters)
    const is1Number = digits1.length >= 10 && !/[a-zA-Z]/.test(str1)
    const is2Number = digits2.length >= 10 && !/[a-zA-Z]/.test(str2)

    if (is1Number && !is2Number) {
      rawNumber = digits1
      message = str2
    } else if (is2Number && !is1Number) {
      rawNumber = digits2
      message = str1
    } else if (/[a-zA-Z]/.test(str1)) {
      message = str1
      rawNumber = digits2 || site.whatsappNumber
    } else {
      rawNumber = digits1 || site.whatsappNumber
      message = str2
    }
  } else if (arg1) {
    const str1 = String(arg1).trim()
    const digits1 = str1.replace(/\D/g, '')

    // If single arg has letters, spaces, or words, it is a message
    if (/[a-zA-Z]/.test(str1) || str1.includes(' ')) {
      message = str1
      rawNumber = site.whatsappNumber
    } else if (digits1.length >= 10) {
      rawNumber = digits1
      message = ''
    } else {
      message = str1
      rawNumber = site.whatsappNumber
    }
  }

  // Ensure clean digits only for wa.me/<phone>
  const cleanNumber = String(rawNumber || site.whatsappNumber).replace(/\D/g, '')

  return message
    ? `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${cleanNumber}`
}

export function messageForRoute(pathname) {
  return whatsappMessages[pathname] || whatsappMessages.default || 'Namaste, I would like to contact Seetha Rama Gurukulam Trust.'
}

export function buildEnquiryWhatsAppMessage(formName, values) {
  const lines = [`Namaste, this is an enquiry about ${formName} at Seetharama Gurukulam.`]
  Object.entries(values || {}).forEach(([key, value]) => {
    if (value && key !== 'consent' && key !== 'website') lines.push(`${key}: ${value}`)
  })
  return lines.join('\n')
}
