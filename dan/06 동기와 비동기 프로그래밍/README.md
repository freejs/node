#  05 동기와 비동기 프로그래밍

Synchronous / Asynchronous  

### 예시

[빨래] ---- [설거지] ---- [청소]  

동기적으로 일처리 : 빨래 하고 설거지 하고 청소 한다.   
비동기적으로 일처리 :  
- 빨래 업체에 이야기하고 끝나면 알려주세요.  
- 설거지 업체에 이야기하고 끝나면 알려주세요.  
- 청소 업체에 이야기하고 끝나면 알려주세요.


### node 코드 예시
node가 추구하는 기본적인 방향은 비동기적 처리입니다.  
동기 처리에 대해서는 함수에 Sync가 뒤에 적혀있습니다.  

이 예시에서는 'fs'모듈을 이용하여 파일 입출력을 해봅니다.  
주의!! 파일 입출력을 할 때 encoding방식을 옵션으로 지정해주는 것을 잊지맙시다.  

node는 single thread이기 때문에 비동기 처리를 하는것을 지향합니다.

```javascript
var fs = require('fs');

// Sync
console.log(1);
var data = fs.readFileSync('data.txt', {encoding: 'utf8'});
console.log(data)

// Async
console.log(2);
fs.readFile('data.txt', {encoding: 'utf8'}, function(err, data) {
    console.log(3);
    console.log(data);
});
console.log(4);

// 1
// hello Sync And Async
// 2
// 4
// 3
// hello Sync And Async
```








