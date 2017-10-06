## express 간단한 웹에플리케이션 만들기

프로젝트가 많아져서 여러개의 파일로 하나의 에플리케이션을 만들 때, 누구를 실행시켜야 그 에플리케이션이 동작할 수 있는가?  
최초로 실행되는, 최초로 진입되는 에플리케이션을  
main application, main file, entry application, entry file 이라고 불리운다.  

즉, app.js 이라는 것은 express 에서 권장하는 main application 의 이름이다. 하지만 다른 이름을 사용해도 무관하다.  


```javascript
var express = require('express');
var app = express();
```

express라는 모듈을 프로젝트에 로드한다. 그리고 로드한 express를 사용하기 위한 코드. 우리는 이제 express 란 변수를 통해서 express 라는 모듈을 제어할 수 있게 된다. 또한 express 란 모듈을 통해서 app 이라는 객체를 만든다. 쉽게 말하면 이 두 줄은 어떠한 원리가 있는 것이 아니라 그냥 express 를 만든 사람이 이것을 쓰려면 이렇게 쓰시오 라고 정한 약속임..  

### 라우터

```javascript
app.get('/', function(req, res){
  res.send('Hello home page');
});
app.get('/login', function(req, res){
  res.send('Login please');
});
```

결국 get이라는 것은 사용자의 요청과 그 요청에 대한 처리인 controller 를 중계해주는 역할을 하는 것이 바로 라우터가 하는 역할이다.
