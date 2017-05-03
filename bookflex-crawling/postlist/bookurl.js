const express = require('express')
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const app = express();

app.get('/scrape', function(req, res) {
url = "http://m.book.naver.com/bestsell/list_ajax.nhn";

request(url, function(error, response, body) {
        var json = [];
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(body);
            $('.detail_info > h3 > a').each(function(i, element) {
                var link = $(this);
                var bookurl = link.attr('href');
                json.push({bookurl});
            })
            fs.appendFileSync('./JSON/bookurl.json', JSON.stringify(json, null, 5));
         }
    })
    res.send("<h1>asdfasdf</h1>");
})
app.listen('3306')

console.log('Magic happens on port 8081');


exports = module.exports = app;

