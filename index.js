// Constants.
const express = require('express');
const app = express();

// Exporting app to use in routes file.
module.exports.app = app;

// Require routes.
require('./routes');
