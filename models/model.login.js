const bcrypt = require('bcrypt'),
      Promise = require('bluebird'),
      mysql = require('mysql'),
      jwt = require('jsonwebtoken'),
      databaseConfig = require('../config/database');

// Database connection message.
databaseConfig.connect(function(err){
  if(err){
    console.log('Error connecting to database');
    return;
  }
  console.log('Database connection established');
});

module.exports = {
    login: function(loginCredentials){
        const loginEmail = loginCredentials.email;
        const loginPassword = loginCredentials.password;
        const rememberAdmin = loginCredentials.remember;
        const adminCredentials = 'SELECT * FROM users WHERE admin_ownership = 1;';
        return new Promise(function(resolve, reject){
            databaseConfig.query(adminCredentials, function(err, rows, fields) {
                if (err) {
                    console.log(err.message);
                    reject(queryFailed);
                }
                const adminPasswordHash = rows[0].password;
                const adminEmail = rows[0].email;
                const adminId = rows[0].id;
                const adminJwt = rows[0].JWT;
                bcrypt.compare(loginPassword, adminPasswordHash, function(err, res) {
                    if (res && loginEmail == adminEmail) {
                        if (rememberAdmin === true) {
                            // Generate token for user login, last 30 days.
                            var token = jwt.sign({
                                id: adminId
                            }, 'ansira0903', { expiresIn: '30 days' });
                        } else {
                            // Generate token for user login, lasts 24 hours.
                            var token = jwt.sign({
                                id: adminId
                            }, 'ansira0903', { expiresIn: '24h' });
                        }

                        resolve(token);
                    } else {
                        const queryFailed = {
                            'message': '403 - Unauthorized Access.',
                            'status': 403
                        }
                        reject(queryFailed);
                    }
                });
            });
        });
    }
}
