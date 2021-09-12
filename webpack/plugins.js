const { resolve, join } = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const isProduction = process.env.NODE_ENV === "production";
const build = "build";
const cleanOptions = {
  root: resolve(__dirname, ".."),
  exclude: [`${build}/.gitignore`],
  verbose: true,
  cleanStaleWebpackAssets: true,
  cleanOnceBeforeBuildPatterns: [`${build}/*.*`],
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
  plugins.push(new CleanWebpackPlugin(cleanOptions));
} else {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}
module.exports = plugins;
