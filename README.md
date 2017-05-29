# Bookflex
>본 사이트는 www.bookflex.com 의 github 사이트 입니다. 

## 프로젝트 목적
 - 최신 책의 정보 및 원하는 책의 정보를  쉽게 접근하게 한다. 

## Getting Started 
``` 
git clone https://github.com/bookflex/bookflex/
```

### client 실행하기 
웹페이지는 server에서 구동하기 위해 build를 실행시키는 명령어. client를 option 명령어와 같이 별도 실행할 수 있다.
```
cd ./bookflex/bookflex-client 
npm run build 
(option) nodemon index.js --exec ./node_modules/.bin/babel-node  
```
 
### server 실행하기
node express를 실행하는 명령어.
```
cd ./bookflex/bookflex-server
npm start
```

### crawling 실행하기
해당 명령을 수행하기 위해서는 DB가 구성되어 있어야 한다.
```
cd ./bookflex/bookflex-crawling/postlit
./crawling.sh
```
 

## Features
- 베스트셀러 정보 : 최신 베스트셀러 리스트와 랭킹을 볼수 있는 화면
- 최신 책 리뷰 정보 : 최신 책의 리뷰를 간략히 볼수 있는 화면
- 책 검색 : 검색어를 입력하고 실행하면 해당검색어의 결과가 나타나는 화면

## skill stack
- 프론트엔드 : javascript(react, redux, fetch-jsonp)
- 백엔드 : Node.js(express)
- DB : MySQL

## Authors
- Joy - initial worker - [github profile]()
- woosikoosi - initial worker - [github profile]()
- gyum - initial worker - [github profile]()

## Licensing
This project is licensed under Unlicense license. This license does not require
you to take the license with you to your project.
