## 템플릿 엔진 (Jade)

맘에 드는군

```
html
  head
    title= title
  body Hello Jade
  ul
    -for(var i=0; i<5; i++)
      li coding
  div= time
```

**send 와 render 차이**  
send 는 string 그대로 전송. render 는 html 로. 
