import bcrypt from 'bcrypt';
import Models from './../models';
import jwt from 'jsonwebtoken';

//////////////////////////////////////
// User Model Middleware Definition //
//////////////////////////////////////

class UserMiddleware {
  constructor() {
    this.Create = this.Create.bind(this);
    this.Login = this.Login.bind(this);
  }

  /**
   * Create, create middleware function for users.
   *
   * @param {Object} req
   * @return {Integer} Status
   */
  async Create(req) {
    let response = {};
    let saltRounds = 10;
    let user = {
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

      return response = {
        token: jwt.sign({ email: user.email }, 'secret'),
        status: 200
      };
    } else {
      return response = {
        status: 409
      };
    }
    return response = {
      status: 200
    };
  }

  /**
   * Login, login middleware function for users.
   *
   * @param {Object} req
   * @return {Integer} Status
   */
  async Login(req) {
    let response = {};
    const user = {
      email: req.body.email,
      password: req.body.password
    };
    const matchedUser = await Models.Users.findOne({
      where: {
        email: user.email
      }
    });

    if (matchedUser != null) {
      const matchedUserHashedPassword = matchedUser.dataValues.password;

      // If user password matched successfully.
      if(await bcrypt.compare(user.password, matchedUserHashedPassword)){
        return response = {
          token: jwt.sign({ email: user.email }, 'secret'),
          status: 200
        };
      } else {
        return response = {
          status: 403
        };
      }
    }
    return response = {
      status: 403
    };
  }
}

// New instance of UserMiddleware.
const userMiddleware = new UserMiddleware();

// Export model instance.
export default userMiddleware;
