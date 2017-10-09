# 18 - 파일 업로드

<https://opentutorials.org/course/2136/11959>

10/10

----

## 파입 업로드 준비

### 소개 및 준비

express는 기본적으로 파일을 업로드하는 기능을 제공하고있지 않다.

모듈을 새로 설치해야한다.

multer 모듈은 파일을 저장하는 것을 도와주는 모듈(미들웨어)

멀터 설치

`npm install --save multer`

`const upload = multer({ dest: 'uploads/' });`

## 파일 업로드 양식(form)

### 업로드폼

form 속성에 `enctype='multipart/form-data'`를 꼭추가해야한다.

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({
  dest: 'uploads/'
});
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));

app.locals.pretty = true;

app.set('views', './views');
app.set('view engine', 'pug');
app.get('/upload', (req, res) => {
  res.render('upload');
});
app.post('/upload', (req, res) => {
  res.send('uploaded');
});
app.listen(3000, () => {
  console.log('Connected 3000 port!');
});
```

## multer 소개

### multer 사용법

멀터라는 모듈은 함수를 리턴한다.
멀터에 dest속성으로 파일을 저장할 경로를 객체로 전달하면 미들웨어(객체)를 반환한다.

`upload.single('@@@')`   
사용자로부터 받은 데이터에 파일이 포함되어있으면
`req`객체에 file프로퍼티를 추가한다.(미들웨어)

@@@ 파라미터는 input 태그의 name 속성과 같아야한다.

```javascript
{ fieldname: 'userfile',
  originalname: 'Cat_-2.png',
  encoding: '7bit',
  mimetype: 'image/png',
  destination: 'uploads/',
  filename: 'aef36d86cc2881e996ff96e5b50e91b7',
  path: 'uploads\\aef36d86cc2881e996ff96e5b50e91b7',
  size: 20306 }
```

전송된 파일 객체는 이렇게 생겼다.

## multer 심화

### multer 심화

이게 공학일까? 행정일까? ㅋㅋ

똑같은 파일이라도 랜덤하게 이름을 생성해준다.

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})
const upload = multer({
  storage: storage
});
const fs = require('fs');
const app = express();

app.use(express.static('uploads'));
app.use('/user', express.static('uploads'));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.locals.pretty = true;

app.set('views', './views');
app.set('view engine', 'pug');
app.get('/upload', (req, res) => {
  res.render('upload');
});
app.post('/upload', upload.single('userfile'), (req, res) => {
  console.log(req.file);
  res.send('uploaded : ' + req.file.filename);
});
app.listen(3000, () => {
  console.log('Connected 3000 port!');
});
```