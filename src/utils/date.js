export function formatToday(options) {
  return new Date().toLocaleDateString('en-US', options)
}

export const topbarDate = () => formatToday({ weekday: 'long', month: 'long', day: 'numeric' })
export const dashboardDate = () => formatToday({ weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).toUpperCase()