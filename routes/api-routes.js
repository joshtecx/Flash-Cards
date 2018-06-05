const express = require('express');
const router = express.Router();
const db = require('../models');

// =================================================
// DECK TABLE ROUTES
// =================================================
router.get('/view', function(req, res) {
  db.Deck.findAll({}).then(function(data) {
    let deck_names;
    const deckNames = {
      Decks: data
    };
    for (let i = 0; i < data.length; i++) {
      //   console.log(data[i].dataValues.deck_name);
      let deck_names = data[i].dataValues.deck_name;
    }
    res.render('view', deckNames);
  });
});

// router.get('/api/decks/:id', function(req, res) {
//   db.Deck.findOne({
//     where: {
//       id: req.params.id
//     }
//   }).then(function(result) {
//     res.json(result);
//   });
// });

router.post('/api/decks', function(req, res) {
  db.Deck.create({
    deck_name: req.body.deck_name
  }).then(function(result) {
    res.json(result);
  });
});

router.get('/api/deck/:deck_name', function(req, res) {
  db.Deck.findAll({
    where: {
      deck_name: req.params.deck_name
    }
  }).then(function(result) {
    // const deckId = {
    //   Decks: data
    // };
    // for (let i = 0; i < data.length; i++) {
    //   console.log(data[i].dataValues.id);
    //   let deck_name = data[i].dataValues.id;
    // }
    res.json(result);
  });
});

// WE WERE NOT ABLE TO WORK WITH THESE YET
// ====================================================
router.put('/api/decks', function(req, res) {
  db.Deck.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(function(result) {
    res.json(result);
  });
});

router.delete('/api/decks/:id', function(req, res) {
  db.Deck.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    res.json(result);
  });
});
// ====================================================

// =================================================
// CARD TABLE ROUTES
// =================================================

router.get('/api/cards', function(req, res) {
  db.Card.findAll({}).then(function(result) {
    res.json(result);
  });
});

router.get('/api/cards/:deck_name', function(req, res) {
  db.Card.findAll({
    where: {
      deck_name: req.params.deck_name
    }
  }).then(function(result) {
    res.json(result);
  });
});

router.get('/api/cards/:id', function(req, res) {
  db.Card.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    res.json(result);
  });
});

router.post('/api/cards', function(req, res) {
  db.Card.create({
    deck_name: req.body.deck_name,
    question: req.body.question,
    hint: req.body.hint,
    answer: req.body.answer,
    question2: req.body.question2,
    hint2: req.body.hint2,
    answer2: req.body.answer2,
    question3: req.body.question3,
    hint3: req.body.hint3,
    answer3: req.body.answer3,
    question4: req.body.question4,
    hint4: req.body.hint4,
    answer4: req.body.answer4,
    question5: req.body.question5,
    hint5: req.body.hint5,
    answer5: req.body.answer5
  }).then(function(result) {
    res.json(result);
  });
});

// WE WERE NOT ABLE TO WORK WITH THESE YET
// ====================================================
router.put('/api/cards', function(req, res) {
  db.Card.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(function(result) {
    res.json(result);
  });
});

router.delete('/api/cards/:id', function(req, res) {
  db.Card.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    res.json(result);
  });
});
// ====================================================

module.exports = router;
