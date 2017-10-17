# 데이터베이스 - MySQL

MySQL이 Sun이라는 자바를 개발한 회사의 소유가 됩니다.
Sun이 Oracle에게 먹히면서 MySQL의 주인이됩니다.

MarioaDB는 MySQL과 호환되는 DB입니다.

아마존에서 만든 DB인 오로라는 MySQL과 호환됩니다.

mamp를 이용해서 MySQL을 설치했습니다.

mysql/bin에서 ./mysql -urott -p 를 입력하면 접속완료

한줄을 행, row, record라고 부른다.
수직은 열, column
전체는 table
연관된 테이블을 묶어서 database
여러가지 에플리케이션들을 묶는 개념을 database server

./mysql -hopentutorials.org -P3306 -uroot -p

MySQL은 기본 포트가 3306이다. 기본값이다.
주소를 적지 않는다면 기본 주소는 localhost이다.
위의 두개는 생략 가능하다.

### 데이터베이스 생성
CREATE DATABASE [name] CHRACter SEt utf8 COLLATE utf8_general_ci;

Auto Increment는 자동적으로 숫자가 하나씩 증가합니다.


UPDATE topic SET title='npm' WHERE id=2;
UPDATE topic SET title='npm'; // 인생이 바뀌는 소스코드

DELETE FROM topic WHERE id=2;
DELETE FROM topic; // 인생이 바뀌는 소스코드

### MySQL을 사용시 User관리
mysql 데이터베이스에 있는 user라는 table에서 사용자 관리를 하고 있기 때문에 node를 이용하여 mysql을 사용시 유저 정보를 꼭 알아두고 입력합시다.




 