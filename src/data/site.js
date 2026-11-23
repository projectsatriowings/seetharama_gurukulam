// Authoritative source: SGT Folder file correction.pdf ONLY.
// No external sources, assumptions, or unconfirmed details are permitted.

export const site = {
  // Official Institutional Names (Strict PDF)
  name: 'Seetha Rama Gurukulam Trust',
  shortName: 'Seetha Rama Gurukulam',
  institution: 'Seetha Rama Gurukulam Trust',
  patasalaName: 'Seetha Rama Gurukula Veda Patasala',
  legalName: 'Seetha Rama Gurukulam Trust',
  tagline: 'The Vedas – Eternal Glory of Our Tradition',

  // Official Communication Channels (Strict PDF)
  phoneDisplay: '89030 39176',
  phoneTel: '+918903039176',
  whatsappNumber: '918903039176',
  email: 'vedicgurukulam@gmail.com',
  websiteDisplay: 'www.vedicgurukulam.com',
  siteUrl: 'https://www.vedicgurukulam.com',

  // Official Institutional Address (Strict PDF)
  addressLines: [
    'New No. 486 (Old No. 176)',
    'T.T.K. Road, Alwarpet',
    'Chennai – 600018, Tamil Nadu',
  ],
  fullAddress: 'New No. 486 (Old No. 176), T.T.K. Road, Alwarpet, Chennai – 600018, Tamil Nadu',
  locationName: 'Veda Bhavan, Alwarpet, Chennai',

  // Chronology & Legal Standing (Strict PDF)
  patasalaStartedYear: '1996',
  trustRegisteredYear: '2008',
  trustType: 'Non-Profitable Charitable Trust under the Indian Trusts Act',
  taxExemption: 'Contributions are eligible for tax exemption under Section 80-G of the Income Tax Act.',

  // Official Contributions & Solicitations (Strict PDF)
  contributions: {
    solicitedFrom: [
      'Mutts',
      'Well-wishers',
      'Philanthropists',
      'Patrons',
      'Charitable Trusts and Institutions',
    ],
    schemes: [
      'Corpus Fund',
      'Endowment and sponsorship schemes',
      'Contributions for birthdays, wedding anniversaries and ancestral commemorations',
      'General monetary or in-kind contributions such as Rice, Dal and Oil',
    ],
    paymentModes: ['Cash', 'G.Pay', 'Cheque', 'Demand Draft', 'NEFT'],
    payeeName: 'SEETHA RAMA GURUKULAM TRUST',
    taxExemption: 'Section 80-G of the Income Tax Act',
  },

  // Centralised Calls to Action (CTAs)
  cta: {
    admission: {
      label: 'Admission Enquiry',
      to: '/admission',
      shortLabel: 'Admission',
      ariaLabel: 'Enquire for Gurukulam student admission',
    },
    contact: {
      label: 'Contact Us',
      to: '/contact',
      ariaLabel: 'Contact Seetha Rama Gurukulam Trust',
    },
    prayoga: {
      label: 'Prayoga & Vedic Studies',
      to: '/parayanam-pooja',
      shortLabel: 'Prayoga',
      ariaLabel: 'Learn about Prayoga training and proposed Srowtha classes',
    },
    gallery: {
      label: 'Gurukulam Gallery',
      to: '/gallery',
      shortLabel: 'Gallery',
      ariaLabel: 'View photographs of the Gurukulam',
    },
  },

  // Social channels removed as none are present in official client PDF
  social: [],

  // Primary Navigation (6 Core Pages)
  nav: [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Gurukulam', to: '/gurukulam' },
    { label: 'Prayoga & Studies', to: '/parayanam-pooja' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Contact', to: '/contact' },
  ],

  // Footer Navigation
  footerNav: [
    { label: 'About the Trust', to: '/about' },
    { label: 'Veda Patasala', to: '/gurukulam' },
    { label: 'Prayoga & Studies', to: '/parayanam-pooja' },
    { label: 'Admission Enquiry', to: '/admission' },
    { label: 'Gurukulam Gallery', to: '/gallery' },
    { label: 'Contact Details', to: '/contact' },
    { label: 'Privacy Policy', to: '/privacy' },
  ],
}

export const whatsappMessages = {
  default: 'Namaste, I would like to get in touch with Seetha Rama Gurukulam Trust.',
  '/admission': 'Namaste, I would like to enquire about student admission to Seetha Rama Gurukula Veda Patasala.',
  '/parayanam-pooja': 'Namaste, I would like to know more about Vedic education and Prayoga at the Gurukulam.',
  '/contact': 'Namaste, I would like to contact Seetha Rama Gurukulam Trust.',
}
