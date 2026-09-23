import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { skillIconPaths } from '@/data/skillIconPaths'
import { personal } from '@/data/socials'
import { TechIcon } from '@/components/icons/TechIcon'
import { scrollToSection } from '@/lib/scroll'

const BADGES = ['React.js', 'Next.js', 'TypeScript', 'NestJS']

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-border-strong) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-strong) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="container-px mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="min-w-0">
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-3 py-1.5 text-xs font-medium text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for new opportunities
          </motion.div>

          <motion.p
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-6 font-mono text-sm font-semibold tracking-[0.25em] text-accent"
          >
            FULL-STACK DEVELOPER
          </motion.p>

          <motion.h1
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-4 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-6xl"
          >
            Building scalable digital experiences from frontend to backend.
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            I'm {personal.name}, a Full-Stack Developer based in {personal.location}, building production
            applications with React.js, Next.js, TypeScript and NestJS — with 2+ years of hands-on experience
            shipping real products.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.26 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <button
              type="button"
              onClick={() => scrollToSection('#projects')}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-accent px-6 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight size={16} />
            </button>
            <a
              href={personal.resumeUrl}
              download
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md border border-border bg-bg-card px-6 text-sm font-semibold text-text transition-colors hover:border-border-strong"
            >
              <Download size={16} />
              Download Resume
            </a>
            <button
              type="button"
              onClick={() => scrollToSection('#contact')}
              className="inline-flex min-h-[48px] items-center justify-center px-2 text-sm font-semibold text-accent-strong underline-offset-4 hover:underline"
            >
              Let's Connect
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative min-w-0"
        >
          <div className="min-w-0 overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-2xl">
            <div className="flex items-center gap-2 border-b border-border bg-bg-card px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-dim/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-dim/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-dim/40" />
              <span className="ml-2 font-mono text-xs text-dim">developer.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-muted sm:text-sm">
              <code>
                <span className="text-dim">1</span>{'  '}
                <span style={{ color: 'var(--color-accent)' }}>const</span> developer = {'{'}
                {'\n'}
                <span className="text-dim">2</span>{'    '}name: <span style={{ color: '#facc15' }}>'Ved Panchal'</span>,
                {'\n'}
                <span className="text-dim">3</span>{'    '}role: <span style={{ color: '#facc15' }}>'Full-Stack Developer'</span>,
                {'\n'}
                <span className="text-dim">4</span>{'    '}stack: [<span style={{ color: '#facc15' }}>'React'</span>,{' '}
                <span style={{ color: '#facc15' }}>'Next.js'</span>, <span style={{ color: '#facc15' }}>'NestJS'</span>],
                {'\n'}
                <span className="text-dim">5</span>{'    '}focus: <span style={{ color: '#facc15' }}>'production-ready systems'</span>,
                {'\n'}
                <span className="text-dim">6</span>{'  '}
                {'}'};
              </code>
            </pre>
          </div>

          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start"
          >
            {BADGES.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-card px-3 py-1.5 text-xs font-medium text-muted"
              >
                {skillIconPaths[badge] ? <TechIcon path={skillIconPaths[badge]} size={12} className="text-accent" /> : null}
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
