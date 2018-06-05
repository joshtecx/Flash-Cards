// Requiring our models
var db = require("../models");

var express = require('express');
var userRouter = express.Router();

userRouter.get('/', function (req, res) {
  res.render('view', { user: req.user })
});

// Routes
// =============================================================
module.exports = userRouter;
