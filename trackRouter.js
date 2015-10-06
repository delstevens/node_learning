var router = require ("./trackRoutes.js")
var http = require("http");

http.createServer(function(request, response) {

  switch(request.url) {
    case "/":
        trackRoutes.home(request.url, response)
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





