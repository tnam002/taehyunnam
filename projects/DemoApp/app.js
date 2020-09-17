var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello from home page');
});

app.get('/cat', function(req, res){
    res.send('Bark bark');
});

app.get('/dog', function(req, res){
    res.send('Meow meow');
});

app.listen(3000, function(){ console.log('Server started') });