var http = require("http");
var counter = 0
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  var thisTimer = setInterval(function () 
  {
    counter ++
    if (counter < 100) {
      str = String(getTime()) + "\n"
      response.write(str)
    } else {
      thisTimer.clearInterval
      response.end("done")
    }
  }, 1000);
  //response.end();
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

