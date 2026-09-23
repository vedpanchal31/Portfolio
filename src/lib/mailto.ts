import { personal } from '@/data/socials'

const SUPPORT_EMAIL = personal.email
const DEFAULT_INQUIRY_SUBJECT = "Let's Talk"
const MAIL_HANDOFF_TIMEOUT_MS = 600

// Some browsers/OS combinations silently do nothing on a `mailto:` link when
// no desktop mail client is configured. We give it a short window to hand off
// to a mail app (detected via blur/pagehide/visibility) before opening Gmail's
// web compose as a fallback.
function openMailWithGmailFallback(mailtoUrl: string, gmailUrl: string): void {
  let settled = false
  let timer = 0

  const stop = () => {
    window.clearTimeout(timer)
    window.removeEventListener('blur', handleHandOff)
    window.removeEventListener('pagehide', handleHandOff)
    document.removeEventListener('visibilitychange', handleVisibilityChange)
  }

  function handleHandOff() {
    if (settled) return
    settled = true
    stop()
  }

  function handleVisibilityChange() {
    if (document.hidden) handleHandOff()
  }

  const openGmailFallback = () => {
    if (settled) return
    settled = true
    stop()

    if (document.hidden || !document.hasFocus()) return

    const gmailWindow = window.open(gmailUrl, '_blank', 'noopener,noreferrer')
    if (!gmailWindow) window.location.href = gmailUrl
  }

  window.addEventListener('blur', handleHandOff)
  window.addEventListener('pagehide', handleHandOff)
  document.addEventListener('visibilitychange', handleVisibilityChange)

  window.location.href = mailtoUrl

  timer = window.setTimeout(openGmailFallback, MAIL_HANDOFF_TIMEOUT_MS)
}

export function handleEmailContact(): void {
  const encodedSubject = encodeURIComponent(DEFAULT_INQUIRY_SUBJECT)
  const mailtoUrl = `mailto:${SUPPORT_EMAIL}?subject=${encodedSubject}`
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${SUPPORT_EMAIL}&su=${encodedSubject}`

  openMailWithGmailFallback(mailtoUrl, gmailUrl)
}

export function sendCustomEmail({
  name,
  email,
  subject,
  message,
}: {
  name: string
  email: string
  subject: string
  message: string
}): void {
  const fullSubject = subject.trim() || DEFAULT_INQUIRY_SUBJECT
  const fullBody = `Hi Ved,\n\n${message}\n\nBest regards,\n${name}${email ? ` (${email})` : ''}`
  const encodedSubject = encodeURIComponent(fullSubject)
  const encodedBody = encodeURIComponent(fullBody)
  const mailtoUrl = `mailto:${SUPPORT_EMAIL}?subject=${encodedSubject}&body=${encodedBody}`
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${SUPPORT_EMAIL}&su=${encodedSubject}&body=${encodedBody}`

  openMailWithGmailFallback(mailtoUrl, gmailUrl)
}

