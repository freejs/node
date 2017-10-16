const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const _ = require('lodash');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})
const upload = multer({
  storage: storage
});
const fs = require('fs');
const mysql = require('mysql');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'o2',
});
const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
conn.connect();

app.use(express.static('uploads'));
app.use('/user', express.static('uploads'));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.locals.pretty = true;

app.set('views', './views');
app.set('view engine', 'pug');
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

app.get('/upload', (req, res) => {
  res.render('upload');
});
app.post('/upload', upload.single('userfile'), (req, res) => {
  console.log(req.file);
  res.send('uploaded : ' + req.file.filename);
});
app.listen(3000, () => {
  console.log('Connected 3000 port!');
});