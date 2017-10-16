## cookie 2

온라인 쇼핑 장바구니 만들기  

**Security 쿠키 만드는 법**

`app.use(cookieParser());` to
`app.use(cookieParser(secretcodeinsert));`  

`req.cookies.cart` to `req.signedCookies.cart`  

`res.cookie( , );` to `res.cookie(, , {signed:true});`  

이렇게 바꿔준다. 로그인 페이지 같은거 만들 때 필수.  
