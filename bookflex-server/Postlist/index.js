/**
 * Created by Woosikoosi on 2017. 4. 30.
 */

const express = require('express');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '192.168.56.101',
    user: 'bookflex',
    password: 'bookflex123',
    database: 'bookflex'
});

connection.connect();

var bookString = 'SELECT * FROM books';

connection.query(bookString, function(err, rows) {
    if (err) {
        console.log("come on now")
        throw err;
    }
    console.log("Book titles: ", rows[0].title);
    console.log("Books author: ", rows[0].author);
})
