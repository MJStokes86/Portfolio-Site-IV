var express = require('express');
var fs = require('fs');
var app = express();


app.use(express.static(process.cwd() + '/public'));
app.get('/', function(req,res){
    res.send(fs.readFileSync('./views/index.html', 'utf8'));

});

app.get('/portfolio', function(req,res){
    res.send(fs.readFileSync('./views/portfolio.html', 'utf8'));

});

app.listen(process.env.PORT || 3000, function() {
    console.log("LISTENING!")

});

