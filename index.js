var express = require ('express');
var app = express();
var expressHandlebars = require("express-handlebars");
var PORT = 8080 || process.env.NODE_ENV;

app.engine('handlebars', expressHandlebars({defaultLayout:'harry'}));
app.set('view engine', 'handlebars')
var icecreams = [
{name: 'vanilla', price: 10, awesomeness: 3},
{name: 'chocolate', price: 4, awesomeness: 8},
 {name: 'banana', price: 1, awesomeness: 1}, 
 {name: 'greentea', price: 5, awesomeness: 7}, 
 {name: 'jawbreakers', price: 6, awesomeness: 2}, 
 ];

app.get("/", function (req, res){
res.send("cmon booi");
});
 app.listen(PORT, function(){
    console.log("Listening on port %s", PORT);
 });