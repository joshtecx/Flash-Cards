const express = require('express');
const bodyParser = require('body-parser');
// const cookieParser = require("cookie-parser");
const exphbs = require('express-handlebars');

const PORT = 3000;

const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//app.set('view engine', 'pug');

const mainRoutes = require('./routes/mainRoutes.js');
// const cardRoutes = require('./routes/cardsRoutes.js');
// app.use('/cards', cardRoutes);
app.use('/', mainRoutes);

app.listen(PORT, function() {
  console.log('app is now listening on port: ' + PORT);
});
