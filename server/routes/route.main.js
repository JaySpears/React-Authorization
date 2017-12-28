// Dependencies.
import path from 'path';
import { app } from './../index.js';

/////////////////////////////////
// Main Route Class Definition //
/////////////////////////////////

class MainRoutes {
  constructor() {
    // Main root file to serve.
    this.rootFile = 'index.html';
    // Bind methods.
    this.Root = this.Root.bind(this);
  }

  /**
   * Root, index route function for application.
   * @param {Object} req
   * @param {Object} res
   */
  Root(req, res) {
    res.sendFile(path.resolve(this.rootFile));
  }
}

// New instance of Routes.
const mainRoutes = new MainRoutes();

// Export mainRoutes.
export default mainRoutes;
