var express = require('express');
var session = require('express-session');
var app = express();

app.use(session({
  secret : 'randomvalue',
  resave : false,
  saveUninitialized : true //session id 를 세션을 사용하기 전까지는 발급하지 말아라.
}));

app.get('/count', function(req, res){
  if(req.session.count){ //count 값이 세팅되어 있지 않으면 req.session.count 는 false
    req.session.count++;
  } else{
    req.session.count = 1;
  }
  res.send('Count : '+req.session.count);
});

app.listen(3002, function(){
  console.log('Connected 3002 port!');
});
