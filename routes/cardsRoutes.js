// const express = require('express');
// const { data } = require("../data/flashCardData.json");
// const { cards } = data;
// const router = express.Router();

// router.get('/:id', (req, res) => {
//   const { side } = req.query;
//   const { id } = req.params;
//   const text = cards[id][side];
//   const { hint } = cards[id];
//   const name = req.cookies.username;
//   const templateData = { id, text, name };

//   if (!side) {
//     return res.redirect(`/cards/${id}?side=question`);
//   }

//   if (side === 'question') {
//     templateData.hint = hint;
//     templateData.sideToShow = 'answer';
//     templateData.sideToShowDisplay = 'Answer';
//   } else if (side === 'answer') {
//     templateData.sideToShow = 'question';
//     templateData.sideToShowDisplay = 'Question';
//   }

//   res.render('card', templateData);
// });

// router.get('/', (req, res) => {
//   const cardID = Math.floor(Math.random() * cards.length);
//   res.redirect(`/cards/${cardID}?side=question`);
// });

// module.exports = router;
