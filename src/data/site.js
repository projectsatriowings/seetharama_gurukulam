// Single source of truth. Authoritative details verified from client's official brochure (SGT Folder file correction.pdf).
export const site = {
  // Institutional Names
  name: 'Seetharama Gurukulam Trust',
  shortName: 'Seetharama Gurukulam',
  institution: 'Seetha Rama Gurukulam Trust',
  patasalaName: 'Seetha Rama Gurukula Veda Patasala',
  legalName: 'Seetha Rama Gurukulam Trust',
  tagline: 'Preserving the timeless wisdom of the Vedas',

  // Official Communication Channels
  phoneDisplay: '+91 89030 39176',
  phoneTel: '+918903039176',
  whatsappNumber: '918903039176',
  email: 'vedicgurukulam@gmail.com',
  websiteDisplay: 'www.vedicgurukulam.com',
  siteUrl: 'https://www.vedicgurukulam.com',

  // Official Institutional Address
  addressLines: [
    'New No. 486 (Old No. 176)',
    'T.T.K. Road, Alwarpet',
    'Chennai – 600018, Tamil Nadu, India',
  ],
  fullAddress: 'New No. 486 (Old No. 176), T.T.K. Road, Alwarpet, Chennai – 600018, Tamil Nadu, India',
  mapEmbedUrl: 'https://www.google.com/maps?q=486+TTK+Road+Alwarpet+Chennai+600018&output=embed',

  // Internal TODO: Official public visiting hours pending specific client confirmation before displaying publicly
  visitingHours: null,

  // Chronology & Legal Standing (verified from client brochure)
  patasalaStartedYear: '1996',
  trustRegisteredYear: '2008',
  establishedYear: '1996 (Patasala) · 2008 (Trust)',
  registrationNumber: 'Registered Charitable Trust (2008)',
  // Internal TODO: Obtain exact alphanumeric registration certificate number from client
  taxExemption: 'Contributions to Seetha Rama Gurukulam Trust are eligible for tax exemption under Section 80-G of the Income Tax Act.',

  // Verified Institutional Facts
  verifiedFacts: {
    patasalaFounded: '1996',
    initialStudents: 2,
    founder: 'Veda Vidyalankara, Vidya Ratnam Sri V. Rajagopala Ghanapatigal',
    currentHead: 'Nannilam Brahmasri R. Srikrishna Ganapatigal',
    divineGuidance: 'His Holiness Sri Paramacharyal of Sri Kanchi Kamakoti Peetam',
    trustRegistered: '2008',
    trustType: 'Non-Profitable Charitable Trust under the Indian Trusts Act',
    vedicTradition: 'Krishna Yajur Veda Adhyayanam & Shastras',
    freeProvisions: 'Boarding, lodging, clothing, books, and medicines provided 100% free to students',
  },

  // Centralised Calls to Action (CTAs)
  cta: {
    admission: {
      label: 'Admission Enquiry',
      to: '/admission',
      shortLabel: 'Admission',
      ariaLabel: 'Apply for Gurukulam student admission',
    },
    contact: {
      label: 'Contact Us',
      to: '/contact',
      ariaLabel: 'Contact Seetharama Gurukulam Trust',
    },
    parayanam: {
      label: 'Book Parayanam & Pooja',
      to: '/parayanam-pooja',
      shortLabel: 'Parayanam',
      ariaLabel: 'Enquire for Vedic parayanam and sacred pooja services',
    },
    gallery: {
      label: 'Visual Heritage Journal',
      to: '/gallery',
      shortLabel: 'Gallery',
      ariaLabel: 'View the visual heritage gallery of the Gurukulam',
    },
  },

  // Social Channels
  social: [
    { label: 'YouTube', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
  ],

  // Primary Navigation (6 Core Pages)
  nav: [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Gurukulam', to: '/gurukulam' },
    { label: 'Parayanam & Pooja', to: '/parayanam-pooja' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Contact', to: '/contact' },
  ],

  // Footer Quick Links
  footerNav: [
    { label: 'About Our Heritage', to: '/about' },
    { label: 'Veda Patasala Life', to: '/gurukulam' },
    { label: 'Parayanam & Poojas', to: '/parayanam-pooja' },
    { label: 'Student Admission', to: '/admission' },
    { label: 'Visual Gallery', to: '/gallery' },
    { label: 'Contact & Location', to: '/contact' },
    { label: 'Privacy Policy', to: '/privacy' },
  ],
}

export const whatsappMessages = {
  default: 'Namaste, I would like to know more about Seetharama Gurukulam.',
  '/admission': 'Namaste, I would like to know about admission to Seetharama Gurukulam.',
  '/parayanam-pooja': 'Namaste, I would like to enquire about parayanam / pooja services.',
  '/contact': 'Namaste, I would like to get in touch with Seetharama Gurukulam Trust.',
}
