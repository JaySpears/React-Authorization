// Require mysql for db connection.
var mysql      = require('mysql');
var appEnv     = require('./' + (process.env.NODE_ENV || 'local') + '.json');

module.exports = mysql.createConnection({
    host     : appEnv.db_hostname,
    user     : appEnv.db_username,
    password : appEnv.db_pass,
    database : appEnv.db_database
});
