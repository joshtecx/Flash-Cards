$(document).ready(function() {
  $('#play-deck').on('click', function(event) {
    event.preventDefault();
<<<<<<< 7969e762f349bef0e54e0ed1afe721064515849f
    var newDeck = $("play-deck");
    console.log(newDeck);
    $.ajax("/api/cards/:deck_name", {
        type: "GET",
        data: newDeck
    }).then(function(){
        console.log(newDeck);
        window.location.replace('/play');
        console.log(newDeck);
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
