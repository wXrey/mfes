const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: "./src/index",
  output: {
    publicPath: "http://localhost:3000/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "root",
      library: { type: "var", name: "root" },
      filename: "remoteEntry.js",
      remotes: { mfeReact: "mfeReact", mfeSvelte: "mfeSvelte" },
      shared: [],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  stats: {
    all: false,
  },
};
