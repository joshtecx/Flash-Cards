const express = require("express");
const router = express.Router();
const db = require("../models");


// =================================================
// DECK TABLE ROUTES
// =================================================
router.get("/api/decks", function(req, res){
    db.Deck.findAll({}).then(function(result){
        res.json(result);
    });
});

router.get("/api/decks/:id", function(req, res){
    db.Deck.findOne({
        where: {
            id : req.params.id 
        }
    }).then(function(result){
        res.json(result);
    });
});

router.post("/api/decks", function(req, res) {
    db.Deck.create({
        question: req.body.question,
        hint: req.body.hint,
        answer: req.body.answer
    }).then(function(result){
        res.json(result);
    });
});

router.put("/api/decks", function(req, res) {
    db.Deck.update(req.body, 
    {
        where: {
            id: req.body.id
        }
    }).then(function(result){
        res.json(result);
    });
});

router.delete("/api/decks/:id", function(req, res){
    db.Deck.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(result){
        res.json(result);
    });
});


// =================================================
// CARD TABLE ROUTES
// =================================================

router.get("/api/cards", function(req, res){
    db.Card.findAll({}).then(function(result){
        res.json(result);
    });
});

router.get("/api/cards/:id", function(req, res){
    db.Card.findOne({
        where: {
            id : req.params.id 
        }
    }).then(function(result){
        res.json(result);
    });
});

router.post("/api/cards", function(req, res) {
    db.Card.create({
        question: req.body.question,
        hint: req.body.hint,
        answer: req.body.answer
    }).then(function(result){
        res.json(result);
    });
});

router.put("/api/cards", function(req, res) {
    db.Card.update(req.body, 
    {
        where: {
            id: req.body.id
        }
    }).then(function(result){
        res.json(result);
    });
});

router.delete("/api/cards/:id", function(req, res){
    db.Card.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(result){
        res.json(result);
    });
});

// Routes for finding the user
router.get('/user/:userId', function (req, res, next) {
    // find user in database
    db.User.findOne({
      id: req.params.userId
    }).then(function (user) {
      // respond
      res.status(200).json(user);
    }).catch(next);
  });
module.exports= router;