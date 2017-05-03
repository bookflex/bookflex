/**
 * Created by Joy on 2017. 4. 16..
 */
const express = require('express');
const path = require('path');
import model from './model';
import router from './routes';

const staticPath = path.resolve(__dirname, '../bookflex-client/build/');

const app = express();

model.connection.connect();

app.set('view engine', 'html');
app.use(express.static(staticPath));
app.use('/', router);

app.listen(3001, () => {
  console.log('Bookflex-server is listening on port 3001');
})