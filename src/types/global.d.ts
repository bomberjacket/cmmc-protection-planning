// Global type declarations

// Window object extensions
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: any
    ) => void
  }
}

// Environment variables
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SITE_URL: string
    NEXT_PUBLIC_CONTACT_EMAIL: string
    NEXT_PUBLIC_PHONE: string
    NEXT_PUBLIC_BOOKING_PORTAL_URL: string
    GOOGLE_ANALYTICS_ID?: string
    GOOGLE_TAG_MANAGER_ID?: string
    GOOGLE_SITE_VERIFICATION?: string
    HUBSPOT_API_KEY?: string
    ZAPIER_WEBHOOK_URL?: string
    SENDGRID_API_KEY?: string
    SENDGRID_FROM_EMAIL?: string
    SENTRY_DSN?: string
    VERCEL_ANALYTICS_ID?: string
  }
}

export {}
