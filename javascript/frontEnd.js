$(document).ready(function () {

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
});



