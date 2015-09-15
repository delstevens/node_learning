var portNo = process.argv[2]

var net = require('net');

var server = net.createServer(function(connection) { 
  connection.end(getDateCode() + "\n");
});

server.listen(portNo, function() { 
  console.log('server bound');
});


function getDateCode() {
  var dateArray = []
  var outString = ""
  var myDate = new Date()

  dateArray.push(String(myDate.getFullYear()))
  dateArray.push(String((myDate.getMonth()+1)))
  dateArray.push(String(myDate.getDate()))
  dateArray.push(String(myDate.getHours()))
  dateArray.push(String(myDate.getMinutes()))

  for (var i=0; i<5; i++) {
    if (dateArray[i].length == 1) 
      dateArray[i] = "0" + dateArray[i]

    if (i < 2) {
      outString += dateArray[i] + '-'
    } else if (i == 3) {
      outString += " " + dateArray[i] + ":"
    } else {
      outString += dateArray[i]
    }
  }
  return outString
}
