import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    reactRemoveProperties: true,
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: true,
  },
  reactStrictMode: true,
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

export default nextConfig;
