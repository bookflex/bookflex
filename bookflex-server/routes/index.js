import express from 'express';
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
      console.log("rows: ", rows)
    })
    .catch(function (errors) {
      res.send(errors);
    })
});

export default router;
