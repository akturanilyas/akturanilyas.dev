/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: '/:path*',
      has: [{type: 'host', value: 'www.akturanilyas.dev'}],
      destination: 'https://akturanilyas.dev/:path*',
      permanent: true
    }
  ]
}

module.exports = nextConfig
