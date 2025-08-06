/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
  },
}

module.exports = nextConfig 