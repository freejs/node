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
