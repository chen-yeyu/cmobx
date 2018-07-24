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
        exclude: /node_modules/,
        use: [{
          loader:'babel-loader',
          options:{
            presets:['es2017', 'stage-0', 'react'],
            plugins:['transform-decorators-legacy']
          }
        }]
      },
      // add when you need
      {
        test: /\.css$/,
        use: "style-loader!css-loader"
      },
      {
        test: /\.png$/,
        use: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        use: "file-loader"
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url?limit=10000&mimetype=image/svg+xml'
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
