var express = require("express");
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var PORT = process.env.PORT || 3333;

var app = express();


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));


app.use(methodOverride('_method'));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require('./controllers/burgers_controller');

app.use('/', routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});