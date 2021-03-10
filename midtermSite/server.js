<<<<<<< HEAD
var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/Doraemon.html'));
});

app.listen(80, function () {
  console.log('Example app listening on port 80!')
});
=======
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
>>>>>>> 87aac229a94e4a7aa088a24ae6335421e381c868
