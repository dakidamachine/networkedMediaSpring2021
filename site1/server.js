var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/Doraemon.html', function (req, res) {
  res.send('Hello World!')
});

app.listen(80, function () {
  console.log('Example app listening on port 80!')
});