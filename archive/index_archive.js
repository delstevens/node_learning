var trackRoutes = require('./trackRoutes.js')
var http = require("http");

http.createServer(function(request, response) {
  //TODO: add max length of url.request to prevent injection

  var getURL = request.url
  var getJSON = {}

  if (getURL.indexOf("?") >= 0) {
    var splitInt = getURL.indexOf("?")
    getJSON= JSON.parse(getURL.substring(splitInt+1, ((getURL.length))))
    getURL = getURL.substring(0,splitInt)
  } 
  if(request.method == "GET") {
    switch(getURL) {
    case "/":
        var gotData = trackRoutes.findTracksWhere(getJSON, function(data){
          response.write(data)
          response.end();
        })
        break;
    case "/find":
        var gotData = trackRoutes.findTracksWhere(getJSON, function(data){
          response.write(data)
          response.end();
        })
        break;
    default:
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("Sorry - there's nothing on this server at address:\n" + request.url );
        response.end();        
    }
  }
  console.log(request.url)
}).listen(3000);


var newJson = {'title': 'High Hopes', 
   'artist': 'Frank Sinatra',
   'link':   'http://somenetaddress.com/track_classic',
   'album':  'The Best of Sinatra', 
   'year':   '1965',
   'genre':  'Crooners'
}
