const db = require('../models/restaurantModel');

const userVotesController = {};

userVotesController.getVotes = async (req, res, next) => {
    try {
        //GET /api/users/:id where :id is the internal user id;
        const { id } = req.params;
        const outer = `
    SELECT v.resto_id, v.vote
    FROM public.user_resto_votes v 
    WHERE v.user_id=$1;`;
        const votes = await db.query(outer, [id]);
        res.locals.votes = votes.rows
        return next();
    } catch (err) {
        return next({
            log: 'Error in userVotesController.getVotes: ' + err,
            message: { err: err },
        });
    }
}


userVotesController.updateVotes = async (req, res, next) => {
    try {
        const { user_id, resto_id, action } = req.body;
        let votes;
        if (action === 'upvote') votes = 1
        if (action === 'downvote') votes = -1
        if (action === 'unvote') votes = 0
        const params = [user_id, resto_id, votes]
        const queryString = `
            INSERT INTO user_resto_votes (user_id, resto_id, vote)
            VALUES($1, $2, $3)
            ON CONFLICT (user_id, resto_id) 
            DO UPDATE SET vote = $3
            WHERE user_resto_votes.resto_id=$1 AND user_resto_votes.user_id=$2
        `
        await db.query(queryString, params)
        return next();
    } catch (err) {
        return next({
            log: 'Error in userVotesController.updateVotes: ' + err,
            message: { err: err },
        });
    }
}


module.exports = userVotesController;