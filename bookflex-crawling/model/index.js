const express = require('express');
const app = express();
const mysql = require('mysql');
const env = require('../config/index');
const bookInfo = require('../postlist/JSON/bookinfo.json');

const connection = mysql.createConnection({
  host: env.mysql.host,
  port: env.mysql.port,
  user: env.mysql.user,
  password: env.mysql.password,
  database: env.mysql.database
})

connection.connect();

var blogInfo = `INSERT INTO Posts VALUES (DEFAULT, bookInfo[0].title, bookInfo[0].author, bookInfo[0].content, bookInfo[0].imgurl, bookInfo[0].releaseDate)`;

//for (let i = 0; i < bookInfo.length; i++) {
connection.query(blogInfo, function(err, rows) {
    if (err) {
            console.log("error")
            throw err;
    } 
    console.log("Book title");
    })
//}
console.log("hello")
console.log(bookInfo[0].releaseDate);

app.listen('3301');