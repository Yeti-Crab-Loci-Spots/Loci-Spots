const db = require('../models/restaurantModel');

const userVotesController = {};

userVotesController.getVotes = async (req, res, next) => {
    try {
        //GET /api/users/:id where :id is github ID;
        const { id } = req.params;
        const innerSelect = `(SELECT u.user_id FROM <users u>  WHERE u.github_id=$1 LIMIT 1)`;
        const outer = `
    SELECT v.resto_id, v.vote
    FROM public.user_resto_votes v 
    WHERE v.user_id=${innerSelect};`;
        const votes = await db.query(outer, [id]);
        res.locals.votes = votes;
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
        if (action === 'upvote') votes = 1
        if (action === 'downvote') votes = -1
        if (action === 'unvote') votes = 0
        const params = [user_id, resto_id, votes]
        const queryString = `
            INSERT INTO uservotes(user_id, resto_id, votes)
            VALUES($1, $2, $3)
            ON CONFLICT (user_id, resto_id) 
            DO UPDATE SET votes = $3
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