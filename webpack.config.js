/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const {
    base,
    index = "./src/index.ts",
    template = "./template/index.html",
    title,
  } = env;

  console.log(base, index, template, title);

  return {
    devtool: "source-map",
    mode: "development",
    entry: { index },
    plugins: [
      new HtmlWebpackPlugin({
        title,
        template,
      }),
    ],
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist"),
    },
    resolve: {
      extensions: [".ts", ".js", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    devServer: {
      static: "./dist",
      port: 8085,
    },
  };
};
