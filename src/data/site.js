// Single source of truth. Authoritative details verified from client's official brochure (SGT Folder file correction.pdf).
export const site = {
  name: 'Seetharama Gurukulam Trust',
  shortName: 'Seetharama Gurukulam',
  institution: 'Seetha Rama Gurukulam Trust',
  tagline: 'Preserving the timeless wisdom of the Vedas',
  phoneDisplay: '+91 89030 39176',
  phoneTel: '+918903039176',
  whatsappNumber: '918903039176',
  email: 'vedicgurukulam@gmail.com',
  addressLines: [
    'New No. 486 (Old No. 176)',
    'T.T.K. Road, Alwarpet',
    'Chennai – 600018, Tamil Nadu, India',
  ],
  fullAddress: 'New No. 486 (Old No. 176), T.T.K. Road, Alwarpet, Chennai – 600018, Tamil Nadu, India',
  // Internal TODO: Official visiting hours pending specific client confirmation before displaying publicly
  visitingHours: null,
  // Chronology & Governance from client brochure: Patasala started in 1996 with two students; Trust registered in 2008
  patasalaStartedYear: '1996',
  trustRegisteredYear: '2008',
  establishedYear: '1996 (Patasala) · 2008 (Trust)',
  registrationNumber: 'Registered Charitable Trust (2008)',
  // Internal TODO: Obtain exact alphanumeric registration certificate number from client
  mapEmbedUrl: 'https://www.google.com/maps?q=486+TTK+Road+Alwarpet+Chennai+600018&output=embed',
  siteUrl: 'https://www.vedicgurukulam.com',
  social: [
    { label: 'YouTube', href: '#', note: 'TODO: add link' },
    { label: 'Facebook', href: '#', note: 'TODO: add link' },
    { label: 'Instagram', href: '#', note: 'TODO: add link' },
  ],
  nav: [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Gurukulam', to: '/gurukulam' },
    { label: 'Parayanam & Pooja', to: '/parayanam-pooja' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Contact', to: '/contact' },
  ],
}

export const whatsappMessages = {
  default: 'Namaste, I would like to know more about Seetharama Gurukulam.',
  '/admission': 'Namaste, I would like to know about admission to Seetharama Gurukulam.',
  '/parayanam-pooja': 'Namaste, I would like to enquire about parayanam / pooja services.',
  '/contact': 'Namaste, I would like to get in touch with Seetharama Gurukulam Trust.',
}
