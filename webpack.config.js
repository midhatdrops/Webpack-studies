const webpack = require("webpack");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/principal.js",
  output: {
    filename: "principal.js",
    path: __dirname + "/public"
  },
  plugins: [new miniCssExtractPlugin({ filename: "style.css" })],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  }
};
