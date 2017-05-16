/**
 * Created by Joy on 2017. 4. 16..
 */
import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
// gyums code start // 
import passport from 'passport';
import session from 'express-session';
const LocalStrategy = require('passport-local').Strategy;
// gyums code end // 
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
// gyums code start // 
app.use(session({
	secret: 'keyboard',
	resave: false,
	saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
// gyums code end // 
app.use('/', router);

app.listen(3001, () => {
  console.log('Bookflex-server is listening on port 3001');
})