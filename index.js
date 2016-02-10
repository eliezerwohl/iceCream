var express = require ('express');
var app = express();
var expressHandlebars = require("express-handlebars");
var PORT = 8080 || process.env.NODE_ENV;
var mysql = require('mysql');

app.engine('handlebars', expressHandlebars({defaultLayout:'harry'}));
app.set('view engine', 'handlebars');

var connection = mysql.createConnection({
  port:3306,
  host:'localhost',
  user:'root',
  database:'iceCream',
});

connection.connect(function(err){
  if (err){
    throw err;
  }
});

var icecreams = [
{name: 'vanilla', price: 10, awesomeness: 3},
{name: 'chocolate', price: 4, awesomeness: 8},
 {name: 'banana', price: 1, awesomeness: 1}, 
 {name: 'greentea', price: 5, awesomeness: 7}, 
 {name: 'jawbreakers', price: 6, awesomeness: 2}, 
 ];

app.get("/", function (req, res){
  connection.query("select * from iceList where ID =1 ", function(err, results){
    console.log(results);
  })
res.send(icecreams.name);
});
 app.listen(PORT, function(){
    console.log("Listening on port %s", PORT);
 });