/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world',
      },

    ],
  },
}

module.exports = nextConfig
