var mongoose = require('mongoose');

for (var i=0; i<mongoose.connections.length; i++){
  mongoose.connections[i].close();
}