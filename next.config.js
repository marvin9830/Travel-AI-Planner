/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "quixotic-impala-265.convex.cloud",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
