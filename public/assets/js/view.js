$(document).ready(function() {
  $('#play-deck').on('click', function(event) {
    event.preventDefault();
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

  });
});
