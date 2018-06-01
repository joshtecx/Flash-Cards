const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../models");


router.get("/api/jscards/", function(req, res){
    console.log(db.Jscard);
    db.Jscard.findAll({
        limit: 50
    })
    .then(function(result){
        res.json(result);
    });
    
});

router.get("/api/jscards/:id", function(req, res){
    db.Jscard.findOne({
        where: {
            id: req.params.id
        }
    }).then(function(result){
        res.json(result);
    });
});

router.post("/api/jscards", function(req, res) {
    db.Jscard.create({
        question: req.body.question,
        hint: req.body.hint,
        answer: req.body.answer
    }).then(function(result){
        res.json(result);
    });
});

router.put("/api/jscards", function(req, res) {
    db.Jscard.update(req.body, 
    {
        where: {
            id: req.body.id
        }
    }).then(function(result){
        res.json(result);
    });
});

router.delete("/api/jscards/:id", function(req, res){
    db.Jscard.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(result){
        res.json(result);
    });
});

module.exports = router;