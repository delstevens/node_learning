var fs = require("fs")
var http = require("http")

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  var outString = ""
  fs.createReadStream(process.argv[3], function(returnData){
    console.log(String(request))
  }).on('data', function(content){
    outString += String(content)
  }).on('end', function(content){
    response.write(outString)
    response.end();
  })
}).listen(process.argv[2]);