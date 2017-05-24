const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');


(function getBookURL() {
url = "http://m.book.naver.com/bestsell/list_ajax.nhn";

request(url, function(error, response, body) {
        var bookurl;
        var json = [];
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(body);
            $('.detail_info > h3 > a').each(function(i, element) {
                var link = $(this);
                bookurl = link.attr('href');
                json.push({bookurl});
            })
            if (json.bookurl != bookurl) {
                fs.writeFile('./JSON/bookurl.json', JSON.stringify(json, null, 5)); 
            }     
         }
    })
})();



