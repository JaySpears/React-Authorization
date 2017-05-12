const loginModel = require('../models/model.login.js');

module.exports = {
    login: function(req, res){
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
}
