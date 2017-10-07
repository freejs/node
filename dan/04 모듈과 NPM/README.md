# 04 모듈과 NPM

모듈은 부품이다!! 

node가 미리 마련해둔 web-server를 가져다 쓰는것이 이번시간의 목표입니다.  

const는 constant의 약자로서 ES6에서 사용되는 상수입니다.
바뀌지 않는다는 것을 명시하기 위해 모듈 선언시 사용하면 좋습니다. 후후...

```javascript
const http = require('http');
```


### npm = Node Package Manager
http와 os는 node.js가 제공하는 모듈  
Date, String, Array는 javascript가 제공하는 모듈  

Node계의 앱스토어!! 이게 바로 npm
설치, 삭제, 업그레이드, 의존성 관리를 한번에!! 이욜 ~

### npm에서 독립적으로 실행되는 프로그램
-g 옵션을 사용하면 컴퓨터 전역에서 사용가능한 독립적인 소프트웨어로 설치 가능하다.

-g 옵션이 없다면 현재 사용되는 프로그램에 종속되는 소프트웨어로 설치하게 된다.

uglify-js
```
uglifyjs hello.js
function hello(name){console.log('Hi, '+name)}hello('octave');
uglifyjs hello.js -m
function hello(o){console.log('Hi, '+o)}hello('octave');

uglifyjs hello.js -o uglifyed.js -m
uglifyjs hello.js -o hello.min.js -m
```

### npm으로 모듈설치
간단합니다.
```
$ npm init

name:
version:
description:
entry point: (hello.js) // 최초 구동되는 지점
...

$ npm install underscore --save
```
--save를 사용하면 pakage.json에 기록됩니다.
--save를 사용하지 않으면 현재 디렉토리에만 설치되고 package.json에는 등록되지 않습니다.


전 이미 많이써봐서 잘알고 있어요.



