/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Allow importing markdown and JSON from the shared repo-root directories. */
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      type: "asset/source",
    });
    return config;
  },
};

module.exports = nextConfig;
