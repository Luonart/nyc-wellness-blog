import type { Metadata } from 'next'
import { DefaultSeo } from 'next-seo'
import { defaultSEO } from '../../next-seo.config'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app'),
  title: {
    default: 'NYC Wellness on a Budget',
    template: '%s | NYC Wellness on a Budget',
  },
  description: 'Discover affordable wellness solutions in New York City. From budget-friendly fitness classes to free meditation sessions, find your path to wellness without breaking the bank.',
  keywords: ['wellness', 'fitness', 'budget', 'New York City', 'NYC', 'affordable', 'health', 'mental health', 'nutrition'],
  authors: [{ name: 'NYC Wellness on a Budget' }],
  creator: 'NYC Wellness on a Budget',
  publisher: 'NYC Wellness on a Budget',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app',
    siteName: 'NYC Wellness on a Budget',
    title: 'NYC Wellness on a Budget',
    description: 'Discover affordable wellness solutions in New York City. From budget-friendly fitness classes to free meditation sessions, find your path to wellness without breaking the bank.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NYC Wellness on a Budget',
    description: 'Discover affordable wellness solutions in New York City. From budget-friendly fitness classes to free meditation sessions, find your path to wellness without breaking the bank.',
    creator: '@nycwellnessbudget',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <DefaultSeo {...defaultSEO} />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-screen bg-white">
        <div className="flex flex-col min-h-screen">
          <SiteHeader />
          <main className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
