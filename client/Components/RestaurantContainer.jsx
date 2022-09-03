import React, { useState, useEffect } from 'react'
import Restaurant from './Restaurant'

const RestaurantContainer = (props) => {
    const {city} = props;
//* Bring in the list of restaurants and update restaurant container
//* loop through the list of restaurants and for each element make a restaurant div
  const [restaurantList, setRestaurants] = useState({})
  const [restoArray, setRestoArray] = useState([]);
  const [currentVote, setVote] = useState({});
 useEffect(() => {
    // console.log('in use effect,', city)
    try {
        const fetchCity = async () => {
          const response = await fetch(`/api/${city}`)
          const cityData = await response.json()
          // setRestaurants(cityData);
          console.log(cityData[city], 'in fetchcity')
          const tmpArr = [];
          cityData[city].forEach((el, i) => {
            tmpArr.push(
              <Restaurant key={i} restoObj={el} />
            )
          });
          setRestoArray(tmpArr);
        }  
        fetchCity();
    } catch (error) {
        console.log('City not Found!', error)
    }
    
 }, [city])

// console.log(restaurantList[city],'restaurantList')

// const makeResto = () => {
//     const restaurantArr = [];
//     restaurantList[city].forEach((el) => {
//     restaurantArr.push(
//         <Restaurant restoObj={el}/>
//     )
// });



  
  return (
    <div>
      <div className='cityName'>{`${city}`}</div>
      
        <div className='restaurant'>{restoArray}</div>
    </div>
  )
}

export default RestaurantContainer


/*
{
    "New York": [
        {
            "resto_id": 7,
            "restoname": "Urban Vegan Kitchen",
            "address": "41 Carmine St",
            "city": "New York",
            "foodtype": "Vegan",
            "link": "https://cheqout.com/menu/order/aa410620-2723-4880-bd50-faa48f02e3a4",
            "votes": 2
        },
        {
            "resto_id": 1,
            "restoname": "Los Tacos No.1",
            "address": "229 W 43rd St",
            "city": "New York",
            "foodtype": "South American",
            "link": "https://www.lostacos1.com/",
            "votes": 0
        },
        {
            "resto_id": 4,
            "restoname": "Cheeky Sandwiches",
            "address": "35 Orchard St",
            "city": "New York",
            "foodtype": "Cheap Eats",
            "link": "http://places.singleplatform.com/cheeky-sandwiches/menu",
            "votes": 0
        },
        {
            "resto_id": 6,
            "restoname": "Keens Steakhouse",
            "address": "72 W 36th St",
            "city": "New York",
            "foodtype": "Steak",
            "link": "https://eat.chownow.com/order/23210/locations/33911?utm_source=google&utm_medium=organic&utm_campaign=place_action",
            "votes": 0
        },
        {
            "resto_id": 8,
            "restoname": "P.S. Kitchen",
            "address": "246 W 48th St",
            "city": "New York",
            "foodtype": "Vegan",
            "link": "https://www.ps-kitchen.com/menu",
            "votes": 0
        },
        {
            "resto_id": 23,
            "restoname": "White Bear",
            "address": "135-02 Roosevelt Ave",
            "city": "New York",
            "foodtype": "Chinese",
            "link": "",
            "votes": 0
        }
    ]
}
*/