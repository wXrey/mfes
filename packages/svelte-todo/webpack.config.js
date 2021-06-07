const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: "./src/index",
  output: {
    publicPath: "http://localhost:3002/",
  },
  resolve: {
    extensions: [".svelte", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(svelte)$/,
        exclude: /node_modules/,
        use: {
          loader: "svelte-loader",
          options: {
            externalDependencies: true,
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfeSvelte",
      library: { type: "var", name: "mfeSvelte" },
      filename: "remoteEntry.js",
      remotes: {
        home: "home",
        store: "store",
      },
      exposes: {
        todo: "./src/index",
      },
      shared: [],
    }),
  ],
  stats: {
    all: false,
  },
};
