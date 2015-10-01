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
    case "/id"
        
        break;

    default:
        router.user(request.url, response)
  }
  console.log(request.url)
}).listen(3000);





