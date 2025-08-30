# CMMC Protection Planning - Deployment Guide

## Pre-Deployment Checklist

### Required Accounts & Setup
- [x] GitHub Account (completed)
- [ ] Vercel Account - Sign up at https://vercel.com
- [ ] Connect Vercel to GitHub
- [ ] Domain Registration (optional)
- [ ] Google Analytics 4 Property (optional)

### Development Workflow

#### 1. Local Development Setup
```bash
# Clone repository
git clone https://github.com/bomberjacket/cmmc-protection-planning.git
cd cmmc-protection-planning

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

#### 2. Environment Configuration
Edit `.env.local` with your values:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CONTACT_EMAIL=marketing@bomberjacket.net
BOOKING_PORTAL_URL=https://portal.bomberjacket.net/booking
GOOGLE_ANALYTICS_ID=GA4-XXXX
```

#### 3. Local Testing
- [ ] Test calculator functionality
- [ ] Verify form submissions
- [ ] Check responsive design
- [ ] Test PDF report generation
- [ ] Validate SEO meta tags

## Production Deployment

### Step 1: Vercel Setup
1. Visit https://vercel.com and sign up/login
2. Click "New Project"
3. Import `bomberjacket/cmmc-protection-planning`
4. Configure build settings (auto-detected for Next.js)

### Step 2: Environment Variables in Vercel
Navigate to Project Settings → Environment Variables and add:

**Production Environment Variables:**
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
CONTACT_EMAIL=marketing@bomberjacket.net
BOOKING_PORTAL_URL=https://portal.bomberjacket.net/booking
GOOGLE_ANALYTICS_ID=GA4-XXXX
```

### Step 3: Domain Configuration (Optional)
1. In Vercel dashboard: Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed
4. Enable HTTPS (automatic with Vercel)

### Step 4: Post-Deployment Testing
- [ ] Verify site loads correctly
- [ ] Test calculator on mobile/desktop
- [ ] Validate form submissions
- [ ] Check analytics tracking
- [ ] Test PDF report downloads
- [ ] Verify SEO metadata

## Performance Targets

### Core Web Vitals Goals
- **LCP (Largest Contentful Paint)**: < 2.5 seconds
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Conversion Goals
- **Page Load Speed**: < 3 seconds
- **Calculator Completion**: > 35%
- **Lead Conversion**: > 25%
- **Bounce Rate**: < 40%

## Deployment Pipeline

### Automatic Deployment Flow
```
Local Development → GitHub Push → Vercel Auto-Deploy → Production
```

**Repository**: https://github.com/bomberjacket/cmmc-protection-planning
**Contact**: marketing@bomberjacket.net
**Support**: 651-448-9900