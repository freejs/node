# 7 - Express-도입

<https://opentutorials.org/course/2136/11855>

10/2

# Express-도입

--------------------------------------------------------------------------------

## express 도입

--------------------------------------------------------------------------------

`require('@@@')`<br>
@@@모듈의 객체를 반환한다.

`server.listen(port, hostname, callback())`<br>
hostname/port로 들어오는 요청을 듣고있는다.<br>
요청이오면 callback 함수를 호출한다.

`http.createServer(callback(req, res))` 서버를 만든다.<br>
req는 요청과 관련된 객체, res는 응답과 관련된 객체이다.
