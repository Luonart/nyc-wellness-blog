import { DefaultSeoProps } from 'next-seo'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app'

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: '%s | NYC Wellness on a Budget',
  defaultTitle: 'NYC Wellness on a Budget',
  description: 'Discover affordable wellness solutions in New York City. From budget-friendly fitness classes to free meditation sessions, find your path to wellness without breaking the bank.',
  canonical: siteUrl,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'NYC Wellness on a Budget',
    title: 'NYC Wellness on a Budget',
    description: 'Discover affordable wellness solutions in New York City. From budget-friendly fitness classes to free meditation sessions, find your path to wellness without breaking the bank.',
    images: [
      {
        url: `${siteUrl}/uploads/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'NYC Wellness on a Budget',
      },
    ],
  },
  twitter: {
    handle: '@nycwellnessbudget',
    site: '@nycwellnessbudget',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#0ea5e9',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
}
