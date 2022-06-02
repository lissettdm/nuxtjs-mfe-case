const { defineConfig } = require("@vue/cli-service");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");
const webpackClientConfig = require("./config/webpack-client.config");
const webpackServerConfig = require("./config/webpack-server.config");

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    resolve: { mainFields: ["main", "module"] },
  },
  
  chainWebpack: (webpackConfig) => {
    const ssr = process.env.SSR;
    if (ssr) {
      webpackServerConfig(webpackConfig);
    } else {
      webpackClientConfig(webpackConfig);
    }
  },
});
