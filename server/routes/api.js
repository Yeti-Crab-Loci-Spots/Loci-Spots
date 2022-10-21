const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');
const userController = require('../controllers/userController');

/**
 * Import Controllers
 */

/**
 * GET REQUESTS, return list of restaurants by city
 */
router.get('/:city', restaurantController.getRestaurants, (req, res) => {
  console.log('getResto: Success!!!');
  res.status(200).json(res.locals.restaurants);
});

/**
 * POST REQUESTS, create a new restaruant to LociDB
 */
 router.post('/signup', userController.addUser, (req, res) => {
  console.log('addUser: Success!!!');
  res.status(200).send('User successfully added!');
});

router.post('/', restaurantController.addRestaurant, (req, res) => {
  console.log('postResto: Success!!!');
  res.status(200).send('Restaurant successfully added!');
});

router.post('/login', userController.validateUser, (req, res) =>{
  console.log('validateUser: Success!!');
  // console.log(res.locals.info);
  res.status(200).json(res.locals.info.name);
})



/**
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
