/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    formats: ['image/webp', 'image/jpeg'],
  },
};

module.exports = nextConfig;
