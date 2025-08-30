# Deployment Guide - CMMC Protection Planning Landing Page

## Quick Deploy to Vercel

### Option 1: One-Click Deploy (Recommended)
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project" 
3. Import `bomberjacket/cmmc-protection-planning` repository
4. Vercel will auto-detect Next.js configuration
5. Set environment variables (see below)
6. Click "Deploy"

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

## Environment Variables for Vercel

**Required Variables** (set in Vercel Dashboard → Project Settings → Environment Variables):
```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_CONTACT_EMAIL=marketing@bomberjacket.net
NEXT_PUBLIC_PHONE=651-448-9900
NEXT_PUBLIC_BOOKING_PORTAL_URL=https://portal.bomberjacket.net/booking
```

**Optional Variables** (add when services are configured):
```
GOOGLE_ANALYTICS_ID=GA4-XXXXXXXXXX
SENDGRID_API_KEY=SG.xxxxxxxxxx
HUBSPOT_API_KEY=pat-na1-xxxxxxxxxx
```

## Custom Domain Setup

### In Vercel Dashboard:
1. Go to Project Settings → Domains
2. Add your domain: `cmmc-calculator.bomberjacket.net`
3. Configure DNS records as instructed by Vercel
4. Enable HTTPS (automatic)

### DNS Configuration:
```
Type: CNAME
Name: cmmc-calculator
Value: cname.vercel-dns.com
```

## GitHub Actions (Optional - for CI/CD)

Create `.github/workflows/deploy.yml` for automated testing:
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
```

## Monitoring Setup

### Vercel Analytics:
- Enable in Project Settings → Analytics
- Monitor Core Web Vitals automatically
- Track deployment performance

### Google Analytics 4:
1. Create GA4 property
2. Add tracking ID to environment variables
3. Verify tracking in Google Analytics dashboard

### Search Console:
1. Add property for your domain
2. Verify ownership via DNS or HTML file
3. Submit sitemap: `https://your-domain.com/sitemap.xml`

## Performance Monitoring

### Core Web Vitals Targets:
- **LCP**: <2.5 seconds
- **FID**: <100 milliseconds  
- **CLS**: <0.1

### Lighthouse Targets:
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

## Backup Strategy

### Repository Backup:
- Primary: GitHub repository (automatic)
- Secondary: Local development environment
- Tertiary: Vercel deployment history

### Content Backup:
- Document all custom content and configurations
- Export environment variables regularly
- Maintain deployment documentation

## Rollback Procedures

### If Deployment Fails:
1. Check Vercel deployment logs
2. Verify environment variables
3. Test build locally: `npm run build`
4. Rollback to previous deployment in Vercel dashboard

### Emergency Contacts:
- **Technical Issues**: mbramm@bomberjacket.net
- **Domain Issues**: IT support
- **Analytics Issues**: Marketing team

## Post-Deployment Checklist

### Immediate (within 24 hours):
- [ ] Verify site loads correctly
- [ ] Test calculator functionality
- [ ] Test form submissions
- [ ] Check mobile responsiveness
- [ ] Verify contact links work

### Within 1 Week:
- [ ] Submit to Google Search Console
- [ ] Set up Google Analytics
- [ ] Monitor initial performance metrics
- [ ] Test lead capture workflow
- [ ] Verify CRM integration

### Within 1 Month:
- [ ] Review SEO performance
- [ ] Analyze conversion rates
- [ ] Monitor uptime and performance
- [ ] Collect user feedback
- [ ] Plan optimization iterations

## Troubleshooting

### Common Issues:
- **Build Fails**: Check Node.js version and dependencies
- **Environment Variables**: Verify all required variables are set
- **Forms Not Working**: Check API endpoints and integrations
- **Slow Performance**: Review image optimization and bundle size

### Support Resources:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Project Repository](https://github.com/bomberjacket/cmmc-protection-planning)

---

**Repository**: https://github.com/bomberjacket/cmmc-protection-planning
**Status**: Ready for development and deployment
**Maintainer**: BomberJacket Networks Technical Team
