const { join } = require("path");
const devServer = {
  quiet: false,
  port: 65132, // Why 65132? R-15-1+5=6, E=5, A=1, C=3, T-20-2+0=2 => 65132
  contentBase: join(__dirname, "..", "build"),
  hot: true,
  historyApiFallback: true,
  inline: true,
  noInfo: false,
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false,
  },
};
module.exports = devServer;
