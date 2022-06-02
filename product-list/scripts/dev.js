const spawn = require("cross-spawn");
const path = require("path");
const webpack = require("webpack");
const paths = require("../config/paths");
const webpackConfigApp = require("../config/webpack.app");
const webpackConfigProd = require("../config/webpack.config");

const compiler = webpack([
  {
    ...webpackConfigApp,
    mode: "development",
    devtool: "source-map",
  },
  {
    ...webpackConfigProd,
    mode: "development",
    devtool: "source-map",
  },
]);

let node;

compiler.hooks.watchRun.tap("Dev", (compiler) => {
  console.log(`Compiling...`);
  if (node) {
    node.kill();
    node = undefined;
  }
});

compiler.watch({}, (err, stats) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(stats.toString("minimal"));
  const compiledSuccessfully = !stats.hasErrors();
  if (compiledSuccessfully && !node) {
    console.log("Starting Node.js ...");
    node = spawn(
      "node",
       [path.join(paths.serverAppDir, "index.js")],
      {
        stdio: "inherit",
      }
    );
  }
});
