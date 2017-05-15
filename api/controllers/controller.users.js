const jwt = require('jsonwebtoken');
const usersModel = require('../models/model.login.js');
const usersController = {
  login: login,
  createUserAccount: createUserAccount,
  authenticate: authenticate
};

//////////////////////////
// Function Declartions //
//////////////////////////

function login(req, res) {
  loginModel.login(req.body).then(function(jsonWebToken) {
    res.status(200).json({
      'adminWebToken': jsonWebToken
    })
  }, function(err) {
    res.status(err.status).send({
      'message': err.message
    });
  });
}

function createUserAccount(req, res) {

}

function authenticate(req, res) {
  const adminJwt = req.body.jwt;
  jwt.verify(adminJwt, 'ansira0903', function(err, decoded) {
    if (err) {
      res.status(403).send({
        'authorized': false
      });
    } else {
      res.status(200).json({
        'authorized': true
      });
    }
  });
}

export default usersController;
