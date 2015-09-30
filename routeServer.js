var router = require ("./router.js")

var http = require("http");
var counter = 0
http.createServer(function(request, response) {

  switch(request.url) {
    case "/":
        router.home(request.url, response)
        break;
    case "/user":
        console.log("Hit User Route")
        break;
    default:
        router.user(request.url, response)
  }
  console.log(request.url)
}).listen(3000);







function getTime() {

  var dateArray = []
  var outString = ""
  var myDate = new Date()

  dateArray.push(String(myDate.getHours()))
  dateArray.push(String(myDate.getMinutes()))
  dateArray.push(String(myDate.getSeconds()))

  for (var i=0; i<3; i++) {
    if (dateArray[i].length == 1) 
      dateArray[i] = "0" + dateArray[i]

    if (i < 2) {
      outString += dateArray[i] + ':'
    } else {
      outString += dateArray[i]
    }
  }

  return outString
//"2013-07-06 17:42"
}

