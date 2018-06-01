$(document).ready(function() {
    $('#submit').on('click', function(event) {
      event.preventDefault();
  
      var newDeck = {
        table: $('#subject')
          .val()
          .trim(),
        question1: $('#question1')
          .val()
          .trim(),
        hint1: $('#hint1')
          .val()
          .trim(),
        answer1: $('#answer1')
          .val()
          .trim(),
        question2: $('#question2')
          .val()
          .trim(),
        hint2: $('#hint2')
          .val()
          .trim(),
        answer2: $('#answer2')
          .val()
          .trim(),
        question3: $('#question3')
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
      };
      console.log(newDeck);
      $.ajax('', {
          type: 'POST',
          data: newDeck
        }).then(function() {
          console.log('new deck created');
          location.reload();
        });
    });
  });
  