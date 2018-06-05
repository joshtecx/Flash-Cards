$(document).ready(function() {
  $('#play-deck').on('click', function(event) {
    event.preventDefault();
    var newDeck = $("#deck").val();
    console.log(newDeck);
    $.ajax("/api/cards/:deck_name", {
        type: "GET",
        data: newDeck
    }).then(function(){
        window.location.replace('/play');
        JSON.stringify(newDeck);
    });

  });
});
