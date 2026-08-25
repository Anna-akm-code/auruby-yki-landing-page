const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [
      {
        source: "/english/teens",
        destination: "/english/club",
        permanent: true,
      },
      {
        source: "/english/adults",
        destination: "/english/plan",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
