const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8080,
    open: true,
  },

 module: {
  rules: [
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.html$/i,
      loader: "html-loader",
    },
    {
      test: /\.(png|jpe?g|gif|svg|webp)$/i,  // ✅ your image rule
      type: "asset/resource",
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader", // use this if you need ES6 support
      },
    },
  ],
},
};
