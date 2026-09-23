import type { ArchitectureLayer } from '@/types'

export const architectureLayers: ArchitectureLayer[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'state',
    label: 'State Management',
    technologies: ['Redux Toolkit', 'RTK Query'],
  },
  {
    id: 'api',
    label: 'REST APIs',
    technologies: ['REST APIs', 'NextAuth'],
  },
  {
    id: 'backend',
    label: 'Backend',
    technologies: ['NestJS', 'Node.js', 'Express.js'],
  },
  {
    id: 'data',
    label: 'Data Layer',
    technologies: ['PostgreSQL', 'MongoDB', 'TypeORM'],
  },
  {
    id: 'jobs',
    label: 'Redis & Background Jobs',
    technologies: ['Redis', 'Bull Queues'],
  },
  {
    id: 'integrations',
    label: 'Third-Party Integrations',
    technologies: ['Tap Payment', 'Ryft Payment', 'Firebase FCM', 'Google Maps API', 'WATI', 'Odoo', 'Keycloak'],
  },
]

export const architectureServices = [
  { id: 'auth', label: 'Authentication', relatedLayers: ['api', 'integrations'] },
  { id: 'rbac', label: 'RBAC', relatedLayers: ['api', 'backend'] },
  { id: 'payments', label: 'Payments', relatedLayers: ['integrations'] },
  { id: 'firebase', label: 'Firebase', relatedLayers: ['integrations'] },
  { id: 'maps', label: 'Google Maps', relatedLayers: ['integrations'] },
  { id: 'messaging', label: 'WhatsApp / SMS', relatedLayers: ['integrations'] },
] as const
