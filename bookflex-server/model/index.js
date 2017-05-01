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

export default {
  connection, getBooksByUserId
}



