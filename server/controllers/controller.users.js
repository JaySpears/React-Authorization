const usersModel = require('../models/model.users.js');
const bcrypt = require('bcrypt');

/////////////////////////////////
// User Model Class Definition //
/////////////////////////////////

class UserMiddleware {
  constructor() {
    this.Create = this.Create.bind(this);
    this.Login = this.Login.bind(this);
  }

  /**
   * Create, create middleware function for users.
   * @param {Object} req
   * @param {Object} res
   */
  Create(req) {
    let saltRounds = 10;
    let user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    };

    return new Promise(function(resolve, reject) {
      // Hash user password.
      bcrypt.hash(user.password, saltRounds).then(function(hash){
        // Update user reference.
        user.password = hash;
        // Send updated reference to model.
        usersModel.Create(user).then(function(){
          resolve();
        });
      }).catch(function(err){
        if (err) {
          console.log('Bcrypt error: ' + err);
          reject();
        }
      });
    });
  }

  /**
   * Login, login middleware function for users.
   * @param {Object} req
   * @param {Object} res
   */
  Login(req, res) {

  }
}

// New instance of UserModel.
const userMiddleware = new UserMiddleware();

// Export model instance.
module.exports = userMiddleware;
