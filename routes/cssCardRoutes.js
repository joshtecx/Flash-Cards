const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../models");


router.get("/api/csscards/", function(req, res){
    console.log(db.Csscard);
    db.Csscard.findAll({
        limit: 50
    })
    .then(function(result){
        res.json(result);
    });
    
});

router.get("/api/csscards/:id", function(req, res){
    db.Csscard.findOne({
        where: {
            id: req.params.id
        }
    }).then(function(result){
        res.json(result);
    });
});

router.post("/api/csscards", function(req, res) {
    db.Csscard.create({
        question: req.body.question,
        hint: req.body.hint,
        answer: req.body.answer
    }).then(function(result){
        res.json(result);
    });
});

router.put("/api/csscards", function(req, res) {
    db.Csscard.update(req.body, 
    {
        where: {
            id: req.body.id
        }
    }).then(function(result){
        res.json(result);
    });
});

router.delete("/api/csscards/:id", function(req, res){
    db.Csscard.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(result){
        res.json(result);
    });
});

module.exports = router;