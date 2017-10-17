# 23 - cookie 1

<https://opentutorials.org/course/2136/12064>

10/17

## intro

인증과 관련된 부분의 가장 기초

사용자마다 다른 상태를 유지할 수 있다.

Request Header에 Cookie가 생김.

Response Header에 Set-Cookie가 생김.

## Counter

```js
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/count', (req, res) => {
  let count = (req.cookies.count) ? parseInt(req.cookies.count) : 0;
  res.cookie('count', count + 1);
  res.send('Count : ' + count);;
});

app.listen(3000, () => {
  console.log('Connected 3000 port!!');
});
```

