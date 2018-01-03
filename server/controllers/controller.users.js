// Dependencies.
import bcrypt from 'bcrypt';
import Models from './../models';
import jwt from 'jsonwebtoken';

// Configuration object based on nodes environment value.
const env = require(`./../../config/environments/${process.env.NODE_ENV || 'local'}.json`);

////////////////////////////////
// User Controller Definition //
////////////////////////////////

class UserController {
  constructor() {
    // Binding Methods.
    this.Authorize = this.Authorize.bind(this);
    this.Create = this.Create.bind(this);
    this.Login = this.Login.bind(this);
  }

  /**
   * Authroize, authroize middleware function for users.
   *
   * @param {Object} req
   * @return {Object} Response
   */
  async Authorize(req) {
    let response = {};
    let usersToken = req.body.token;
    await jwt.verify(usersToken, env.secret, (err, data) => {
      response.status = (err !== null ? 403 : 200);
    })
    return response;
  }

  /**
   * Create, create middleware function for users.
   *
   * @param {Object} req
   * @return {Object} Response
   */
  async Create(req) {
    // Response object to be returned.
    let response = {};
    // Hashing the user's password 10 times.
    let saltRounds = 10;
    // The user's form information from the client's request object.
    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    };
    // Ensure email doesn't already exist in the database
    // when the user is trying to create an account.
    const matchedEmails = await Models.Users.findAll({
      where: {
        email: user.email
      }
    });
    // User's email didn't exists already.
    if (matchedEmails.length === 0) {
      // Hash user password.
      user.password = await bcrypt.hash(user.password, saltRounds);
      // Create user.
      await Models.Users.create({
        email: user.email,
        password: user.password,
        first_name: user.firstName,
        last_name: user.lastName
      });
      let userCredentials = {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      };
      response.status = 200;
      response.token = jwt.sign({ email: user.email }, env.secret);
      response.user = userCredentials;
    } else {
      response.status = 409;
    }
    return response;
  }

  /**
   * Login, login middleware function for users.
   *
   * @param {Object} req
   * @return {Object} Response
   */
  async Login(req) {
    // Response object to be returned.
    let response = {};
    // The user's form information from the client's request object.
    const user = {
      email: req.body.email,
      password: req.body.password,
      remember: req.body.rememberUser
    };
    // Checking to see if the users email exists.
    const matchedUser = await Models.Users.findOne({
      where: {
        email: user.email
      }
    });
    // User's account exists.
    if (matchedUser != null) {
      // Get users hashed password.
      const matchedUserHashedPassword = matchedUser.dataValues.password;
      // Compare the user's hashed password to the correct hashed password.
      if(await bcrypt.compare(user.password, matchedUserHashedPassword)){
        let tokenExpiresIn = user.remember ? '30d' : '8h'
        let token = jwt.sign({ email: user.email }, env.secret, {
          expiresIn: tokenExpiresIn
        });
        let userCredentials = {
          email: matchedUser.dataValues.email,
          firstName: matchedUser.dataValues.first_name,
          lastName: matchedUser.dataValues.last_name
        };
        response.status = 200;
        response.token = token;
        response.user = userCredentials;
      } else {
        response.status = 403;
      }
    } else {
      response.status = 403;
    }
    return response;
  }
}

// New instance of userController.
const userController = new UserController();

// Export model instance.
export default userController;
