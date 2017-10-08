const mysql = require('mysql');
const databaseConfig = require('./../index.js').databaseConfig;

/////////////////////////////////
// User Model Class Definition //
/////////////////////////////////

class UserModel {
  constructor() {
    this.Create = this.Create.bind(this);
    this.Login = this.Login.bind(this);
  }

  /**
   * Create, create model function for users.
   * @param {Object} req
   * @param {Object} res
   */
  async Create(user) {
    let userFirstName = user.firstName;
    let userLastName = user.lastName;
    let userEmail = user.email;
    let userHashedPassword = user.password;
    let createUserQuery = `INSERT INTO users
      (first_name, last_name, email, password) VALUES
      ('${userFirstName}', '${userLastName}',
      '${userEmail}', '${userHashedPassword}');`

    await databaseConfig.query(createUserQuery);
  }

  /**
   * Login, login model function for users.
   * @param {Object} req
   * @param {Object} res
   */
  Login(req, res) {

  }
}

// New instance of UserModel.
const userModel = new UserModel();

// Export model instance.
module.exports = userModel;
