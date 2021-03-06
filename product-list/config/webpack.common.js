const pathtoresolve = require("path");
const paths = require("./paths");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  // Where webpack looks to start building the bundle
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      components: pathtoresolve.resolve(__dirname, "../src/components/"),
      images: pathtoresolve.resolve(__dirname, "../src/images/"),
      styles: pathtoresolve.resolve(__dirname, "../src/styles/"),
    },
  },


  // Customize the webpack build process
  plugins: [
    // Vue plugin for the magic
    new VueLoaderPlugin(),
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),
    // Copies files from target to destination folder
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: paths.publicDir,
    //       to: paths.buildDir,
    //     },
    //   ],
    // }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501

  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.vue$/, loader: "vue-loader" },
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },

      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(scss|css)$/,
        use: [
          // Note: Only style-loader works for me !!!
          // 'vue-style-loader',
          "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: true, importLoaders: 1 },
          },
          { loader: "postcss-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: "asset/inline" },
    ],
  },
};
