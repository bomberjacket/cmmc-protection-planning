import { Metadata } from 'next'
import { Hero } from '@/components/layout/hero'
import { Calculator } from '@/components/calculator/calculator'
import { ROIVisualization } from '@/components/calculator/roi-visualization'
import { Features } from '@/components/layout/features'
import { Testimonials } from '@/components/layout/testimonials'
import { CTA } from '@/components/layout/cta'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'CMMC Budget Calculator | Calculate True Implementation Costs',
  description: 'Interactive CMMC budget calculator for defense contractors. Calculate implementation costs, ROI projections, and contract protection value. Get executive-ready reports.',
  openGraph: {
    title: 'CMMC Budget Calculator | Calculate True Implementation Costs',
    description: 'Interactive CMMC budget calculator for defense contractors. Calculate implementation costs, ROI projections, and contract protection value.',
  }
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Calculator />
      <ROIVisualization />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
