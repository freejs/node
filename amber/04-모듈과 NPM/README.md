## 모듈과 NPM

#### 모듈이란?
부품.

```javascript
const http = require('http');
```

http라는 변수에 http라는 모듈을 담은 것이다. 이 http 를 통해 이 모듈을 제어할 수 있다. 하지만 여기에서는 변수가 아니라 상수이다. 그 이유는 한번 할당이 되면 그 다음 할당 값을 바꿀 수 없다는 것을 명시해야 한다. 그래서 상수의 약자인 const 를 사용한 것.  

부품을 가져다 쓸 때에는 require 라는 함수를 사용한다.  

<br>

```javascript
var o = require('os');
console.log(o.platform());
```

```
win32
```

사용 운영체제 알아보는 모듈.  
