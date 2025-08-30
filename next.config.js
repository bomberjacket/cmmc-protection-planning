/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  env: {
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
    BOOKING_PORTAL_URL: process.env.BOOKING_PORTAL_URL,
  },
  async redirects() {
    return [
      {
        source: '/contact',
        destination: process.env.BOOKING_PORTAL_URL || 'https://portal.bomberjacket.net/booking',
        permanent: false,
      },
      {
        source: '/book',
        destination: process.env.BOOKING_PORTAL_URL || 'https://portal.bomberjacket.net/booking',
        permanent: false,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
