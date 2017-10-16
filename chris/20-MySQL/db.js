const mysql = require('mysql');
const _ = require('lodash');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'o2',
});

conn.connect();
/*
// const sql = 'SELECT * FROM topic';
const sql = 'insert into topic (title,description,author) values(?,?,?)';
const params = ['Supervisor', 'Watcher', 'graphittie'];
conn.query(sql, params, (err, rows, fields) => {
    if (err) console.log(err);
    else {
        console.log(rows);
         _.map(rows, x => console.log(_.first(x)));
    }
});
*/
/*
const sql = 'update topic set title=?, author=? where id=?';
const params = ['NPM', 'leezche', 1];
conn.query(sql, params, (err, rows, fields) => {
    if (err) console.log(err);
    else {
        console.log(rows);
    }
});
*/
const sql = 'delete from topic where id=?';
const params = [1];
conn.query(sql, params, (err, rows, fields) => {
    if (err) console.log(err);
    else {
        console.log(rows);
    }
});
conn.end();