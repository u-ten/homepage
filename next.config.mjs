/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'u-ten.github.io',
        pathname: '/homepage/**',
      },
    ],
  },
  basePath: '/homepage',
  assetPrefix: '/homepage/',
};

export default nextConfig; 