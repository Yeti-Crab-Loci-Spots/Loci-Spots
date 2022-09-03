import React, { Component } from 'react'
import Restaraunt from 'Restaraunt.jsx'

const RestaurantContainer = (props) => {

//* Bring in the list of restaurants and update restaurant container
//* loop through the list of restaurants and for each element make a restaurant div
const {restaurantList, city} = props;
const restaurantArr = [];
  
restaurantList.forEach(el => {
    restaurantArr.push()
    <Restaurant />
        
});
  
  return (
    <div>
        <div className='cityName'>{`${city}`}</div>
        <div className="RestoDisplay">
          {restarauntArr}
        </div>
    </div>
  )
}

export default RestaurantContainer