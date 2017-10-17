# Cookie
http는 상태가 없다. 접속할때마다 이전에 접속했던 상태를 다음에 할 수 없다.  
상태를 저장하기위해 Cookie를 사용한다.

### Cookie 사용법
간단한 예제를 통해서 Cookie의 사용법을 알아보자

#### 1. cookie-parser 설치
express에서 Cookie를 사용하기 위해 cookie-parser라는 plugin을 설치해야 한다.
```console
$ yarn add cookie-parser
```

설치한 plugin을 express에 적용한다.
```javascript
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());
```

#### 2. Cookie request
req 파라미터를 이용해서 사용자로부터 Cookie를 전달 받는다.
```javascript
pp.get('/count', function(req, res) {
  if(req.cookies.count) {
    var count = parseInt(req.cookies.count);
  } else {
    var count = 0;
  }
  count = count+1;

  res.send('count : ' + count);
});
```

#### 3. Cookie response
res 파라미터를 이용해서 사용자에게 Cookie를 전달한다. 
```javascript
pp.get('/count', function(req, res) {
  if(req.cookies.count) {
    var count = parseInt(req.cookies.count);
  } else {
    var count = 0;
  }
  count = count+1;

  res.cookie('count', count);
  res.send('count : ' + count);
});
```

### 4. 결과 확인
페이지를 새로고침 할 때마다 화면에 표시되는 count값이 1씩 증가함을 알 수 있다.

### 주의사항
- Cookie를 만들고 변형시키고 삭제하는 작업을 통해서 상태저장
- Cookie를 통해서 기본적으로 전달되는 값은 문자입니다. 따라서 숫자로 사용하기 위해서는 형변환을 시켜줘야 한다.


### 우리의 Cookie가 보안적으로 취약한 이유?
Cookie를 서버와 웹부라우저 사이에서 누군가 Cookie를 감청하게 된다면 해킹의 우려!! 

보안하는 방법 매우간단 
cookie-parser에 인자값으로 키값을 넘겨주면 된다.
```javascript
app.get('/count', function(req, res) {
  if(req.cookies.count) {
    var count = parseInt(req.signedCookies.count);
    // var count = parseInt(req.cookies.count);
  } else {
    var count = 0;
  }
  count = count+1;

  res.cookie('count', count, {signed: true});
  // res.cookie('count', count);
  res.send('count : ' + count);
});
```



