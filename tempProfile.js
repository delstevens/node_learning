var http = require('http')

function profile(username) {
  var retVal = ""
  var body = "";
  var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response) {
    console.log(response.statusCode)
  });
}

profile("delstevens")