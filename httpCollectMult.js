var http = require ('http')
var url = []
var resultArray = ["", "", ""]

for (var i=0; i<3; i++){
  getUrl(process.argv[2+i], i)
}

function getUrl(url, place){
  var outString = ""
  http.get(url, function(returnData) {
    returnData.setEncoding('utf8')
    returnData.on('data', function (chunk) {
      outString += chunk
    });
    returnData.on('end', function() {
      resultArray[place] = outString
      if ((resultArray[0] != "") && (resultArray[1] != "") && (resultArray[2] != "")){
        resultArray.forEach (function (entry){
          console.log(entry)
        })
      }
    });
  }).on('error', function(err) {
    console.log("An error was returned: " + err.message)
  });
}


