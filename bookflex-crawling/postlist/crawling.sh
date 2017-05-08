#! /bin/bash

node ./bookurl.js >> ./crawlingLog
node ./bookinfo.js >> ./crawlingLog
node ./bookblog.js >> ./crawlingLog
# node ./model/index.js >> ./crawlingLog

