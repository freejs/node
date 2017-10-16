# 03 간단한 웹에플리케이션 만들기

Main 파일, Entry 에플리케이션, Entry 파일 => 최초의 진입점    

app.js는 node에서 권장하는 기본 Entry의 이름이다.  

### app.get()
사용자가 웹서버에 접속할 때는 get과 post방식으로 접속할 수 있다. 기본적으로 url을 입력하여 접속하는 것은 get방식이다. get방식으로 접속한 사용한 중에서 홈페이지로 접속한 사용자를 구분하기 위해 '/'를 이용한다.

매개변수 값이 약속되어있다. req, res이다.  
req는 사용자가 입력한 값들을 담고 있다.  
res는 응답에 대한 정보를 담는 객체이다.  

```javascript
app.get('/', function(req, res) {
    res.send('Hello home page');
})
```

### routing
길을 찾는다!  
get이란 녀석은 사용자의 요청과 요청에 대한 처리인 controller를 중계해준다.  

Router는 너무너무 중요한 부분입니당...  

사용자 ---- router ---- controller





