/**
 * Created by Joy on 2017. 4. 24..
 */

const env = process.env.NODE_ENV || 'development';
const config = require(`./${env}`);

module.exports = config;