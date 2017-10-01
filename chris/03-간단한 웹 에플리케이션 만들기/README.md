# 3 - 간단한 웹 에플리케이션 만들기

<https://opentutorials.org/course/2136/11853>

10/1

# 간단한 웹 에플리케이션 만들기

--------------------------------------------------------------------------------

## 실행

--------------------------------------------------------------------------------

```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

## 인터넷의 동작방법

----
