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
  mongoose.connect(dataSource);
  //TODO: add forceSave boolean 
  var jsonQuery = {'artist' : newJson.artist, 'title': newJson.title}
  findJsonObject(jsonQuery, function(data){
    if (data) {
      callback(data)
    } else {
      var track = new Music(jsonObject)
      track.save(function(err, first) {
        callback("Record Saved: " + track.title)
        mongoose.disconnect()
      })
    }
  })
}

function findJsonObject (jsonObject, callback) {
  mongoose.connect(dataSource);
  var query = Music.findOne(jsonObject);
  var outString
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


function findAll (jsonObject, callback) {
  mongoose.connect(dataSource);
  var query = Music.find({})
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





module.exports.findAll = findAll
module.exports.saveTrack = jsonSave
module.exports.findTrack = findJsonObject
module.exports.findTracksWhere = findAllWhere
