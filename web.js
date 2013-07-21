var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
	var fs = require('fs');
	fs.writeFile('index.html', 'Hello Node', function (err) {
  	if (err) throw err;
  		console.log('It\'s saved!');
});
  //response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
