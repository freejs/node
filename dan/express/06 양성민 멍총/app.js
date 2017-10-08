var express = require('express');
var app = express();

app.locals.pretty = true;
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
    res.render('temp', {time: Date(), title:'Jade'});
});

app.listen(3000, function(){
    console.log('Connected 3000 port!');
});




