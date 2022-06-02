const paths = require("./paths");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const nodeExternals = require("webpack-node-externals");

process.env.BASE_URL = "/";

module.exports = merge(common, {
  mode: "development",
  devtool: false,
  entry: [paths.serverIndex],

  output: {
    path: paths.serverDir,
    filename: "app.js",
    libraryTarget: "commonjs2",
  },
  externals: nodeExternals({ allowlist: /\.(css|vue)$/ }),

  target: ["node"],
});
