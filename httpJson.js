var http = require('http');
var parser = require('url')

http.createServer(function (request, response) {
  response.setHeader('Content-Type', 'application/json');
  if(request.method === "GET") {
    url = parser.parse(request.url, true)
    if (url.pathname === "/api/parsetime") {
      var output = url.search.split("=")[1].split("T")[1].split(".")[0].split(":")
      response.end(JSON.stringify({ hour: parseInt(output[0]) + 12, minute: parseInt(output[1]), second: parseInt(output[2])}))
    } else if (url.pathname === "/api/unixtime") {
      var outUnix = (String(url.search.split("=")[1]))
      outUnix = Date.parse(outUnix)
      response.end(JSON.stringify({ unixtime: outUnix}))
    } else {
      response.writeHead(500)
      response.end()
    }
  }
}).listen(process.argv[2]);
console.log('Server running at localhost:'+process.argv[2]);

