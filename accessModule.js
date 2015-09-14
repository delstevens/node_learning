var dirList = require ('./readDirModule.js')
dirList(process.argv[2], process.argv[3], writeOut)

function writeOut(err,dataArray) {
  if (err) {
    console.log(err)
  } else {
    dataArray.forEach (function(entry){
      console.log(entry)
    })
  }
}

