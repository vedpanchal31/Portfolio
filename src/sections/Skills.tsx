import { coreSkills, skillCategories } from '@/data/skills'
import { skillIconPaths } from '@/data/skillIconPaths'
import { Reveal } from '@/components/Reveal'
import { TechIcon } from '@/components/icons/TechIcon'
import { SectionHeading } from '@/components/SectionHeading'
import { SkillGroup } from '@/components/SkillGroup'

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="Technical Skills"
          description="Tools and technologies I use to design, build and ship production web applications."
        />

        <Reveal className="mt-10 flex flex-wrap items-center gap-3 rounded-xl border border-border bg-bg-elevated p-5">
          <span className="mr-1 text-xs font-semibold tracking-wide text-dim uppercase">Core Stack</span>
          {coreSkills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent-soft px-3.5 py-1.5 text-sm font-semibold text-accent-strong"
            >
              {skillIconPaths[skill] ? <TechIcon path={skillIconPaths[skill]} size={14} /> : null}
              {skill}
            </span>
          ))}
        </Reveal>

        <div className="mt-6 space-y-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={Math.min(index * 0.05, 0.3)}>
              <SkillGroup category={category} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
