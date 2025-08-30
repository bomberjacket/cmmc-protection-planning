import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "BomberJacket's calculator showed us exactly what CMMC would cost and helped us secure $15M in new DoD contracts. The ROI was clear from day one.",
    author: "Sarah Chen",
    title: "CFO",
    company: "Aerospace Solutions Inc.",
    contractValue: "$15M",
    savings: "6-month faster implementation"
  },
  {
    quote: "We were facing contract loss without CMMC Level 2. Their analysis showed the business case clearly, and we got executive buy-in immediately.",
    author: "Michael Rodriguez",
    title: "VP of Operations",
    company: "Defense Manufacturing Corp",
    contractValue: "$8.5M",
    savings: "$2.1M risk avoided"
  },
  {
    quote: "The budget calculator was spot-on. We used their projections for board approval and completed CMMC certification 3 months ahead of schedule.",
    author: "Jennifer Park",
    title: "Chief Security Officer",
    company: "Strategic Systems LLC",
    contractValue: "$22M",
    savings: "340% ROI in year 1"
  }
]

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Star className="w-4 h-4 mr-2" />
            Client Success Stories
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Defense Contractors Trust Our Calculations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our CMMC budget calculator helped these companies secure contracts 
            and achieve rapid ROI on their compliance investments.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-brand-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                    <div className="text-sm font-medium text-brand-primary">{testimonial.company}</div>
                  </div>
                  
                  {/* Results */}
                  <div className="flex gap-4 pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{testimonial.contractValue}</div>
                      <div className="text-xs text-gray-500">Contracts Secured</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-blue-600">{testimonial.savings}</div>
                      <div className="text-xs text-gray-500">Key Benefit</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to join these successful defense contractors?
          </p>
          <Button variant="brand" size="lg" asChild>
            <a href={process.env.NEXT_PUBLIC_BOOKING_PORTAL_URL}>
              Get Your Free CMMC Assessment
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
