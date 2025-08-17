/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  async redirects() {
    return [
      // Редирект с главной на русский язык (по умолчанию)
      {
        source: '/',
        destination: '/ru',
        permanent: true,
      },
    ]
  },
  // Добавляем security headers глобально
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Защита от XSS атак
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          // Защита от MIME type sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Защита от clickjacking
          { key: 'X-Frame-Options', value: 'DENY' },
          // Политика реферера
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Content Security Policy
          { 
            key: 'Content-Security-Policy', 
            value: process.env.NODE_ENV === 'production' 
              ? "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data: https: blob:; font-src 'self'; connect-src 'self'; media-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'"
              : "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self'; connect-src 'self'; media-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'"
          },
          // Защита от MIME type confusion
          { key: 'X-Download-Options', value: 'noopen' },
          // Защита от IE автоматического выполнения
          { key: 'X-DO-Content-Type-Options', value: 'nosniff' },
          // Защита от переполнения буфера
          { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
          // Strict Transport Security
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          // Защита от DNS prefetch
          { key: 'X-DNS-Prefetch-Control', value: 'off' },
          // Защита от cache poisoning
          { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate, proxy-revalidate' },
          { key: 'Pragma', value: 'no-cache' },
          { key: 'Expires', value: '0' }
        ]
      }
    ]
  }
}

module.exports = nextConfig 