/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
  // Enable static exports for Vercel
  output: 'standalone',
}

module.exports = nextConfig
