var http = require ('http')

http.get("http://google.co.uk", function(returnData) {
  console.log("Returned status code is: " + returnData.statusCode)
}).on('error', function(e) {
  console.log("An error was returned: " + e.message)
});