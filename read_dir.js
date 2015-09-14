//note : this is more complex than the provided solution - but is much clearer to
// me in terms of exactly what is going on
// Discuss at node-meetup Tuesday 15th

var fs = require('fs')
var p = require('path')

function listDir(inFile, fileType, callback) {
  outArray = []
  fs.readdir(inFile, function(err, fileList) {
    fileList.forEach(function (file) {
      thisExt = p.extname(file)
      if (thisExt.slice(1, thisExt.length) == fileType) {
        outArray.push(file)
      }
    });
    callback(outArray)
  })
}

function onCompletion (inArray) {
  inArray.forEach(function (entry){
    console.log(entry)
  })
}

listDir(process.argv[2], process.argv[3], onCompletion)

//alternatively: 
  // var fs = require('fs')
  // var path = require('path')
  
  // fs.readdir(process.argv[2], function (err, list) {
  //   list.forEach(function (file) {
  //     if (path.extname(file) === '.' + process.argv[3])
  //       console.log(file)
  //   })
  // })


