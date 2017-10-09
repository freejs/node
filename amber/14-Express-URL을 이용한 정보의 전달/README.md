## URL을 이용한 정보의 전달

**쿼리 스트링**  
? 뒤에 나타나는 정보를 말한다.  
ex) http://a.com/topic?id=1  
http://a.com/topic?id=2  
http://a.com/topic?id=3  

http는 프로토콜이라고 부른다. 그 뒤는 도메인이라 부르고 topic에 해당되는 부분은 path라고 부른다. ? 뒤에 오는 정보를 바로 쿼리 스트링이라고 부른다.  

쿼리스트링을 통해 값을 전달할 수 있다.  
쿼리스트링을 포함한 링크를 만들면 입력 값에 따라 다른 페이지가 나오게 되게 만들 수 있다.  

값 구분자는 &  

```
app.get('/topic', function(req, res){
  var topics=[
  'Javascript is ...',
  'Nodejs is ...',
  'Express is ...'
  ];
  var output = `
  <a href="/topic?id=0">Javascript</a><br>
  <a href="/topic?id=1">Nodejs</a><br>
  <a href="/topic?id=2">Express</a><br>
  ${topics[req.query.id]}
  `
  res.send(output); //쿼리스트링
});
```


`req.query.`를 통해 쿼리 값을 받는다.  
