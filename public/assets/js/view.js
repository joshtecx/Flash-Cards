$(document).ready(function() {
  $('#play-deck').on('click', function(event) {
    event.preventDefault();

    window.location.replace('/play');

    //     var deck_name = $(this).val();
    //     // var playDeck = {
    //     //   //   deck_name: req.body.deck_name,
    //     //   //   question: req.body.question,
    //     //   //   hint: req.body.hint,
    //     //   //   answer: req.body.answer
    //     // };

    //     // console.log(deck_name);

    //     $.ajax('/api/cards/:deck_name', {
    //       type: 'GET',
    //       data: json
    //     }).then(function() {
    //       console.log('this is ' + playDeck);
    //       //
    //     });
  });
});
