const Sequelize = require('sequelize');
const env = require('./environments/' + (process.env.NODE_ENV || 'local') + '.json');
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

/**
 * function connectDatabase, authenticates database
 * connection using the configuration set above.
 */
async function connectDatabase(){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (e) {
    console.log('Unable to connect to the database:', e);
  }
}

connectDatabase();
