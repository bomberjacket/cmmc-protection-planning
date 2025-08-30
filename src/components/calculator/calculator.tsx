'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Calculator as CalculatorIcon, Shield, DollarSign, TrendingUp, Download, AlertTriangle } from 'lucide-react'
import { calculateImplementationCost, calculateAnnualMaintenance, calculateContractRisk, calculateROI, formatCurrency, formatPercentage, trackCalculatorUsage } from '@/lib/utils'
import type { CalculatorInput, CalculatorResult } from '@/types/calculator'

export function Calculator() {
  const [input, setInput] = useState<CalculatorInput>({
    cmmcLevel: 2,
    companySize: 100,
    annualRevenue: 10000000,
    currentContracts: 5000000,
    contractValue: 25000000,
    hasExistingSecurity: false,
    urgency: 'within_6_months',
    industry: 'aerospace'
  })

  const [result, setResult] = useState<CalculatorResult | null>(null)
  const [showResults, setShowResults] = useState(false)

  const calculateResults = () => {
    const implementationCost = calculateImplementationCost(
      input.cmmcLevel,
      input.companySize,
      input.hasExistingSecurity
    )
    
    const annualMaintenance = calculateAnnualMaintenance(implementationCost, input.cmmcLevel)
    const totalFirstYear = implementationCost + annualMaintenance
    const contractRisk = calculateContractRisk(input.contractValue)
    const roi = calculateROI(implementationCost, input.contractValue)
    
    const recommendations = generateRecommendations(input, implementationCost, contractRisk)
    
    const calculatedResult: CalculatorResult = {
      implementationCost,
      annualMaintenance,
      totalFirstYear,
      contractRisk,
      roi,
      recommendations
    }
    
    setResult(calculatedResult)
    setShowResults(true)
    
    // Track calculator usage
    trackCalculatorUsage(input.cmmcLevel, input.companySize)
  }

  const generateRecommendations = (input: CalculatorInput, cost: number, risk: number): string[] => {
    const recommendations = []
    
    if (risk > cost * 3) {
      recommendations.push('HIGH PRIORITY: Contract risk significantly exceeds implementation cost')
    }
    
    if (input.urgency === 'immediate') {
      recommendations.push('Consider phased implementation to meet immediate deadlines')
    }
    
    if (input.hasExistingSecurity) {
      recommendations.push('Leverage existing security investments to reduce costs')
    } else {
      recommendations.push('Plan for comprehensive security infrastructure buildout')
    }
    
    if (input.cmmcLevel === 3) {
      recommendations.push('Level 3 requires advanced security capabilities - consider expert guidance')
    }
    
    return recommendations
  }

  return (
    <section id="calculator" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <CalculatorIcon className="w-4 h-4 mr-2" />
            Interactive Budget Calculator
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Calculate Your CMMC Investment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get accurate cost projections and ROI analysis for your CMMC compliance journey. 
            Input your company details to receive a customized budget breakdown.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="calculator-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-brand-primary" />
                Company & Compliance Details
              </CardTitle>
              <CardDescription>
                Provide your company information to get accurate cost estimates
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* CMMC Level Selection */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Target CMMC Level</Label>
                <Select value={input.cmmcLevel.toString()} onValueChange={(value) => setInput({...input, cmmcLevel: parseInt(value) as 1 | 2 | 3})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Level 1 - Basic Cyber Hygiene (17 practices)</SelectItem>
                    <SelectItem value="2">Level 2 - Intermediate (110 practices)</SelectItem>
                    <SelectItem value="3">Level 3 - Advanced (130 practices)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Company Size */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Number of Employees</Label>
                <Input
                  type="number"
                  value={input.companySize}
                  onChange={(e) => setInput({...input, companySize: parseInt(e.target.value) || 0})}
                  placeholder="100"
                  min="1"
                  max="10000"
                />
              </div>

              {/* Annual Revenue */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Annual Revenue</Label>
                <Input
                  type="number"
                  value={input.annualRevenue}
                  onChange={(e) => setInput({...input, annualRevenue: parseInt(e.target.value) || 0})}
                  placeholder="10000000"
                  min="100000"
                />
                <p className="text-sm text-gray-500">Enter amount in USD (e.g., 10000000 for $10M)</p>
              </div>

              {/* Contract Value */}
              <div className="space-y-3">
                <Label className="text-base font-medium">DoD Contract Portfolio Value</Label>
                <Input
                  type="number"
                  value={input.contractValue}
                  onChange={(e) => setInput({...input, contractValue: parseInt(e.target.value) || 0})}
                  placeholder="25000000"
                  min="100000"
                />
                <p className="text-sm text-gray-500">Total value of contracts requiring CMMC compliance</p>
              </div>

              {/* Industry */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Industry</Label>
                <Select value={input.industry} onValueChange={(value) => setInput({...input, industry: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aerospace">Aerospace & Defense</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="consulting">Consulting Services</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="research">Research & Development</SelectItem>
                    <SelectItem value="logistics">Logistics & Supply Chain</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Timeline */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Implementation Timeline</Label>
                <Select value={input.urgency} onValueChange={(value) => setInput({...input, urgency: value as any})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate (0-3 months)</SelectItem>
                    <SelectItem value="within_6_months">Within 6 months</SelectItem>
                    <SelectItem value="within_year">Within 1 year</SelectItem>
                    <SelectItem value="planning">Planning phase (1+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Existing Security */}
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="space-y-1">
                  <Label className="text-base font-medium">Existing Security Framework</Label>
                  <p className="text-sm text-gray-600">Do you have ISO 27001, SOC 2, or similar security framework?</p>
                </div>
                <Switch
                  checked={input.hasExistingSecurity}
                  onCheckedChange={(checked) => setInput({...input, hasExistingSecurity: checked})}
                />
              </div>

              {/* Calculate Button */}
              <Button 
                onClick={calculateResults}
                size="xl" 
                className="w-full brand-gradient text-white font-semibold"
              >
                <CalculatorIcon className="w-5 h-5 mr-2" />
                Calculate Investment & ROI
              </Button>
            </CardContent>
          </Card>

          {/* Results Display */}
          {showResults && result && (
            <Card className="calculator-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Your CMMC Investment Analysis
                </CardTitle>
                <CardDescription>
                  Based on your company profile and compliance requirements
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="metric-card">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-gray-600">Implementation</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {formatCurrency(result.implementationCost)}
                    </div>
                  </div>
                  
                  <div className="metric-card">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-gray-600">5-Year ROI</span>
                    </div>
                    <div className="text-2xl font-bold text-green-600">
                      {formatPercentage(result.roi.yearlyROI * 5)}
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Detailed Breakdown */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Cost Breakdown</h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Initial Implementation</span>
                      <span className="font-semibold">{formatCurrency(result.implementationCost)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Annual Maintenance</span>
                      <span className="font-semibold">{formatCurrency(result.annualMaintenance)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2 border-t">
                      <span className="font-semibold text-gray-900">Total First Year</span>
                      <span className="font-bold text-lg">{formatCurrency(result.totalFirstYear)}</span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Risk Analysis */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    Contract Risk Analysis
                  </h4>
                  
                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-amber-800 font-medium">Contracts at Risk</span>
                      <span className="font-bold text-amber-900">{formatCurrency(result.contractRisk)}</span>
                    </div>
                    <p className="text-sm text-amber-700">
                      Estimated value of contracts at risk without CMMC compliance
                    </p>
                  </div>
                  
                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-sm text-green-700 mb-1">Break-even Point</div>
                    <div className="text-2xl font-bold text-green-800">
                      {result.roi.breakEvenPoint} months
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                {result.recommendations.length > 0 && (
                  <>
                    <Separator />
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Key Recommendations</h4>
                      <ul className="space-y-2">
                        {result.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button variant="brand" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download Executive Report
                  </Button>
                  
                  <Button variant="outline" className="flex-1" asChild>
                    <a href={process.env.NEXT_PUBLIC_BOOKING_PORTAL_URL}>
                      Schedule Expert Consultation
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
