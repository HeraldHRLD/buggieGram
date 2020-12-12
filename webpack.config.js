const { pathToArray } = require('graphql/jsutils/Path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwdManifestPlugin = require('webpack-pwa-manifest')
const path = require('path')
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/assets/icon.png'
    }),
    new WebpackPwdManifestPlugin({
      name: 'Buggiegram - Tu app de mascotas',
      short_name: 'Buggiegram',
      description: 'En Buggiegram podes encontrar fotos increíbles de mascotas',
      background_color: '#fff',
      theme_color: '#eb5335',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    }),
    new WorkboxPlugin.GenerateSW({
      swDest: 'service-worker.js',
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 5000000,
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            'https://(res.cloudinary.com|images.unsplash.com)'
          ),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp(
            'http://petgram-server-gabi.vercel.app/'
          ),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}