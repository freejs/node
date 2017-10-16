# 21 - MySQL로 웹에플리케이션 구현

<https://opentutorials.org/course/2136/12021>

10/17

* * *

## 글목록

### 웹앱 제작 읽기1 - 글목록

```js
app.get(['/topic', '/topic/:id'], (req, res) => {
    const sql = 'SELECT * FROM topic';
    conn.query(sql, (err, rows, fields) => {
        res.render('view', {
            topics: rows
        })
    });
});
```

## 글 상새 보기 구현

### 웹앱 제작 읽기2 (글상세보기)

```js
app.get(['/topic', '/topic/:id'], (req, res) => {
    const sql = 'SELECT * FROM topic';
    conn.query(sql, (err, rows, fields) => {
        const id = req.params.id;
        if (id) {
            const sql = 'SELECT * FROM topic WHERE id=?';
            const param = [id];
            conn.query(sql, param, (err, topics, fields) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('Internal Server Error');
                } else {
                    res.render('view', {
                        topics: rows,
                        topic: topics[0],
                    });
                }
            });
        } else {
            res.render('view', {
                topics: rows
            });
        }
    });
});
```

## 글 추가 기능 구현

### MySQL 11 : 웹앱제작 - 추가

```js
app.get('/topic/add', (req, res) => {
    const sql = 'SELECT * FROM topic';
    conn.query(sql, (err, rows, fields) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.render('add', {
                topics: rows
            });
        }
    });
});
app.post('/topic/add', (req, res) => {
    const title = req.body.title;
    const desc = req.body.description;
    const author = req.body.author;

    const sql = 'INSERT INTO topic (title, description, author) values(?,?,?)';
    const params = [title, desc, author];
    conn.query(sql, params, (err, result, fields) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.redirect('/topic/' + result.insertId);
        }
    });
});
```

## 글 편집 기능 구현 1

### MySQL 12 : 웹앱 제작 - 편집

```js
app.get(['/topic/:id/edit'], (req, res) => {
  const sql = 'SELECT * FROM topic';
  conn.query(sql, (err, rows, fields) => {
    const id = req.params.id;
    if (id) {
      const sql = 'SELECT * FROM topic WHERE id=?';
      const param = [id];
      conn.query(sql, param, (err, topics, fields) => {
        if (err) {
          console.log(err);
          res.status(500).send('Internal Server Error');
        } else {
          res.render('edit', {
            topics: rows,
            topic: topics[0],
          });
        }
      });
    } else {
      console.log('There is no id');
      res.status(500).send('Internal Server Error');
    }
  });
});
```

## 글 편집 기능 구현 2

### MySQL 13 : 웹앱 제작 - 편집 2

```js
app.post(['/topic/:id/edit'], (req, res) => {
  const title = req.body.title;
  const desc = req.body.description;
  const author = req.body.author;
  const id = req.params.id;
  const sql = 'UPDATE topic SET title=?, description=?, author=? WHERE id=?';
  const params = [title, desc, author, id]
  conn.query(sql, params, (err, result, fields) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.redirect('/topic/' + id);
    }
  });
});
```

## 글 삭제 구현

### MySQL 14 : 웹앱 제작 - 삭제

```js
app.get(['/topic/:id/delete'], (req, res) => {
  const sql = 'SELECT id,title FROM topic';
  const id = req.params.id;
  conn.query(sql, (err, topics, fields) => {
    const sql = 'SELECT * FROM topic WHERE id=?';
    conn.query(sql, [id], (err, topic) => {
      if (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
      } else {
        if (topic.length === 0) {
          console.log('There is no record.');
          res.status(500).send('Internal Server Error');
        } else {
          res.render('delete', {
            topics: topics,
            topic: topic[0],
          });
        }
      }
    });
  });
});

app.post(['/topic/:id/delete'], (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM topic WHERE id=?';
  conn.query(sql, [id], (err, result) => {
    res.redirect('/topic/');
  });
});
```
