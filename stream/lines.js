var through = require('through2')
var split = require('split');
var lineCount = 0

var stream = through(function (buffer, encoding, next) {
  lineCount++
  if (lineCount % 2 == 0)
    this.push(buffer.toString().toUpperCase() + '\n')
  else
    this.push(buffer.toString().toLowerCase() + '\n')
  next()
})

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout)
