// // @ts-check
 
// export default (phase, { defaultConfig }) => {
//   /**
//    * @type {import('next').NextConfig}
//    */
//   const nextConfig = {
//     /* config options here */
//   }
//   return nextConfig
// }

// next.config.js
const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    // Add file-loader configuration for images
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'static/images/', // adjust the output path as needed
            publicPath: '/_next/', // adjust the public path as needed
          },
        },
      ],
    });

    return config;
  },
};
