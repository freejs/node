# 17 - 웹에플리케이션 제작

<https://opentutorials.org/course/2136/11950>

10/3

# 웹에플리케이션 제작

--------------------------------------------------------------------------------

## 오리엔테이션

--------------------------------------------------------------------------------

## 라우팅

--------------------------------------------------------------------------------

```javascript
const express = require('express');
const app = express();

app.locals.pretty = true;
app.set('views', './views_file');
app.set('view engine', 'pug');
app.get('/topic/new', (req, res) => {
    res.render('new');
});
app.post('/post', (req, res) => {
    res.send('Hi, post');
});
app.listen(3000, () => {
    console.log('Connected, 3000 port!');
});
```

## 본문저장

--------------------------------------------------------------------------------

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.locals.pretty = true;
app.use(bodyParser.urlencoded({extended: false}));
app.set('views', './views_file');
app.set('view engine', 'pug');
app.get('/topic/new', (req, res) => {
    res.render('new');
});
app.post('/post', (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    fs.writeFile('data/' + title, description, err => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.send('Success!');
    });
});
app.listen(3000, () => {
    console.log('Connected, 3000 port!');
});
```

## 글 목록 만들기

--------------------------------------------------------------------------------

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.locals.pretty = true;
app.use(bodyParser.urlencoded({extended: false}));
app.set('views', './views_file');
app.set('view engine', 'pug');
app.get('/topic/new', (req, res) => {
    res.render('new');
});
app.get('/topic', (req, res) => {
    fs.readdir('data', (err, files) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.render('view', {topics: files});
    });
});
app.post('/post', (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    fs.writeFile('data/' + title, description, err => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.send('Success!');
    });
});
app.listen(3000, () => {
    console.log('Connected, 3000 port!');
});
```

## 본문 읽기

--------------------------------------------------------------------------------

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.locals.pretty = true;
app.use(bodyParser.urlencoded({extended: false}));
app.set('views', './views_file');
app.set('view engine', 'pug');
app.get('/topic/new', (req, res) => {
    res.render('new');
});
app.get('/topic', (req, res) => {
    fs.readdir('data', (err, files) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.render('view', {topics: files});
    });
});
app.get('/topic/:id', (req, res) => {
    let id = req.params.id;
    fs.readdir('data', (err, files) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        fs.readFile('data/' + id, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send('Internal Server Error');
            }
            res.render('view', {topics: files, title: id, description: data})
        });
    });
});
app.post('/post', (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    fs.writeFile('data/' + title, description, err => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.send('Success!');
    });
});
app.listen(3000, () => {
    console.log('Connected, 3000 port!');
});
```

## 코드의 개선

--------------------------------------------------------------------------------

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.locals.pretty = true;
app.use(bodyParser.urlencoded({extended: false}));
app.set('views', './views_file');
app.set('view engine', 'pug');
app.get('/topic/new', (req, res) => {
    fs.readdir('data', (err, files) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.render('new', {topics: files});
    });
});
app.get(['/topic', '/topic/:id'], (req, res) => {
    fs.readdir('data', (err, files) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        let id = req.params.id;
        if (id) {
            fs.readFile('data/' + id, 'utf8', (err, data) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('Internal Server Error');
                }
                res.render('view', {topics: files, title: id, description: data})
            });
        } else {
            res.render('view', {topics: files, title: 'Welcome', description: 'Hello JavasScript'});
        }
    });
});
app.post('/post', (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    fs.writeFile('data/' + title, description, err => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.redirect('/topic/' + title);
    });
});
app.listen(3000, () => {
    console.log('Connected, 3000 port!');
});
```
