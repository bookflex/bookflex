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
});

connection.connect(function(error) {
    if (error) {
        console.log("Error");
    } else {
        console.log("Connected");
    }
});

let blogQuery = "INSERT INTO Posts (title, author, content, postImg, releasedDate) VALUES ?";
let data = bookInfo.map((val)=>{
    let arr = [];
    arr.push(val.title);
    arr.push(val.author);
    arr.push(val.content);
    arr.push(val.imgurl);
    arr.push(val.releaseDate);
    
   
    return arr;
})

connection.query(blogQuery, [data], function(err, rows) {
    if (err) {
      console.log("error")
      throw err;
    } 
    console.log("Book title");
    })


