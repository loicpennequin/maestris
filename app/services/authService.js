'use strict';

const passport = require('passport');
const db = require('../../config/database.js');

module.exports.authenticate = function(req, res, next){
  passport.authenticate('local', function(err,user,info){
    let error = err || info;
    if (error) return res.status(401).json(error);
    if (user) {
      req.login(user, function(err){
        if (err) throw err;
        return res.json({id : user.id, username : user.username, email : user.email});
      })
    }
  })(req, res, next)
};

module.exports.isLoggedIn = function(req, res, next){
  if (!req.isAuthenticated()){
    res.json({loggedIn: false});
  }else{
    res.json({loggedIn: true});
  }
};

module.exports.logout = function(req,res){
  req.logout();
  req.session.destroy();
  res.send("successfully logged out.")
};
