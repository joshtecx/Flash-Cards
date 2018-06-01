const express = require('express');
const bodyParser = require('body-parser');
const db = require("./models");
const exphbs = require('express-handlebars');
<<<<<<< HEAD
const jsCardRoutes = require('./routes/jsCardRoutes.js');
const htmlCardRoutes = require('./routes/htmlCardRoutes.js');
const cardRouter = require('./routes/cssCardRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');
const db = require('./models');
=======
const apiRouter = require("./routes/api-routes");
>>>>>>> 981353baefbf1df28de6e5de6dff61a3d322bed7

const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

<<<<<<< HEAD
//app.use('/', routes);
// app.use('/cards', cardRoutes)
app.use('/', htmlRoutes);
//app.use('/js', jsCardRoutes);
//app.use('html', htmlCardRoutes);
//app.use(cardRouter);
=======
app.use(apiRouter);
// app.use('/', routes);
// app.use('/cards', cardRoutes);
>>>>>>> 981353baefbf1df28de6e5de6dff61a3d322bed7

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log('app is now listening on port: ' + PORT);
  });
});

