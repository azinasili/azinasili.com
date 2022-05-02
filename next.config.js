/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    reactRemoveProperties: true,
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: true,
  },
  reactStrictMode: true,
  swcMinify: process.env.NODE_ENV === 'production',
  ...(process.env.NODE_ENV === 'production' && {
    async redirects() {
      return [
        {
          source: '/resume',
          destination: '/',
          permanent: false,
        },
      ];
    },
  }),
};

module.exports = nextConfig;
