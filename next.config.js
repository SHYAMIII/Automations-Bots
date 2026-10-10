/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // /demos had placeholder videos and was removed.
    return [{ source: '/demos', destination: '/#how-it-works', permanent: true }]
  },
}
module.exports = nextConfig
