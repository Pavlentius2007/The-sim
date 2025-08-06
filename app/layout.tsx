import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

const manrope = Manrope({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'The SIM — Ваш надёжный партнёр в управлении цифровыми активами',
  description: 'Инвестируйте с защитой капитала, умными покупками и продажами, диверсификацией портфеля. Сервис для работы с цифровыми активами, который зарабатывает на волатильности рынка.',
  keywords: 'цифровые активы, криптовалюта, инвестиции, Binance, торговля, портфель, диверсификация',
  authors: [{ name: 'The SIM Team' }],
  creator: 'The SIM',
  publisher: 'The SIM',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://thesim.com'),
  alternates: {
    canonical: '/',
    languages: {
      'ru': '/ru',
      'en': '/en',
    },
  },
  openGraph: {
    title: 'The SIM — Ваш надёжный партнёр в управлении цифровыми активами',
    description: 'Инвестируйте с защитой капитала, умными покупками и продажами, диверсификацией портфеля.',
    url: 'https://thesim.com',
    siteName: 'The SIM',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The SIM - Управление цифровыми активами',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The SIM — Ваш надёжный партнёр в управлении цифровыми активами',
    description: 'Инвестируйте с защитой капитала, умными покупками и продажами, диверсификацией портфеля.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0A0F1F" />
        <meta name="msapplication-TileColor" content="#0A0F1F" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        
        {children}
      </body>
    </html>
  )
} 