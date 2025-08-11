/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.eu-central-1.amazonaws.com',
      },
    ],
    // set this only if you really need to bypass Next/Image optimization:
    // unoptimized: true,
  },

  // Not needed unless you’re on an older Next and really want the flag:
  // experimental: { serverActions: true },

  // ❌ remove these for Vercel so APIs can run
  // output: 'export',
  // distDir: 'dist',
};

module.exports = nextConfig;
