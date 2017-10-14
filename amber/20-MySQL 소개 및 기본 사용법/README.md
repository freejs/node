## MySQL 소개 및 기본 사용법

MySQL : 상대 관계형 데이터베이스  
관계형 데이터베이스는 데이터베이스 시장의 주류이다. 그리고 MySQL은 그 중 세손가락에 꼽힘.  

AMP : Apache, MySQL, PHP  

MariaDB ↔ MySQL  

`https://bitnami.com/stack/wamp`
비트나미(apache + mysql + php) 설치  


**mysql 접속하기**
`C:\Bitnami\wampstack-5.6.31-0\mysql\bin` 에서  
`mysql -uroot -p` 혹은 `mysql -hlocalhost -uroot -p`  
다른 페이지에 mysql이 있다면 이런식으로 `mysql -hopentutorials.org -P3306 -uroot -p`  
해당 주소와 포트번호 적어주는 식.  

**테이블(표) 구성**  
행 = row = record  
열 = column  

database server - database - table  
데이터베이스 서버 : 소프트웨어 자체.  
데이터베이스 : 테이블들을 그룹핑하는 일종의 폴더같은 개념.  

```
create databases o2;
show databases;
use o2;
```

기본 명령어 4가지  
SELECT, INSERT, DELETE, UPDATE  
