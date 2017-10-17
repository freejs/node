var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'mangob',
  password : '111111',
  port     : '3306',
  database : 'o2'
});

connection.connect(function(err) {
  if(err) {
    console.error('error connectiong: ' + err.stack);
    return;
  } 

  console.log('connected as id ' + connection.threadId);
});
