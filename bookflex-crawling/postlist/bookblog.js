const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const URL = require('./JSON/bookurl.json');

function _promiseAll(){

    return URL.map((url) => {
        let newUrl = 'http://m.book.naver.com' + url.bookurl;
        return new Promise((resolve, reject) => {
            request(newUrl, function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    var bloglist = [];
                    let $ = cheerio.load(body);
                    let blog = $('#list').find('a');
                    blog.each(function() {
                        bloglist.push($(this).attr('href'));
                    })
                    resolve(
                        bloglist
                    );
                }else{
                    reject(error)
                }
            })
        })
    })
}


Promise.all( _promiseAll()).then((results)=>{
    fs.appendFileSync('./JSON/bookblog.json', JSON.stringify(results, null, 5));
    });

