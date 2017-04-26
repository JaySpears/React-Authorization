const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true
});

server.listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
});
