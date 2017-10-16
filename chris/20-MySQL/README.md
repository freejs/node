# 20 - MySQL 소개 및 기본 사용법

<https://opentutorials.org/course/2136/12020>

10/16

* * *

## MySQL 소개

### 소개

ㅇㅇ

## MySQL 설치 - 맥 (OSX)

### 맥 OSX 설치

## MySQL 구조

### 구조

## MySQL 사용하기

### MySQL 사용하기

mysql 실행

```sh
./mysql -h(hostname) -P(port) -uroot -p
```

mysql server 실행

```sh
mysql.server start
```

mysql server 중지

```sh
mysql.server stop
```

`hostname`은 localhost가 default

`port`는 3306번 포트가 default

default는 생략 가능.

`-u` 옵션은 username.

`-p` 옵션은 password.

> Database와 Database server는 다르다!

데이터베이스만들기

```sql
create database o2 character set utf8 callate utf8_general_ci;
```

데이터베이스 리스트보기

```sql
show databases;
```

데이터베이스 사용하기

```sql
use {DBname};
```

테이블 만들기

```sql
CREATE TABLE `topic` (
`id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `author` varchar(30) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

테이블 리스트 보기

```sql
show tables;
```

행 추가

```sql
insert into {TABLE_NAME} (title,description,author) values('JavaScript','Computer language for web.','egoing');
```

테이블의 모든 정보 가져오기

```sql
select * from {TABLE_NAME};
```

특정 정보 가져오기

```sql
select * from {TABLE_NAME} where id=2;
```

## MySQL - UPDATE & DELETE

### UPDATE & DELETE

업데이트

```sql
update topic set title='npm' where id=2;
```

여러값 업데이트

```sql
update topic set title='npm', description='Node package manager' where id=2;
```

행 삭제

```sql
delete from topic where id=2;
```

## node-mysql 1 : 접속

### 접속

```js
const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'o2',
});

conn.connect();

const sql = 'SELECT * FROM topic';
conn.query(sql, (err, rows, fields) => {
    if (err) console.log(err);
    else {
        console.log('rows', rows);
        console.log('fields', fields);
    }
});

conn.end();
```

## node-mysql 2 : SELECT & INSERT

### SELECT & INSERT

`conn.query()`

첫번째 인자는 sql문

두번째 인자는 parameters

마지막 인자는 callback

```js
const mysql = require('mysql');
const _ = require('lodash');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'o2',
});

conn.connect();

// const sql = 'SELECT * FROM topic';
const sql = 'insert into topic (title,description,author) values(?,?,?)';
const params = ['Supervisor', 'Watcher', 'graphittie'];
conn.query(sql, params, (err, rows, fields) => {
    if (err) console.log(err);
    else {
        console.log(rows);
        // _.map(rows, x => console.log(_.first(x)));
    }
});

conn.end();
```

## node-mysql 3 : UPDATE & DELETE

### UPDATE & DELETE

update

```js
const sql = 'update topic set title=?, author=? where id=?';
const params = ['NPM', 'leezche', 1];
conn.query(sql, params, (err, rows, fields) => {
    if (err) console.log(err);
    else {
        console.log(rows);
    }
});
```

delete

```js
const sql = 'delete from topic where id=?';
const params = [1];
conn.query(sql, params, (err, rows, fields) => {
    if (err) console.log(err);
    else {
        console.log(rows);
    }
});
```

> js에서 sql문에는 세미콜론이 필요없다!