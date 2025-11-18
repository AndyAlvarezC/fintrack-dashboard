export function formatShortWeekday(locale: string | undefined, date: Date) {
  return date
    .toLocaleDateString(locale ?? 'en-EN', { weekday: 'short' })
    .slice(0, 2)
    .toUpperCase();
}
