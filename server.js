const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const path = require("path");
const jsroutes = require("./routes/jsCardRoutes.js");
const htmlroutes = require("./routes/htmlCardRoutes.js");
const cssroutes = require("./routes/cssCardRoutes.js");
const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

// app.set("view engine", "pug");

app.use(jsroutes);
app.use(htmlroutes);
app.use(cssroutes);
// app.use("/cards", cardRoutes);

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function(){
        console.log("app is now listening on port: " + PORT);
    });
});

