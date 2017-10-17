var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));

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

app.get('/auth/logout', function(req, res){
  delete req.session.displayName; //delete 는 JS의 명령
  res.redirect('/welcome');
});

app.get('/welcome', function(req, res){
  if(req.session.displayName){
    res.send(`
      <h1> Hello, ${req.session.displayName}</h1>
      <a href="/auth/logout">logout</a>
      `);
    } else{
      res.send(`
        <h1>Welcome! </h1>
        <a href="/auth/login">Login</a>
        `);
      }
    });

    app.post('/auth/login', function(req, res){
      var user = {
        username: 'amber',
        password: '111',
        displayName : 'AMBER'
      };
      var uname = req.body.username;
      var pw = req.body.password;
      if(uname === user.username && pw === user.password){
        req.session.displayName = user.displayName;
        res.redirect('/welcome');
      } else{
        res.send('How are you? <a href="/auth/login">login</a>');
      }
    });

    app.get('/auth/login', function(req, res){
      var output = `
      <h1>Login</hi>
      <form action="/auth/login" method="post">
      <p>
      <input type="text" name="username" placeholder="username">
      </p>
      <p>
      <input type="password" name="password" placeholder="password">
      </p>
      <p>
      <input type="submit">
      </p>
      </form>
      `;
      res.send(output);
    });

    app.listen(3002, function(){
      console.log('Connected 3002 port!');
    });
