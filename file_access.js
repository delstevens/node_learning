var fs = require ('fs')
tempArray = fs.readFileSync(process.argv[2], 'utf8').split('\n')
console.log (tempArray.length -1)
