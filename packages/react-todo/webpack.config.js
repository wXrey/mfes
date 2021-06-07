const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: "./src/index",
  output: {
    publicPath: "http://localhost:3001/",
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfeReact",
      library: { type: "var", name: "mfeReact" },
      filename: "remoteEntry.js",
      remotes: {
        store: "store",
      },
      exposes: {
        todo: "./src/index.js",
      },
      shared: ["react", "react-dom", "single-spa-react"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["main"],
    }),
  ],
  stats: {
    all: false,
  },
};
