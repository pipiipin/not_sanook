/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  env: {
    URL: 'https://not-sanook-fj2yjz7he-pipiipin.vercel.app/contents',
  },
}

module.exports = nextConfig
