import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: {
    reactRemoveProperties: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
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
