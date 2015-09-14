var http = require ('http')
var url = process.argv[2]
var outString = ""

http.get(url, function(returnData) {
  returnData.setEncoding('utf8')
  returnData.on('data', function (chunk) {
    outString += chunk
  });
  returnData.on('end', function() {
    console.log(outString.length)
    console.log(outString)
  });
}).on('error', function(err) {
  console.log("An error was returned: " + err.message)
});