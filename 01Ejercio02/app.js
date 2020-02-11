var express = require('express');
var app = express();

//routes
app.get('/', function (req, res) {
  res.send('Hi World!');
});

//Server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});