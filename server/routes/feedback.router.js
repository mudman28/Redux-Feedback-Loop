const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const newFeedback = req.body;
    const queryText = `
      INSERT INTO "feedback"("feeling", "understanding", "support", "comments") 
      VALUES ($1, $2, $3, $4);
      `
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments ])
    .then((result) => {
      console.log(result.rows);
      res.sendStatus(201);
    }).catch((error) => {
      console.log(`error in POST /feedback`, error);
      res.sendStatus(500);
    })
  })


module.exports = router;