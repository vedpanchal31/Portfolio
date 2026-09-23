import { Bot, Code2, Gauge, Layers, Plug, ShieldCheck, Wrench } from 'lucide-react'
import type { SkillCategory } from '@/types'

// Primary stack, called out across the resume — highlighted wherever skills are listed.
export const coreSkills: string[] = ['React.js', 'Next.js', 'TypeScript', 'NestJS']

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript ES6+',
      'Redux Toolkit',
      'RTK Query',
      'React Router',
      'Tailwind CSS',
      'NextAuth',
    ],
  },
  {
    title: 'Backend',
    icon: Layers,
    skills: ['Node.js', 'Express.js', 'NestJS', 'MongoDB', 'PostgreSQL', 'SQL', 'TypeORM'],
  },
  {
    title: 'Authentication & Security',
    icon: ShieldCheck,
    skills: ['NextAuth', 'Keycloak', 'JWT', 'RBAC'],
  },
  {
    title: 'APIs & Integrations',
    icon: Plug,
    skills: ['REST APIs', 'Google Maps API', 'Firebase', 'Tap Payment', 'Ryft Payment', 'WATI', 'Odoo'],
  },
  {
    title: 'Performance & Quality',
    icon: Gauge,
    skills: [
      'Code Splitting',
      'Lazy Loading',
      'Memoization',
      'Core Web Vitals',
      'SEO',
      'Jest',
      'React Testing Library',
      'Chrome DevTools',
      'React DevTools',
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'Agile/Scrum'],
  },
  {
    title: 'AI Development Tools',
    icon: Bot,
    skills: ['GitHub Copilot', 'Cursor', 'Claude', 'ChatGPT'],
  },
]
