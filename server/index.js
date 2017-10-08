// Constants.
const express = require('express');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config.js');
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 8082 : process.env.PORT;
const databaseConfig = require('./../config/database');
const app = express();

// Database connection.
databaseConfig.connect((err) => {
  if (err) {
    console.log('Error connecting to database:' + err);
    return;
  }
  console.log('Database connection established.');
});

// To support JSON-encoded bodies.
app.use(bodyParser.json());

// Exporting app to use in routes file.
module.exports.app = app;
module.exports.databaseConfig = databaseConfig;

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

// Require routes.
require('./routes');

// Run express server.
app.listen(port);
