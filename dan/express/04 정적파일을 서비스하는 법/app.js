var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send('Hello home page');
});

app.get('/route', function(req, res) {
    res.send('Hello Router <img src="/freejs_logo.jpg"/>' );
});

app.get('/login', function(req, res) {
    res.send('Login please');
});

app.listen(3000, function(){
    console.log('Connected 3000 port!');
});
