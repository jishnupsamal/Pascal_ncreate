/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ['https://picsum.photos'],
  },
  plugins: [
    {
      autoprefixer: {
        grid: "autoplace",
      },
    },
  ]
}

module.exports = nextConfig
