const paths = require("./paths");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

process.env.BASE_URL = "/";

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  entry: [paths.clientIndex],

  output: {
    path: paths.clientDir,
    publicPath: "/",
    filename: "js/[name].[contenthash].main.js",
    libraryTarget: "module",
  },

  // Production: Magic happen here transpiling to es5 to partly support older browser like IE11
  target: ["web", "es5"],

  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: paths.appHtml,
      title: "MFE",
    }),
    new WebpackManifestPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: false,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  // optimization: {
  //   minimize: true,
  //   // Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
  //   // instead of having their own. This also helps with long-term caching, since the chunks will only
  //   // change when actual code changes, not the webpack runtime.
  //   runtimeChunk: {
  //     name: "runtime",
  //   },
  // },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  experiments: {
    outputModule: true,
  },
});
