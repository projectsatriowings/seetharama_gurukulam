export function parseLocalDate(iso) {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d)
}
export function isUpcoming(event, today = new Date()) {
  const day = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  return parseLocalDate(event.date) >= day
}
export function formatDate(iso) {
  return parseLocalDate(iso).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' })
}
export function nextUpcomingEvent(events) {
  return [...events].filter((e) => isUpcoming(e)).sort((a, b) => a.date.localeCompare(b.date))[0] || null
}
export function googleCalendarLink(event) {
  const start = event.date.replaceAll('-', '')
  const endDate = parseLocalDate(event.date)
  endDate.setDate(endDate.getDate() + 1)
  const end = endDate.toISOString().slice(0, 10).replaceAll('-', '')
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${event.title} — Seetharama Gurukulam Trust`,
    dates: `${start}/${end}`,
    details: event.description,
    location: event.venue || '',
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}
