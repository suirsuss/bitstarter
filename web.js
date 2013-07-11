var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var content = fs.readFileSync('index.html','utf8');
  var buf = new Buffer(fs.readFileSync('index.html','utf-8'));
 response.send(buf.toString());
})
;

//console.log(fil);
//implement buffer 

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
