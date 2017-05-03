import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/books', (req, res, next) => {
  console.log(req);
});

export default router;