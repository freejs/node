var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.locals.pretty = true;
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
  var output = `
    <h1>08 Post & Get</h1>
  `
  res.send(output);
});

app.get('/form', function(req, res) {
  res.render('form');
});

app.post('/form_receiver', function(req, res) {
  var title = req.body.title;
  var desc = req.body.desc;
  res.send(title +','+desc);
});

app.listen(3000, function() {
  console.log('Connected 3000 port!');
});

