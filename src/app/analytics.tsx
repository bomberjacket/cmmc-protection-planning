'use client'

import { useEffect } from 'react'
import Script from 'next/script'

interface AnalyticsProps {
  googleAnalyticsId?: string
}

export function Analytics({ googleAnalyticsId }: AnalyticsProps) {
  useEffect(() => {
    if (googleAnalyticsId && typeof window !== 'undefined') {
      // Initialize Google Analytics
      window.gtag('config', googleAnalyticsId, {
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, [googleAnalyticsId])

  if (!googleAnalyticsId) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  )
}

// Custom event tracking functions
export function trackCalculatorStart() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'calculator_start', {
      event_category: 'engagement',
      event_label: 'CMMC Calculator',
    })
  }
}

export function trackCalculatorComplete(level: number, cost: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'calculator_complete', {
      event_category: 'conversion',
      event_label: `CMMC Level ${level}`,
      value: cost,
      custom_parameters: {
        cmmc_level: level,
        estimated_cost: cost,
      }
    })
  }
}

export function trackLeadGeneration(source: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      event_category: 'conversion',
      event_label: source,
      value: 1,
    })
  }
}

export function trackReportDownload(reportType: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'file_download', {
      event_category: 'engagement',
      event_label: reportType,
      file_name: `cmmc-${reportType}-report.pdf`,
    })
  }
}
