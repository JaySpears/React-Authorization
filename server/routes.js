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
    let status = await userMiddleware.Create(req);
    res.sendStatus(status);
  }

  /**
   * Login, login route function for users.
   * @param {Object} req
   * @param {Object} res
   */
  async Login(req, res) {
    let status = await userMiddleware.Login(req, res);
    res.sendStatus(status);
  }
}

// New instance of Routes.
const routes = new Routes();

// Get route methods.
app.get('/', routes.Root);

// Post route methods.
app.post('/users/create', routes.Create);
app.post('/users/login', routes.Login);
