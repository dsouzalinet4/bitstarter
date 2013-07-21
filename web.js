var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
	var fs = require('fs');)
	fs.readFile('index.html', function (err, data) {
  		if (err) throw err;
  		var buff = new Buffer(data);
		response.send(buff.toString());
		
	});
  	if (err) throw err;
  		console.log('It\'s saved!');
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
