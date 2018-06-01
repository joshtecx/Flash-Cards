const express = require('express');
const bodyParser = require('body-parser');
const db = require("./models");
const exphbs = require('express-handlebars');
const apiRouter = require("./routes/api-routes");

const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(apiRouter);
// app.use('/', routes);
// app.use('/cards', cardRoutes);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log('app is now listening on port: ' + PORT);
  });
});

