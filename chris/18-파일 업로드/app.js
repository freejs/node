const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
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
const app = express();

app.use(express.static('uploads'));
app.use('/user', express.static('uploads'));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.locals.pretty = true;

app.set('views', './views');
app.set('view engine', 'pug');
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