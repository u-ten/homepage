/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/homepage',
  assetPrefix: '/homepage',
  trailingSlash: true,
};

export default nextConfig; 