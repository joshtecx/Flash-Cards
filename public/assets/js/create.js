$(document).ready(function() {
  $('#submit').on('click', function(event) {
    event.preventDefault();

    var newDeck = {
      deck_name: $('#subject')
        .val()
        .trim(),
<<<<<<< ce8a2ab0d2c2fcb6fcd3dc08b37e5cc170bb58d3
      question: $('#question1')
        .val()
        .trim(),
      hint: $('#hint1')
        .val()
        .trim(),
      answer: $('#answer1')
        .val()
        .trim()
      ,question2: $('#question2')
        .val()
        .trim(),
      hint2: $('#hint2')
        .val()
        .trim(),
      answer2: $('#answer2')
        .val()
        .trim()
      ,question3: $('#question3')
        .val()
        .trim(),
      hint3: $('#hint3')
        .val()
        .trim(),
      answer3: $('#answer3')
        .val()
        .trim(),
      question4: $('#question4')
        .val()
        .trim(),
      hint4: $('#hint4')
        .val()
        .trim(),
      answer4: $('#answer4')
        .val()
        .trim(),
      question5: $('#question5')
        .val()
        .trim(),
      hint5: $('#hint5')
        .val()
        .trim(),
      answer5: $('#answer5')
        .val()
        .trim()
=======
      question: [
        $('#question1')
          .val()
          .trim(),
        $('#question2')
          .val()
          .trim()
      ]

      // hint: $('#hint1')
      //   .val()
      //   .trim(),
      // answer: $('#answer1')
      //   .val()
      //   .trim()
      //var newDeck2 = {}
      // question: $('#question2')
      //   .val()
      //   .trim(),
      // hint: $('#hint2')
      //   .val()
      //   .trim(),
      // answer: $('#answer2')
      //   .val()
      //   .trim(),
      // question3: $('#question3')
      //   .val()
      //   .trim(),
      // hint3: $('#hint3')
      //   .val()
      //   .trim(),
      // answer3: $('#answer3')
      //   .val()
      //   .trim(),
      // question4: $('#question4')
      //   .val()
      //   .trim(),
      // hint4: $('#hint4')
      //   .val()
      //   .trim(),
      // answer4: $('#answer4')
      //   .val()
      //   .trim(),
      // question5: $('#question5')
      //   .val()
      //   .trim(),
      // hint5: $('#hint5')
      //   .val()
      //   .trim(),
      // answer5: $('#answer5')
      //   .val()
      //   .trim()
>>>>>>> update create
    };
    console.log(newDeck);
    $.ajax('/api/decks', {
      type: 'POST',
      data: newDeck
    }).then(function() {
      console.log('new deck created');
      // location.reload();
    });

    $.ajax('/api/cards', {
      type: 'POST',
      data: newDeck
    }).then(function() {
      console.log('new cards created');
      // location.reload();
    });
  });

    
});
