const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const exphbs = require('express-handlebars');
const apiRouter = require('./routes/api-routes');
const htmlRouter = require('./routes/html-routes.js');

const PORT = 3000;

const app = express();
require("dotenv").config();
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(apiRouter);
app.use(htmlRouter);
//connect to MongoDB
// mongoose.connect('mongodb://' + process.env.MONGO_USERNAME + ':' + process.env.MONGO_PASSWORD + '@djseoh-shard-00-00-aqybf.mongodb.net:27017,djseoh-shard-00-01-aqybf.mongodb.net:27017,djseoh-shard-00-02-aqybf.mongodb.net:27017/test?ssl=true&replicaSet=djseoh-shard-0&authSource=admin&retryWrites=true', {
//   useMongoClient: true,
// });
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/FClogin', {
  useMongoClient: true,
});
const mongodb = mongoose.connection;

//handle mongo error
mongodb.on('error', console.error.bind(console, 'connection error:'));
mongodb.once('open', function () {
  // we're connected!
});

//use sessions for tracking logins
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: mongodb
  })
}));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// serve static files from template
app.use(express.static(__dirname + '/views'));

// include routes
const routes = require('./routes/router');
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});



// app.use('/', routes);
// app.use('/cards', cardRoutes);

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log('app is now listening on port: ' + PORT);
  });
});
