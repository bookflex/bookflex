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
                    let imgurl = $('.flexible2').attr('src');
                    let title = $('.h').children().first().text();
                    let author = $('.info_lst > li > a').eq(0).text();
                    let releaseDate = $('.info_lst').children().last().text();
                    let content = $('#bookIntroSimple').text();
                    resolve({
                        imgurl,
                        title,
                        author,
                        releaseDate,
                        content
                    });
            
                }else{
                    reject(error)
                }

            })
        })
    });
}

app.get('/books', function(req, res) {
    Promise.all( _promiseAll()).then((results)=>{
        console.log(results);
        fs.appendFileSync('./JSON/bookinfo.json', JSON.stringify(results, null, 5));
    });
});

//콜백헬 
// var json = [];

// app.get('/books', function(req, res) {
//     for (let i=0; i<URL.length; i++) {
//         var url = 'http://m.book.naver.com' + URL[i].bookurl;

//         request(url, function(error, response, body) {
//             console.log('check');
//             if (!error && response.statusCode == 200) {
//                 var $ = cheerio.load(body);
//                 var imgurl = $('.flexible2').attr('src');
//                 json.push({imgurl});
//                 //console.log('check')
//                 fs.appendFile('./JSON/bookinfo.json', JSON.stringify(json, null, 5), function(err) {
//                     if (err) {
//                         console.log(err)
//                     }
//                     //console.log('Saved!')
//                 });
//             }  
//         })
      
//     }
//     res.send(json);
// })


app.listen('3306')

console.log('Magic happens on port 3306');


exports = module.exports = app;