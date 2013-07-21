var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
	var fs = require('fs');
	fs.readFile('index.html', function (err, data) {
  		var buff = new Buffer(data);
		response.send(buff.toString());
		
	});
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
