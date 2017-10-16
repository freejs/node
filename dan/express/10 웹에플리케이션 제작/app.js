var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.locals.pretty = true;
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/topic/new', function(req, res) {
  fs.readdir('data', function(err, files) {
    if(err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.render('new', {topics: files});
  });
});

app.get(['/topic', '/topic/:id'], function(req, res) {
  fs.readdir('data', function(err, files) {
    if(err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    var id = req.params.id;
    if(id) {
      // id값이 있을 때
      fs.readFile('data/'+id, 'utf8', function(err, data) {
        if(err) {
          console.log(err);
          res.status(500).send('Internal Server Error');
        }
        res.render('view', {topics: files, title: id, desc: data});
      });
    } else {
      // id값이 없을 때
      res.render('view', {topics: files, title: 'Welcome', desc: 'Hello, JavaScript for server'});
    } 
  });
});

app.listen(3000, function() {
  console.log('Connected, 3000 port!');
});

