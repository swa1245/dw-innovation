/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        port: '',
        pathname: '/free-photo/**',
      },
    ],
    unoptimized: true,
  },
  devIndicators: {
    buildActivity: false,
  },
};

export default nextConfig;
