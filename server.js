const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
<<<<<<< HEAD
=======
const jsCardRoutes = require('./routes/jsCardRoutes.js');
const htmlCardRoutes = require('./routes/htmlCardRoutes.js');
const cssCardRoutes = require('./routes/cssCardRoutes.js');
const db = require('./models');
>>>>>>> master

const PORT = 3000;

const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
<<<<<<< HEAD
// app.use(cookieParser());
=======

app.use(express.static('public'));
>>>>>>> master

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

<<<<<<< HEAD
//app.set('view engine', 'pug');

const mainRoutes = require('./routes/mainRoutes.js');
// const cardRoutes = require('./routes/cardsRoutes.js');
// app.use('/cards', cardRoutes);
app.use('/', mainRoutes);
=======
// app.use('/', routes);
// app.use('/cards', cardRoutes);
app.use(jsCardRoutes);
app.use(htmlCardRoutes);
app.use(cssCardRoutes);
>>>>>>> master

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log('app is now listening on port: ' + PORT);
  });
});
