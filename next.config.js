/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    reactRemoveProperties: true,
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      process.env.NODE_ENV === 'production' &&
      {
        source: '/resume',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
