import { configSvgrWebpack } from "./webpack.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "auramind.ai",
      },
    ],
  },
  webpack: configSvgrWebpack,
};

export default nextConfig;
