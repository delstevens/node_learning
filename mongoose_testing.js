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

function jsonSave(jsonObject) {
  var thisJson = {'artist': jsonObject.artist, 'title': jsonObject.title}
  var returnedData = findJsonObject(thisJson)
  if ((returnedData === null) || (returnedData === undefined)) {
    var first = new Music(jsonObject)
    first.save(function(err, thisTrack) {
      if (err) {
        return console.error(err); 
      } else {
        console.log("Record Saved: " + thisTrack.title)
      }
    }).then('done', function () {
      console.log('this says all done')
      mongoose.disconnect()
    })
  } else {
    console.log(returnedData)
  }

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
        callback(outString)
      } else {
        outString = null
        callback(outString)
      }
    }
  })
}


var jsonQuery = {'genre': 'Crooners'}
findJsonObject(jsonQuery, function(data){
  console.log(data)
  mongoose.disconnect()
})



var newJson = {'title': 'Something Stupid', 
   'artist': 'Frank and Nancy Sinatra',
   'link':   'http://somenetaddress.com/track_classic',
   'album':  'The Best of Sinatra', 
   'year':   '1965',
   'genre':  'Crooners'
}

//jsonSave(newJson)

//findJsonObject(newJson)

// .pipe(function (data, enc, callback) {
//   this.push(data)
//   callBack()
// }).pipe(console.log)


