//모듈 추출
var express = require('express');
var path = require('path');

//서버생성
var app = express();

var readline = require('readline-sync');
var port = readline.question('Put the port number you wanna use!!!');

app. use(express.static(path.join(__dirname, 'oz.20190308')));

app.listen(port, function(){
	console.log("server running at http://127.0.0.1:"+`${port}`);
});
