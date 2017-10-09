import bcrypt from 'bcrypt';
import Models from './../models';

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
      // Ensure email doesn't already exist in the database
      // when the user is trying to create an account.
      const matchedEmails = await Models.Users.findAll({
        where: {
          email: user.email
        }
      });
      if (matchedEmails.length === 0) {
        await Models.Users.create({
          email: user.email,
          password: user.password,
          first_name: user.firstName,
          last_name: user.lastName
        });
      }
      return 200;
    } catch (e) {
      console.log(e);
      return 500;
    }
  }

  /**
   * Login, login middleware function for users.
   * @param {Object} req
   * @param {Object} res
   */
  async Login(req) {
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
        return 200;
      } else {
        return 403;
      }
    }
    return 403;
  }
}

// New instance of UserModel.
const userMiddleware = new UserMiddleware();

// Export model instance.
export default userMiddleware;
