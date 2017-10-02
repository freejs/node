# 9 - Express-간단한 웹에플리케이션 만들기

<https://opentutorials.org/course/2136/11886>

10/2

# Express-간단한 웹에플리케이션 만들기

--------------------------------------------------------------------------------

## Express, 간단한 웹앱 만들기

--------------------------------------------------------------------------------

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(3000, () => {
    console.log('Connected 3000 port!');
});
```

`app.get('/',callback(req,res))`<br>
root(/)로 요청이왔을 때 응답  
get -> (라우터)
