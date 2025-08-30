import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Calendar } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-primary to-blue-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <Shield className="w-4 h-4" />
              <span>Ready to Protect Your Contracts?</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
              Don't Let CMMC Compliance
              <span className="block text-yellow-400">Cost You Contracts</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              Join 500+ defense contractors who've secured their DoD contracts with our 
              proven CMMC implementation process. Get your personalized roadmap today.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-8 py-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">$2.1B+</div>
              <div className="text-blue-200">Contracts Protected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-blue-200">Successful Assessments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="xl" 
              variant="accent"
              className="group"
              asChild
            >
              <a href={process.env.NEXT_PUBLIC_BOOKING_PORTAL_URL}>
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              size="xl" 
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Try Calculator Again
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="pt-8">
            <p className="text-sm text-blue-200 mb-4">Trusted by industry leaders</p>
            <div className="flex justify-center items-center gap-8 text-xs text-blue-300">
              <span>• Fortune 500 Defense Contractors</span>
              <span>• Small & Medium Businesses</span>
              <span>• Government Subcontractors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
