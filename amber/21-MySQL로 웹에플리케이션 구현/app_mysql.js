var express = require('express'); //모듈 가져오기
var app = express();
var multer = require('multer');
var _storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, 'uploads/')
  },
  filename: function(req, file, cb){
    cb(null, file.originalname);
  }
});
var upload = multer({storage: _storage});
var fs = require('fs');

var mysql = require('mysql');
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '153971',
  database : 'o2'
});
connection.connect();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false})); //bodyParser 을 쓰기 위한 코드
app.locals.pretty = true; //보기 좋게
app.use('/user', express.static('uploads'));
//localhost:3000/user/3131.jpg 하면 인터넷 창으로 업로드한 사진 보임
app.set('views', './views_mysql'); //view 들은 view_mysql 밑에 두겠다.
app.set('view engine', 'jade'); //view engine 이라는 값으로 jade를 쓰겠다.
//$npm install jade --save

app.get('/upload', function(req, res){
  res.render('upload');
});

app.post('/upload', upload.single('userfile'), function(req, res){
  console.log(req.file);
  res.send('Uploaded : '+req.file.filename);
});

app.get('/topic/add', function(req, res){
  var sql = 'select id, title from topic';
  connection.query(sql, function(err, topics, fields){
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.render('add', {topics:topics});
  });
});

app.post('/topic/add', function(req, res){
  var title = req.body.title; //파일의 제목으로 하겠다.
  var description = req.body.description; //파일의 내용으로 하겠다.
  var author = req.body.author;
  var sql = 'insert into topic(title, description, author) values(?,?,?)';
  connection.query(sql, [title, description, author], function(err, result, fields){
    if(err){
      //에러가 있다면
      console.log(err);
      res.status(500).send('Internal Server Error');
      //send 를 실행하면 다음 코드는 실행되지 않는다.
    } else{
      res.redirect('/topic/'+result.insertId);
    }
  });
});

app.get(['/topic/:id/edit'], function(req, res){
  var sql = 'select id, title from topic';
  connection.query(sql, function(err, topics, fields){
    var id = req.params.id;
    if(id){
      var sql = 'select * from topic where id=?';
      connection.query(sql, [id], function(err, topic, fields){
        if(err){
          console.log(err);
          res.status(500).send('Internal Server Error');
        } else{
          res.render('edit', {topics:topics, topic:topic[0]});
        }
      });
    } else{
      console.log("There is no id.");
      res.status(500).send('Internal Server Error');
    }
  });
});

app.post(['/topic/:id/edit'], function(req, res){
  var sql='update topic set title=?, description=?, author=? where id=?';
  var title=req.body.title;
  var description=req.body.description;
  var author=req.body.author;
  var id=req.params.id;
  connection.query(sql, [title, description, author, id], function(err, result, fields){
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }else{
      res.redirect('/topic/'+id);
    }
  });
});

app.get(['/topic/:id/delete'], function(req, res){
  var sql = 'select id, title from topic';
  var id=req.params.id;
  connection.query(sql, function(err, topics, fields){
    var sql='select * from topic where id=?';
    connection.query(sql, [id], function(err, topic){
      if(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
      } else{
        if(topic.length===0){
          console.log('There is no record.');
          res.status(500).send('Internal Server Error');
        }else{
          res.render('delete', {topics:topics, topic:topic[0]});
        }
      }
    });
  });
});

app.post(['/topic/:id/delete'], function(req, res){
  var sql = 'delete from topic where id=?';
  var id=req.params.id;
  connection.query(sql, [id], function(err, result){
    res.redirect('/topic/'+id);
  });
});

app.get(['/topic', '/topic/:id'], function(req, res){
  var sql = 'select id, title from topic';
  connection.query(sql, function(err, topics, fields){
    var id = req.params.id;
    if(id){
      var sql = 'select * from topic where id=?';
      connection.query(sql, [id], function(err, topic, fields){
        if(err){
          console.log(err);
          res.status(500).send('Internal Server Error');
        } else{
          res.render('view', {topics:topics, topic:topic[0]});
        }
      });
    } else{
      res.render('view', {topics: topics});
    }
  });
});


app.listen(3000, function(){
  console.log('Connected, 3000 port!');
});
