const db = require('../models/restaurantModel');
const bcrypt = require('bcrypt');
// import bcrypt from 'bcrypt';



const userController = {};

userController.addUser = async (req, res, next) => {
    console.log('in addUser');
    try {
        const salt = await bcrypt.genSalt(10);
        const {username, name, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, salt);
        const queryString = `
        INSERT INTO users (username,name,password)
        VALUES ( $1, $2, $3 );
        `
        const params = [username, name, hashedPassword];
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

userController.validateUser = async (req, res, next) => {
    // console.log('in validate user');
    // console.log('req body', req.body);

    try {
        const { username, password } = req.body;
        const queryString = `
        SELECT * FROM users 
        WHERE username = '${username}'
        AND password = '${password}';
        `
        const result = await db.query(queryString);

        console.log(result.rowCount);
        if(result.rowCount === 0){
            throw new Error('Invalid user');
        }
        // console.log('result in userController validate user', result);
        res.locals.info = result.rows[0];
        console.log(res.locals.info);
        return next();
    }
    catch (err) {
        return next({
            log: 'Error in userController.validateUser: ' + err,
            message: { err: err },
        });
    }

}

module.exports = userController;