const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../models");


router.get("/api/htmlcards/", function(req, res){
    console.log(db.Htmlcard);
    db.Htmlcard.findAll({
        limit: 50
    })
    .then(function(result){
        res.json(result);
    });
    
});

router.get("/api/htmlcards/:id", function(req, res){
    db.Htmlcard.findOne({
        where: {
            id: req.params.id
        }
    }).then(function(result){
        res.json(result);
    });
});

router.post("/api/htmlcards", function(req, res) {
    db.Htmlcard.create({
        question: req.body.question,
        hint: req.body.hint,
        answer: req.body.answer
    }).then(function(result){
        res.json(result);
    });
});

router.put("/api/htmlcards", function(req, res) {
    db.Htmlcard.update(req.body, 
    {
        where: {
            id: req.body.id
        }
    }).then(function(result){
        res.json(result);
    });
});

router.delete("/api/htmlcards/:id", function(req, res){
    db.Htmlcard.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(result){
        res.json(result);
    });
});

module.exports = router;