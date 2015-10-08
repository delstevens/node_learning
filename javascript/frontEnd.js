$(document).ready(function () {

  var allMusicJSON

  $('#add-music').on('click', function() {
    event.preventDefault();
    var newJson = {
      artist: 'Dean Martin',
      title: 'Volare',
      genre: 'Crooners',
      album: 'Live from the Bar'
    }
    console.log(newJson)
    $.ajax({
      url: "/music/import",
      data: JSON.stringify(newJson),
      type: "POST",
      success: function(data) {
        alert(data)
      },
      error: function(data) {
        alert('Sorry - it was not possible to add this song. Please try again');
      }
    });
    return false;
  });

  $('#new-playlist').on('click', function() {
    $("content").show();
    $('#logo').hide()
    $('#sml-logo').show()
  });

  var allMusic = $.ajax({
    url: "/find",
    type: "GET",
    datatype: "JSON",
    success: function(data) {
      allMusicJSON = JSON.parse(data)
      displayAllMusic()
    }
  })

  function displayAllMusic(){
    var outString = ""
    for (var i = 0; i < allMusicJSON.length; i++){
      outString += "<div class='row'>"
      outString += "<div class=' mp3data artist'>"
      outString += allMusicJSON[i].artist + "</div>"
      outString += "<div class='mp3data title'>"
      outString += allMusicJSON[i].title + "</div>"
      outString += "<div class='mp3data album'>"
      outString += allMusicJSON[i].album + "</div>"
      outString += "<div class='mp3data genre " + allMusicJSON[i].genre + "'>"
      outString += allMusicJSON[i].genre + "</div>"
      outString += "<div class='mp3data year'>"
      outString += allMusicJSON[i].year + "</div>"
      outString += "</div>"
    }
    $("#sml-logo").hide()
    $("content").hide();
    $("content").append(outString)

  }


});



