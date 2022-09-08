const express = require('express');
const router = express.Router();
const userVotesController = require('../controllers/userVotesController');

/**
 * PATCH REQUESTS, update votecount for a given resto_id
 */
router.patch('/', userVotesController.updateVotes, (req, res) => {
    // console.log('--->', req.body);
    res.status(200).send('Restaurant vote registered!');
});

router.get('/:id', userVotesController.getVotes, (req, res) => {
    res.status(200).json(res.locals.votes);
})

module.exports = router;
