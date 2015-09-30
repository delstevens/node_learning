var http = require("http");
var Q = require('q');
var EventEmitter = require('events');


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


function oldgetProfile(uName){
  var getProf = Q.denodeify(profile)
  var promise = getProf(uName)
  promise.then(console.log, console.error)
  promise.done(console.log(promise))
}


module.exports.Profile = profile