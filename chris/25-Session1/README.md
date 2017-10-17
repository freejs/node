# 25 - Session 1

<https://opentutorials.org/course/2136/12068>

10/17

## Session 1 : intro

하하하

## Session 2 : Counter Application

세션은 구체적인 값을 저장하는 대신에 웹브라우저에 고유한 값을 전달한다.

같은 connect.sid를 보내는 브라우저는 같은 사용자라고 간주할 수 있다.

아이디와 패스워드는 세션방식으로 많이 저장함.

## Session 3 : Counter Application

express-session 모듈은 세션정보를 메모리에 저장한다.

따라서 서버를 재시작하면 다 날아감.

```js
const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
  secret: 'sdfxcvw', // key
  resave: false,
  saveUninitialized: true,
}));

app.get('/count', (req, res) => {
  if (req.session.count)
    req.session.count++;
  else
    req.session.count = 1;
  res.send('hi session' + req.session.count);
});

app.get('/tmp', (req, res) => {
  res.send('result : ' + req.session.count);
});

app.listen(3003, () => {
  console.log('Connected 3003 port!');
});
```
