const userMiddleware = require('./controllers/controller.users.js');
const app = require('./index.js').app;
const path = require('path');

////////////////////////////
// Route Class Definition //
////////////////////////////

class Routes {
  constructor() {
    this.rootFile = 'index.html';
    this.Root = this.Root.bind(this);
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
  Create(req, res) {
    userMiddleware.Create(req).then(function(){
      res.sendStatus(200);
    }).catch(function(err){
      res.sendStatus(500);
    });
  }

  /**
   * Login, login route function for users.
   * @param {Object} req
   * @param {Object} res
   */
  Login(req, res) {
    userMiddleware.Login(req, res);
  }
}

// New instance of Routes.
const routes = new Routes();

// Get route methods.
app.get('/', routes.Root);

// Post route methods.
app.post('/users/create', routes.Create);
app.post('/users/login', routes.Login);
