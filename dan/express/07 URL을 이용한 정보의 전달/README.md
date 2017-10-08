# 07 URL을 이용한 정보의 전달

### 쿼리 스트링이란?
'http://a.com/topic?id=1'을 ***URL***이라고 부릅니다.
'http'는 ***프로토콜***이라고 부릅니다.
'?id=1'을 ***쿼리 스트링***이라 부릅니다.


```
http://a.com/topic?id=1
http://a.com/topic?id=2
http://a.com/topci?id=3
```

### req.qeury.xxx
쿼리 스트링의 값은 req.query.xxx으로 전달됩니다.  
예시는 아래와 같습니다.  
```javascript
// 단일 qeury
 // http://localhost/topic?id=1
 
app.get('/topic', function(req, res) {
  console.log(req.qeury.id)   // 1
});

// 복수 qeury
// http://localhost/topic?id=1&name=octave
app.get('/topic', function(req, res) {
  console.log(req.qeury.id + ' ' + req.qeury.name)   // 1 octave
});

```

### semantic url
Query String없이 깔끔하게 url을 관리하는 것을 semantic url이라고 합니다.
예시는 아래오 같습니다.
```
// normal
http://localhost/topic?id=1

// smantic url
http://localhost/topic/1
```

사용법은 간다합니다. ㅋㅋ
라우터 주소 부분에 ':id'를 추가하고 req.params.id로 변경해줍니다.  
```javascript
app.get('/topic/:id', function(req, res) {
  var topics = [
    'Javascript is ...',
    'Nodejs is ...',
    'Express is ...'
  ];

  var output = `
    <a href="/topic?id=0">Javascript</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">Express</a><br>
    ${topics[req.params.id]}
  `

  res.send(output);
});
```

복수의 값에 대해서 받고 싶다면 마찬가지로 /를 구분자로 하여 계속 붙여줍니다.
```javascript
app.get('/topic/:id/:mode', function(req, res) {
  var topics = [
    'Javascript is ...',
    'Nodejs is ...',
    'Express is ...'
  ];

  var output = `
    <a href="/topic?id=0">Javascript</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">Express</a><br>
    ${topics[req.params.id] +','+req.params.mode}

  res.send(output);
});
```


 

