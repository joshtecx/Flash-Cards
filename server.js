const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const jsCardRoutes = require('./routes/jsCardRoutes.js');
const htmlCardRoutes = require('./routes/htmlCardRoutes.js');
const cssCardRoutes = require('./routes/cssCardRoutes.js');
const db = require('./models');

const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// app.use('/', routes);
// app.use('/cards', cardRoutes);
app.use(jsCardRoutes);
app.use(htmlCardRoutes);
app.use(cssCardRoutes);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log('app is now listening on port: ' + PORT);
  });
});
