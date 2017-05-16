import express from 'express';
import passport from 'passport';

import model from '../model'

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

//recommendation books
router.post('/books', (req, res, next) => {
  const books = req.body;

  books
    .filter(book => book.isbn)
    .forEach(book => model.insertEachBookInfo(book)
      .then(result => console.log('success'))
      .catch(error => console.log('error', error)));
  res.send(true);
});

router.get('/posts', (req, res, next) => {
  model.getPostsByPostId()
    .then(function (rows) {
      res.send(rows);
    })
    .catch(function (errors) {
      res.send(errors);
    })
});

router.post('/books/stars', (req, res, next) => {
  const { bookId, starPoint } = req.body;
  model.insertEachBookStarPoint(bookId, starPoint).then(() => res.send(true));
});

router.post('/register/user', (req, res, next) => {
  const { email, password } = req.body;
  model.insertNewUser(email, password).then(() => res.send(true));
});

router.get('/confirm/user', (req, res, next) => {
  console.log("model");
  console.log(req.query);
  const { user, password } = req.query;
  model.getUser(user, password)
    .then(function (rows) {
      if(rows) {
        res.redirect('/');
      } else {
        res.render('login');
      }
      res.send(rows);
    })
    .catch(function (errors) {
      res.send(errors);
    })
});

export default router;
