# 08 Post 방식을 이용한 정보의 전달
jade대신에 pug를 사용하세요.

### get
어플리케이션에 접속하여 요청에 따라 정보를 응답해 주는 것

### POST
사용자의 정보를 서버로 전송할 때 사용

### 제출양식 (from)
사용자가 입력한 정보들을 묶는 역활을 하는 것을 'form'이라고 한다. 

### post를 이용시..
post는 url을 이용해서 전달하지 않고 다른 방식으로 데이터를 처리 합니다.  
이 떄는 req.body.xxx를 이용하여 값을 가져오면 됩니다.
```javascript
app.post('/form_receiver', function(req, res) {
  var title = req.body.title;
  var desc = req.body.desc;
  res.send(title +','+desc);
});

```

### body-parser
req.body.xxx를 사용하기 위해서는 body-parser라는 미들웨어를 설치해야 사용 가능합니다.

```javascript
var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({ extended: false });
```
  
extended: false의 의미는  
- you can not post "nested object" 
- This object will contain key-value pairs, where the value can be a string or array (when extended is false), or any type (when extended is true).  
  
간단한 예시입니다.
```javascript
person[name] = 'cw'

Nested Object = { person: { name: cw } }
```

### GET과 POST
온전히 대규모의 정보를 전달시키기 위해서는 post를 사용하는 것이 좋습니다.  
get은 url의 길이 제한 때문에 한계점이 존재합니다.  
하나의 라우터가 get방식을 통해서 전송된 쿼리 스트링의 데이터에 따라서 다른 결과를 보여줄 수 있다.