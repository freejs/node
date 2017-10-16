## 콜백함수

```
> a = [3,1,2]; a.sort(function(v1, v2){return v2-v1;}); console.log(a);
[ 3, 2, 1 ]
undefined
```

이름이 정의되지 않은 함수. 익명 함수.

```
> function sort(callback){callback();};
undefined
> sort(function(){console.log('Hello callback')});
Hello callback
undefined
```

시방 뭐시여.  
일급함수. 값처럼 취급되는 함수. 파라미터로 넘길 수 있다.  

**콜백함수 사용 이유**  
비동기작업을 하기 위해서. 얘가 정상 작동하는지 알아보기 위해.
