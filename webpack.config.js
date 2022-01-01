const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CopyPlugin = require("copy-webpack-plugin");
const { argv } = require("process");

let ConstantsPluginConf = {}
if (argv.mode == "production" || process.env.NODE_ENV == "production") {
  console.log("Is Production Env")
  ConstantsPluginConf = {
    API_URL_PROJECTS: "'./projects.json'",
    TITLE: "'k4nb4n'",
    ABOUT_TITLE: "'About k4nb4n'"
  }
} else {
  ConstantsPluginConf = {
    API_URL_PROJECTS: "'//localhost:8081/projects'",
    TITLE: "'k4nb4n'",
    ABOUT_TITLE: "'About k4nb4n'"
  }
}

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", "postcss-loader",
          ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "styles.css"
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    // new CopyPlugin({
    //   patterns: [
    //     { from: "./src/sample_api/projects.json", to: "" },
    //   ],
    // }),
    new webpack.DefinePlugin(ConstantsPluginConf)
  ]
};

module.exports = config;
