export default class MysqlWrapper {
  constructor(connection) {
    this.connection = connection;
  }

  execute(query) {
    return new Promise((resolve, reject) => {
      this.connection.query(query, (errors, results, fields) => {
        if(errors) {
          reject(errors);
        } else {
          resolve(results, fields);
        }
      })
    });
  }
}