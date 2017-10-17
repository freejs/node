const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/count', (req, res) => {
  let count = (req.cookies.count) ? parseInt(req.cookies.count) : 0;
  res.cookie('count', count + 1);
  res.send('Count : ' + count);;
});

app.listen(3000, () => {
  console.log('Connected 3000 port!!');
});