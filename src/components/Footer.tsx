import { navLinks } from '@/data/navigation'
import { personal, socials } from '@/data/socials'
import { handleEmailContact } from '@/lib/mailto'
import { scrollToSection } from '@/lib/scroll'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="container-px mx-auto max-w-6xl py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-sm font-semibold tracking-wide text-text">{personal.name.toUpperCase()}</p>
            <p className="mt-2 max-w-xs text-sm text-muted">{personal.role} | React.js | Next.js | TypeScript | NestJS</p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted hover:text-accent"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon
              const isEmail = social.href.startsWith('mailto:')
              const iconClassName =
                'inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-accent/50 hover:text-accent'

              if (isEmail) {
                return (
                  <button
                    key={social.label}
                    type="button"
                    onClick={handleEmailContact}
                    aria-label={social.label}
                    className={iconClassName}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </button>
                )
              }

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className={iconClassName}
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-dim sm:text-left">
          © {year} {personal.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
