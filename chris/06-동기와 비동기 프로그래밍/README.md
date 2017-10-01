# 6 - 동기와 비동기 프로그래밍

<https://opentutorials.org/course/2136/11884>

10/2

# 동기와 비동기 프로그래밍

--------------------------------------------------------------------------------

## 개요

--------------------------------------------------------------------------------

Synchronous(동기)

- Sync

Asynchronous(비동기)

- Async

## 활용

--------------------------------------------------------------------------------

```javascript
const fs = require('fs');

// Sync
console.log(1);
let data = fs.readFileSync('data.txt', {
  encoding: 'utf8'
});
console.log(data);

// Async
console.log(2);
fs.readFile('data.txt', {
  encoding: 'utf8'
}, (err, data) => {
  console.log(3);
  console.log(data);
});
console.log(4);
```
