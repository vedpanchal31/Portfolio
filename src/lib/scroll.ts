export const NAVBAR_OFFSET = 72

export function scrollToSection(href: string): void {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (!el) return

  const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET
  window.scrollTo({ top, behavior: 'smooth' })
}
