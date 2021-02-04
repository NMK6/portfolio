const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackInjector = require("html-webpack-injector");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { SOURCE_DIR, BUILD_DIR, PROJECT_ROOT } = require("./constants");
const env = require("postcss-preset-env");
const autoprefixer = require("autoprefixer");
const cleanOptions = {
  verbose: true,
  root: PROJECT_ROOT,
};
const ImageminWebpack = require("imagemin-webpack-plugin").default;

const cssnano = require("cssnano");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");
const imageminSvgo = require("imagemin-svgo");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
  return {
    entry: [SOURCE_DIR],
    output: {
      path: BUILD_DIR,
      filename: "js/bundle.js",
    },
    mode: "development",
    //change for prod
    devtool: "eval-cheap-module-source-map",

    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.scss$/,
          use: [
            //enable for dev
            // 'style-loader',
            //enable for prod
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: "../",
              },
            },

            {
              loader: "css-loader",
              options: {
                importLoaders: 2,
                esModule: true,
                modules: {
                  namedExport: true,
                  localIdentName: "[local]",
                },
                //change for prod
                sourceMap: false,
              },
            },

            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [
                    env({
                      stage: 0,
                    }),
                    autoprefixer({}),
                    cssnano({
                      preset: "default",
                    }),
                  ],
                  minify: true,
                  sourceMap: true,
                },
              },
            },
            "sass-loader",
          ],
        },
        {
          test: /\.(png|jpg|jpeg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: `./images/[name].[ext]`,
              },
            },
          ],
        },

        {
          test: /\.svg$/,

          use: [
            "@svgr/webpack",

            {
              loader: "file-loader",
              options: {
                name: "./images/[name].[ext]",
              },
            },
          ],
        },
        {
          test: /\.woff2$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "fonts/[name].[ext]",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./static/template.html",
        title: "Portfolio",
        favicon: "./static/favicon.ico",
      }),
      new HtmlWebpackInjector(),
      new CleanWebpackPlugin(cleanOptions),
      new MiniCssExtractPlugin({
        filename: "css/[name].[id].css",
        chunkFilename: "css/[name].[id].css",
      }),
      new ImageminWebpack({
        // imageminOptions: {
        plugins: [
          imageminMozjpeg({
            progressive: true,
            quality: 60,
          }),
          imageminPngquant({
            quiality: 60,
          }),
          imageminSvgo({}),
        ],
        // },
      }),
    ],
  };
};
