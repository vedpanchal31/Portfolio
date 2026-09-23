import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  Download,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  User,
} from 'lucide-react'
import { personal } from '@/data/socials'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons'
import { handleEmailContact, sendCustomEmail } from '@/lib/mailto'

const inquiryTopics = [
  { label: '💼 Full-Time Role', subject: 'Inquiry: Full-Time Developer Opportunity' },
  { label: '🚀 Project Work', subject: 'Project Discussion / Frontend Architecture' },
  { label: '🤝 Collaboration', subject: 'Collaboration / Open Source Opportunity' },
  { label: '☕ General Chat', subject: 'Quick Chat / Developer Networking' },
]

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [isSent, setIsSent] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      handleEmailContact()
    }
  }

  const handleSelectTopic = (topic: typeof inquiryTopics[0]) => {
    setSelectedTopic(topic.label)
    setSubject(topic.subject)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendCustomEmail({
      name: name || 'A Visitor',
      email,
      subject: subject || "Let's Connect",
      message: message || "I'd like to get in touch regarding an opportunity.",
    })
    setIsSent(true)
    setTimeout(() => setIsSent(false), 4000)
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Build Something Exceptional"
          description="Whether you have an engineering opening, a modern product to architect, or an interesting problem to solve — my inbox is always open."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Direct Connect & Dossier (5 cols on lg) */}
          <div className="space-y-6 lg:col-span-5">
            <Reveal delay={0.05}>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-elevated p-6 backdrop-blur-sm transition-all hover:border-accent/30 sm:p-8">
                {/* Glow accent */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-accent/10 blur-2xl" />

                {/* Status beacon */}
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-strong">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Available for Opportunities
                </div>

                <h3 className="mt-5 text-xl font-bold tracking-tight text-text sm:text-2xl">
                  Reach Out Directly
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Open to full-time engineering roles, technical contract work, and impactful web product initiatives.
                </p>

                {/* Direct info cards */}
                <div className="mt-6 space-y-3">
                  {/* Email */}
                  <div className="group flex items-center justify-between rounded-xl border border-border/80 bg-bg-card/70 p-3.5 transition-colors hover:border-accent/40">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-elevated text-accent">
                        <Mail size={16} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-medium tracking-wider text-dim uppercase">Email</p>
                        <p className="truncate text-xs font-medium text-text sm:text-sm">{personal.email}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      title="Copy email to clipboard"
                      className="ml-2 flex h-8 shrink-0 items-center gap-1.5 rounded-lg border border-border bg-bg-elevated px-2.5 text-xs font-medium text-muted transition-colors hover:border-accent/50 hover:text-accent-strong"
                    >
                      {copied ? (
                        <>
                          <Check size={13} className="text-accent" />
                          <span className="text-accent">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Phone */}
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-3 rounded-xl border border-border/80 bg-bg-card/70 p-3.5 transition-colors hover:border-accent/40"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-elevated text-accent">
                      <Phone size={16} />
                    </span>
                    <div>
                      <p className="text-[11px] font-medium tracking-wider text-dim uppercase">Phone / WhatsApp</p>
                      <p className="text-xs font-medium text-text sm:text-sm">{personal.phone}</p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-3 rounded-xl border border-border/80 bg-bg-card/70 p-3.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-elevated text-accent">
                      <MapPin size={16} />
                    </span>
                    <div>
                      <p className="text-[11px] font-medium tracking-wider text-dim uppercase">Location</p>
                      <p className="text-xs font-medium text-text sm:text-sm">{personal.location}</p>
                    </div>
                  </div>
                </div>

                {/* Social channels & Resume */}
                <div className="mt-6 border-t border-border/60 pt-5">
                  <p className="text-xs font-semibold tracking-wider text-dim uppercase">Connect & Resume</p>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    <a
                      href="https://www.linkedin.com/in/ved-panchal-0a8b2123a/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-card px-3.5 py-2 text-xs font-medium text-text transition-colors hover:border-accent/50 hover:text-accent-strong"
                    >
                      <LinkedinIcon size={14} className="text-accent" />
                      <span>LinkedIn</span>
                      <ArrowUpRight size={12} className="text-dim" />
                    </a>
                    <a
                      href="https://github.com/vedpanchal31"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-card px-3.5 py-2 text-xs font-medium text-text transition-colors hover:border-accent/50 hover:text-accent-strong"
                    >
                      <GithubIcon size={14} className="text-accent" />
                      <span>GitHub</span>
                      <ArrowUpRight size={12} className="text-dim" />
                    </a>
                    <a
                      href={personal.resumeUrl}
                      download
                      className="inline-flex items-center gap-2 rounded-xl border border-accent/40 bg-accent-soft px-3.5 py-2 text-xs font-medium text-accent-strong transition-colors hover:bg-accent hover:text-bg"
                    >
                      <Download size={13} />
                      <span>Resume</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Quick Inquire Composer (7 cols on lg) */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-bg-elevated p-6 backdrop-blur-sm transition-all hover:border-accent/30 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent-soft text-accent">
                    <Sparkles size={18} />
                  </span>
                  <div>
                    <span className="font-mono text-[11px] font-medium tracking-wider text-accent uppercase">
                      Quick Inquire
                    </span>
                    <h3 className="text-lg font-semibold text-text sm:text-xl">
                      Send a Direct Message
                    </h3>
                  </div>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-muted sm:text-sm">
                  Select a topic or compose your note below. Submitting will pre-fill your preferred email client or web Gmail instantly.
                </p>

                {/* Topic selection chips */}
                <div className="mt-5">
                  <label className="text-[11px] font-medium tracking-wider text-dim uppercase">
                    Select Topic
                  </label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {inquiryTopics.map((topic) => (
                      <button
                        key={topic.label}
                        type="button"
                        onClick={() => handleSelectTopic(topic)}
                        className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
                          selectedTopic === topic.label
                            ? 'border-accent bg-accent-soft text-accent-strong shadow-sm'
                            : 'border-border bg-bg-card text-muted hover:border-border-strong hover:text-text'
                        }`}
                      >
                        {topic.label}
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="text-[11px] font-medium tracking-wider text-dim uppercase">
                        Your Name
                      </label>
                      <div className="relative mt-1.5">
                        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-dim">
                          <User size={14} />
                        </span>
                        <input
                          id="contact-name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Alex Morgan"
                          required
                          className="w-full rounded-xl border border-border bg-bg-card py-2.5 pr-3 pl-9 text-xs text-text placeholder-dim transition-colors focus:border-accent focus:outline-none sm:text-sm"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="text-[11px] font-medium tracking-wider text-dim uppercase">
                        Your Email
                      </label>
                      <div className="relative mt-1.5">
                        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-dim">
                          <Mail size={14} />
                        </span>
                        <input
                          id="contact-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="alex@company.com"
                          required
                          className="w-full rounded-xl border border-border bg-bg-card py-2.5 pr-3 pl-9 text-xs text-text placeholder-dim transition-colors focus:border-accent focus:outline-none sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="text-[11px] font-medium tracking-wider text-dim uppercase">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="What would you like to discuss?"
                      required
                      className="mt-1.5 w-full rounded-xl border border-border bg-bg-card px-3.5 py-2.5 text-xs text-text placeholder-dim transition-colors focus:border-accent focus:outline-none sm:text-sm"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="text-[11px] font-medium tracking-wider text-dim uppercase">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Hi Ved, I'd like to talk about an engineering role / project..."
                      required
                      className="mt-1.5 w-full resize-none rounded-xl border border-border bg-bg-card px-3.5 py-2.5 text-xs text-text placeholder-dim transition-colors focus:border-accent focus:outline-none sm:text-sm"
                    />
                  </div>

                  {/* Submit button & Status */}
                  <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-accent px-6 text-xs font-semibold text-bg transition-transform hover:-translate-y-0.5 active:translate-y-0 sm:text-sm"
                    >
                      <Send size={15} />
                      Send Message
                    </button>

                    {isSent ? (
                      <span className="flex items-center gap-1.5 text-xs font-medium text-accent">
                        <CheckCircle2 size={14} />
                        Opening mail client with pre-filled message...
                      </span>
                    ) : (
                      <span className="text-[11px] text-dim">
                        No spam · Direct to panchalved31@gmail.com
                      </span>
                    )}
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
