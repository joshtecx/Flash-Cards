// Requiring our models
var db = require("../models");
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var express = require('express');
var authRouter = express.Router();
var gtGroupSecret = require('../config/secrets');


authRouter.get('/sign-in', function (req, res) {
  res.render('sign-in', { status: 'Create a username and password' });
});

// POST route for creating a new user
authRouter.post("/sign-up", function(req, res) {
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      res.render('profile', {
        status: 'Unable to create username with password provided',
        error: err
      })
    } else {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        
        db.User.create({
          email: req.body.email,
          username: req.body.username,
          password: hash,
          passwordConf: hash
        })
          .then(function() {
            res.redirect('/auth/profile')
          })
          .catch(function (err) {
            res.render('profile', {
              status: 'Unable to create username with password provided',
              error: err
            })
          })
      });
    }
  });

});

authRouter.get('/sign-in', function (req, res, next) {
  if (req.user) {
    res.redirect('/')
  } else {
    res.render('profile', { status: 'Enter your username and password'});
  }
});

authRouter.post("/sign-in", function(req, res, next) {
  db.User.findOne({
    username: req.body.username
  })
    .then(function(user) {
      if (!user) {
        console.log('no user found');
        res.render('profile', { status: 'Username or password is incorrect' })
      } else {
        bcrypt.compare(req.body.password, user.password, function(err, valid) {
          if (err || !valid) {
            res.render('profile', { status: 'Username or password is incorrect' })
          } else {
            // create JWT token
            var jwtAuthToken = jwt.sign({
              exp: Math.floor(Date.now() / 1000) + (60 * 60),
              data: {
                userId: user.id,
                username: user.username
              }
            }, gtGroupSecret);
            // Create a cookie embedding JWT token
            res.cookie('jwtAuthToken', jwtAuthToken, {
              secure: process.env.NODE_ENV === 'production',
              signed: true
            });
            // redirect user to secure app
            res.redirect('/')
          }
        });
      }

    }).catch(next);
});

// Routes
// =============================================================
module.exports = authRouter;
