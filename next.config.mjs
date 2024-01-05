/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // domains: ['davidinmichael.pythonanywhere.com/']
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'davidinmichael.pythonanywhere.com/',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
