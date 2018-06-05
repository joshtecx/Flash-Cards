$(document).ready(function() {
  $('#play-deck').on('click', function(event) {
    event.preventDefault();
    
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

  });
});
