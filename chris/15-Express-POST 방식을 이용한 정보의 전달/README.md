# 15 - Express-POST 방식을 이용한 정보의 전달

<https://opentutorials.org/course/2136/11949>

10/3

# Express-POST 방식을 이용한 정보의 전달

--------------------------------------------------------------------------------

## POST 방식을 이용한 정보의 전달

--------------------------------------------------------------------------------

### Express, POST 방식을 이용한 정보의 전달 1

--------------------------------------------------------------------------------

- GET 방식

웹브라우저의 주소를 입력해서 정보를 가져오는것을 GET방식 이라고함.

- POST 방식

사용자의 정보를 서버로 전송할 때는 POST방식을 사용한다.

## 제출양식(form)

--------------------------------------------------------------------------------

### Express, POST 방식을 이용한 정보의 전달 2 : form

--------------------------------------------------------------------------------

```javascript
app.get('/form_receiver', (req, res) => {
    let title = req.query.title;
    let description = req.query.description;
    res.send(title + ' ' + description);
});
app.get('/form', (req, res) => {
    res.render('form');
});
```

## POST 방식 소개

--------------------------------------------------------------------------------

### Express, POST 방식을 이용한 정보의 전달 3 : POST

--------------------------------------------------------------------------------

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.locals.pretty = true;
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
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
app.post('/form_receiver', (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    // res.send('Hello, POST');
    res.send(title + ' ' + description);
});
app.get('/form_receiver', (req, res) => {
    let title = req.query.title;
    let description = req.query.description;
    res.send(title + ' ' + description);
});
app.get('/form', (req, res) => {
    res.render('form');
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

## GET과 POST

----

### Express, POST 방식을 이용한 정보의 전달 4 : GET과 POST

----
