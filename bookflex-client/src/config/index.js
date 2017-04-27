/**
 * Created by Joy on 2017. 4. 26..
 */
const env = process.env.NODE_ENV || 'development';
const config = require(`./${env}`).default;

export default config;