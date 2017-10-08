// Constants.
const express = require('express');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config.js');
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 8082 : process.env.PORT;
const app = express();

// Run webpack middleware if in development mode.
if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
}

// To support JSON-encoded bodies.
app.use(bodyParser.json());

// Exporting app to use in routes file.
module.exports.app = app;

// Require database configuration.
require('./../config/database');

// Require routes.
require('./routes');

// Run express server.
app.listen(port);
