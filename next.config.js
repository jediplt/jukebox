const withOptimizedImages = require('next-optimized-images');
const webpack = require('webpack')
module.exports = withOptimizedImages({
  target: 'serverless',
  devIndicators: {
    autoPrerender: false,
  },
  // https://stackoverflow.com/questions/55175445/cant-import-svg-into-next-js
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ['@svgr/webpack'],
      },
      // {
      //   test: /\.(jpe?g|png)$/i,
      //   loader: 'responsive-loader',
      //   options: {
      //     // If you want to enable sharp support:
      //     adapter: require('responsive-loader/sharp')
      //   }
      // }
    );
    // config.target = 'node';//https://github.com/jsdom/jsdom/issues/1812        jsdom issue   cant resolve process
    // if (!isServer) {
      config.node = {
        fs: 'empty'
      }
      config.plugins.push(new webpack.IgnorePlugin(/\.test.js$/,));
    // }
    return config;
  },
  // env: {
  //   SITE: "hub.mccorvey.com",
  // }
});

// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const path = require("path")
// // const webpack = require("webpack")
// module.exports = {
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     config.node = {
//       fs: 'empty'
//     };
//     // Note: we provide webpack above so you should not `require` it
//     // Perform customizations to webpack config
//     // Important: return the modified config
//     // config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
//     // config.plugins.push(
//     //   // new CopyWebpackPlugin([
//     //   //   {
//     //   //     from: path.join(__dirname, 'node_modules/canvaskit-wasm/bin/canvaskit.wasm'),
//     //   //     to: path.join(__dirname, 'public/next/static/runtime/')
//     //   //   }
//     //   // ]),

//     //   new webpack.NormalModuleReplacementPlugin(
//     //     /^react-native-dark-mode$/,
//     //     path.resolve(__dirname, './src/components/react-native-port/react-native-dark-mode')
//     //   ),
//     // );

    
//     // config.plugins.push(
//     //   new webpack.NormalModuleReplacementPlugin(
//     //     /^react-native-iphone-x-helper$/,
//     //     path.resolve(__dirname, './src/components/react-native-port/react-native-iphone-x-helper')
//     //   )
//     // )
//     // config.plugins.push(
//     //   new webpack.NormalModuleReplacementPlugin(
//     //     /^react-native$/,
//     //     path.resolve(__dirname, './src/components/react-native-port/react-native')
//     //   )
//     // )

//     // config.resolve.alias['react-native-svg'] =path.resolve(__dirname, 'src/components/react-native-port/react-native-svg');
//     // config.resolve.alias['react-native'] =path.resolve(__dirname, 'src/components/react-native-port/react-native');
//     // config.plugins.push(
//     //   new webpack.NormalModuleReplacementPlugin(
//     //     /^react-native-svg$/,
//     //     path.resolve(__dirname, './src/components/react-native-port/react-native-svg.js')
//     //   )
//     // )

//     // config.plugins.push(
//     //   new webpack.NormalModuleReplacementPlugin(
//     //     /\/nav$/,
//     //     path.resolve(__dirname, './src/components/react-native-port/nav')
//     //   )
//     // )

//     // config.plugins.push(
//     //   new CopyWebpackPlugin([
//     //     { from: 'node_modules/canvaskit-wasm/bin/canvaskit.wasm' }
//     //   ])
//     // );
//     return config
//   },
//   webpackDevMiddleware: config => {
//     // Perform customizations to webpack dev middleware config
//     // Important: return the modified config
//     return config
//   },
// }