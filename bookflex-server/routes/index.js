import express from 'express';
import getPostsByPostId from '../model'

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/books', (req, res, next) => {
  console.log(req);
});

router.get('/posts', (req, res, next) => {
  getPostsById()
    .then(function (rows) {
      res.send(rows);
    })
    .catch(function (errors) {
      res.send(errors);
    })
});


export default router;