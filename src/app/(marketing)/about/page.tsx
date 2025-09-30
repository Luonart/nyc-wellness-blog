import { NextSeo } from 'next-seo'
import { getPageBySlug } from '@/lib/content'
import Prose from '@/components/Prose'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Img, Callout } from '@/components/MDX'

export default function AboutPage() {
  const aboutPage = getPageBySlug('about')

  if (!aboutPage) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600">
            Content coming soon...
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <NextSeo
        title="About"
        description={aboutPage.description}
        openGraph={{
          title: 'About | NYC Wellness on a Budget',
          description: aboutPage.description,
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {aboutPage.title}
          </h1>
          <p className="text-xl text-gray-600">
            {aboutPage.description}
          </p>
        </header>

        <Prose>
          <MDXRemote
            source={aboutPage.content}
            components={{
              Img,
              Callout,
            }}
          />
        </Prose>
      </div>
    </>
  )
}
