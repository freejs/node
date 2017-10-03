# 14 - Express-URL을 이용한 정보의 전달

<https://opentutorials.org/course/2136/11945>

10/3

# Express-URL을 이용한 정보의 전달

--------------------------------------------------------------------------------

## 쿼리 스트링이란?

--------------------------------------------------------------------------------

### 쿼리스트링 소개

--------------------------------------------------------------------------------

`http://a.com/topic?id=1`<br>
`?id=1`이부분을 **쿼리스트링** 이라고함.

## Express의 query 객체의 사용

--------------------------------------------------------------------------------

### query 객체의 사용법

--------------------------------------------------------------------------------

```javascript
app.get('/topic', (req, res) => {
    res.send(req.query);
});
```

```javascript
req.query
```

를 통해 쿼리스트링을 받는다.

```
http://localhost:3000/topic?id=1&name=2
```

'&' 로 구분하여 여러 값을 받는다.

## query 객체의 활용

--------------------------------------------------------------------------------

### query 객체의 이용

--------------------------------------------------------------------------------

```javascript
const express = require('express');
const app = express();

app.locals.pretty = true;
app.set('view engine', 'pug');
app.use(express.static('public'));
app.get('/topic', (req, res) => {
    let topics = [
        'Javascript is....',
        'Nodejs is....',
        'Express is....',
    ];
    let as = `
    <a href="/topic?id=0">JavaScript</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">Express</a><br>
    ${topics[req.query.id]}
    `
    res.send(as);
});
app.get('/template', (req, res) => {
    res.render('temp', {time: Date(), _title: 'Pug'});
});
app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.get('/dynamic', (req, res) => {
    let lis = '';
    let time = new Date();
    for (let i = 0; i < 5; i++) {
        lis = lis + '<li>coding</li>';
    }
    let output = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Title</title>
        </head>
        <body>
            Hello Dynamic!!!!
            <ul>
            ${lis}
            </ul>
            ${time}
        </body>
        </html>`;
    res.send(output);
});
app.get('/login', (req, res) => {
    res.send('Login Please');
});

app.listen(3000, () => {
    console.log('Connected 3000 port!');
});

app.get('/route', (req, res) => {
    res.send('Hello Router, <img src="/1.jpeg">')
});
```

## 의미론적인 URL (semantic url)

--------------------------------------------------------------------------------

### 시멘틱 URL

--------------------------------------------------------------------------------

Query String으로 들어오는건 req.query로 받으며
Sementic url로 들어오는건 req.params로 받는다.

```javascript
const express = require('express');
const app = express();

app.locals.pretty = true;
app.set('view engine', 'pug');
app.use(express.static('public'));
app.get('/topic/:id', (req, res) => {
    let topics = [
        'Javascript is....',
        'Nodejs is....',
        'Express is....',
    ];
    let as = `
    <a href="/topic?id=0">JavaScript</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">Express</a><br>
    ${topics[req.params.id]}
    `
    res.send(as);
});
app.get('/topic/:id/:mode', (req, res) => {
    res.send(req.params.id + ' ' + req.params.mode);
});
app.get('/template', (req, res) => {
    res.render('temp', {time: Date(), _title: 'Pug'});
});
app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.get('/dynamic', (req, res) => {
    let lis = '';
    let time = new Date();
    for (let i = 0; i < 5; i++) {
        lis = lis + '<li>coding</li>';
    }
    let output = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Title</title>
        </head>
        <body>
            Hello Dynamic!!!!
            <ul>
            ${lis}
            </ul>
            ${time}
        </body>
        </html>`;
    res.send(output);
});
app.get('/login', (req, res) => {
    res.send('Login Please');
});

app.listen(3000, () => {
    console.log('Connected 3000 port!');
});

app.get('/route', (req, res) => {
    res.send('Hello Router, <img src="/1.jpeg">')
});
```
