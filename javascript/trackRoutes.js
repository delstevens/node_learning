var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var trackSchema = new Schema({
  title:  String,
  artist: String,
  link:   String,
  album:  String, 
  year:   String,
  genre:  String
});

var Music = mongoose.model('Music', trackSchema)
var dataSource = 'mongodb://localhost/Music'

function jsonSave(jsonObject, callback) {
  // console.log(jsonObject)
  mongoose.connect(dataSource);
  //TODO: check for existing record 
  var track = new Music(jsonObject)
  track.save(function(err, first) {
    if (err) {
      console.log(err)
    }
    callback("Record Saved: " + track.title)
    mongoose.disconnect()
  })
}


function findThisJson (jsonObject, callback) {
  var query = Music.find(jsonObject)
  var outString = ""
  query.exec(function (err, data) {
    if (err) {
      return console.error(err)
    } else {
      if (data) {
        outString = JSON.stringify(data)
      } else {
        outString = null
      }
    }
    callback(outString)
  })
}



function findAllWhere (jsonObject, callback) {
  mongoose.connect(dataSource);
  var query = Music.find(jsonObject)
  var outString = ""
  query.exec(function (err, data) {
    if (err) {
      return console.error(err)
    } else {
      if (data) {
        outString = JSON.stringify(data)
      } else {
        outString = null
      }
    }
    callback(outString)
    mongoose.disconnect()
  })
}


module.exports.saveTrack = jsonSave
module.exports.findTracksWhere = findAllWhere
