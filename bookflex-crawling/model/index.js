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



// for (let i = 0; i < bookInfo.length; i++) {
//let blogInfo = `INSERT INTO Posts VALUES (default, ${bookInfo[i].title}, ${bookInfo[i].author}, ${bookInfo[i].content}, ${bookInfo[i].imgurl}, ${bookInfo[i].releaseDate})`;

// CREATE TABLE Posts (
//     postId BIGINT(30) NOT NULL AUTO_INCREMENT,
//     title VARCHAR(2000) NOT NULL,
//     author VARCHAR(2000) NOT NULL,
//     content VARCHAR(2000) NOT NULL,
//     postImg VARCHAR(2000),
//     releasedDate VARCHAR(100),
//  	PRIMARY KEY(postId)
// );


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
//console.log(data);

connection.query(blogQuery, [data], function(err, rows) {
    if (err) {
            console.log("error")
            throw err;
    } 
    console.log("Book title");
    })
// }
console.log("hello")
console.log(bookInfo[0].releaseDate);

