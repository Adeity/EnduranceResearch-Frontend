/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
    missingSuspenseWithCSRBailout: false,
  },
  output: 'export'
}

module.exports = nextConfig
