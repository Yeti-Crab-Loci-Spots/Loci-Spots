import React, { useState, useEffect } from 'react';
import RestaurantContainer from './RestaurantContainer';
import Logo from '../src/media/LociSpotLogo.png';

import DropDownList from './DropDownList';

const MainContainer = () => {
  //main container will store the state of the drop down list and the state of the restaurant container which contains a list of the restaurants
  const [city, setCity] = useState('New York');
  /**
   * List of city hooks
   */
  const [cities, setCities] = useState(['New York', 'Toronto', 'Omaha']);
  //each object will contain key value pair of the city and an array of restaurants

  useEffect(() => {}, [city]);
  return (
    <div>
      <div className='nav'>
        <div className='nav-container'>
          <img className='logo' src={Logo} />
          <span className='citySearch'>
            <DropDownList setCity={setCity} city={city} cityList={cities} />
          </span>
        </div>
      </div>

      <div>
        <RestaurantContainer city={city} cityList={cities} setCity={setCity} />
      </div>
    </div>
  );
};

export default MainContainer;

// {cityName: [{restaurantName: 'TAO', votes: 5, cuisine: 'Chinese'}, {restaurantName: 'restaurant2', rating: 4, cuisine: 'Thai'}]}
/**
 * //Action body from front end to upvote or down vote restaurant
 * const { resto_id, action } = req.body;
 * CREATE TABLE resto (
  resto_id SERIAL PRIMARY KEY,
  restoName VARCHAR(50),
  address VARCHAR(50),
  city VARCHAR(50),
  foodType VARCHAR(50),
  link VARCHAR(300),
  votes INTEGER
);
 * 
 */
