var trackRoutes = require('./javascript/trackRoutes.js')
var http = require('http');
var fs = require('fs')

http.createServer(function(request, response) {
  //TODO: add max length of url.request to prevent injection
  console.log(request.url + "\n" + request.method)

  if (request.url === "/music/import") {
    if(request.method === "POST") {
      var getJSON = {'artist':'Jerry Lee Lewis', 'title':'Great Balls of Fire'}
      console.log(getJSON)
      var gotData = trackRoutes.saveTrack(getJSON, function(saveAnswer){
        response.write(saveAnswer)
        response.end();
      }) 
    }
  }

  if(request.method == "GET") {

    if(request.url.indexOf('.jpg') != -1){ 
      fs.readFile("." + request.url, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          response.writeHead(200, {'Content-Type': 'image/jpg'});
          response.write(data);
          response.end();
        }
      });
    } else {

      switch(request.url) {
      case "/":
          fs.readFile('./default.html', function (err, html) {
            if (err) {
                throw err; 
            } else {      
              response.writeHead(200, {"Content-Type": "text/html"});  
              response.write(html);  
              response.end(); 
            }
          })
          break;
      case "/css/djam.css":
          fs.readFile('./css/djam.css', function (err, css) {
            if (err) {
                throw err; 
            } else {      
              response.writeHead(200, {"Content-Type": "text/css"});  
              response.write(css);  
              response.end(); 
            }
          })
          break;
      case "/find":
          var getJSON = {}
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
  }
}).listen(3000);


