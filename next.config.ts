import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  bundlePagesRouterDependencies: true,
  poweredByHeader: false,
  reactCompiler: true,
  reactStrictMode: true,
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
