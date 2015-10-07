function addSong(){
    $( ".add-song-button" ).on('click', function( event ) {
      event.preventDefault();
      var video_id = $(this).data("id");
      var title = $("#"+video_id+" .song-title").html();
      var artist = 'YouTube';
      var song_data = {title: title, artist: artist, video_id: video_id}
      $.ajax({
        url: "/track/add?query=",
        data: song_data,
        type: "POST",
        success: function(data) {
        },
        error: function(data) {
          alert('Sorry - it was not possible to add this song. Please try again');
        }
      });
      return false;
    });
  };