import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// CMMC calculation utilities
export const cmmcLevels = {
  1: {
    name: 'Level 1 - Basic Cyber Hygiene',
    practices: 17,
    domains: 3,
    description: 'Foundational cybersecurity practices for protecting Federal Contract Information (FCI)'
  },
  2: {
    name: 'Level 2 - Intermediate Cyber Hygiene', 
    practices: 110,
    domains: 14,
    description: 'Enhanced practices for protecting Controlled Unclassified Information (CUI)'
  },
  3: {
    name: 'Level 3 - Good Cyber Hygiene',
    practices: 130,
    domains: 14,
    description: 'Advanced cybersecurity practices for the highest level of protection'
  }
} as const

export type CMMCLevel = keyof typeof cmmcLevels

// Cost calculation functions
export function calculateImplementationCost(
  level: CMMCLevel,
  companySize: number,
  hasExistingSecurity: boolean = false
): number {
  const baseCosts = {
    1: 50000,   // Level 1 base cost
    2: 150000,  // Level 2 base cost
    3: 300000   // Level 3 base cost
  }
  
  const sizeMultiplier = Math.max(1, Math.log10(companySize / 10))
  const existingSecurityDiscount = hasExistingSecurity ? 0.3 : 0
  
  const baseCost = baseCosts[level] * sizeMultiplier
  return Math.round(baseCost * (1 - existingSecurityDiscount))
}

export function calculateAnnualMaintenance(
  implementationCost: number,
  level: CMMCLevel
): number {
  const maintenanceRates = { 1: 0.15, 2: 0.20, 3: 0.25 }
  return Math.round(implementationCost * maintenanceRates[level])
}

export function calculateContractRisk(
  contractValue: number,
  riskPercentage: number = 0.3
): number {
  return Math.round(contractValue * riskPercentage)
}

export function calculateROI(
  implementationCost: number,
  contractsProtected: number,
  timeToBreakeven: number = 2
): {
  yearlyROI: number
  breakEvenPoint: number
  fiveYearValue: number
} {
  const yearlyROI = (contractsProtected - implementationCost) / implementationCost
  const breakEvenPoint = implementationCost / (contractsProtected / 12) // months
  const fiveYearValue = (contractsProtected * 5) - implementationCost
  
  return {
    yearlyROI: Math.round(yearlyROI * 100) / 100,
    breakEvenPoint: Math.round(breakEvenPoint * 10) / 10,
    fiveYearValue: Math.round(fiveYearValue)
  }
}

// Format currency for display
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

// Format percentage for display
export function formatPercentage(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  }).format(value / 100)
}

// Validation utilities
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d\s\-\(\)]{8,}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

// Analytics utilities
export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

export function trackCalculatorUsage(level: CMMCLevel, companySize: number) {
  trackEvent('calculator_used', {
    cmmc_level: level,
    company_size: companySize,
    timestamp: new Date().toISOString()
  })
}

export function trackLeadCapture(source: string) {
  trackEvent('lead_captured', {
    source,
    timestamp: new Date().toISOString()
  })
}
