$(document).ready(function() {
  $('#play-deck').on('click', function(event) {
    event.preventDefault();
<<<<<<< HEAD
    var newDeck = $("#deck").val();
=======
<<<<<<< 7969e762f349bef0e54e0ed1afe721064515849f
    var newDeck = $("play-deck");
>>>>>>> e2c88c5b797d2b101e2aa63e8c734f36d7a0a38d
    console.log(newDeck);
    $.ajax("/api/cards/:deck_name", {
        type: "GET",
        data: newDeck
    }).then(function(){
        window.location.replace('/play');
        JSON.stringify(newDeck);
    });

=======

    var newDeck = $('#play-deck');

    $.ajax('/api/cards/:deck_name', {
      type: 'GET',
      data: newDeck,
      dataType: 'json',
      success: function(res) {
        console.log('this is' + res);
      }
    }).then(function() {
      window.location.replace('/play');
    });
>>>>>>> read.me
  });
});
