module.exports = function(dirPath, fileType, callback) {

  var fs = require('fs')
  var p = require('path')
  var outArray = []

  fs.readdir(dirPath, function (err, list) {
    if (err) {
      return callback(err)
    }
    list.forEach(function (file) {
      if (p.extname(file) === '.' + fileType) {
        outArray.push(file)
      }
    })
    callback(null, outArray)
  })


};

