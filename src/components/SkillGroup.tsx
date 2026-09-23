import { coreSkills } from '@/data/skills'
import type { SkillCategory } from '@/types'
import { SkillCard } from './SkillCard'

interface SkillGroupProps {
  category: SkillCategory
}

export function SkillGroup({ category }: SkillGroupProps) {
  const Icon = category.icon

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-bg-elevated p-5 transition-colors duration-200 hover:border-border-strong sm:p-6">
      <span className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100" />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3 sm:w-52 sm:shrink-0">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-card text-accent">
            <Icon size={18} aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-base font-semibold text-text">{category.title}</h3>
            <p className="font-mono text-xs text-dim">{category.skills.length} skills</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 border-t border-border pt-4 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-5">
          {category.skills.map((skill) => (
            <SkillCard key={skill} skill={skill} highlighted={coreSkills.includes(skill)} />
          ))}
        </div>
      </div>
    </div>
  )
}
