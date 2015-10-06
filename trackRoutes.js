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
mongoose.connect('mongodb://localhost/Music');

function jsonSave(jsonObject, callback) {
  //todo add forceSave boolean 
  var jsonQuery = {'artist' : newJson.artist, 'title': newJson.title}
  findJsonObject(jsonQuery, function(data){
    if (data) {
      callback(data)
    } else {
      var track = new Music(jsonObject)
      track.save(function(err, first) {
        callback("Record Saved: " + track.title)
      })
    }
  })
}

function findJsonObject (jsonObject, callback) {
  var query = Music.findOne(jsonObject);
  var outString
  query.exec(function (err, data) {
    if (err) {
      return console.error(err)
    } else {
      if (data) {
        outString = data.title + ' by ' + data.artist + ' is present in the database on the album: ' + data.album
      } else {
        outString = null
      }
    }
    callback(outString)
  })
}


var newJson = {'title': 'High Hopes', 
   'artist': 'Frank Sinatra',
   'link':   'http://somenetaddress.com/track_classic',
   'album':  'The Best of Sinatra', 
   'year':   '1965',
   'genre':  'Crooners'
}

function addSpaces(inString){
  var maxLength = 31
  var spaceNum = maxLength - inString.length
  var outString = inString
  for (var i = 0; i< spaceNum; i++) {
    outString += " "
  }
  return outString
}

function findAll (jsonObject, callback) {
  var query = Music.find({})
  var outString = ""
  query.exec(function (err, data) {
    if (err) {
      return console.error(err)
    } else {
      if (data) {
        for (var i = 0; i < data.length; i++) {
          outString += addSpaces(data[i].artist) + ": "
          outString += addSpaces(data[i].title) + ": "
          outString += data[i].album
          outString += "\n"
        }
      } else {
        outString = null
      }
    }
    callback(outString)
    mongoose.disconnect()
  })
}

function getAllTracks() {
  findAll({}, function(data){
    var myVar = data
    console.log( myVar)
  })
}

getAllTracks()