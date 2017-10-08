var express = require('express');

var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

app.get('/topic/new', function(req, res) {
  res.send('Hi');
});

app.listen(3000, function() {
  console.log('Connected, 3000 port!');
});

