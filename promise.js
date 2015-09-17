var profile = require ('./profile.js')



function profilePromise(uName){
  var thisPromise = new Promise(function (fulfill, reject){
    profile(uName, function (err, res){
      if (err) reject(err);
      else fulfill(JSON.parse(res));
    });
  });
  console.log(thisPromise)
}

profilePromise("delstevens")
