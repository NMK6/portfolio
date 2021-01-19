const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { SOURCE_DIR, BUILD_DIR, PROJECT_ROOT } = require('./constants');
const cleanOptions = {
  verbose: true,
  root: PROJECT_ROOT,
};

module.exports = () => {
  return {
    entry: SOURCE_DIR,
    output: {
      path: BUILD_DIR,
      filename: 'bundle.js',
    },
    mode: 'development',
    devtool: false,
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
        // {
        //   test: /\.m?js$/,
        //   exclude: /(node_modules)/,
        //   use: {
        //     loader: 'babel-loader',
        //     options: {
        //       presets: [
        //         [
        //           '@babel/preset-env',
        //           {
        //             targets: {
        //               esmodules: true,
        //             },
        //           },
        //         ],
        //       ],
        //     },
        //   },
        // },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
  };
};
