import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Calculator, TrendingUp } from 'lucide-react'

export function Hero() {
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-gradient-to-br from-brand-primary via-blue-700 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      
      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <Shield className="w-4 h-4" />
              <span>DoD CMMC Compliance Experts</span>
            </div>
            
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="heading-responsive font-bold leading-tight">
                Calculate Your
                <span className="block text-yellow-400">CMMC Investment</span>
                <span className="block">Before You Lose Contracts</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Interactive budget calculator showing the true cost of CMMC compliance 
                vs. the risk of losing DoD contracts. Get executive-ready ROI analysis 
                in minutes, not months.
              </p>
            </div>
            
            {/* Key Value Props */}
            <div className="grid sm:grid-cols-3 gap-4 py-6">
              <div className="flex items-center gap-3">
                <Calculator className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <span className="text-sm font-medium">Instant Cost Analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-sm font-medium">5-Year ROI Projection</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-300 flex-shrink-0" />
                <span className="text-sm font-medium">Contract Protection</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="xl" 
                variant="accent"
                onClick={scrollToCalculator}
                className="group"
              >
                Calculate Your Investment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="xl" 
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                asChild
              >
                <a href="#features">
                  Learn More
                </a>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-sm text-blue-200 mb-4">Trusted by defense contractors nationwide</p>
              <div className="flex items-center gap-6 text-xs text-blue-300">
                <span>• 500+ CMMC Assessments</span>
                <span>• $2.1B+ Contracts Protected</span>
                <span>• 98% Success Rate</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual Element */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Main graphic placeholder */}
              <div className="w-full h-96 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20 p-8">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Shield className="w-20 h-20 text-yellow-400 mx-auto" />
                    <h3 className="text-2xl font-bold">CMMC Protection</h3>
                    <p className="text-blue-200">Secure Your DoD Contracts</p>
                  </div>
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-lg p-3 shadow-lg">
                <div className="text-xs font-medium">Contract Protected</div>
                <div className="text-lg font-bold">$2.4M</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-brand-accent text-white rounded-lg p-3 shadow-lg">
                <div className="text-xs font-medium">ROI</div>
                <div className="text-lg font-bold">340%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-12 fill-white">
          <path d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  )
}
