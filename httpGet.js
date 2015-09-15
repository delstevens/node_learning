var http = require ('http')

var url = process.argv[2]

http.get(url, function(returnData) {
  //console.log(returnData.statusCode)
  returnData.setEncoding('utf8')
  returnData.on('data', function (chunk) {
    console.log(chunk);
  });
}).on('error', function(err) {
  console.log("An error was returned: " + err.message)
});