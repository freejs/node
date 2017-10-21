# 29 - Security - Password (비밀번호 보안)

<https://opentutorials.org/course/2136/12132>

10/21

## Security Password 1

암호화의 세계로 빠져봅시다!

## Security Password 2

`md5`
module

암호화모듈

복호화가 불가능할때 이를 **_단방향 암호화_** 라고 한다

```js
md5(pwd)
```

## Security Password 3 : salt

salt라는 값을 비밀번호에 더해서 사용!

비밀번호가너무어려워져서 크랙하기어려워진다!

```js
md5(pwd+salt)
```

소금을 뿌려뿌려!

salt를 한가지값으로하면 비밀번호 하나가 털리면 다털린다!

사용자마자 salt값을 다다르게 주자!

md5는 더이상 안쓰니까 `SHA256`을 쓰자!

## Security Password 4 : pbkdf2

지금까지는 '비밀번호를 어떻게 안전하게 저장할것인가?'에 대하여 단방향 암호화를 배웠다.

키 스트레칭 기법 (암호화한거를 게속 또 함호화함)(?)

뭔지모르겟당..

PBKDF2 함수!

```js
hasher({password:'111111'}, (err,pass,salt,hash)=>{
  console.log(err,pass,salt,hash);
});
```

매번 새로운 salt를 생성해준다.

## Security Password 5

## Security Password 6 : register

