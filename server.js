const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const exphbs = require('express-handlebars');
const apiRouter = require('./routes/api-routes');
const htmlRouter = require('./routes/html-routes.js');
const cookieParser = require('cookie-parser');
const PORT = process.env.port || 3000;

const app = express();

app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Requiring our models for syncing
var jwt = require('jsonwebtoken');
var jwtExp = require('express-jwt');

var gtGroupSecret = require('./config/secrets');
app.use(cookieParser(gtGroupSecret));


app.use(apiRouter);
app.use(htmlRouter);
// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// 0 - AUTH MIDDLEWARE
app.use('/auth', require("./routes/auth-routes.js"));

// 1 - API MIDDLEWARE
app.use('/api', jwtExp({ secret: gtGroupSecret }));
app.use('/api', require("./routes/api-routes.js"));

// 2 - HOME PAGE MIDDLEWARE
// verify authorization via cookie using express-jwt
app.get('/', jwtExp({
  secret: gtGroupSecret,
  getToken: function fromCookie(req) {
    if (req.signedCookies) {
      return req.signedCookies.jwtAuthToken;
    }
    return null;
  },
  credentialsRequired: false
}), function (req, res, next) {
  // if user is signed-in, next()
  if (req.user) {
    next();
  } else {
    res.redirect('/auth/sign-in');
  }
});
app.use('/', require("./routes/user-routes.js"));

// Static directory
app.use(express.static("./public"));
// serve static files from template
app.use(express.static(__dirname + '/views'));

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log('app is now listening on port: ' + PORT);
  });
});
