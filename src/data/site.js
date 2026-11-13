// Single source of truth. TODO: replace every placeholder before launch (see README).
export const site = {
  name: 'Seetharama Gurukulam Trust',
  shortName: 'Seetharama Gurukulam',
  tagline: 'Preserving the timeless wisdom of the Vedas',
  // TODO: replace with the trust's real phone number
  phoneDisplay: '+91 XXXXX XXXXX',
  phoneTel: '+91XXXXXXXXXX',
  // TODO: digits only, with country code, no + or spaces
  whatsappNumber: '91XXXXXXXXXX',
  // TODO: replace with the trust's real email
  email: 'info@example.org',
  addressLines: [
    'TODO: Street address, area', // TODO
    'TODO: City, State — PIN', // TODO
  ],
  visitingHours: 'TODO: e.g. 9:00 AM – 12:00 PM and 4:00 PM – 6:00 PM',
  // TODO: replace with the real registration number
  registrationNumber: 'TODO: Registration No. XXXXXX',
  establishedYear: 'TODO: Year established',
  // TODO: replace with a real Google Maps embed URL (Share > Embed a map)
  mapEmbedUrl: 'https://www.google.com/maps?q=Chennai,Tamil+Nadu&output=embed',
  siteUrl: 'https://seetharamagurukulam.example.org',
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
    { label: 'Events', to: '/events' },
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
