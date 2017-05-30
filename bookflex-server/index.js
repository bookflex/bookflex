/**
 * Created by Joy on 2017. 4. 16..
 */
import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import flash from 'connect-flash';
import session from 'express-session';
import model from './model';
import router from './routes';

const staticPath = path.resolve(__dirname, '../bookflex-client/build/');

const app = express();

model.connection.connect();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.json({data: [1,2,3,4]});
});
app.set('view engine', 'html');
app.use(express.static(staticPath));
app.use(cookieParser());
app.use(cors({ origin:'http://localhost:3000', optionsSuccessStatus: 200 }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(require('express-session')({
  key: 'bookflex',
  secret: 'bookflex secret',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use('/', router);

app.listen(3001, () => {
  console.log('Bookflex-server is listening on port 3001');
});