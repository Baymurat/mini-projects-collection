const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => {
  const {
    base,
    index = './src/index.ts',
    template = './template/index.html',
    title
  } = env

  console.log(base, index, template, title)

  return {
    mode: 'development',
    entry: { index },
    plugins: [
      new HtmlWebpackPlugin({
        title,
        template
      })
    ],
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    devServer: {
      static: './dist',
      port: 8085
    }
  }
}
