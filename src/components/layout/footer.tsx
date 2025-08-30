import { Shield, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-brand-accent" />
              <div>
                <h3 className="text-xl font-bold">BomberJacket Networks</h3>
                <p className="text-gray-400 text-sm">CMMC Compliance Experts</p>
              </div>
            </div>
            
            <p className="text-gray-300 max-w-md">
              Protecting defense contractors' DoD contracts through expert CMMC compliance 
              implementation. We've secured over $2.1 billion in contract value for our clients.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-brand-accent" />
                <span>651-448-9900</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-brand-accent" />
                <span>marketing@bomberjacket.net</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-brand-accent" />
                <span>Minneapolis, Minnesota</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">CMMC Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">CMMC Assessment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Implementation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ongoing Monitoring</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Staff Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Certification Support</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">CMMC Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cost Calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
            
            <div className="pt-4">
              <Button 
                variant="accent" 
                size="sm" 
                className="w-full" 
                asChild
              >
                <a href={process.env.NEXT_PUBLIC_BOOKING_PORTAL_URL}>
                  Schedule Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © 2025 BomberJacket Networks. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">CMMC Resources</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
