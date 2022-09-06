const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

/**
 * Import Controllers
 */

/**
 * GET REQUEST, return list of all cities
 */
 router.get('/', restaurantController.getCities, (req, res) => {
  console.log('getCities: Success!!!');
  res.status(200).json(res.locals.cities);
});

/**
 * GET REQUEST, return list of all restaurants for a provided city
 */
router.get('/:city', restaurantController.getRestaurants, (req, res) => {
  console.log('getResto: Success!!!');
  res.status(200).json(res.locals.restaurants);
});

/**
 * POST REQUESTS, create a new restaruant to LociDB
 */
router.post('/', restaurantController.addRestaurant, (req, res) => {
  console.log('postResto: Success!!!');
  res.status(200).send('Restaurant successfully added!');
});
/**
 * Create new city
 */
// router.post('/addCity', restaurantController.addCity, (req, res) => {
//   console.log('postCity: Success');
//   res.status(200).send('New City successfully added!');
//  })
/**
 * 
 * PATCH REQUESTS, update votecount for a given resto_id
 */
router.patch('/', restaurantController.updateRestaurant, (req, res) => {
  console.log('updateResto: Success!!!');
  res.status(200).send('Restaurant vote registered!');
});

/**
 * DELETE REQUESTS, delete a restaurant for a given resto_id
 */
router.delete('/', restaurantController.deleteRestaurant, (req, res) => {
  console.log('deleteResto: Success!!!');
  res.status(200).send('Restaurant successfully deleted!');
});

module.exports = router;
