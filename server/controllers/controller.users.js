import bcrypt from 'bcrypt';
import Models from './../models';
import jwt from 'jsonwebtoken';

const env = require(`./../../config/environments/${process.env.NODE_ENV || 'local'}.json`);

//////////////////////////////////////
// User Model Middleware Definition //
//////////////////////////////////////

class UserController {
  constructor() {
    this.Create = this.Create.bind(this);
    this.Login = this.Login.bind(this);
  }

  /**
   * Create, create middleware function for users.
   *
   * @param {Object} req
   * @return {Object} Response
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
        token: jwt.sign({ email: user.email }, env.secret),
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
   * @return {Object} Response
   */
  async Login(req) {
    let response = {};
    const user = {
      email: req.body.email,
      password: req.body.password,
      remember: req.body.rememberUser
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
        let token;
        if (user.remember) {
          token = jwt.sign({ email: user.email }, env.secret, {
            expiresIn: '30d'
          });
        } else {
          token = jwt.sign({ email: user.email }, env.secret, {
            expiresIn: '8h'
          });
        }
        return response = {
          token: token,
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
      response = {
        status: err !== null ? 403 : 200
      };
    })
    return response;
  }
}

// New instance of userController.
const userController = new UserController();

// Export model instance.
export default userController;
