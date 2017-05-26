#!/bin/bash

node ./bookurl.js >> ./crawlingLog
node ./bookinfo.js >> ./crawlingLog
node ../model/index.js >> ./crawlingLog

#* * * * 1 /Users/woosikoosi/Desktop/Programming/Codesquad_Blue/bookflex/bookflex-crawling/postlist/crawling.sh
#crontab-e
