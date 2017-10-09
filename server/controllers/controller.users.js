import usersModel from '../models/model.users.js';
import bcrypt from 'bcrypt';

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
  async Create(req) {
    let saltRounds = 10;
    let user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    };

    // Hash user password.
    user.password = await bcrypt.hash(user.password, saltRounds);
    // Create user, handle error with status response.
    try {
      await usersModel.Create(user);
      return 200;
    } catch (e) {
      return 500;
    }
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
export default userMiddleware;
