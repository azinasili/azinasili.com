/** @type {import('next').NextConfig} */
const nextConfig = {
  reactRemoveProperties: true,
  reactStrictMode: true,
  removeConsole: process.env.NODE_ENV === 'production',
  styledComponents: true,
  swcMinify: true,
}

module.exports = nextConfig
