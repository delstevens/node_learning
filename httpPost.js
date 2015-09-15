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


//Given solution
// ────────────────────────────────────────────────────────────────────────────────
//     var http = require('http')
//     var map = require('through2-map')
    
//     var server = http.createServer(function (req, res) {
//       if (req.method != 'POST')
//         return res.end('send me a POST\n')
    
//       req.pipe(map(function (chunk) {
//         return chunk.toString().toUpperCase()
//       })).pipe(res)
//     })
    
//     server.listen(Number(process.argv[2]))

// ────────────────────────────────────────────────────────────────────────────────

