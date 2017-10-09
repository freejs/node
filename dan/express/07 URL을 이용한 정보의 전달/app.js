var express = require('express');
var app = express();

app.get('/', function(req, res) {
  var output = `
    <h1>07 Query String</h1>
  `
  res.send(output);
});

// noraml url
// app.get('/topic', function(req, res) {
//   var topics = [
//     'Javascript is ...',
//     'Nodejs is ...',
//     'Express is ...'
//   ];

//   var output = `
//     <a href="/topic?id=0">Javascript</a><br>
//     <a href="/topic?id=1">Nodejs</a><br>
//     <a href="/topic?id=2">Express</a><br>
//     ${topics[req.query.id]}
//   `

//   res.send(output);
// });

// semantic url
app.get('/topic/:id', function(req, res) {
  var topics = [
    'Javascript is ...',
    'Nodejs is ...',
    'Express is ...'
  ];

  var output = `
    <a href="/topic?id=0">Javascript</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">Express</a><br>
    ${topics[req.params.id]}
  `

  res.send(output);
});


app.listen(3000, function() {
  console.log('Connected 3000 port!');
});