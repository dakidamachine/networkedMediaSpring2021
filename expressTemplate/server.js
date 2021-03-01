var express = require('express')
var bodyParser = require('body-parser');
var app = express();

var urlencodedBodyParser = bodyParser.urlencoded({extended: true});
app.use(urlencodedBodyParser);

app.use (express.static('public'));

app.set('view engine', 'ejs');

var submittedData = [];

app.get('/', function(req, res){
	res.send('Hello World');
});

app.post('/formdata', function(req,res){
	//console.log(req.query.data);
	console.log(req.body.data);

	//REGULAR SYNTAX
	// var dataToSave = new Object();
	// dataToSave.text = req.body.data;
	// dataToSave.color = req.body.color;

	var dataToSave = {
		text: req.body.data,
		color:req.body.color
	}

	submittedData.push(dataToSave);

	console.log(submittedData);

	var dataWrapper = {data: submittedData};
	// var output = "<html><body>"

	// output += "<h1>YOU FOOL... These are all the secrets I've heard.</h1>";

	// for (var i = 0; i < submittedData.length; i++) {
	// 	output += "<div>" + submittedData[i].text + "</div>";
		
	// }
	// output += "</body></html>";

	// res.send(output);

	//res.send("Got your data! You submitted: " + req.body.data + " " + req.body.color );

	res.render("outputtemplate.ejs", dataWrapper);

})

app.listen(80, function () {
	console.log('Example app listening on port: 80!');
});