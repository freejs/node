var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var md5 = require('md5');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
  secret : 'randomvalue',
  resave : false,
  saveUninitialized : true, //session id 를 세션을 사용하기 전까지는 발급하지 말아라.
  store : new FileStore()
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
    }
    else{
      res.send(`
        <h1>Welcome! </h1>
        <ul>
        <li><a href="/auth/login">Login</a></li>
        <li><a href="/auth/register">Register</a></li>
        </ul>
        `);
      }
    });

    app.post('/auth/login', function(req, res){

      var uname = req.body.username;
      var pwd = req.body.password;
      for(var i=0; i<users.length; i++){
        var user = users[i];
        if(uname === user.username && md5(pwd+user.salt) === user.password){
          req.session.displayName = user.displayName;
          return req.session.save(function(){
            res.redirect('/welcome');
          });
        }
      }
      res.send('Who are you? <a href="auth/login">login</a>');
    });
    var users = [
      {
        username:'egoing',
        //password:'698d51a19d8a121ce581499d7b701668', //'111'을 md5로 암호화한 값
        password:'07af4c6c13800ca374fe879b3c2b87c1', //md5(pwd+salt)
        salt: '@#$%^&*',
        displayName:'Egoing'
      },
      {
        username:'amber',
        //password:'698d51a19d8a121ce581499d7b701668', //'111'을 md5로 암호화한 값
        password:'bdf4260d546a2ca97da703da1c82afae', //md5(pwd+salt)
        salt: '*&^%$#@',
        displayName:'Amber'
      }
    ];
    app.post('/auth/register', function(req, res){
      var user = { //user라는 객체 만들기
        username:req.body.username,
        password:req.body.password,
        displayName:req.body.displayName
      };
      users.push(user); //새로운 객체 푸쉬. 푸쉬는 어레이 맨 뒤에 원소 붙이기.
      req.session.displayName = req.body.displayName;
      req.session.save(function(){
        res.redirect('/welcome');
      })
    });
    app.get('/auth/register', function(req, res){
      var output=`
      <h1>Register</h1>
      <form action="/auth/register" method="post">
      <p>
      <input type="text" name="username" placeholder="username">
      </p>
      <p>
      <input type="password" name="password" placeholder="password">
      </p>
      <p>
      <input type="text" name="displayName" placeholder="displayName">
      </p>
      <p>
      <input type="submit">
      </p>
      </form>
      `;
      res.send(output);
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
