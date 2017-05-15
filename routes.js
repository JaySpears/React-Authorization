// Constants.
const usersController = require('./api/controllers/controller.users.js');
const app = require('./index.js').app;

// Listening for when a user posts login credentials.
app.post('/login', loginController.login);
