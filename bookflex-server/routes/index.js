import express from 'express';
import passport from 'passport';

import model from '../model'

require('../passport/index')();

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
  const {bookId, starPoint} = req.body;
  model.insertEachBookStarPoint(bookId, starPoint).then(() => res.send(true));
});

router.post('/register/user', (req, res, next) => {
  const {email, password} = req.body;
  model.insertNewUser(email, password).then(() => res.send(true));
});

router
  .get('/login/user', (req, res, next) => {
    console.log("model");
    console.log(req.query);
    const {user, password} = req.query;
    model.getUser(user, password)
      .then(function (rows) {
        res.send(rows);
      })
      .catch(function (errors) {
        res.send(errors);
      })
  })
  .post('/login', function (req, res, next) {
    passport.authenticate('/login', function (err, user, info) {
      if (err) res.status(500).json(err);
      if (!user) {
        return res.status(400).json(info.message);
      }
      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        let info = {
          email: user.email,
          id: user.id
        }
        console.log(info);
        return res.json(info);
      });

    })(req, res, next);
  });

router.get('/logout/user', (req, res) => {
  req.session.destroy();
  res.clearCookie('bookflex');
  res.redirect('/');
});

export default router;
