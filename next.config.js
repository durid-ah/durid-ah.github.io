// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

// default next.js configuration
const config = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

// Plugin handling
const configWithPlugins = withPlugins([optimizedImages, {}], config)

module.exports = configWithPlugins;