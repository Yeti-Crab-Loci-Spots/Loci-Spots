const db = require('../models/restaurantModel');

/* 
CREATE TABLE resto (
  resto_id SERIAL PRIMARY KEY,
  restoName VARCHAR(50),
  address VARCHAR(50),
  city VARCHAR(50),
  foodType VARCHAR(50),
  link VARCHAR(50),
  votes INTEGER
);
*/

// Restaurant Controller
const restaurantController = {};

// get all restaurants
restaurantController.getRestaurants = async (req, res, next) => {
  try {
    const queryString = `SELECT * FROM resto ORDER BY votes DESC`;

    const result = await db.query(queryString);
    res.locals.restaurants = result.rows;
    return next();
  } catch (err) {
    return next({
      log: 'Error in restaurantController.getRestaurants: ' + err,
      message: { err: err },
    });
  }
};

// add a restaurant
restaurantController.addRestaurant = async (req, res, next) => {
  try {
    const { name, address, city, foodType, link } = req.body;

    const queryString = `
    INSERT INTO resto (restoName,address,city,foodType,link,votes)
    VALUES ( '${name}', '${address}', '${city}', '${foodType}','${link}', 0);`;

    const result = await db.query(queryString);
    res.locals.addedRestaurant = result.rows;
    return next();
  } catch (err) {
    return next({
      log: 'Error in restaurantController.addRestaurant: ' + err,
      message: { err: err },
    });
  }
};

// update (votes) for a restaurant
restaurantController.updateRestaurant = async (req, res, next) => {
  try {
    const { resto_id, action } = req.body;
    const operation = action === 'upvote' ? '+' : '-';
    const queryString = `
    UPDATE resto
    SET votes=votes${operation}1
    WHERE resto_id=${resto_id}`;

    const result = await db.query(queryString);
    res.locals.restaurants = result.rows;
    return next();
  } catch (err) {
    return next({
      log: 'Error in restaurantController.getRestaurants: ' + err,
      message: { err: err },
    });
  }
};

// delete a restaurant
restaurantController.deleteRestaurant = async (req, res, next) => {
  try {
    const { name } = req.body;
    const queryString = `DELETE FROM resto WHERE resto_id=${resto_id}`;

    const result = await db.query(queryString);
    res.locals.restaurants = result.rows;
    return next();
  } catch (err) {
    return next({
      log: 'Error in restaurantController.deleteRestaurant: ' + err,
      message: { err: err },
    });
  }
};

module.exports = restaurantController;
