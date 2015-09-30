var http = require("http");
var username = process.argv[2]

function profile(username) {
  return new Promise(function (fulfill, reject){
    http.get("http://teamtreehouse.com/" + username + ".json").done(function (res){
      try {
        fulfill(JSON.parse(res))
      } catch (exception) {
        reject (exception)
      }
    }, reject );
  });
}

