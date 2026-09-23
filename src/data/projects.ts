import type { Project } from '@/types'

export const projects: Project[] = [
  {
    slug: 'venue-booking-platform',
    name: 'Multi-Tenant Venue Booking Platform',
    tagline: 'Booking, cancellations and automated refunds for multiple tenants',
    description:
      'A multi-tenant SaaS venue booking platform with end-to-end booking, cancellation and automated refund workflows, including time-slot based bookings with cron-managed expirations.',
    frontend: ['React.js', 'Redux Toolkit', 'RTK Query', 'TypeScript'],
    backend: ['NestJS', 'PostgreSQL', 'TypeORM', 'Redis', 'Bull Queues'],
    integrations: ['Tap Payment', 'Firebase FCM', 'WATI', 'Odoo', 'BMS SMS API'],
    features: [
      'Booking, cancellation & automated refunds',
      'Time-slot bookings with cron-managed expirations',
      'Role-based dashboards and admin panels',
      'RBAC for admin/user permission control',
      'Redis-backed async processing with Bull Queues',
    ],
    highlight: 'Frontend + Backend + Payments + Real-time Notifications',
    mockup: 'venue',
    featured: true,
    detail: {
      overview:
        'A multi-tenant SaaS platform for venue booking, built to handle end-to-end booking, cancellation and refund workflows across multiple tenants and user roles.',
      contribution:
        'Developed the React.js frontend with Redux Toolkit and RTK Query, including role-based dashboards and admin panels, and built the NestJS backend with PostgreSQL, TypeORM and Redis-backed Bull Queues.',
      challenges: [
        'Managing time-slot based bookings that needed automatic expiration without manual intervention.',
        'Coordinating admin and user permissions across multiple tenants with granular access control.',
        'Keeping booking, cancellation and refund flows consistent across payment and notification integrations.',
      ],
      approach: [
        'Used cron-managed jobs to automatically expire unconfirmed time-slot bookings.',
        'Modeled RBAC at the tenant and role level so admin panels could restrict access per tenant.',
        'Offloaded refund and notification processing to Redis Bull Queues for efficient async handling.',
        'Integrated Tap Payment for transactions and Firebase Cloud Messaging for real-time notifications.',
      ],
      impact: [
        'Delivered a production-ready booking system spanning tenant management, payments and notifications.',
        'Automated refund and expiration workflows reduced the need for manual admin intervention.',
      ],
    },
  },
  {
    slug: 'home-services-booking-platform',
    name: 'Home Services Booking Platform',
    tagline: 'Location-aware booking with dynamic pricing and SEO-optimized pages',
    description:
      'A consumer-facing home services booking platform with real-time scheduling, transparent dynamic pricing and location-aware service discovery using Google Maps API.',
    frontend: ['Next.js', 'Tailwind CSS'],
    backend: [],
    integrations: ['REST APIs', 'Ryft Payment', 'Google Maps API'],
    features: [
      'Real-time scheduling and dynamic pricing',
      'Location-aware service discovery via Google Maps',
      'Multi-step booking with map-based service area selection',
      'Address management',
      'PCI-compliant checkout with Ryft Payment',
      'SEO-optimized SSR pages with structured metadata & Open Graph tags',
    ],
    highlight: 'Next.js + SEO + Maps + Payments + Booking',
    mockup: 'home-services',
    detail: {
      overview:
        'A consumer-facing platform for booking home services, focused on real-time scheduling, transparent pricing and location-aware discovery.',
      contribution:
        'Built multi-step booking workflows with map-based service area selection, integrated the Ryft payment gateway for checkout, and optimized Next.js pages for SEO.',
      challenges: [
        'Presenting location-aware service availability clearly within a multi-step booking flow.',
        'Ensuring checkout was PCI-compliant while keeping the flow simple for consumers.',
        'Optimizing Next.js pages for search visibility without slowing down the booking experience.',
      ],
      approach: [
        'Used Google Maps API for map-based service area selection and address management.',
        'Integrated Ryft Payment for a secure, PCI-compliant checkout flow.',
        'Applied server-side rendering (SSR), structured metadata and Open Graph tags for SEO.',
      ],
      impact: [
        'Delivered a full booking-to-checkout experience with location-aware pricing.',
        'SEO-optimized SSR pages support better discoverability for the consumer-facing platform.',
      ],
    },
  },
  {
    slug: 'fintech-admin-dashboard',
    name: 'Fintech Admin Dashboard',
    tagline: 'Authentication, RBAC, KYC and analytics for a financial platform',
    description:
      'A scalable fintech administrative dashboard built with Next.js to manage users, transactions, accounts and system configurations for a financial services platform.',
    frontend: ['Next.js', 'TypeScript'],
    backend: [],
    integrations: ['NextAuth', 'Keycloak', 'REST APIs'],
    features: [
      'User, transaction and account management',
      'Multi-step KYC workflows with document upload & approval',
      'RBAC-secured admin modules via NextAuth + Keycloak',
      'Real-time analytics dashboards with data visualization',
    ],
    highlight: 'Authentication + RBAC + KYC + Admin Systems + Data Visualization',
    mockup: 'fintech',
    detail: {
      overview:
        'An administrative dashboard for a financial services platform, covering user, transaction, account and configuration management under strict access control.',
      contribution:
        'Implemented secure authentication and RBAC using NextAuth integrated with Keycloak, designed multi-step KYC workflows, and built real-time analytics dashboards.',
      challenges: [
        'Enforcing compliant, role-based access control across every admin module.',
        'Structuring multi-step KYC workflows with validation, document upload and approval stages.',
        'Presenting financial data clearly through real-time analytics and visualizations.',
      ],
      approach: [
        'Integrated NextAuth with Keycloak for compliant authentication and RBAC.',
        'Designed structured, multi-step KYC flows with validation at each stage.',
        'Built dynamic data visualization charts for financial monitoring, reporting and compliance auditing.',
      ],
      impact: [
        'Delivered a compliant admin system for managing sensitive financial operations.',
        'Structured KYC workflows brought consistency to document validation and approval.',
      ],
    },
  },
]
