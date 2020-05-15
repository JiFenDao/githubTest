var express = require('express');
var app = express();

	
 
 
app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/about', function (req, res) {
   res.send('about')
 })

 app.get('/random.text', function (req, res) {
   res.send('random.text')
 })

 app.get('/ab?cd', function (req, res) {
   res.send('ab?cd')
 })

 app.get(/a/, function (req, res) {
   res.send('/a/')
 })
 
var server = app.listen(8088, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})