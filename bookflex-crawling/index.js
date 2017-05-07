const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3001; 

const staticPath = path.resolve(__dirname, '../bookflex-client/build/');

app.set('view engine', 'html');
app.use(express.static(staticPath));

app.listen(port, function(){
    console.log('Magic happens on port 3306');
})


