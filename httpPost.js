var http = require('http');
var qs = require('querystring');

http.createServer(function (request, response) {
  if(request.method === "POST") {
    if (request.url === "/") {
      var requestBody = '';
      request.on('data', function(data) {
        requestBody += data;
      });
      request.on('end', function() {
        console.log(requestBody) // string conversion logic
        response.end(requestBody.toUpperCase())
      });
    }
  } else {
    response.end("You can only POST data here")
  }
}).listen(process.argv[2]);
console.log('Server running at localhost:'+process.argv[2]);