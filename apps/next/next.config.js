/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrite() {
    return [
      {
        source: "/api/health",
        destination: "/health",
      },
    ];
  },
};
