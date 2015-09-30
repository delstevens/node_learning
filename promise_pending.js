var profile = require ('./profile.js')



function getProfile(uName){
  var thisPromise = new Promise(function (fulfill, reject){
    http.get("http://teamtreehouse.com/" + username + ".json", function (err, res){
      if (err) reject(err);
      else fulfill(console.log(res));
    });
  });
}

getProfile("delstevens")
