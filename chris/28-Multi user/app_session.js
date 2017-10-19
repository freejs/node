const express = require('express');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(session({
  secret: 'sdfxcvw', // key
  resave: false,
  saveUninitialized: true,
  store: new MySQLStore({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'o2',
  }),
}));

app.get('/count', (req, res) => {
  if (req.session.count)
    req.session.count++;
  else
    req.session.count = 1;
  res.send('hi session' + req.session.count);
});

app.get('/tmp', (req, res) => {
  res.send('result : ' + req.session.count);
});

app.get('/welcome', (req, res) => {
  if (req.session.displayName) {
    res.send(`
    <h1>Hello, ${req.session.displayName}</h1>
    <a href="/auth/logout">logout</a>
    `);
  } else {
    res.send(`
    <h1>Welcome</h1>
    <a href="/auth/login">Login</a>
    `);
  }
});

app.get('/auth/logout', (req, res) => {
  delete req.session.displayName;
  req.session.save(() => {
    res.redirect('/welcome');
  });
});

app.post('/auth/login', (req, res) => {
  const user = {
    username: 'egoing',
    password: '111',
    displayName: 'Egoing',
  };
  const usr = req.body.username;
  const pwd = req.body.password;
  if (usr === user.username && pwd === user.password) {
    req.session.displayName = user.displayName;
    req.session.save(() => {
      res.redirect('/welcome');
    });
  } else {
    res.send('Who are you? <a href="/auth/login">login</a>');
  }
});

app.get('/auth/login', (req, res) => {
  let output = `
  <h1>Login</h1>
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

app.listen(3003, () => {
  console.log('Connected 3003 port!');
});