import { Shield, Calculator, TrendingUp, FileText, Users, Clock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const features = [
  {
    icon: Calculator,
    title: 'Interactive Budget Calculator',
    description: 'Real-time cost analysis for CMMC Levels 1-3 with company-specific variables and industry benchmarks.',
    benefits: ['Instant cost projections', 'Industry-specific calculations', 'Multiple scenario modeling']
  },
  {
    icon: TrendingUp,
    title: '5-Year ROI Projections',
    description: 'Comprehensive return on investment analysis showing contract protection value and business impact.',
    benefits: ['Break-even timeline', 'Contract risk analysis', 'Financial impact modeling']
  },
  {
    icon: FileText,
    title: 'Executive Reports',
    description: 'Professional PDF reports for board presentations and stakeholder communication.',
    benefits: ['Board-ready presentations', 'Executive summaries', 'Detailed cost breakdowns']
  },
  {
    icon: Shield,
    title: 'Contract Protection Analysis',
    description: 'Quantify the value of DoD contracts at risk without proper CMMC compliance.',
    benefits: ['Portfolio risk assessment', 'Contract value protection', 'Compliance gap analysis']
  },
  {
    icon: Users,
    title: 'Expert Consultation',
    description: 'Direct access to CMMC specialists for personalized implementation guidance.',
    benefits: ['1-on-1 expert sessions', 'Custom implementation roadmaps', 'Ongoing compliance support']
  },
  {
    icon: Clock,
    title: 'Rapid Implementation',
    description: 'Accelerated timelines for urgent compliance needs with proven methodologies.',
    benefits: ['Fast-track options', 'Proven methodologies', 'Risk mitigation strategies']
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Complete CMMC Solution
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Everything You Need for CMMC Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial budget planning to full implementation, our comprehensive platform 
            guides defense contractors through every step of CMMC compliance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-brand-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
