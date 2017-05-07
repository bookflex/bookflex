const express = require('express')
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const app = express();
const URL = require('./JSON/bookurl.json');

function _promiseAll(){

    return URL.map((url) => {
        let newUrl = 'http://m.book.naver.com' + url.bookurl;
        return new Promise((resolve, reject) => {
            request(newUrl, function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    let $ = cheerio.load(body);
                    let blog = $('.ct').attr('href');
                    console.log(blog);
                    // var bloglist = [];
                    // for (let i = 0; i < blog.length; i++) {
                    //     bloglist.push(blog(i).attr('href'));
                    // }
                    resolve(
                        blog
                    );
                }else{
                    reject(error)
                }
            })
        })
    })
}

app.get('/blogs', function(req, res) {
    Promise.all( _promiseAll()).then((results)=>{
        console.log(results);
        //fs.appendFileSync('./JSON/bookinfo.json', JSON.stringify(results, null, 5));
    });
});

app.listen('3306')

module.exports = _promiseAll();