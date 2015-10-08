var trackRoutes = require('./javascript/trackRoutes.js')
var http = require('http');
var fs = require('fs')

http.createServer(function(request, response) {
  //TODO: add max length of url.request to prevent injection
  console.log(request.url + "\n" + request.method)

  if(request.method === "POST") {
    if (request.url === "/music/import") {
      var requestBody = '';
      request.on('data', function(data) {
        requestBody += data;
      });
      request.on('end', function() {
        trackRoutes.saveTrack(JSON.parse(requestBody), function(data){
          response.end(data)
        })
      });
    }
  } else if(request.method == "GET") {
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
    } else if (request.url.indexOf('.css') != -1) { 
      fs.readFile("." + request.url, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          response.writeHead(200, {'Content-Type': 'text/css'});
          response.write(data);
          response.end();
        }
      });
    } else if (request.url.indexOf('.js') != -1) { 
      fs.readFile("." + request.url, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          response.writeHead(200, {'Content-Type': 'application/javascript'});
          response.write(data);
          response.end();
        }
      });
    } else {
      switch(request.url) {
      case "/":
          fs.readFile('./html/default.html', function (err, html) {
            if (err) {
                throw err; 
            } else {      
              response.writeHead(200, {"Content-Type": "text/html"});  
              response.write(html);  
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


