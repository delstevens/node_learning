
function getFile(inFile) {
  var fs = require("fs")
  var outString = ""
  fs.createReadStream(inFile, function(returnData){
    console.log("here")
  }).on('data', function(content){
    outString += String(content)
  }).on('end', function(){
    console.log (outString.length)

  })
}

var tempVar = getFile('timeServer.js')
console.log(tempVar)