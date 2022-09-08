const db = require('../models/restaurantModel');

const userController = {};

userController.addUser = async (req, res, next) => {
    console.log('in addUser');
    try {
        const {username, name, password} = req.body;
        const queryString = `
        INSERT INTO users (username,name,password)
        VALUES ( $1, $2, $3 );
        `
        const params = [username, name, password];
        const result = await db.query(queryString, params);
        return next()
    } 
    catch (err) {
      return next({
        log: 'Error in userController.addUser: ' + err,
        message: { err: err },
        });
    }
}

module.exports = userController;