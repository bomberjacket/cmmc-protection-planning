export interface CalculatorInput {
  cmmcLevel: 1 | 2 | 3
  companySize: number
  annualRevenue: number
  currentContracts: number
  contractValue: number
  hasExistingSecurity: boolean
  urgency: 'immediate' | 'within_6_months' | 'within_year' | 'planning'
  industry: string
}

export interface CalculatorResult {
  implementationCost: number
  annualMaintenance: number
  totalFirstYear: number
  contractRisk: number
  roi: {
    yearlyROI: number
    breakEvenPoint: number
    fiveYearValue: number
  }
  recommendations: string[]
}

export interface ROIProjection {
  year: number
  investment: number
  contractsProtected: number
  netValue: number
  cumulativeROI: number
}

export interface LeadCaptureData {
  // Contact Information
  firstName: string
  lastName: string
  email: string
  phone?: string
  company: string
  title: string
  
  // Company Details
  industry: string
  companySize: number
  annualRevenue: number
  currentCMMCLevel?: number
  targetCMMCLevel: number
  
  // Project Details
  timeline: string
  budget?: number
  challenges: string[]
  
  // Tracking
  source: string
  calculatorResults?: CalculatorResult
  timestamp: string
}

export interface FormValidation {
  field: string
  isValid: boolean
  message?: string
}

export interface CompanyProfile {
  size: 'small' | 'medium' | 'large' | 'enterprise'
  sizeRange: string
  revenueRange: string
  typicalContracts: number
  complexityMultiplier: number
}
