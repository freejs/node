# 24 - cookie 2

<https://opentutorials.org/course/2136/12065>

10/17

## shopping cart 1

```js
const express = require('express');
const cookieParser = require('cookie-parser');
const _ = require('lodash');
const app = express();

app.use(cookieParser('df'));

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
        x => '<li><a href="/cart/' + x +'">'
        + products[x].title + '</a></li>'), '') 
        + '</ul><a href="/cart">Cart</a>';
  res.send(output);
  // res.send('Products');
});

app.get('/count', (req, res) => {
  let count = (req.cookies.count) ? parseInt(req.cookies.count) : 0;
  res.cookie('count', count + 1);
  res.send('Count : ' + count);
});

app.listen(3000, () => {
  console.log('Connected 3000 port!!');
});
```

## shopping cart 2

```js
app.get('/cart/:id', (req, res) => {
  const id = req.params.id;
  const cart = (req.cookies.cart) ? req.cookies.cart : {};
  cart[id] = (cart[id]) ? parseInt(cart[id]) + 1 : 1;
  res.cookie('cart', cart);
  res.redirect('/cart');
});
```

## shopping cart 3

```js
app.get('/cart', (req, res) => {
  const cart = req.cookies.cart;
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
```

## Cookie & Security

```js
app.get('/count', (req, res) => {
  let count = (req.signedCookies.count) ? parseInt(req.signedCookies.count) : 0;
  res.cookie('count', count + 1, {
    signed: true,
  });
  res.send('Count : ' + count);
});
```

쿠키 암호화

```js
app.use(cookieParser('{key}'));
```

```js
req.signedCookies.count
```

```js
res.cookie('count', count + 1, {signed: true});
```
