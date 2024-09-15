/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'www.akturanilyas.dev' }],
      destination: 'https://akturanilyas.dev/:path*',
      permanent: true,
    },
  ],
  reactStrictMode: true,
  transpilePackages: ['@akturanilyas/ui'],
};

module.exports = nextConfig;
