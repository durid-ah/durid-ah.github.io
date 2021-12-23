// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const imageminMozjpeg = require('imagemin-mozjpeg');

// default next.js configuration
const nextConfig = {
  reactStrictMode: true,
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

// Plugin handling
const configWithPlugins = withPlugins([
  // image plugins
  [optimizedImages, {
    handleImages: ['svg, jpeg'],
    svgo: {
      plugins: [{
        name: 'removeViewBox',
        active: false
      }]
    },
    mozjpeg: {
      quality: 80
    }
  }]
], nextConfig);

module.exports = configWithPlugins;