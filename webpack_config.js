const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
  entry: src + '/index.jsx',
  output: {
    path: dist,
    filename: 'bundle.js'
	},
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        use: 'babel-loader'
      }
    ],
  },
  resolve: {extensions: [".js", ".json", ".jsx", ".css"]},
  performance: {
    hints: "warning",
    maxEntrypointSize: 400000
  },
  devtool: "source-map",
  devServer: {
		port: 9000,
    contentBase: dist,
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: false
  },
  plugins: [
		new HtmlWebpackPlugin({
      template: src + '/index.html',
      filename: 'index.html'
    })
  ]
}
