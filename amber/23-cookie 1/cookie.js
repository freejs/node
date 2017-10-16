var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.get('/count', function(req, res){
  if(req.cookies.count){
    var count = parseInt(req.cookies.count);
  } else{
    var count =0;
  }

  res.cookie('count', ++count);
  res.send('count: ' + count);
});
app.listen(3001, function(){
  console.log('Connected 3001 port!');
});
