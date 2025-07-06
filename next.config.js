/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.vxcode.ai', 'github.com'],
  },
}

module.exports = nextConfig
