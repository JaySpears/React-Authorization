import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

const db = {};
const env = require(`./../../config/environments/${process.env.NODE_ENV || 'local'}.json`);
const sequelize = new Sequelize(
  env.db_database,
  env.db_username,
  env.db_pass,
  {
    host: env.db_hostname,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
);

// Iterate over model files in the model directory.
// Import the model.
fs.readdirSync(__dirname).filter(function(file) {
  return file !== 'index.js';
}).forEach(function(file) {
  let model = sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
});

// Sync database with imported model schema.
sequelize.sync({
  force: false
});

// Bind sequelize methods to database object.
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Need to export the sequelize instances
// for the creation of models.
export default db;
