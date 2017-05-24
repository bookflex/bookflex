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

// let postQuery = "INSERT INTO Posts (title, author, content, postImg, releasedDate, blogurl) VALUES ?";
let emptyArray = "TRUNCATE Posts"
let postQuery = "REPLACE INTO Posts (title, author, content, postImg, releasedDate, blogurl) VALUES ? "

let data = bookInfo.map((val, index)=>{
    let arr = [];
    arr.push(val.title);
    arr.push(val.author);
    arr.push(val.content);
    arr.push(val.imgurl);
    arr.push(val.releaseDate);
    arr.push(val.blogurl);
    console.log(arr);
    return arr;
})

connection.query(emptyArray, function(err,rows) {
    if (err) {
        console.log("error")

         throw err;
    }
    console.log("emptied")
})

connection.query(postQuery, [data], function(err, rows) {
    if (err) {
      console.log("error")
     
      throw err;
    } 
    console.log("Book title");
     //console.log(data);
    })

connection.end();

