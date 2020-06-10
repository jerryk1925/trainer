const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const PostcssNested = require('postcss-nested');
const PostcssPresetEnv = require('postcss-preset-env');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './web/src/main.js',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[id].js',
    path: `${__dirname}/web/dist`,
  },
  resolve: {
    alias: {
      trainer: path.resolve(`${__dirname}/web`, 'src/'),
    },
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                new PostcssNested(),
                new PostcssPresetEnv({
                  browsers: 'last 5 versions',
                  autoprefixer: { grid: true },
                  stage: 0,
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name]-[hash:base64:5].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './web/public/index.html',
    }),
    new ErrorOverlayPlugin(),
  ],
  devtool: 'cheap-module-source-map',
};
