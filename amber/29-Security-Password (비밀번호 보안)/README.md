## Security-Password(비밀번호 보안)

`npm install md5 --save`  

md5  
**단방향 암호화 방법** : 원래의 문자를 암호화된 문자로 바꿀 수는 있지만 암호화된 문자를 원래의 문자로 바꿀 수는 없다. 한쪽 방향으로만 암호화 가능한 것.  
md5는 과거에 단방향의 암호화 방법으로 사용됬었다.  


```Javascript
var users = [
    {
      username:'egoing',
      //password:'698d51a19d8a121ce581499d7b701668', //'111'을 md5로 암호화한 값
      password:'07af4c6c13800ca374fe879b3c2b87c1', //md5(pwd+salt)
      salt: '@#$%^&*'
      displayName:'Egoing'
    },
    {
      username:'amber',
      //password:'698d51a19d8a121ce581499d7b701668', //'111'을 md5로 암호화한 값
      password:'bdf4260d546a2ca97da703da1c82afae', //md5(pwd+salt)
      salt: '*&^%$#@'
      displayName:'Amber'
    }
  ];
```

두 사람의 비밀번호는 같지만 서로 다른 salt 값을 갖고 있기 때문에 다른 해쉬코드(암호화 문자)를 받게 된다.  

하지만 md5를 더 이상 암호화 용도로 사용하지 않는다. 설계상 문제 때문.  

<br>

현시점에서 사용하기 좋은 암호화는 SHA이다.  
`npm install sha256 --save`  


PBKDF2가 뭘까.  
