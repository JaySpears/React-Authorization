import path from 'path';
import userMiddleware from './controllers/controller.users.js';
import { app } from './index.js';

////////////////////////////
// Route Class Definition //
////////////////////////////

class Routes {
  constructor() {
    this.rootFile = 'index.html';

    // Bind methods.
    this.Root = this.Root.bind(this);
    this.Create = this.Create.bind(this);
    this.Login = this.Login.bind(this);
  }

  /**
   * Root, index route function for application.
   * @param {Object} req
   * @param {Object} res
   */
  Root(req, res) {
    res.sendFile(path.resolve(this.rootFile));
  }

  /**
   * Create, create route function for users.
   * @param {Object} req
   * @param {Object} res
   */
  async Create(req, res) {
    let response = await userMiddleware.Create(req);
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
    let response = await userMiddleware.Login(req);
    if (response.token){
      res.setHeader('token', response.token);
    }
    res.sendStatus(response.status);
  }
}

// New instance of Routes.
const routes = new Routes();

// Get route methods.
app.get('/', routes.Root);

// Post route methods.
app.post('/users/create', routes.Create);
app.post('/users/login', routes.Login);
