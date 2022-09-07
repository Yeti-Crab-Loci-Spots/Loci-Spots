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
  console.log('in get restaurants');
  try {
    const { city } = req.params;
    const queryString = `
    SELECT resto.resto_id, 
          resto.restoname, 
          resto.address, 
          resto.city, 
          resto.foodtype, 
          resto.link, 
          SUM(uservotes.votes) AS votes
    FROM resto
    LEFT OUTER JOIN uservotes ON resto.resto_id = uservotes.resto_id 
    WHERE resto.city = $1
    GROUP BY resto.resto_id, 
              resto.restoname, 
              resto.address, 
              resto.city, 
              resto.foodtype, 
              resto.link
    `;
    const params = [city];

    const result = await db.query(queryString, params);
    res.locals.restaurants = { [city]: result.rows };

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
  console.log(req.body);
  try {
    console.log('inside of addRestaurant');
    const { name, address, city, foodType, link } = req.body;

    const queryString = `
    INSERT INTO resto (restoName,address,city,foodType,link,votes)
    VALUES ( $1, $2, $3, $4, $5, 0);`;
    const params = [name, address, city, foodType, link];

    const result = await db.query(queryString, params);
    // console.log(result);
    // res.locals.addedRestaurant = result;
    return next();
  } catch (err) {
    return next({
      log: 'Error in restaurantController.addRestaurant: ' + err,
      message: { err: err },
    });
  }
};



// update (votes) for a restaurant
// restaurantController.updateRestaurant = async (req, res, next) => {
//   try {
//     const { resto_id, action } = req.body;
//     if (action === 'upvote') operation = '+';
//     if (action === 'downvote') operation = '-';
//     const queryString = `
//     UPDATE resto
//     SET votes=votes${operation}1
//     WHERE resto_id=$1`;
//     const params = [resto_id];
//     // resto table holds all information on votes 
//     // what is the single source of truth? The new table we are creating vs the original?
//     // all the votes will now be tallied in the new table

//     const result = await db.query(queryString, params);
//     // res.locals.updatedRestaurant = result.rows;
//     return next();
//   } catch (err) {
//     return next({
//       log: 'Error in restaurantController.updateRestaurant: ' + err,
//       message: { err: err },
//     });
//   }
// };


// update (votes) for a restaurant
// Hina Update
restaurantController.updateRestaurant = async (req, res, next) => {
  try {
    // in req.body, include the user_id
    const { resto_id, action } = req.body;
    // check to see if the user (user_id) activity on the restaurant (resto_id)
    if (action === 'upvote') votes = 1;
    if (action === 'downvote') votes = -1;
    const params = [resto_id, 'testing', votes]
    const queryString = `
    INSERT INTO uservotes(resto_id, user_id, votes)
    VALUES($1, $2, $3)
    ON CONFLICT (resto_id, user_id) 
    DO UPDATE SET votes = $3
    WHERE uservotes.resto_id=$1 AND uservotes.user_id=$2
    `
    await db.query(queryString, params);
    return next();
  } catch (err) {
    return next({
      log: 'Error in restaurantController.updateRestaurant: ' + err,
      message: { err: err },
    });
  }
};


// delete a restaurant
restaurantController.deleteRestaurant = async (req, res, next) => {
  try {
    const { resto_id } = req.body;
    console.log(req.body);
    const queryString = `
    DELETE FROM resto 
    WHERE resto_id=$1`;
    const params = [resto_id];

    const result = await db.query(queryString, params);
    // console.log(result);
    // res.locals.deletedRestaurant = result.rows;
    return next();
  } catch (err) {
    return next({
      log: 'Error in restaurantController.deleteRestaurant: ' + err,
      message: { err: err },
    });
  }
};

module.exports = restaurantController;
