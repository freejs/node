# 26 - Session 2

<https://opentutorials.org/course/2136/12069>

10/17

## Session 4 : login 1

```js
app.use(session({
  secret: 'sdfxcvw', // key
  resave: false,
  saveUninitialized: true,
}));

app.get('/auth/login', (req, res) => {
  let output = `
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
```

## Session 5 : login 2

```js
app.post('/auth/login', (req, res) => {
  const user = {
    username: 'egoing',
    password: '111',
  };
  const usr = req.body.username;
  const pwd = req.body.password;
  if (usr === user.username && pwd === user.password) {
    res.redirect('/welcome');
  } else {
    res.send('Who are you? <a href="/auth/login">login</a>');
  }
});
```

## Session 6 : login 3

세션 객체

```js
{
  "cookie": {
    "originalMaxAge": null,
    "expires": null,
    "httpOnly": true,
    "path": "/"
  },
  "displayName": "Egoing"
}
```

```js
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
```

## Session 7 : login 4

```js
app.get('/auth/logout', (req, res) => {
  delete req.session.displayName;
  res.redirect('/welcome');
});
```
