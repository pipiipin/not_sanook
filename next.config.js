/** @type {import('next').NextConfig} */
require('dotenv').config()
module.exports = {
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
    API_URL: process.env.API_URL,
  },
}
