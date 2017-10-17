const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
  secret: 'sdfxcvw', // key
  resave: false,
  saveUninitialized: true,
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

app.listen(3003, () => {
  console.log('Connected 3003 port!');
});