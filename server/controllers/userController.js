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
        console.log('password from req.body',password)
        const queryString = `
        SELECT * FROM users 
        WHERE username = '${username}'
        ;
        `
        const result = await db.query(queryString);

        // bcrypt.compare(password, result.rowCount)
        // console.log(result.rowCount);
        // console.log(result.rows.password)
        // console.log(result.rows[0].password)
        let valid = await bcrypt.compare(password, result.rows[0].password);
        // console.log('valid',valid);

        // console.log('result rows password:' ,result.rows[0].password)

        if(valid){
            res.locals.info = result.rows[0];
        // console.log('res.locals.info',res.locals.info);
        // console.log('password from database', res.locals.info.password)
        return next();
        }
        else{
            throw new Error('Invalid user');
        }
        // console.log('result in userController validate user', result);
        
    }
    catch (err) {
        return next({
            log: 'Error in userController.validateUser: ' + err,
            message: { err: err },
        });
    }

}

module.exports = userController;