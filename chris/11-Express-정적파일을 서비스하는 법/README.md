# 11 - Express-정적파일을 서비스하는 법

<https://opentutorials.org/course/2136/11857>

10/2

# Express-정적파일을 서비스하는 법

--------------------------------------------------------------------------------

## Express, 정적파일을 서비스하는 법

--------------------------------------------------------------------------------

```javascript
let express = require('express');
let app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/login', (req, res) => {
    res.send('Login Please');
});

app.listen(3000, () => {
    console.log('Connected 3000 port!');
});

app.get('/route', (req, res) => {
    res.send('Hello Router, <img src="/1.jpeg">')
});
```

`app.use(express.static('public'));`<br>
public폴더에 정적인 파일들을 서비스할수 있게된다.
