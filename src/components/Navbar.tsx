import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks } from '@/data/navigation'
import { useActiveSection } from '@/hooks/useActiveSection'
import { scrollToSection } from '@/lib/scroll'

const SECTION_IDS = navLinks.map((link) => link.href.replace('#', ''))

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleNavClick(href: string) {
    scrollToSection(href)
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled || isMenuOpen ? 'border-b border-border bg-bg/85 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-px mx-auto flex h-[72px] max-w-6xl items-center justify-between" aria-label="Primary">
        <button
          type="button"
          onClick={() => handleNavClick('#home')}
          className="font-mono text-sm font-semibold tracking-wide text-text"
        >
          VED PANCHAL
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeId === id
            return (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-accent' : 'text-muted hover:text-text'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {link.label}
                </button>
              </li>
            )
          })}
        </ul>

        <div className="hidden lg:block">
          <button
            type="button"
            onClick={() => handleNavClick('#contact')}
            className="rounded-md border border-accent/40 bg-accent-soft px-4 py-2 text-sm font-semibold text-accent-strong transition-colors hover:bg-accent hover:text-bg"
          >
            Let&apos;s Talk
          </button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-text lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isMenuOpen ? (
        <div className="border-t border-border bg-bg lg:hidden">
          <ul className="container-px mx-auto flex max-w-6xl flex-col py-2">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = activeId === id
              return (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className={`flex w-full min-h-[44px] items-center rounded-md px-2 text-left text-base font-medium ${
                      isActive ? 'text-accent' : 'text-muted'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              )
            })}
            <li className="pt-2">
              <button
                type="button"
                onClick={() => handleNavClick('#contact')}
                className="flex min-h-[44px] w-full items-center justify-center rounded-md border border-accent/40 bg-accent-soft text-sm font-semibold text-accent-strong"
              >
                Let&apos;s Talk
              </button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}
