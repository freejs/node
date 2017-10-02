# 12 - Express-웹페이지를 표현하는 방법

<https://opentutorials.org/course/2136/11858>

10/2

# Express-웹페이지를 표현하는 방법

--------------------------------------------------------------------------------

## Express, 웹페이지를 표현하는 방법

--------------------------------------------------------------------------------

app.js

```javascript
const express = require('express');
const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.get('/dynamic', (req, res) => {
    let lis = '';
    let time = new Date();
    for (let i = 0; i < 5; i++) {
        lis = lis + '<li>coding</li>';
    }
    let output = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Title</title>
        </head>
        <body>
            Hello Dynamic!!!!
            <ul>
            ${lis}
            </ul>
            ${time}
        </body>
        </html>`;
    res.send(output);
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
