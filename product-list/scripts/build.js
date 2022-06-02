const spawn = require("cross-spawn");
const path = require("path");
const webpack = require("webpack");
const paths = require("../config/paths");
const webpackConfigApp = require("../config/webpack.app");
const webpackConfigProd = require("../config/webpack.config");

const ENV = "production";

const compiler = webpack([
  {
    ...webpackConfigApp,
    mode: ENV,
    devtool: "source-map",
  },
  {
    ...webpackConfigProd,
    mode: ENV,
    devtool: "source-map",
  },
]);

compiler.run((err, stats) => {
  // Read the output later:
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }
});
