var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000/',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'app/index')
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
