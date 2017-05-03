Web Scraping (크롤링)은 인터넷에 있는 정보를 수집하는 작업을 일컫는다. 

먼저 다음 npm 을 설치하라 (cheerio, express, request)

npm install cheerio --save
npm install express --save
npm install request --save

#### Request
```javascript
request(url, function(error, response, body) {
  ...
})
```
다운로드 받고 싶은 내용을 포함하고 있는 URL을 request 함수를 통해 전달을 하고, 전달이 완료가 되면, error, response, html 변수를 가지고 있는 콜백 함수가 불린다. 데이타 전달에 문제가 없다면, 다음으로 데이타를 Cheerio에 전달을 한다. 

#### Cheerio 
Cheerio는 전달 받은 웹 데이타를 JQuery와 동일한 문법을 이용하여 사용할 수 있다. 

```javascript
var $ = cheerio.load(body)
```
다음은 JQuery 문법을 사용하여 원하는 element를 지정하면 된다. 

## Data Mining
우리의 관심 분야는 web scrape 기술을 사용하여 여러 웹 페이지에 걸쳐서 데이타를 수집하는 작업이며, 이러한 작업을 Data Mining이라고 부른다. 하지만, 위의 request 코드에서 보면 알 수 있듯이, 여러개의 url을 거쳐 정보를 수집할 경우에는 각 url에 request를 불러줘야 하며, 그 에 따른 callback 함수도 계속해서 불려지며 결국 callback hell에 빠지게 되는 경우가 많다. 

이러한 문제점을 해결하기 위해서는 ES6에서 제공하는 **promise**를 사용하는 것이 적합해보인다. 혹은, 결국은 정리된 JSON 데이타를 사용하는 것이 목적이기 때문에, 크롤링 작업에서는 동기적으로 ``fs.appendFileSync``를 사용하는 것도 좋겠다. 하지만, 이것도 url이 많아지면 불편하므로 promise를 추천한다.