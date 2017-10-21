# 30 - Passportjs

<https://opentutorials.org/course/2136/12134>

10/21

## Passport introudction(패스포트 소개)

### Passportjs 1 : intro

인증을 쉽게 구현할 수 있는 모듈

Authentication

Federation Authentication (연합 인증 or 타사 인증)

## Configuration(설정)

### Passportjs 2 : configure

```js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
app.use(passport.initialize());
app.use(passport.session());
```

```js
app.use(passport.session());
```

는 session 아래 설정해야함.

## Route

### Passportjs 3 : route

input의 아이디와 비밀번호의 name property를 반드시 'username', 'password'로 해야함.

## Serialize

### Passportjs 4 : serialize

## logout(로그아웃)

### Passportjs 5 : logout

## review (복습)

### Passportjs 6 : review