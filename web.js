var express = require('express');

var fs = require('filesystem');

var app = express.createServer(express.logger());

var fil=fs.readFileSync('index.html')

app.get('/', function(request, response) {
  response.send(buf.toString(fil));
})
;

//implement buffer 

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
