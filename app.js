var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();




app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req,res){
    res.send(fs.readFileSync('./views/index.html', 'utf8'));
});

app.get('/thank_you', function(req,res){
    res.send(fs.readFileSync('./views/thank_you.html'));
});

app.post('/contact.php', function(req,res) {
    res.send(fs.readFileSync('./public/contact.php'));
});



app.listen(process.env.PORT || 3000, function() {
    console.log("LISTENING!")

});



