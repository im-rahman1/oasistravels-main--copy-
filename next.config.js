const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack5: false,
  images: {
    loader: "imgix",
    unoptimized: true,
  },
};

module.exports = nextConfig;
