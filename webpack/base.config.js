const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')



module.exports = {
  entry: {
    app: './src/index.js',
  },

  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src', 'js', 'components'),
    },
  },

  module: {
    rules: [

      /*************\
        JAVASCRIPT
      \*************/
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },



      /*************\
        SCSS
      \*************/
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: (loader) => [
                  require('autoprefixer')(),
                ],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  'public/',
                  'src/js/components',
                ],
              },
            },
          ],
        }),
      },



      /********************\
       * IMAGES
      \********************/
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 5,
              name: '[path][name].[ext]',
              publicPath: '/',
              useRelativePath: false,
            },
          },
        ],
      },



      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'react-svg-loader',
            options: {
              svgo: {
                plugins: [{removeTitle: true,}],
                floatPrecision: 2
              },
            },
          },
        ],
      },



    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),

    // Extract imported CSS into own file
    new ExtractTextPlugin('[name].bundle.[chunkhash].css'),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],
}
