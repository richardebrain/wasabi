const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.collinsdictionary.com",
        pathname: "/images/**",
      },

      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "/free-vector/**",
       
      },
    ],
  },
};

module.exports = nextConfig;
