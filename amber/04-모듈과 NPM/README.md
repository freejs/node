## 모듈과 NPM

#### 모듈이란?
부품.

```javascript
const http = require('http');
```

http라는 변수에 http라는 모듈을 담은 것이다. 이 http 를 통해 이 모듈을 제어할 수 있다. 하지만 여기에서는 변수가 아니라 상수이다. 그 이유는 한번 할당이 되면 그 다음 할당 값을 바꿀 수 없다는 것을 명시해야 한다. 그래서 상수의 약자인 const 를 사용한 것.  

부품을 가져다 쓸 때에는 require 라는 함수를 사용한다.  


```javascript
var o = require('os');
console.log(o.platform());
```

```
win32
```

사용 운영체제 알아보는 모듈.  

<br>

### NPM
Node Package Manager  

HTTP, OS ... : Nodejs가 제공하는 모듈  
Date, String, Array, Math ... : JS가 제공하는 모듈  
NodeJs가 제공하는 모듈은 NodeJs 시스템에서만 쓸 수 있는 모듈.  
JS가 제공하는 모듈은 JS가 동작하는 어떠한 시스템에서건 사용할 수 있는 모듈.  

NodeJS가 제공하는 모듈과 JS가 제공하는 모듈이 프로그래밍을 하는데 기본적인 명령어들이라고 할 수 있다.  


**타인의 모듈을 사용하는 방법**
NPM을 이용한다. 즉, NPM은 node계의 앱스토어.  
어떠한 모듈을 프로젝트에 사용하기 쉽게 설치, 삭제, 업그레이드, 의존성 관리.  

```
https://www.npmjs.com
```

<br>

**독립적 모듈 사용 방법**

`uglify-js`ㅡ 못생기게 만들다. 코드의 모든 공백을 없애다.  

설치 시  

`-g`ㅡ 전역에서 사용하는 독립적으로 설치가 된다.  
없으면 이 패키지를 사용할 프로젝트 안에서 부품으로 설치가 되겠다.  

`-m`ㅡ 맹글의 약자. 맹글은 짓이기다는 뜻. 변수의 이름을 한글자의 가장 짧은 이름으로 바꾸어 준다.  

`-o`ㅡ 결과를 파일로 저장.  

```
uglifyjs test.js -o test.min.js -m
```

보통 uglify 시킨 것은 파일 뒤 .min 붙여 저장해주는 것이 관습.  


<br>

**모듈을 부품으로 사용 방법**

underscore.js 사용.  

`-save`ㅡ 해당 모듈을 package.JASON 안에 dependency 항목으로 추가하기 때문에 이 프로젝트의 의존성을 명시적으로 표시해서 프로젝트를 다른 디렉토리에서 사용할 때에도 의존성을 갖고 있는 패키지를 쉽게 갖고 올 수 있는 기능을 제공한다. 뭔말.  

`npm init`ㅡ npm 패키지로 초기화.  
