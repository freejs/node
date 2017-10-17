# 27 - Session 3

<https://opentutorials.org/course/2136/12070>

10/17

## Session 8 : Session store - file

지금까지 했던 세션(Express-session)은 메모리에 세션을 저장하는 친구다.

로그인 한 상태에서 서버를 재시작하면 세션데이터가 날아간다.

실제론 세션을 영구적으로 저장할수 있는 파일이나 데이터베이스에 저장한다.

```js
const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(session({
  secret: 'sdfxcvw', // key
  resave: false,
  saveUninitialized: true,
  store: new FileStore(),
}));

// 생략
```

## Session 9 : Session store - mysql

mysql은 서버에접속하기위한 옵션이 반드시필요.