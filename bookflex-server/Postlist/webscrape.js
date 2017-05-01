/**
 * Created by Woosikoosi on 2017. 4. 30.
 */

const express = require('express');
const app = express();
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

//cannot find module 'html'
app.use(express.static('public'))
app.set('view engine', 'html')

app.get('/post', function(req, res) {
    url = "http://m.book.naver.com/bestsell/list_ajax.nhn";

    request(url, function(error, response, html) {
        if (!error) {
            const $ = cheerio.load(html);
            var bookurl;
            var json = [];

            var link = $('.detail_info > h3 > a');

            var bookinfo = link.map(function() {
                bookurl = $(this).attr('href');

                const temp = {bookurl}
                json.push(temp);

                fs.writeFile('bookURL.json', JSON.stringify(json, null, 4), function(err){
                    console.log('success');
                })
            })
        }
    })
    res.send('Aint nobody got time for that')
})
console.log('Catch me outside how bou dat');
