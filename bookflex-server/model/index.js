/**
 * Created by Joy on 2017. 5. 1..
 */
<<<<<<< HEAD
const mysql = require('mysql');
const env = require('../config/index');

=======
import mysql from 'mysql';

import env from '../config/index';
>>>>>>> develop
import MysqlWrapper from './MysqlWrapper';

const connection = mysql.createConnection({
  host: env.mysql.host,
  port: env.mysql.port,
  user: env.mysql.user,
  password: env.mysql.password,
  database: env.mysql.database
});

const mysqlWrapper = new MysqlWrapper(connection);

const getBooksByUserId = (userId) => {
  return mysqlWrapper.execute(`SELECT b.* FROM Books b INNER JOIN BookUserMap bu ON b.bookId = bu.bookId WHERE bu.userId = ${userId}`);
};

<<<<<<< HEAD
const getPostsByPostId = () => {
  return mysqlWrapper.execute(`SELECT * FROM Posts WHERE PostId < 11`);
}

export default {
  connection, getBooksByUserId, getPostsByPostId
=======
const insertEachBookInfo = (book) => {
  return mysqlWrapper.execute(`SELECT isbn FROM Books WHERE Books.isbn = '${book.isbn}'`).then(result => {
    if(result.length === 0) {
      const query = `INSERT INTO Books(title, description, author, isbn, coverLargeUrl, customerReviewRank, standardPrice, saledPrice) 
        VALUES ('${book.title}', '${book.description}', '${book.author}', '${book.isbn}',
         '${book.coverLargeUrl}', ${book.customerReviewRank}, ${book.priceStandard}, ${book.priceSales})`;
      console.log('query', query);
      return mysqlWrapper.execute(query);
    }
  });
}

export default {
  connection, getBooksByUserId, insertEachBookInfo
>>>>>>> develop
}



