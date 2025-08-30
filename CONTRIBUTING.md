# Contributing to CMMC Protection Planning

## Development Process

### Prerequisites
- Node.js 18+
- npm 8+
- Git
- VS Code (recommended)

### Setup
1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `npm install`
4. Copy environment variables: `cp .env.example .env.local`
5. Start development: `npm run dev`

### Code Standards

#### TypeScript
- Use strict TypeScript configuration
- Define proper types for all components and functions
- Avoid `any` types unless absolutely necessary
- Use interfaces for object shapes

#### React Best Practices
- Use functional components with hooks
- Implement proper error boundaries
- Optimize re-renders with useMemo/useCallback when needed
- Follow React Hook rules

#### Styling Guidelines
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Use shadcn/ui components when possible
- Maintain consistent spacing (4px grid system)
- Follow brand color palette

#### Performance Requirements
- Lazy load components below the fold
- Optimize images with Next.js Image component
- Keep bundle size minimal
- Achieve Core Web Vitals targets

### Code Quality

#### Before Committing
```bash
npm run type-check   # TypeScript validation
npm run lint         # ESLint check
npm run format:check # Prettier formatting
npm run build        # Production build test
```

#### Testing Checklist
- [ ] Calculator functions correctly
- [ ] Forms validate properly
- [ ] PDF reports generate
- [ ] Mobile responsive
- [ ] Performance metrics met
- [ ] SEO metadata complete

### Git Workflow

#### Branch Naming
- `feature/calculator-improvements`
- `fix/mobile-responsive-issues`
- `docs/update-deployment-guide`

#### Commit Messages
```
feat: add ROI calculation visualization
fix: resolve mobile menu overlay issue
docs: update deployment instructions
style: improve button hover animations
perf: optimize image loading performance
```

#### Pull Request Process
1. Create feature branch from main
2. Make changes with clear commits
3. Test thoroughly locally
4. Push branch and create PR
5. Ensure CI passes
6. Request review from team
7. Address feedback and merge

### File Organization

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── calculator/     # Calculator-specific components
│   ├── forms/          # Form components
│   └── layout/         # Layout components
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── utils/              # Helper functions
└── styles/             # Global styles
```

### Security Guidelines

- Never commit sensitive data (.env files)
- Validate all user inputs
- Sanitize data before processing
- Use HTTPS in production
- Follow OWASP security practices

### Performance Guidelines

- Images must be optimized and properly sized
- Use Next.js Image component for all images
- Implement proper loading states
- Minimize JavaScript bundle size
- Use CSS-in-JS sparingly

### Accessibility Requirements

- All interactive elements must be keyboard accessible
- Proper ARIA labels on form elements
- Color contrast ratio > 4.5:1
- Screen reader compatible
- Focus indicators visible

## Questions?

Contact: marketing@bomberjacket.net
