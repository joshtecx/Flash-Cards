const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../models');

router.get('/', function(req, res) {
  res.render('views/index.handlebars');
});
router.get('/create', function(req, res) {
  res.render('views/create.handlebars');
});
router.get('view', function(req, res) {
  res.render('views/view.handlebars');
});
router.get('/play', function(req, res) {
  res.render('views/play.handlebars');
});
