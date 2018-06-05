const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../models');

router.get('/', function(req, res) {
  res.render('index');
});
router.get('/create', function(req, res) {
  res.render('create.handlebars');
});
router.get('/profile', function(req, res) {
  res.render('profile.handlebars');
});
router.get('/play', function(req, res) {
  res.render('play.handlebars');
});
router.get('/logout', function(req, res) {
  res.render('index');
});
module.exports = router;
