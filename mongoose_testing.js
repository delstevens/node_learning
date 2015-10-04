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
  var track = new Music(jsonObject)
  console.log(track.title)
  track.save(function(err, first) {
    if (err) {
      console.error(err)
    }
    callback("Record Saved: " + track.title)
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


var jsonQuery = {'genre': 'Crooners'}
findJsonObject(jsonQuery, function(data){
  console.log(data)
  mongoose.disconnect()
})



var newJson = {'title': 'Fly Me to the Moon', 
   'artist': 'Frank Sinatra',
   'link':   'http://somenetaddress.com/track_classic',
   'album':  'The Best of Sinatra', 
   'year':   '1965',
   'genre':  'Crooners'
}


 jsonSave(newJson, function(data){
   console.log(data)
   mongoose.disconnect()
 })


