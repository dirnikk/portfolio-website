/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.eu-central-1.amazonaws.com',
      },
    ],
  },
  // experimental: {
  //   serverActions: true,
  // },
  images: {
    unoptimized: true
  },
  output: 'export',
  distDir: 'dist'
}

module.exports = nextConfig
