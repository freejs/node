var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser('hello@halsdfkjsdlfalsdkfj!'));

// example 1
app.get('/count', function(req, res) {
  if(req.cookies.count) {
    var count = parseInt(req.signedCookies.count);
    // var count = parseInt(req.cookies.count);
  } else {
    var count = 0;
  }
  count = count+1;

  res.cookie('count', count, {signed: true});
  // res.cookie('count', count);
  res.send('count : ' + count);
});

// example 2

var products = {
  1:{title: 'The history of web 1'},
  2:{title: 'THe next web'}
};

app.get('/products', function(req, res) {
  var output = '';
  for(var name in products) {
    output += `
    <li>
      <a href='/cart/${name}'>${products[name].title}</a>
    </li>`
  }
  res.send(`
    <h1>Products</h1>
    <ul>${output}</ul>
    <a href='/cart'>Cart</a>
  `);
});

app.get('/cart/:id', function(req, res) {
  var id = req.params.id;
  var cart;

  if(req.cookies.cart) {
    cart = req.cookies.cart;
  } else {
    cart = {}
  }

  if(!cart[id]) {
    cart[id] = 0;
  }

  cart[id] = parseInt(cart[id])+1;
  res.cookie('cart', cart);

  res.send(cart);
});

app.get('/cart', function(req, res) {
  var cart = req.cookies.cart;
  if(!cart) {
    res.rend('Empty!');
  } else {
    var output = '';
    for(var id in cart) {
      output += `<li>${products[id].title} (${cart[id]})</li>`
    }
  }

  res.send(`
    <h1>Cart</h1>
    <ul>${output}</ul>
    <a href='/products'>Products List</a>
  `);
});

app.listen(3003, function() {
  console.log('Connected 3003 port!');
});