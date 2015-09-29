fs = require('fs')
through = require('through2')

process.stdin.pipe(through(function (chunk, enc, callback) {
  this.push(write(chunk))
  callback()
 }))
.pipe(process.stdout)


function write (buffer) {
  return ('I got some data: ' + buffer + '\n');
}