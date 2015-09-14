var fs = require('fs')
var myNumber = undefined

function readFile(callback) {
  fs.readFile(process.argv[2], function(err, fileContents) {
    tempArray = String(fileContents).split('\n')
    myNumber = tempArray.length-1
    callback()
  })
}

function logMyNumber() {
  console.log(myNumber)
}

readFile(logMyNumber)