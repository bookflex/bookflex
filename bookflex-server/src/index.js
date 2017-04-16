/**
 * Created by Joy on 2017. 4. 16..
 */
const express = require('express');
const path = require('path');

const staticPath = path.resolve(__dirname, '../../bookflex-client/build/');

const app = express();

app.set('view engine', 'html');
app.use(express.static(staticPath));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3001, () => {
  console.log('Bookflex-server is listening on port 3000');
})