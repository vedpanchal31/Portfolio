import { skillIconPaths } from '@/data/skillIconPaths'
import { TechIcon } from './icons/TechIcon'

interface SkillCardProps {
  skill: string
  highlighted?: boolean
}

export function SkillCard({ skill, highlighted = false }: SkillCardProps) {
  const iconPath = skillIconPaths[skill]

  if (highlighted) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-md border border-accent/40 bg-accent-soft px-3 py-1.5 text-sm font-medium text-accent-strong transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/70">
        {iconPath ? <TechIcon path={iconPath} size={14} /> : null}
        {skill}
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg-card px-3 py-1.5 text-sm text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-text hover:shadow-[0_0_0_1px_var(--color-accent-soft)]">
      {iconPath ? <TechIcon path={iconPath} size={14} className="opacity-80" /> : null}
      {skill}
    </span>
  )
}
