var fs = require("fs")
var http = require("http")

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  fs.createReadStream(process.argv[3]).pipe(response)
}).listen(process.argv[2]);


