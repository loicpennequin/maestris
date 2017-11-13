'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const db = require("../../../config/database.js");

module.exports = function(){
  passport.use('local', new LocalStrategy({
      usernameField: 'login',
      passwordField: 'password'
    },
    authentication
  ));

  passport.serializeUser(function(admin, done) {
    done(null, admin);
  });

  passport.deserializeUser(function(admin, done) {
      let err = false;
      done(err, {admin: admin});
  });
}

let authentication = function(login, password, done){
    let admin = {
        login: "admin",
        password: "admin"
    };
    if (admin.login !== login || admin.password !== password)
        return done(null, false, {status: 'fail', message: "Echec de l'authentification."});
    else
        return done(null, {status: 'success', message: "Authentification réussie."});
};
