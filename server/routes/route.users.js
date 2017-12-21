// Dependencies.
import path from 'path';
import { app } from './../index.js';

// Users Controller.
import userController from './../controllers/controller.users.js';

////////////////////////////
// Route Class Definition //
////////////////////////////

class UserRoutes {
  constructor() {
    // Bind methods.
    this.Create = this.Create.bind(this);
    this.Login = this.Login.bind(this);
  }

  /**
   * Create, create route function for users.
   * @param {Object} req
   * @param {Object} res
   */
  async Create(req, res) {
    let response = await userController.Create(req);
    if (response.token){
      res.setHeader('token', response.token);
    }
    res.sendStatus(response.status);
  }

  /**
   * Login, login route function for users.
   * @param {Object} req
   * @param {Object} res
   */
  async Login(req, res) {
    let response = await userController.Login(req);
    if (response.token){
      res.setHeader('token', response.token);
    }
    res.sendStatus(response.status);
  }

  /**
   * Login, login route function for users.
   * @param {Object} req
   * @param {Object} res
   */
  async Authorize(req, res) {
    let response = await userController.Authorize(req);
    res.sendStatus(response.status);
  }
}

// New instance of UserRoutes.
const userRoutes = new UserRoutes();

// Export userRoutes.
export default userRoutes;
