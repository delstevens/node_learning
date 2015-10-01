var http = require("http");

function home(request, response){
  if (request.url === "/") {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Header \n")
    response.write("Search \n")
    response.end("Footer \n")
  }
}

function user(uName, response){
  if (response == 404) {
    return "404: Not Found"
  } else {
    if ((uName.length > 3) && (uName.length < 100)) {
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write("Header \n")
      response.write(uName +  "\n")
      response.write(profile(uName))
    }
  }
}


function profile(username) {
  var retVal = ""
  var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response) {
    var body = "";

    if (response.statusCode == 200) {
      response.on('data', function (chunk) {
          body += chunk;
      });

      response.on('end', function () {
        outString = JSON.parse(body)
        retVal += (outString.name+ "\n")
        retVal += (outString.badges.length + "\n")
        retVal += (outString.gravatar_url+ "\n")
        retVal += (outString.points.JavaScript+ "\n")
        console.log(retVal)
        return retVal
      });

      response.on('error', function(error){
        return(error)
      })

    } else {
      return response.statusCode
    }
  });
}


console.log(profile("delstevens"))

module.exports.home = home
module.exports.user = user
