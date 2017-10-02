# 13 - Express-템플릿 엔진 (Jade)

<https://opentutorials.org/course/2136/11915>

10/2

# Express-템플릿 엔진 (Jade)

--------------------------------------------------------------------------------

## 템플릿 엔진이란 무엇인가?

--------------------------------------------------------------------------------

### 소개

--------------------------------------------------------------------------------

## 템플릿 엔진 사용하기

--------------------------------------------------------------------------------

### 사용법

--------------------------------------------------------------------------------

```javascript
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.get('/template', (req, res) => {
    res.render('temp');
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

## 템플릿 엔진 Jade의 사용법과 문법

----

### Jade의 문법

----

```javascript
const express = require('express');
const app = express();

app.locals.pretty = true;
app.set('view engine', 'pug');
app.use(express.static('public'));
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
