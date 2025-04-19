import type { NextConfig } from "next";

// next.config.js
/** @type {import('next').NextConfig} */
const NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

// next.config.js
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};


module.exports = NextConfig;

