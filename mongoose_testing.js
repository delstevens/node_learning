var http = require('http')
var mongoose = require('mongoose');
var db = mongoose.connection;

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


db.on('error', console.error);
db.once('open', function() {


  // Create your schemas and models here.
});

mongoose.connect('mongodb://localhost/Music');

var first = new Music({
  title: 'Ziggy Stardust and the Spiders From Mars', 
  artist: 'David Bowie',
  link:   'http://somenetaddress.com/track_this',
  album:  'Aladdin Sane', 
  year:   '1977',
  genre:  'Odd'
});

first.save(function(err, thisTrack) {
  if (err) return console.error(err);
  console.dir(thisTrack.title)
})


var query = Music.findOne({ 'artist': 'David Bowie' });
query.select('id album')
query.exec(function (err, data) {
  if (err) return console.error(err)
  console.log('%s is on the %s album.', data.id, data.album)
})

// .on('end', function() {
//   console.log ("got here")
//   mongoose.disconnect()
// })






