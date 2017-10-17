# 14 Session
이 방식도 Cookie를 사용합니다.
Web Browser가 Server에 요청할 때마다 sid가 같다면 같은 사용자라고 할 수 있다. 

사용자의 식별자만 저장하여 식별자에 해당하는 데이터를 서버로부터 가져와서 사용합니다. 

쿠키에서 ID와 Password는 저장하지 않습니다. sid만 저장합니다. 

### 사용 방법
#### 1. express-session을 설치
express에서 session을 사용하기 위한 plugin을 설치한다.
```javascript
$ yarn add express-session
```

설치된 plugin을 express에 추가한다. 이 때 secret값은 임의의 암호와 값이다.
```javascript
var express = require('express');
var session = require('express-session');

var app = express();

app.use(session({
  secret: 'asdfasdf12312@#(!*ASDKJAS',
  resave: false,
  saveUninitialized: true
}));
```

#### 2. 간단한 사용 예시
```javascript
app.get('/tmp', function(req, res) {
  res.send('result : ' + req.session.count);
});
```

### 문제1. 어플리케이션을 재부팅하게 되면 메모리에 저장된 session데이터가 모두 날라간다
session 데이터를 store하는 방법에 대해 알아보자.

특별한 저장소 없이 쉽고 간단하게 사용할 수 있는 방법은 file이다.

라이브러리로 session-file-store를 이용한다.

mysql을 이용하고 싶다면 express-mysql-session을 이용하면 된다.

### 문제2. redirection을 사용할 때 문제
redirect를 사용할때 일부 갱신에 있어서 문제 발생 가능성 있음(session 저장과 갱신의 시점의 차이 때문에 발생)

이 경우 req.session.save를 이용하여 해결한다. 인자값으로 콜백함수를 받아서 저장이 완료되면 실행한다.
```javascript
app.get('/auth/logout', function(req, res) {
  delete req.session.displayName;
  req.session.save(function() {
    res.redirect('/welcome');
  });
});
```

### 세션을 저자



