'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'
import { TrendingUp, DollarSign, Shield, AlertTriangle, Download } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

// Sample data for demonstration
const roiData = [
  { year: 'Year 1', investment: -450000, contractsProtected: 15000000, netValue: 14550000, cumulativeROI: 3133 },
  { year: 'Year 2', investment: -90000, contractsProtected: 18000000, netValue: 17910000, cumulativeROI: 3873 },
  { year: 'Year 3', investment: -95000, contractsProtected: 22000000, netValue: 21905000, cumulativeROI: 4734 },
  { year: 'Year 4', investment: -100000, contractsProtected: 25000000, netValue: 24900000, cumulativeROI: 5378 },
  { year: 'Year 5', investment: -105000, contractsProtected: 28000000, netValue: 27895000, cumulativeROI: 6021 }
]

const riskBreakdown = [
  { name: 'Contracts Protected', value: 25000000, color: '#22c55e' },
  { name: 'Investment Required', value: 450000, color: '#3b82f6' },
  { name: 'Annual Maintenance', value: 90000, color: '#f59e0b' }
]

const complianceCosts = [
  { level: 'Level 1', cost: 175000, practices: 17, timeline: '3-6 months' },
  { level: 'Level 2', cost: 450000, practices: 110, timeline: '6-12 months' },
  { level: 'Level 3', cost: 750000, practices: 130, timeline: '12-18 months' }
]

export function ROIVisualization() {
  const [activeChart, setActiveChart] = useState<'roi' | 'risk' | 'comparison'>('roi')

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            ROI Analysis & Projections
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            See Your CMMC Investment Returns
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visualize the financial impact of CMMC compliance on your business. 
            Interactive charts show cost vs. contract protection over time.
          </p>
        </div>

        {/* Chart Selection */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <Button
              variant={activeChart === 'roi' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveChart('roi')}
              className="rounded-md"
            >
              5-Year ROI
            </Button>
            <Button
              variant={activeChart === 'risk' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveChart('risk')}
              className="rounded-md"
            >
              Risk Analysis
            </Button>
            <Button
              variant={activeChart === 'comparison' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveChart('comparison')}
              className="rounded-md"
            >
              Level Comparison
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Chart */}
          <div className="lg:col-span-2">
            <Card className="h-96">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  {activeChart === 'roi' && (
                    <>
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      5-Year ROI Projection
                    </>
                  )}
                  {activeChart === 'risk' && (
                    <>
                      <Shield className="w-5 h-5 text-blue-600" />
                      Contract Protection Value
                    </>
                  )}
                  {activeChart === 'comparison' && (
                    <>
                      <DollarSign className="w-5 h-5 text-purple-600" />
                      CMMC Level Comparison
                    </>
                  )}
                </CardTitle>
                <CardDescription>
                  {activeChart === 'roi' && 'Projected returns on your CMMC investment over 5 years'}
                  {activeChart === 'risk' && 'Value breakdown of contracts protected vs. investment required'}
                  {activeChart === 'comparison' && 'Cost and timeline comparison across CMMC levels'}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="h-72">
                {activeChart === 'roi' && (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={roiData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="year" stroke="#6b7280" />
                      <YAxis tickFormatter={(value) => `${Math.round(value / 1000000)}M`} stroke="#6b7280" />
                      <Tooltip 
                        formatter={(value: number, name: string) => [
                          name === 'cumulativeROI' ? `${Math.round(value)}%` : formatCurrency(value),
                          name === 'netValue' ? 'Net Value' : 
                          name === 'contractsProtected' ? 'Contracts Protected' :
                          name === 'cumulativeROI' ? 'Cumulative ROI' : name
                        ]}
                        labelStyle={{ color: '#374151' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="netValue" 
                        stroke="#22c55e" 
                        strokeWidth={3}
                        dot={{ fill: '#22c55e', strokeWidth: 2, r: 4 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="contractsProtected" 
                        stroke="#3b82f6" 
                        strokeWidth={2}
                        dot={{ fill: '#3b82f6', strokeWidth: 2, r: 3 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                )}
                
                {activeChart === 'risk' && (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={riskBreakdown}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${formatCurrency(value)}`}
                      >
                        {riskBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value: number) => formatCurrency(value)} />
                    </PieChart>
                  </ResponsiveContainer>
                )}
                
                {activeChart === 'comparison' && (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={complianceCosts}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="level" stroke="#6b7280" />
                      <YAxis tickFormatter={(value) => `$${Math.round(value / 1000)}K`} stroke="#6b7280" />
                      <Tooltip 
                        formatter={(value: number) => [formatCurrency(value), 'Implementation Cost']}
                        labelStyle={{ color: '#374151' }}
                      />
                      <Bar 
                        dataKey="cost" 
                        fill="#3b82f6"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </CardContent>
            </Card>
          </div>
          
          {/* Key Metrics Sidebar */}
          <div className="space-y-6">
            {/* Investment Summary */}
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  Investment Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Implementation</span>
                  <span className="font-semibold">{formatCurrency(450000)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">5-Year Maintenance</span>
                  <span className="font-semibold">{formatCurrency(450000)}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t">
                  <span className="font-semibold">Total Investment</span>
                  <span className="font-bold text-lg">{formatCurrency(900000)}</span>
                </div>
              </CardContent>
            </Card>
            
            {/* Contract Protection */}
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Contract Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-900 mb-1">
                    {formatCurrency(25000000)}
                  </div>
                  <div className="text-sm text-blue-700">Contracts at Risk</div>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-900 mb-1">2,678%</div>
                  <div className="text-sm text-green-700">5-Year ROI</div>
                </div>
              </CardContent>
            </Card>
            
            {/* Risk Alert */}
            <Card className="border-amber-200 bg-amber-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">Compliance Deadline</h4>
                    <p className="text-sm text-amber-800 mb-3">
                      DoD contracts increasingly require CMMC certification. 
                      Delays could result in contract loss.
                    </p>
                    <Button size="sm" variant="outline" className="border-amber-300 text-amber-800 hover:bg-amber-100">
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Download Report */}
            <Card className="bg-gradient-to-r from-brand-primary to-blue-700 text-white">
              <CardContent className="p-6 text-center">
                <Download className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
                <h4 className="font-semibold mb-2">Executive Report</h4>
                <p className="text-sm text-blue-100 mb-4">
                  Get a comprehensive PDF report with detailed cost analysis and recommendations.
                </p>
                <Button variant="accent" size="sm" className="w-full">
                  Download Full Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
