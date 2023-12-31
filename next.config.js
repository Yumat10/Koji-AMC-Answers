const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'api.tsx', 'api.ts', '.page.js'],
  eslint: {
    dirs: ["pages", "pageElements", "components", "contexts", "utils"],
  },
};

module.exports = nextConfig;
