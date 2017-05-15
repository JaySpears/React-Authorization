const loginModel = require('../models/model.login.js');
const loginController = {
  login: login
};

//////////////////////////
// Function Declartions //
//////////////////////////

function login(req, res){
  loginModel.login(req.body).then(function(jsonWebToken){
      res.status(200).json({
          'adminWebToken': jsonWebToken
      })
  }, function(err){
      res.status(err.status).send({
          'message': err.message
      });
  });
}

export default loginController;
