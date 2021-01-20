const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { SOURCE_DIR, BUILD_DIR, PROJECT_ROOT } = require('./constants');
const env = require('postcss-preset-env');
const cleanOptions = {
  verbose: true,
  root: PROJECT_ROOT,
};

module.exports = () => {
  return {
    entry: [SOURCE_DIR],
    output: {
      path: BUILD_DIR,
      filename: 'bundle.js',
    },
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: './static/template.html',
        title: 'Portfolio',
        favicon: './static/favicon.ico',
      }),
      new CleanWebpackPlugin(cleanOptions),
    ],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    env({
                      stage: 0,
                    }),
                  ],
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpg|jpeg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: `./images/[name].[ext]`,
              },
            },
          ],
        },

        {
          test: /\.svg$/,

          use: [
            '@svgr/webpack',

            {
              loader: 'file-loader',
              options: {
                name: './images/[name].[ext]',
              },
            },
          ],
        },
      ],
    },
  };
};
