const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: "./src/store",
  output: {
    publicPath: "http://localhost:3003/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "store",
      library: { type: "var", name: "store" },
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        store: "./src/store",
      },
      shared: [],
    }),
  ],
};
