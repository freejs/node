## 동기와 비동기 프로그래밍
동기(Synchronous) & 비동기(Asynchronous)  

```javascript
//Synchronous
console.log(1);
var data = fs.readFileSync('data.txt', {encoding:'utf8'});
console.log(data);

//Asynchronous
console.log(2);
fs.readFile('data.txt', {encoding:'utf8'}, function(err, data){
  console.log(3);
  console.log(data);
})
console.log(4);
```

비동기 처리를 콜백으로 한다.  
노드는 싱글 쓰레드이기 때문에 비동기 처리를 주로 한다.  

```
1
2
4
3
```
