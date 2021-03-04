var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

var urlencodedBodyParser = bodyParser.urlencoded({extended:true});

app.use (express.static('public'));
app.set('view engine', 'ejs');

var submittedData = [];

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/public/index.html'))
});

app.post('/formdata', function(req,res){
    console.log(req.body.data);
})


//Port
app.listen(80,function (){
    console.log('Example app listening on port 80')
})