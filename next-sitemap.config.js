/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin/*'],
  additionalPaths: async (config) => {
    const fs = require('fs')
    const path = require('path')
    
    const result = []
    
    // Add blog posts
    try {
      const postsDir = path.join(process.cwd(), 'content', 'posts')
      if (fs.existsSync(postsDir)) {
        const files = fs.readdirSync(postsDir)
        files
          .filter(file => file.endsWith('.mdx'))
          .forEach(file => {
            const slug = file.replace(/\.mdx$/, '')
            result.push({
              loc: `/blog/${slug}`,
              changefreq: 'weekly',
              priority: 0.7,
              lastmod: new Date().toISOString(),
            })
          })
      }
    } catch (error) {
      console.warn('Could not generate sitemap for blog posts:', error)
    }
    
    // Add pages
    try {
      const pagesDir = path.join(process.cwd(), 'content', 'pages')
      if (fs.existsSync(pagesDir)) {
        const files = fs.readdirSync(pagesDir)
        files
          .filter(file => file.endsWith('.mdx'))
          .forEach(file => {
            const slug = file.replace(/\.mdx$/, '')
            if (slug !== 'home') {
              result.push({
                loc: `/${slug}`,
                changefreq: 'monthly',
                priority: 0.8,
                lastmod: new Date().toISOString(),
              })
            }
          })
      }
    } catch (error) {
      console.warn('Could not generate sitemap for pages:', error)
    }
    
    return result
  },
}
