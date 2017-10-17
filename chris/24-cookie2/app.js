const express = require('express');
const cookieParser = require('cookie-parser');
const _ = require('lodash');
const app = express();

app.use(cookieParser('sdf'));

const products = {
  1: {
    title: 'The history of web 1'
  },
  2: {
    title: 'The next web'
  },
}

app.get('/products', (req, res) => {
  let output = '<h1>Products</h1><ul>' +
    _.join(
      _.map(Object.keys(products),
        x => '<li><a href="/cart/' + x + '">' +
        products[x].title + '</a></li>'), '') +
    '</ul><a href="/cart">Cart</a>';
  res.send(output);
});

app.get('/cart', (req, res) => {
  const cart = req.cookie.cart;
  if (!cart) {
    res.send('Empty!');
  } else {
    let output = '<h1>Cart</h1><ul>' +
      _.join(
        _.map(Object.keys(cart),
          x => '<li>' +
          products[x].title + ' (' + cart[x] + ')</li>'), ' ') +
      '</ul><a href="/products">Products List</a>';
    res.send(output);
  }
});

app.get('/cart/:id', (req, res) => {
  const id = req.params.id;
  const cart = (req.cookies.cart) ? req.cookies.cart : {};
  cart[id] = (cart[id]) ? parseInt(cart[id]) + 1 : 1;
  res.cookie('cart', cart);
  res.redirect('/cart');
});

app.get('/count', (req, res) => {
  let count = (req.signedCookies.count) ? parseInt(req.signedCookies.count) : 0;
  res.cookie('count', count + 1, {
    signed: true,
  });
  res.send('Count : ' + count);
});

app.listen(3000, () => {
  console.log('Connected 3000 port!!');
});