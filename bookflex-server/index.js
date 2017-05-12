/**
 * Created by Joy on 2017. 4. 16..
 */
import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';

import model from './model';
import router from './routes';

const staticPath = path.resolve(__dirname, '../bookflex-client/build/');

const app = express();

model.connection.connect();

app.set('view engine', 'html');
app.use(express.static(staticPath));
app.use(cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '5mb' }));
app.use('/', router);

app.listen(3001, () => {
  console.log('Bookflex-server is listening on port 3001');
})