const { resolve, join } = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin-legacy");
const isProduction = process.env.NODE_ENV === "production";
const dist = "dist";
const pathsToClean = [`${dist}/*.*`];
const cleanOptions = {
  root: resolve(__dirname, ".."),
  exclude: [`${dist}/.gitignore`],
  verbose: true,
  dry: false,
};
const plugins = [
  new webpack.EnvironmentPlugin({ NODE_ENV: "development" }),
  new HtmlWebpackPlugin({
    template: join("client", "index.html"),
    favicon: join("client", "favicon.ico"),
  }),
  new webpack.NamedModulesPlugin(),
];
if (isProduction) {
  plugins.push(new TerserPlugin());
} else {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}
module.exports = plugins;
