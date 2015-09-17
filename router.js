var profile = require ('./profile.js')

function home(request, response){
  if (request.url === "/") {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Header \n")
    response.write("Search \n")
    response.end("Footer \n")
  }
}

function user(request, response){
  var userName = request.url.replace("/", "")
  if (userName.length > 0) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Header \n")
    response.write(userName +  "\n")
    var userProfile = new profile(userName)

    setTimeout(function () {
      console.log(JSON.parse(userProfile))
    }, 5000);

    // console.log(userProfile)
    // userProfile.on('end', function(profileJSON)
    // {
    //   var values = {
    //     avatarUrl: profileJSON.gravatarUrl,
    //     username: profileJSON.profile_name,
    //     badges: profileJSON.badges.length,
    //     javascriptPoints: profileJSON.points.JavaScript
    //   }
    //   response.write
      // response.end("Footer \n")  
    // })

    // userProfile.on('error', function(error){
    //   response.end("Footer \n")
    // })
  }
}

module.exports.home = home
module.exports.user = user
