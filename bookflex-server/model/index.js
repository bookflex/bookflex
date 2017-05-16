/**
 * Created by Joy on 2017. 5. 1..
 */

import mysql from 'mysql';
import env from '../config/index';

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

const insertEachBookInfo = (book) => {
  return mysqlWrapper.execute(`SELECT isbn FROM Books WHERE Books.isbn = '${book.isbn}'`).then(result => {
    if(result.length === 0) {
      const query = `INSERT INTO Books(title, description, author, isbn, coverLargeUrl, customerReviewRank, standardPrice, saledPrice) 
        VALUES ('${book.title}', '${book.description}', '${book.author}', '${book.isbn}',
         '${book.coverLargeUrl}', ${book.customerReviewRank}, ${book.priceStandard}, ${book.priceSales})`;
      return mysqlWrapper.execute(query);
    }
  });
};

const getPostsByPostId = () => {
  return mysqlWrapper.execute(`SELECT * FROM Posts WHERE PostId < 11`);
};

const insertEachBookStarPoint = (bookId, starPoint) => {
  //must add check Logic duplicated star point by book
  const query = `INSERT INTO Reviews(bookId, star) VALUES ('${bookId}','${starPoint}')`;
  return mysqlWrapper.execute(query);
};

const getUser = (email, password) => {
  const query = `SELECT * FROM Users WHERE email = '${email}'AND password = '${password}'`;
  return mysqlWrapper.execute(query);
};

const getUserByUserId = (userId) => {
  const query = `SELECT * FROM Users WHERE userId = '${userId}'`;
  return mysqlWrapper.execute(query);
};

const insertNewUser = (email, password) => {
  const query = `INSERT INTO Users(email, password) VALUES ('${email}','${password}')`;
  return mysqlWrapper.execute(query);
};

export default {
  connection, getBooksByUserId,
  getPostsByPostId, insertEachBookInfo,
  insertEachBookStarPoint, getUser,
  getUserByUserId, insertNewUser
};
