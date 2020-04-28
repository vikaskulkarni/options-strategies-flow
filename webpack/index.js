const { resolve } = require("path");
const rules = require("./rules");
const plugins = require("./plugins");
const devServer = require("./dev_server");
const devtool = require("./devtool");
const isProduction = process.env.NODE_ENV === "production";

const settings = {
  mode: isProduction ? "production" : "development",
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  context: resolve(__dirname, ".."),
  entry: "./client/index.jsx",
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "..", "dist"),
  },
  module: {
    rules,
  },
  plugins,
  devServer,
  devtool,
};
module.exports = settings;
