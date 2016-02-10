var express = require ('express');
var app = express();
var expressHandlebars = require("express-handlebars");
var PORT = 8080 || process.env.NODE_ENV;
var mysql = require('mysql');

app.engine('handlebars', expressHandlebars({defaultLayout:'main'}));
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

app.get("/", function (req, res){
  connection.query("select * from iceList", function(err, results){
    console.log(results)
    
    var data = {
      iceCream: results
    }
    res.render('iceCream', data);
  })
});
 app.listen(PORT, function(){
    console.log("Listening on port %s", PORT);
 });